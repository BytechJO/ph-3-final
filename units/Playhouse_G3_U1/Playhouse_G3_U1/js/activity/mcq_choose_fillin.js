//  ****************************************** //
//  MCQ_Choose - Version no: 1
//  Date written - August 14, 2020 
//  Date extended as mcq_choose_with_fillin - August 21, 2020 
//  ****************************************** //
window.MCQ = function(obj, dataObj){    
    ob = obj[0].getElementsByClassName("options");    
    this.settings = {        
        'activity_area' : ob[0],
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }    
    this.init(this.settings);
}
MCQ.prototype = {
    init:function(ob){       
        this.ob = ob;
        // this.reset();
        this.listen(ob);
    },
    listen:function(ob){
        var self = this;
        var e = (ob.activity_area); 
        var selectTyp = (ob.data_obj).select;
        var selectBgColor = (ob.data_obj).bgcolor;
        var selShape = (ob.data_obj).shape;
        var ques = e.querySelectorAll('.que');
        var thisQue;
        var thisPickSet;    
        if(ques.length > 0){
            // for (var i = 0; i < ques.length; i++) { 
                // var thisQue  = ques[i];
                var picks = e.querySelectorAll('.pick'); 
                
                for (var i = 0; i < picks.length; i++) {
                    picks[i].addEventListener("click", function(){  
                        var target = $(e.target);                         
                        // if(!(target.hasClass('audioIcon'))){
                            var _thisId = $(this).attr('id');
                            var _parentNum = ($(this).attr('id')).split('_')[1]; 
                            var _parentPickSet = ($(this).attr('id')).split('_')[2];                        
                            thisQue = $( "#"+_thisId ).closest( "#que_"+_parentNum ) ;
                            thisPickSet = $( "#"+_thisId ).closest( "#pick_set_"+_parentNum+'_'+_parentPickSet ) ;
                                                       
                            self.showIcons(false);
                            var isSel = !($(this).hasClass('selected'));
                            
                            if(selectTyp == 'single'){                                
                                self.resetAllPicks('this', _parentNum, _parentPickSet);                            
                            }else{                 
                                $(this).removeClass("selected");
                                $(this).removeClass("selectedDefault"); 
                            }
                            if(isSel){
                                $(this).addClass('selected');                                
                                if(selectBgColor != 'none'){
                                    $(this).css('background-color', selectBgColor);  
                                }else{
                                    $(this).addClass('selectedDefault');  
                                } 
                                if(thisPickSet.find('input').length >0){
                                    var theText = $(this).data('opttext')
                                    // console.log('selected this >> ', $(this), $(this).data('opttext'), thisPickSet);
                                    thisPickSet.find('input').val(theText);
                                }
                                
                            }                       
                            document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                            document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
                        // }      
                    });
                    
                }

            // }
        }

        // --- fillin ---
        var inputs = e.querySelectorAll('input'); 
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("input", function(){                  
                $(this).css('color', 'black');              
                var v = this.value;
                if(typeof $(this).data('type') != undefined && $(this).data('type')!=null){
                    var typ = $(this).data('type');
                    if(typ == 'text'){
                        $(this).val($(this).val().replace(/[^a-z .]/gi, ''));
                    }else if(typ == 'number'){
                        if($.isNumeric(v) === false) {               
                            this.value = this.value.replace(/\D/g, '');           
                        }
                    }else{
                        this.value = $(this).val();
                    }
                }
                //self.showTickCross();
                self.showIcons(false);   
                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");      
            });
        } 
        
    },
    resetAllPicks:function(condition, qNum, pickSetNum){  
        var ob = this.ob; 
        var $area= $(ob.activity_area);
        if(condition == 'this'){           
            var thisSet = $area.find('#pick_set_'+qNum+'_'+pickSetNum);
            thisSet.find('.pick').removeClass("selected");
            thisSet.find('.pick').removeClass("selectedDefault");
            if(thisSet.find('input').length > 0){
                thisSet.find('input').val("");
            }            
        }else{
            $area.find('.pick').removeClass("selected");
            $area.find('.pick').removeClass("selectedDefault");            
            if($area.find('input').length > 0){
                $area.find('input').val("");
            } 
        }
    },
    validate:function(){
        var self = this;
        var ob = this.ob;
        var allCorrect = false; 
        
        var $area= $(ob.activity_area);
        var haveCheckBoxes = (ob.data_obj).checkboxes;
        var numOfQs =  $area.find('.que').length;
        var resultArr = [];   
        $area.find('.que').each(function(){
            var qIndx = parseInt($(this).data('qno'));
            var fDataObj = ((ob.data_obj).questions[qIndx-1]);
            resultArr[qIndx-1] = 0;
            var _cAns = getIntArray(fDataObj.answer); 
            var tmpRes = [];
            var needFillinValidation = false;
            var filledCorrect = false;

            $(this).find('.pick_set').each(function(){
                var setIndx = parseInt($(this).attr('id').split('_')[3]); 
                tmpRes[setIndx-1] = 0;
                var _setCorrAns = _cAns[setIndx - 1];  
                var selectedPick = 0;
                
                if($(this).find('.selected').length > 0){
                    var tSel = $(this).find('.selected');
                    selectedPick = parseInt(tSel.attr('id').split('_')[3]); 
                }
                console.log('pick_set >> ',$(this).attr('id'), _cAns, setIndx, _setCorrAns, selectedPick);
                if(selectedPick == _setCorrAns){
                    tmpRes[setIndx-1] = 1;
                }
            });
            if(haveCheckBoxes == 'yes'){
                needFillinValidation = ((_cAns[0] != '1') && ($(this).find('input').length > 0));               
                console.log('needFillVal > ', qIndx, needFillinValidation);
                if(needFillinValidation){
                    if($(this).find('input').length == 1){
                        var userFillAns = ($.trim($(this).find('input').val())).toLowerCase();
                        var corrFillAns = (fDataObj.fillinanswer[0]).toLowerCase();
                        if(userFillAns == corrFillAns){
                            filledCorrect = true;
                        }
                        console.log('needFillVal > ', userFillAns, corrFillAns);
                    }
                }else{
                    if($(this).find('input').length == 1){
                        if(($(this).find('input').val()).length > 0){
                            var userFillAns = ($.trim($(this).find('input').val())).toLowerCase();
                            var corrFillAns = (fDataObj.fillinanswer[0]).toLowerCase();
                            if(userFillAns == corrFillAns){
                                filledCorrect = true;
                            }
                        }else{
                            filledCorrect = true;
                        }
                    }
                }
            }

           console.log('que >> ',qIndx, _cAns, $(this).find('.pick_set').length, tmpRes); 
            resultArr[qIndx-1] = (((tmpRes.join('').split('0'))[0]).length == _cAns.length) ? 1: 0;            
            if(!filledCorrect){
                resultArr[qIndx-1] = 0;
            }           
        });

       /* var e = (ob.activity_area); 
        var elsQue = e.querySelectorAll('.que'); 
        
       
        var resultArr = [];        
        for (var i = 0; i < elsQue.length; i++) { 
            resultArr[i] = 0;
            var fIndx = parseInt(elsQue[i].dataset.qno);
            var fDataObj = ((ob.data_obj).questions[fIndx-1]);
            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';            
            var _cAns = getIntArray(fDataObj.answer);           
            var _uAns = [];
           
            var picks = elsQue[i].querySelectorAll('.pick');            
            if(picks.length > 0){
                for(var a=0;a<picks.length;a++){ 
                    if(picks[a].classList.contains('selected')){
                       // picks[a].classList.remove('selectedDefault')
                        _uAns.push(a+1);
                        var isAns = ($.inArray( (a+1), _cAns) >=0 );                        
                        if(isAns){ 
                            if((picks[a].querySelectorAll('.icon_wrap')).length > 0){
                                (picks[a].querySelector('.icon_wrap')).style.display = 'block';  
                                (picks[a].querySelector('.tick')).style.display = 'block';                                
                            } 
                        }else{                           
                            if((picks[a].querySelectorAll('.icon_wrap')).length > 0){
                                (picks[a].querySelector('.icon_wrap')).style.display = 'block';                                  
                                (picks[a].querySelector('.cross')).style.display = 'block';
                            } 
                        }
                    }                   
                }
            } 
            if((_uAns.length>0) && (_cAns.length == _uAns.length)){
                resultArr[i] = (compareArrays(_uAns, _cAns))? 1:0;                
                 
                if((fDataObj).audio != ''){ 
                    if(((fDataObj).audioenable == 'correct') && resultArr[i] == 1) {
                        (elsQue[i].querySelector('.audioIcon')).classList.remove("disabled");                        
                    } 
                }
            }
           
        }
                */
        allCorrect = (((resultArr.join('').split('0'))[0]).length == numOfQs); 
        self.showIcons(true, resultArr, allCorrect); 
        showFeedback(true,allCorrect);
       
        if(allCorrect){
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled"); 
        }        
    },
    showIcons:function(aBoo, aVal, aResult){
        var ob = this.ob;        
        var e = (ob.activity_area);
        var selShape = (ob.data_obj).shape;
        var needIcon = ((typeof (ob.data_obj).showicon != undefined && (ob.data_obj).showicon != null) ? (ob.data_obj).showicon : 'true');
        var elsQue = e.querySelectorAll('.que');       
        for (var i = 0; i < elsQue.length; i++) {
            if(aBoo){
                if(elsQue.length != 1){
                    (elsQue[i].querySelector('.icon_wrap')).style.display = 'block'; 
                    if(aVal[i] == 1){
                        (elsQue[i].querySelector('.tick')).style.display = 'block';
                    }else{
                        (elsQue[i].querySelector('.cross')).style.display = 'block';
                    }
                }else{                    
                    var picks = elsQue[i].querySelectorAll('.pick'); 
                    if(picks.length > 0){
                        if(needIcon == 'true'){
                            (elsQue[i].querySelector('.icon_wrap')).style.display = 'block'; 

                            if(aVal[i] == 1){
                                (elsQue[i].querySelector('.tick')).style.display = 'block';
                            }else{
                                (elsQue[i].querySelector('.cross')).style.display = 'block';
                            }
                        }
                    }
                }

                
            }else{
                if(elsQue.length != 1){
                    (elsQue[i].querySelector('.icon_wrap')).style.display = 'none'; 
                    (elsQue[i].querySelector('.tick')).style.display = 'none';
                    (elsQue[i].querySelector('.cross')).style.display = 'none';
                }else{                   
                    if(needIcon != 'true'){                   
                        if((elsQue[i].querySelectorAll('.icon_wrap_holder')).length > 0){
                            (elsQue[i].querySelector('.icon_wrap_holder')).classList.remove('d-flex');
                            (elsQue[i].querySelector('.icon_wrap_holder')).classList.add('d-none');
                        }
                    }else{
                        (elsQue[i].querySelector('.icon_wrap')).style.display = 'none'; 
                        (elsQue[i].querySelector('.tick')).style.display = 'none';
                        (elsQue[i].querySelector('.cross')).style.display = 'none';
                    }                    
                }                
                var picks = elsQue[i].querySelectorAll('.pick'); 
                if(picks.length > 0){
                    for(var a=0;a<picks.length;a++){  
                        if((picks[a].querySelectorAll('.icon_wrap')).length > 0){
                            (picks[a].querySelector('.icon_wrap')).style.display = 'none';  
                            (picks[a].querySelector('.tick')).style.display = 'none';
                            (picks[a].querySelector('.cross')).style.display = 'none';
                        }
                    }
                }
            }
            
        }
    },
    reset:function(){
        var self = this;
        var ob = this.ob;        
        var e = (ob.activity_area);        

        var selShape = (ob.data_obj).shape;
        var elsQue = e.querySelectorAll('.que');  
        
        for (var i = 0; i < elsQue.length; i++) { 
            var fIndx = parseInt(elsQue[i].dataset.qno);
            var fDataObj = ((ob.data_obj).questions[fIndx-1]);            
            self.showIcons(false);             
            if(fDataObj.audio != ''){ 
                if(fDataObj.audio != 'no'){
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
            }
            var pickOptions = elsQue[i].querySelectorAll('.pick');                
              
            if(pickOptions.length > 0){
                for(var a=0;a<pickOptions.length;a++){                     
                    /*if(((fDataObj.options)[a]).audio != 'undefined'){ 
                        if(((fDataObj.options)[a]).audio != ''){ 
                            if(((fDataObj.options)[a]).audio != 'no'){
                                if((pickOptions[a].querySelectorAll('.audioIcon')).length > 0){
                                    if(((fDataObj.options)[a]).audioenable == 'correct'){
                                        (pickOptions[a].querySelector('.audioIcon')).style.display = 'block';
                                        (pickOptions[a].querySelector('.audioIcon')).classList.add("disabled");
                                    }else if(((fDataObj.options)[a]).audioenable == 'default'){
                                        (pickOptions[a].querySelector('.audioIcon')).style.display = 'block';
                                        (pickOptions[a].querySelector('.audioIcon')).classList.remove("disabled");
                                    }
                                }
                            }else{
                                if((pickOptions[a].querySelectorAll('.audioIcon')).length > 0){
                                    (pickOptions[a].querySelector('.audioIcon')).style.display = 'none'; 
                                } 
                            }
                        }
                    }
                    if((pickOptions[a].querySelectorAll('.selX')).length > 0){
                        (pickOptions[a].querySelector('.selX')).style.display = 'none';  
                    }  */                                    
                    if(selShape != ''){
                        if(selShape == 'roundrect'){
                            pickOptions[a].classList.add("roundedCorners");
                        } else if(selShape == 'circle'){
                            pickOptions[a].classList.add("noCorners");
                        } else if(selShape == 'rectangle'){
                            pickOptions[a].classList.add("sharpCorners");
                        } else if (selShape == 'tickbox'){                            
                            if((pickOptions[a].querySelectorAll('.tickBox')).length > 0){
                              //  (pickOptions[a].querySelector('.tickBox')).classList.add('blue'); 
                                (pickOptions[a].querySelector('.selectTick')).style.display = 'none';  
                            } 
                        }
                    }
                    pickOptions[a].classList.remove("selected");
                    pickOptions[a].style.cursor = 'pointer';
                    pickOptions[a].classList.remove('isCorrect');
                    pickOptions[a].classList.remove('isNotCorrect');
                }
            }
        }
        self.resetAllPicks('all');  
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");           
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);  
    }
}
