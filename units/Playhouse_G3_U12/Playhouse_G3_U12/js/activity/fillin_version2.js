//  ****************************************** //
//  FillIn - Version no: 2 (adds alternate-answer checking)
//  If the student's answer doesn't match the primary "answer", it is now
//  also checked against fDataObj.alternateanswer[cc] (a list of other
//  equally-correct phrasings) before being marked wrong.
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
                // document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                // document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");      
            });
            
        }
    },
    // NEW helper: checks a typed answer against the primary answer AND
    // every alternate phrasing listed for that input box
    isAnswerMatch:function(userVal, correctVal, alternatesForThisBox, _case){
        if(userVal == correctVal){ return true; }

        if(alternatesForThisBox != undefined && alternatesForThisBox != null && alternatesForThisBox.length > 0){
            for(var alt = 0; alt < alternatesForThisBox.length; alt++){
                var altVal = (_case == 'yes') ? alternatesForThisBox[alt] : (alternatesForThisBox[alt]).toLowerCase();
                altVal = altVal.replace(/\s/g, '');
                if(userVal == altVal){ return true; }
            }
        }
        return false;
    },
    validate:function(){
        var ob = this.ob;
        var e = (ob.activity_area); 
        var elsQue = e.querySelectorAll('.que'); 
        var numOfFillIns = elsQue.length;
        var allCorrect = false; 
        var resultArr = [];        
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

                    // NEW: pull this box's list of alternate acceptable
                    // answers (if any) and check it too
                    var altList = (fDataObj.alternateanswer != undefined && fDataObj.alternateanswer[cc] != undefined)
                        ? fDataObj.alternateanswer[cc] : [];

                    if(this.isAnswerMatch(_uAns[cc], _cAns[cc], altList, _case)){
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
        console.log(resultArr, numOfFillIns);
        allCorrect = (((resultArr.join('').split('0'))[0]).length == numOfFillIns); 
        showFeedback(true,allCorrect);
       
        if(allCorrect){
            // document.getElementsByClassName('resetBtn')[0].classList.add("disabled"); 
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
        // document.getElementsByClassName('checkBtn')[0].classList.add("disabled");           
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);  
    }
}