//  ****************************************** //
//  FillIn - Version no: 2
//  Added: aObj.crossQuestionOrder = "no" mode - when set, the position of
//  each written word no longer matters. All blanks are checked together
//  as one pool: as long as every correct word appears exactly once
//  SOMEWHERE across all the blanks, it's marked correct - regardless of
//  which specific blank the student typed it into.
//  When crossQuestionOrder is left unset (or "yes"), behaviour is
//  UNCHANGED from before (each blank checked against its own answer).
//  ****************************************** //
window.FillIn = function(obj, dataObj){    
    ob = obj[0].getElementsByClassName("options");
    console.log('FillIn > ', $('.activity_area'));
    this.settings = {        
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }    
    this.init(this.settings);
}
FillIn.prototype = {
    init:function(ob){       
        this.ob = ob;
        // this.reset();
        this.listen(ob);
    },
    listen:function(ob){
        var e = (ob.activity_area); 
        var inputs = e.querySelectorAll('input'); 
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("input", function(){                  
                $(this).css('color', 'black');
                console.log($(this).data('type'));
                var v = this.value;  
                if($(this).data('type') == 'number'){
                    if($.isNumeric(v) === false) {               
                        this.value = this.value.replace(/\D/g, '');           
                    }
                }
                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");      
            });
            
        }
    },
    validate:function(){
        var ob = this.ob;
        var e = (ob.activity_area); 
        var elsQue = e.querySelectorAll('.que'); 
        var numOfFillIns = elsQue.length;
        var allCorrect = false; 
        var resultArr = [];

        // NEW: "no" = the position of each blank no longer matters, every
        // written word is checked against the shared pool of correct
        // answers instead of just its own question's answer
        var crossOrder = (ob.data_obj.crossQuestionOrder != undefined && ob.data_obj.crossQuestionOrder != null)
            ? ob.data_obj.crossQuestionOrder : 'yes';

        if(crossOrder == 'no'){
            // ---------------------------------------------------------
            // build one shared pool of every correct answer, and one
            // shared list of every typed value (in DOM order)
            // ---------------------------------------------------------
            var allCorrectAnswers = [];
            var allUserAnswers = [];
            var boxesPerQue = []; // number of inputs in each .que, in order

            for (var i = 0; i < elsQue.length; i++) {
                var fIndx = parseInt(elsQue[i].dataset.qno);
                var fDataObj = ((ob.data_obj).questions[fIndx-1]);
                var _case = (fDataObj.strictcase != undefined && fDataObj.strictcase!=null )? (fDataObj.strictcase).toLowerCase():'no';
                var _cAns = getStrArray(fDataObj.answer, 'activity');

                (elsQue[i].querySelector('.tick')).style.display = 'none';
                (elsQue[i].querySelector('.cross')).style.display = 'none';

                var inputBoxes = elsQue[i].querySelectorAll('input');
                boxesPerQue.push(inputBoxes.length);

                for (var a = 0; a < inputBoxes.length; a++) {
                    var rawVal = inputBoxes[a].value;
                    var normVal = '';
                    if(rawVal.length > 0){
                        normVal = (_case == 'yes') ? rawVal : rawVal.toLowerCase();
                        normVal = normVal.replace(/\s/g, '');
                    }
                    allUserAnswers.push(normVal);
                }
                for (var cc = 0; cc < _cAns.length; cc++) {
                    var normCorrect = (_case == 'yes') ? _cAns[cc] : _cAns[cc].toLowerCase();
                    normCorrect = normCorrect.replace(/\s/g, '');
                    allCorrectAnswers.push(normCorrect);
                }
            }

            // match every typed word against the pool - each correct
            // answer can only be "claimed" once, so duplicates can't
            // cheat the check
            var claimedIdx = [];
            var perBoxCorrect = [];
            for (var b = 0; b < allUserAnswers.length; b++) {
                var val = allUserAnswers[b];
                var foundAt = -1;
                if(val != ''){
                    for (var ca = 0; ca < allCorrectAnswers.length; ca++) {
                        if(jQuery.inArray(ca, claimedIdx) == -1 && allCorrectAnswers[ca] == val){
                            foundAt = ca;
                            break;
                        }
                    }
                }
                if(foundAt != -1){
                    claimedIdx.push(foundAt);
                    perBoxCorrect.push(true);
                } else {
                    perBoxCorrect.push(false);
                }
            }

            // a question is only "correct" if ALL of its own input(s)
            // matched something in the shared pool
            var boxPointer = 0;
            for (var i = 0; i < elsQue.length; i++) {
                var qCorrect = true;
                for (var a = 0; a < boxesPerQue[i]; a++) {
                    if(!perBoxCorrect[boxPointer]) { qCorrect = false; }
                    boxPointer++;
                }
                resultArr[i] = qCorrect ? 1 : 0;

                if(qCorrect){
                    (elsQue[i].querySelector('.tick')).style.display = 'block';
                } else {
                    (elsQue[i].querySelector('.cross')).style.display = 'block';
                }
                if((elsQue[i].querySelectorAll('.icon_wrap')).length > 0) {
                    (elsQue[i].querySelector('.icon_wrap')).style.display = 'block';
                }
            }

        } else {
            // ---------------------------------------------------------
            // ORIGINAL behaviour - unchanged - each blank is checked
            // against its own question's specific answer/position
            // ---------------------------------------------------------
            for (var i = 0; i < elsQue.length; i++) { 
                resultArr[i] = 0;
                var fIndx = parseInt(elsQue[i].dataset.qno);
                var fDataObj = ((ob.data_obj).questions[fIndx-1]);
                (elsQue[i].querySelector('.tick')).style.display = 'none';
                (elsQue[i].querySelector('.cross')).style.display = 'none';
                var _case = (fDataObj.strictcase != undefined && fDataObj.strictcase!=null )? (fDataObj.strictcase).toLowerCase():'no';
                var _cAns = getStrArray(fDataObj.answer, 'activity');            
                var _uAns = [];
                var _isReadOnly = [];
                var _corr = 0;
                var _wrong = 0;
                var inputBoxes = elsQue[i].querySelectorAll('input'); 

                if(inputBoxes.length > 0){
                    for(var a=0;a<inputBoxes.length;a++){
                        console.log(a, inputBoxes[a].dataset.type);
                        _isReadOnly[a] = ((inputBoxes[a].getAttribute("disabled")==null)&& (inputBoxes[a].getAttribute("readonly")==null))?0:1;
                            if((inputBoxes[a].value).length > 0){
                                if(inputBoxes[a].dataset.type != 'number'){
                                    _uAns[a] = (_case == 'yes')? inputBoxes[a].value:(inputBoxes[a].value).toLowerCase();
                                }else{
                                    _uAns[a] = inputBoxes[a].value;
                                }
                                
                            }
                    }
                }
                (elsQue[i].dataset).showIcon = (((_isReadOnly.join('').split('1'))[0]).length == _cAns.length); 
                console.log(_uAns, _cAns, (((_isReadOnly.join('').split('1'))[0]).length == _cAns.length), i, (elsQue[i].dataset).showIcon);
              
                if((_uAns.length>0) && (_cAns.length == _uAns.length)){
                    for(var cc=0;cc<_cAns.length;cc++){                    
                        _cAns[cc] = (_case == 'yes')? _cAns[cc]: _cAns[cc].toLowerCase();  
                       _cAns[cc] = (_cAns[cc]).replace(/\s/g, '');
                       _uAns[cc] = (_uAns[cc]).replace(/\s/g, '');
                        if(_cAns[cc] == _uAns[cc]){
                            _corr++;
                        }else{
                            _wrong++;
                        }
                    } 
                }else{
                    _wrong++;                  
                }
                if(_corr == _uAns.length && _wrong == 0){
                    resultArr[i] = 1;
                    (elsQue[i].querySelector('.tick')).style.display = 'block';                
                    if(fDataObj.audio != '' && fDataObj.audio != 'no' ){   
                        if(fDataObj.audioenable == 'correct' && ((elsQue[i].querySelectorAll('.audioIcon')).length > 0)) {
                            (elsQue[i].querySelector('.audioIcon')).classList.remove("disabled");
                        }              
                        
                    }
                }else{
                    resultArr[i] = 0;
                    (elsQue[i].querySelector('.cross')).style.display = 'block';
                    if(fDataObj.audio != '' && fDataObj.audio != 'no'){   
                        if(fDataObj.audioenable == 'correct' && ((elsQue[i].querySelectorAll('.audioIcon')).length > 0)) {               
                            (elsQue[i].querySelector('.audioIcon')).classList.add("disabled");
                        }
                    }
                }
                if((elsQue[i].querySelectorAll('.icon_wrap')).length > 0) {
                    if((elsQue[i].dataset).showIcon == "true"){
                        (elsQue[i].querySelector('.icon_wrap')).style.display = 'block'; 
                    }                
                }     
            }
        }

        console.log(resultArr, numOfFillIns);
        allCorrect = (((resultArr.join('').split('0'))[0]).length == numOfFillIns); 
        showFeedback(true,allCorrect);
       
        if(allCorrect){
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled"); 
        }        
    },
    reset:function(){
        var ob = this.ob;        
        var e = (ob.activity_area);
        var elsQue = e.querySelectorAll('.que');  
        // console.log('reset function >> ', elsQue.length, (ob.data_obj));     
        for (var i = 0; i < elsQue.length; i++) { 
            var fIndx = parseInt(elsQue[i].dataset.qno);
            var fDataObj = ((ob.data_obj).questions[fIndx-1]);
            (elsQue[i].querySelector('.icon_wrap')).style.display = 'none'; 
            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';
            // console.log('reset function >> ', fIndx, ((ob.data_obj).questions[fIndx-1]));
            if(fDataObj.audio != '' && fDataObj.audio != 'no'){ 
                if((elsQue[i].querySelectorAll('.audioIcon')).length > 0){
                    if(fDataObj.audioenable == 'correct'){                
                        (elsQue[i].querySelector('.audioIcon')).style.display = 'block';
                        (elsQue[i].querySelector('.audioIcon')).classList.add("disabled");
                    }else if(fDataObj.audioenable == 'default'){
                        (elsQue[i].querySelector('.audioIcon')).style.display = 'block';
                        (elsQue[i].querySelector('.audioIcon')).classList.remove("disabled");
                    }
                }
            }else{
                if((elsQue[i].querySelectorAll('.audioIcon')).length > 0){
                    // (elsQue[i].querySelector('.audioIcon')).style.display = 'none';
                }
            }
            var inputBoxes = elsQue[i].querySelectorAll('input');           
            if(inputBoxes.length > 0){
                for(var a=0;a<inputBoxes.length;a++){
                    if ((inputBoxes[a].getAttribute("disabled")==null)&& (inputBoxes[a].getAttribute("readonly")==null)){
                        inputBoxes[a].value = '';
                        inputBoxes[a].style.color = 'black';
                    }
                }
            }

        }
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");           
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);  
    }
}