//  ****************************************** //
//  FillIn - Version no: 1
//  Date updated - June 3, 2020 
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
    var isCorrect = new Array(elsQue.length).fill(false);

    // group boxes by column
    var groups = {};
    for (var i = 0; i < elsQue.length; i++) {
        var colKey = elsQue[i].dataset.col;
        if (!groups[colKey]) groups[colKey] = [];
        groups[colKey].push(i);
    }

    for (var colKey in groups) {
        var idxs = groups[colKey];
        var pool = [];     // {value, used} - correct answers available in this column
        var userVals = []; // {idx, value} - boxes the student can still edit

      for (var k = 0; k < idxs.length; k++) {
    var qi = idxs[k];
    var fIndx = parseInt(elsQue[qi].dataset.qno);
    var fDataObj = (ob.data_obj).questions[fIndx-1];
    var _case = (fDataObj.strictcase != undefined && fDataObj.strictcase != null) ? (fDataObj.strictcase).toLowerCase() : 'no';
    var correctAns = getStrArray(fDataObj.answer, 'activity')[0];
    correctAns = (_case == 'yes') ? correctAns : correctAns.toLowerCase();
    correctAns = correctAns.replace(/\s/g, '');
    correctAns = correctAns.replace(/[.,!?;:]/g, ''); // NEW: ignore periods and commas in the stored correct answer

    var input = elsQue[qi].querySelector('input');
    var isReadOnly = ((input.getAttribute("disabled")==null) && (input.getAttribute("readonly")==null)) ? 0 : 1;

    if (isReadOnly == 1) {
        isCorrect[qi] = true;
        pool.push({value: correctAns, used: true});
    } else {
        pool.push({value: correctAns, used: false});
        var uVal = input.value;
        uVal = (uVal.length > 0) ? ((_case == 'yes') ? uVal : uVal.toLowerCase()).replace(/\s/g, '') : '';
        uVal = uVal.replace(/[.,]/g, ''); // NEW: ignore periods and commas typed by the student
        userVals.push({idx: qi, value: uVal});
    }
}

        // match each typed answer against any still-available correct answer in the column
        for (var u = 0; u < userVals.length; u++) {
            var uv = userVals[u];
            var matched = false;
            if (uv.value.length > 0) {
                for (var p = 0; p < pool.length; p++) {
                    if (!pool[p].used && pool[p].value == uv.value) {
                        pool[p].used = true;
                        matched = true;
                        break;
                    }
                }
            }
            isCorrect[uv.idx] = matched;
        }
    }

    for (var i = 0; i < elsQue.length; i++) {
        resultArr[i] = isCorrect[i] ? 1 : 0;
        var fIndx = parseInt(elsQue[i].dataset.qno);
        var fDataObj = (ob.data_obj).questions[fIndx-1];

        (elsQue[i].querySelector('.tick')).style.display  = isCorrect[i] ? 'block' : 'none';
        (elsQue[i].querySelector('.cross')).style.display = isCorrect[i] ? 'none'  : 'block';

        if (fDataObj.audio != '' && fDataObj.audio != 'no') {
            if (fDataObj.audioenable == 'correct' && (elsQue[i].querySelectorAll('.audioIcon')).length > 0) {
                if (isCorrect[i]) {
                    (elsQue[i].querySelector('.audioIcon')).classList.remove("disabled");
                } else {
                    (elsQue[i].querySelector('.audioIcon')).classList.add("disabled");
                }
            }
        }
        if ((elsQue[i].querySelectorAll('.icon_wrap')).length > 0) {
            (elsQue[i].querySelector('.icon_wrap')).style.display = 'block';
        }
    }

    allCorrect = (resultArr.indexOf(0) === -1);
    showFeedback(true, allCorrect);

    if (allCorrect) {
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
