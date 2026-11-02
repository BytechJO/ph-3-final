//  ****************************************** //
//  MCQ - Version no: 2
//  Date updated - July 03, 2020 
//  ****************************************** //
window.MCQ = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    this.settings = {
        'activity_area': ob[0],
        'data_obj': dataObj,
        'parent_holder': obj[0]
    }
    this.init(this.settings);
}
MCQ.prototype = {
    init: function (ob) {
        this.ob = ob;
        // this.reset();
        this.listen(ob);
    },
    listen: function (ob) {
        var self = this;
        var e = (ob.activity_area);
        var selectTyp = (ob.data_obj).select;
        var selectBgColor = (ob.data_obj).bgcolor;
        var selShape = (ob.data_obj).shape;
        var ques = e.querySelectorAll('.que');
        if (ques.length > 0) {
            // for (var i = 0; i < ques.length; i++) { 
            // var thisQue  = ques[i];
            var picks = e.querySelectorAll('.pick');

            for (var i = 0; i < picks.length; i++) {
                picks[i].addEventListener("click", function (e) {
                    var target = $(e.target);
                    console.log('target .. ', target[0], target.hasClass('audioIcon'));
                    if(!(target.hasClass('audioIcon'))){
                    var _thisId = $(this).attr('id');
                    var _parentNum = ($(this).attr('id')).split('_')[1];
                    thisQue = $("#" + _thisId).closest("#que_" + _parentNum);
                    var thisQuePicks = thisQue.find('.pick');
                    self.showIcons(false);
                    var isSel = !($(this).hasClass('selected'));

                    if (selectTyp == 'single') {
                        self.resetAllPicks(thisQue, thisQuePicks);
                    } else {
                        self.resetAllPicks(thisQue, [$(this)]);
                    }
                    if (isSel) {
                        $(this).addClass('selected');
                        if (selShape == 'cross') {
                            $(this).find('.selX').show();
                        } else if (selShape == 'svg') {
                            $(this).find('svg').removeClass('fillWhite');
                            $(this).find('svg').addClass('fillBlue');
                        } else if (selShape == 'tickbox') {
                            $(this).find('.selectTick').css('display', 'block');
                        }else if (selShape == 'underline') {
                            $(this).find('.txt_box').css('text-decoration', 'underline rgb(13, 137, 202)');
                        } 
                        else {
                            if (selectBgColor != 'none') {
                                $(this).css('background-color', selectBgColor);
                            } else {
                                $(this).addClass('selectedDefault');
                            }
                        }
                    }
                    document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                    document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
                     }      
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
    resetAllPicks: function (qOb, aArr) {
        var ob = this.ob;
        var picks = aArr;
        var selShape = (ob.data_obj).shape;
        for (var i = 0; i < picks.length; i++) {
            var tPick = (picks[i].classList == undefined) ? (picks[i])[0] : picks[i];

            tPick.classList.remove("selected");
            tPick.classList.remove("selectedDefault");
            tPick.classList.remove("isCorrect");
            tPick.classList.remove("isNotCorrect");
            tPick.style.backgroundColor = 'transparent';
            if ((tPick.querySelectorAll('.txt_box')).length > 0) {
            //$(this).find('.txt_box').css('text-decoration', 'underline');
            (tPick.querySelector('.txt_box')).style.textDecoration = 'none';
            }

            if ((tPick.querySelectorAll('.selX')).length > 0) {
                (tPick.querySelector('.selX')).style.display = 'none';
            }
            if ((tPick.querySelectorAll('.selectTick')).length > 0) {
                (tPick.querySelector('.selectTick')).style.display = 'none';
                /* tPick.querySelector('.tickBox').classList.remove('red'); 
                 tPick.querySelector('.tickBox').classList.remove('green');  
                 tPick.querySelector('.tickBox').classList.add('blue'); */
            }
            if (selShape == 'svg') {
                var svgsIn = tPick.querySelectorAll('svg');
                if (svgsIn.length > 0) {
                    for (var svg = 0; svg < svgsIn.length; svg++) {
                        svgsIn[svg].classList.remove("fillBlue");
                        svgsIn[svg].classList.remove("fillGreen");
                        svgsIn[svg].classList.remove("fillRed");
                        svgsIn[svg].classList.add("fillWhite");
                    }
                }
            }
        }
    },
    validate: function () {
        var self = this;
        var ob = this.ob;
        var selectBgColor = (ob.data_obj).bgcolor;
        var selShape = (ob.data_obj).shape;
        var e = (ob.activity_area);
        var elsQue = e.querySelectorAll('.que');
        var numOfMCQs = elsQue.length;
        var allCorrect = false;
        var resultArr = [];
        for (var i = 0; i < elsQue.length; i++) {
            resultArr[i] = 0;
            var fIndx = parseInt(elsQue[i].dataset.qno);
            var fDataObj = ((ob.data_obj).questions[fIndx - 1]);
            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';
			console.log('here get c ans>> ', i, fDataObj.answer, (fDataObj.answer).length);
			var _cAns = [];
			if((fDataObj.answer).length > 0){
				_cAns = getIntArray(fDataObj.answer);
			}
            
            var _uAns = [];
			console.log('here >> ', _cAns.length);
            var picks = elsQue[i].querySelectorAll('.pick');
            if (picks.length > 0) {
                for (var a = 0; a < picks.length; a++) {
                    if (picks[a].classList.contains('selected')) {
                        picks[a].classList.remove('selectedDefault')
                        _uAns.push(a + 1);
                        var isAns = (_cAns.length > 0)?($.inArray((a + 1), _cAns) >= 0): false;
                        
                        if (isAns) {
                            
                            if (selectBgColor == 'none' && selShape != 'svg' && selShape != 'tickbox' && selShape!="underline")
                             {
                                picks[a].classList.add('isCorrect');
                            }
                            if (selShape == 'cross') {
                                picks[a].classList.add('isCorrect');
                            } else if (selShape == 'svg') {
                                picks[a].querySelector('svg').classList.remove('fillBlue');
                                picks[a].querySelector('svg').classList.add('fillGreen');
                            } else if (selShape == 'tickbox') {
                                // picks[a].querySelector('.tickBox').classList.add('green'); 
                            }
                            if ((picks[a].querySelectorAll('.icon_wrap')).length > 0) {
                                (picks[a].querySelector('.icon_wrap')).style.display = 'block';
                                (picks[a].querySelector('.tick')).style.display = 'block';
                            }
                        } else {
                           
                            if (selectBgColor == 'none' && selShape != 'svg' && selShape != 'tickbox' && selShape!="underline") 
                            {
                               picks[a].classList.add('isNotCorrect');
                            }
                            if (selShape == 'cross') {
                                picks[a].classList.add('isNotCorrect');
                            } else if (selShape == 'svg') {
                                picks[a].querySelector('svg').classList.remove('fillBlue');
                                picks[a].querySelector('svg').classList.add('fillRed');
                            } else if (selShape == 'tickbox') {
                                // picks[a].querySelector('.tickBox').classList.add('red');  
                            }
                            if ((picks[a].querySelectorAll('.icon_wrap')).length > 0) {
                                (picks[a].querySelector('.icon_wrap')).style.display = 'block';
                                (picks[a].querySelector('.cross')).style.display = 'block';
                            }
                        }
                    }
                }
            }
            if ((_cAns.length == _uAns.length)) {
                resultArr[i] = (compareArrays(_uAns, _cAns)) ? 1 : 0;

                if ((fDataObj).audio != '') {
                    if (((fDataObj).audioenable == 'correct') && resultArr[i] == 1) {
                        (elsQue[i].querySelector('.audioIcon')).classList.remove("disabled");
                    }
                }
            }
			var inputBoxes = elsQue[i].querySelectorAll('input'); 
			var filledCorrect = false;
			if(inputBoxes.length == 1){
				var userFillAns = (inputBoxes[0].value).toLowerCase();				
				var corrFillAns = (fDataObj.fillinanswer).toLowerCase();
				if(userFillAns == corrFillAns){
					filledCorrect = true;
				}
				console.log('inputBoxes > filledCorrect', inputBoxes, userFillAns, corrFillAns, filledCorrect);
			}
			console.log('inputBoxes > ', inputBoxes, userFillAns, corrFillAns);
			if(!filledCorrect){
			 resultArr[i] = 0;
            } 
			

        }

        allCorrect = (((resultArr.join('').split('0'))[0]).length == numOfMCQs);
        self.showIcons(true, resultArr, allCorrect);
        showFeedback(true, allCorrect);

        if (allCorrect) {
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
        }
    },
    showIcons: function (aBoo, aVal, aResult) {
        var ob = this.ob;
        var e = (ob.activity_area);
        var selShape = (ob.data_obj).shape;
        var needIcon = ((typeof (ob.data_obj).showicon != undefined && (ob.data_obj).showicon != null) ? (ob.data_obj).showicon : 'true');
        var elsQue = e.querySelectorAll('.que');
        console.log('showIcons : ', needIcon, aBoo, aVal, aResult)
        for (var i = 0; i < elsQue.length; i++) {
            if (aBoo) {
                if (elsQue.length != 1) {
                    (elsQue[i].querySelector('.icon_wrap')).style.display = 'block';
                    if (aVal[i] == 1) {
                        (elsQue[i].querySelector('.tick')).style.display = 'block';
                    } else {
                        (elsQue[i].querySelector('.cross')).style.display = 'block';
                    }
                } else {
                    var picks = elsQue[i].querySelectorAll('.pick');
                    if (picks.length > 0) {
                        if (needIcon == 'true') {
                            (elsQue[i].querySelector('.icon_wrap')).style.display = 'block';

                            if (aVal[i] == 1) {
                                (elsQue[i].querySelector('.tick')).style.display = 'block';
                            } else {
                                (elsQue[i].querySelector('.cross')).style.display = 'block';
                            }
                        }
                    }
                }


            } else {
                if (elsQue.length != 1) {
                    (elsQue[i].querySelector('.icon_wrap')).style.display = 'none';
                    (elsQue[i].querySelector('.tick')).style.display = 'none';
                    (elsQue[i].querySelector('.cross')).style.display = 'none';
                } else {
                    if (needIcon != 'true') {
                        if ((elsQue[i].querySelectorAll('.icon_wrap_holder')).length > 0) {
                            (elsQue[i].querySelector('.icon_wrap_holder')).classList.remove('d-flex');
                            (elsQue[i].querySelector('.icon_wrap_holder')).classList.add('d-none');
                        }
                    } else {
                        (elsQue[i].querySelector('.icon_wrap')).style.display = 'none';
                        (elsQue[i].querySelector('.tick')).style.display = 'none';
                        (elsQue[i].querySelector('.cross')).style.display = 'none';
                    }
                }
                var picks = elsQue[i].querySelectorAll('.pick');
                if (picks.length > 0) {
                    for (var a = 0; a < picks.length; a++) {
                        if ((picks[a].querySelectorAll('.icon_wrap')).length > 0) {
                            (picks[a].querySelector('.icon_wrap')).style.display = 'none';
                            (picks[a].querySelector('.tick')).style.display = 'none';
                            (picks[a].querySelector('.cross')).style.display = 'none';
                        }
                    }
                }
            }

        }
    },
    reset: function () {
        var self = this;
        var ob = this.ob;
        var e = (ob.activity_area);

        var selShape = (ob.data_obj).shape;
        var elsQue = e.querySelectorAll('.que');

        for (var i = 0; i < elsQue.length; i++) {
            var fIndx = parseInt(elsQue[i].dataset.qno);
            var fDataObj = ((ob.data_obj).questions[fIndx - 1]);
            self.showIcons(false);
            if (fDataObj.audio != '') {
                if (fDataObj.audio != 'no') {
                    if ((elsQue[i].querySelectorAll('.audioIcon')).length > 0) {
                        if (fDataObj.audioenable == 'correct') {
                            (elsQue[i].querySelector('.audioIcon')).style.display = 'block';
                            (elsQue[i].querySelector('.audioIcon')).classList.add("disabled");
                        } else if (fDataObj.audioenable == 'default') {
                            (elsQue[i].querySelector('.audioIcon')).style.display = 'block';
                            (elsQue[i].querySelector('.audioIcon')).classList.remove("disabled");
                        }
                    }
                } else {
                    if ((elsQue[i].querySelectorAll('.audioIcon')).length > 0) {
                        (elsQue[i].querySelector('.audioIcon')).style.display = 'none';
                    }
                }
            }
            var pickOptions = elsQue[i].querySelectorAll('.pick');
            self.resetAllPicks(elsQue[i], pickOptions);
            if (pickOptions.length > 0) {
                for (var a = 0; a < pickOptions.length; a++) {
                    if (((fDataObj.options)[a]).audio != '') {
                        if (((fDataObj.options)[a]).audio != 'no') {
                            if ((pickOptions[a].querySelectorAll('.audioIcon')).length > 0) {
                                if (((fDataObj.options)[a]).audioenable == 'correct') {
                                    (pickOptions[a].querySelector('.audioIcon')).style.display = 'block';
                                    (pickOptions[a].querySelector('.audioIcon')).classList.add("disabled");
                                } else if (((fDataObj.options)[a]).audioenable == 'default') {
                                    (pickOptions[a].querySelector('.audioIcon')).style.display = 'block';
                                    (pickOptions[a].querySelector('.audioIcon')).classList.remove("disabled");
                                }
                            }
                        } else {
                            if ((pickOptions[a].querySelectorAll('.audioIcon')).length > 0) {
                                (pickOptions[a].querySelector('.audioIcon')).style.display = 'none';
                            }
                        }
                    }
                    if ((pickOptions[a].querySelectorAll('.selX')).length > 0) {
                        (pickOptions[a].querySelector('.selX')).style.display = 'none';
                    }
                    if (selShape != '') {
                        if (selShape == 'roundrect') {
                            pickOptions[a].classList.add("roundedCorners");
                        } else if (selShape == 'circle') {
                            pickOptions[a].classList.add("noCorners");
                        } else if (selShape == 'rectangle') {
                            pickOptions[a].classList.add("sharpCorners");
                        } else if (selShape == 'tickbox') {
                            if ((pickOptions[a].querySelectorAll('.tickBox')).length > 0) {
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
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
}
