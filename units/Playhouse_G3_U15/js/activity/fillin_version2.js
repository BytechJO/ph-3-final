//  ****************************************** //
//  FillIn - Version no: 1.2
//  Date updated - June 3, 2020 
//  Date updated - August 12, 2020 
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
        var self= this;
        var e = (ob.activity_area); 
        var inputs = e.querySelectorAll('input'); 
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("input", function(){                  
                $(this).css('color', 'black');
                console.log($(this).data('type'));
                var v = this.value;  
                /*if($(this).data('type') == 'number'){
                    if($.isNumeric(v) === false) {               
                        this.value = this.value.replace(/\D/g, '');           
                    }
                }*/
                if(typeof $(this).data('type') != undefined && $(this).data('type')!=null){
                    var typ = $(this).data('type');
                    if(typ == 'text'){
                        $(this).val($(this).val().replace(/[^a-z ]/gi, ''));
                    }else if(typ == 'number'){
                        if($.isNumeric(v) === false) {               
                            this.value = this.value.replace(/\D/g, '');           
                        }
                    }
                }
                self.showTickCross();
                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");      
            });
        }    
    },
    validate:function(){
        var self = this;
        var ob = this.ob;
        var $area = $(ob.activity_area); 
        self.showTickCross(false);
        var numOfFillQuestions = $area.find('.que').length;
        var allCorrect = false; 
        var resultArr = []; 
        $area.find('.que').each(function(){
            var thisQNum = parseInt($(this).data('qno'));
            resultArr[thisQNum -1] = 0;
            var fDataObj = ((ob.data_obj).questions[thisQNum-1]);
            var _case = (fDataObj.strictcase != undefined && fDataObj.strictcase!=null )? (fDataObj.strictcase).toLowerCase():'no';
            var _validationOrderCase = (fDataObj.strictorder != undefined && fDataObj.strictorder!=null )? (fDataObj.strictorder).toLowerCase():'yes';
            var _uAns = [];
            var _cAns = getStrArray(fDataObj.answer, 'activity');  
            var _cAlternateAns = fDataObj.alternateanswer;  
            var numOfInputs = $(this).find('input').length; 
            var doneAnswers = [];
            
            $(this).find('input').each(function(index){
                if($(this).attr('readonly') == null && $(this).attr('disabled') == null){
                    // var thisInd = $(this).index();
                    var thisInd = index;
                    _uAns[thisInd] = 0;
                    var thisVal = "";
                    if($(this).val().length > 0){
                        thisVal = (_case == 'yes') ? $.trim($(this).val()) : ($.trim($(this).val())).toLowerCase();
                    }
                    if(thisVal != ""){
                        if(numOfInputs > 1 && _validationOrderCase == 'no'){
                            
                            var isInAnswers = ($.inArray(thisVal, _cAns) > -1);
                            var isAlreadyDone = ($.inArray(thisVal, doneAnswers) > -1);
                            if(isInAnswers && !isAlreadyDone){
                                doneAnswers.push(thisVal);
                                _uAns[thisInd] = 1; 
                            }
                        }else{
                           
                            if(thisVal == _cAns[thisInd]){
                                _uAns[thisInd] = 1;
                            }else{
                                
                                var _cAltAns = [];
                                if(_cAlternateAns != undefined){
                                    var _cAltAns = [];
                                    if((fDataObj.alternateanswer[thisInd]) != undefined){
                                         if((fDataObj.alternateanswer[thisInd]).length > 0){
                                            _cAltAns = getStrArray(fDataObj.alternateanswer[thisInd], 'activity'); 
                                        }
                                    }                                   
                                    if(_cAltAns.length > 0){
                                        if($.inArray(thisVal, _cAltAns) > -1){
                                            _uAns[thisInd] = 1; 
                                        }else{
                                            _uAns[thisInd] = 0;
                                        }
                                    }else{
                                        _uAns[thisInd] = 0;
                                    }

                                }else{
                                    _uAns[thisInd] = 0;
                                }                                              
                            }
                        }
                        
                        
                    }                   
                }
            });
            if(((_uAns.join('').split('0'))[0]).length == numOfInputs){
                resultArr[thisQNum -1] = 1; 
            }            
        }); 
        allCorrect = (((resultArr.join('').split('0'))[0]).length == numOfFillQuestions); 
        self.showTickCross(true, resultArr);
        showFeedback(true,allCorrect);
       
        if(allCorrect){
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled"); 
        }        
    },
    showTickCross:function(aBool, aArr){
        var ob = this.ob;        
        var e = (ob.activity_area);
        var elsQue = e.querySelectorAll('.que');
        if(!aBool){
            for (var i = 0; i < elsQue.length; i++) {
                (elsQue[i].querySelector('.icon_wrap')).style.display = 'none'; 
                (elsQue[i].querySelector('.tick')).style.display = 'none';
                (elsQue[i].querySelector('.cross')).style.display = 'none';
            }  
        }else{
            for (var i = 0; i < elsQue.length; i++) {
                (elsQue[i].querySelector('.icon_wrap')).style.display = 'block';  
                if(aArr.length > 0){
                    if(aArr[i] == 1){
                        (elsQue[i].querySelector('.tick')).style.display = 'block';
                        (elsQue[i].querySelector('.cross')).style.display = 'none';
                    } else {
                        (elsQue[i].querySelector('.tick')).style.display = 'none';
                         (elsQue[i].querySelector('.cross')).style.display = 'block';
                    }  
                }
            }
        }
        
    },
    reset:function(){
        var self= this;
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
        self.showTickCross(false);
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");           
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);  
    }
}
