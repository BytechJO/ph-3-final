var _aInterval;
var theActivity = {};
var _aData = {};
var _activityInitiated = 0;

function buildActivityCtrls(aIndx, aObj, aType, aSubType) {
    buildSubFooter(_templateData.subfooter, ((aObj.list)[aIndx]).activityCtrls);
    setNavigationFiles(aIndx, aObj);
    initiateActivityType(aType, aSubType);
    if (((aObj.list)[aIndx]).activityCtrls == 'yes') {
        setActivityIconGrp();
    }

}

function setNavigationFiles(aIndx, aObj) {
    var thisIndex = -1;
    var totalNumOfActivities = (aObj.list).length;

    $('.backNav').find('a').attr("href", '');
    $('.nextNav').find('a').attr("href", '');
    if (aIndx != -1) {
        thisIndex = aIndx + 1;
        // set back and next nav enable/disable states
        (thisIndex == 1) ? $('.backNav').addClass('disabled'): $('.backNav').removeClass('disabled');
        (thisIndex == totalNumOfActivities) ? $('.nextNav').addClass('disabled'): $('.nextNav').removeClass('disabled');
        // console.log('setNavigationFiles >> ',aIndx, thisIndex, totalNumOfActivities, ($('.backNav').hasClass('disabled')), ($('.nextNav').hasClass('disabled')));
        // set linked file names for back and next
        if (thisIndex != 1) {
            $('.backNav').find('a').attr("href", ((aObj.list)[aIndx - 1]).file);
        }
        if (thisIndex != totalNumOfActivities) {
            $('.nextNav').find('a').attr("href", ((aObj.list)[aIndx + 1]).file);
        }
    }
}

function buildPageNumbers(aObj, aIndx, aTotalNum) {
    if ($('.screen_numbers_wrap').hasClass('fixed-top')) {
        $('.screen_numbers_wrap').removeClass('fixed-top');
    }
    var fStmt = '';
    fStmt += "<div class='mini_ribbon'>";
    fStmt += "<div class='ribbon_base'>";
    fStmt += '<input class="act_num" type="text" id="pgnum" maxlength="2" > ';
    fStmt += '<div class="numofscreen"></div>';
    fStmt += '<div class="goToBtn mx-auto d-none"><img src="../images/icons/Go_but.png"> </div>';
    fStmt += "</div></div>";
    $('.screen_numbers_wrap').append(fStmt);
    //------------ set values ------------   
    $('.screen_numbers_wrap').data('thisIndx', aIndx);
    $('.screen_numbers_wrap').data('totalNum', aTotalNum);
    setPageNumbers();
}

function setPageNumbers() {
    if ($('.screen_numbers_wrap').data('totalNum') != 0 && $('.screen_numbers_wrap').data('totalNum') != null && $('.screen_numbers_wrap').data('thisIndx') != 0 && $('.screen_numbers_wrap').data('thisIndx') != null) {
        var _fTx = 'of ' + $('.screen_numbers_wrap').data('totalNum');
        $('.screen_numbers_wrap').find('.numofscreen').html(_fTx);
        $('.screen_numbers_wrap').find('input').val($('.screen_numbers_wrap').data('thisIndx'));
        $('.screen_numbers_wrap').find('input').css('background-color', 'white');
    }
}
$('.screen_numbers_wrap').on('input', "#pgnum", function(e) {
    console.log('oninput> ', this.value, $('.screen_numbers_wrap').data('thisIndx'))
    var fPage = this.value;
    var thisPgIndex = parseInt($('.screen_numbers_wrap').data('thisIndx'));
    var totalNumOfPages = parseInt($('.screen_numbers_wrap').data('totalNum'));
    if (fPage != '' && thisPgIndex > 0 && totalNumOfPages > 0) {
        if (fPage != thisPgIndex && fPage != 0 && fPage <= totalNumOfPages) {
            $(this).css('background-color', '#9ff390');
            $('.goToBtn').removeClass('d-none').addClass('d-block');
        } else {
            if (fPage == thisPgIndex) {
                $(this).css('background-color', 'white');
            } else {
                $(this).css('background-color', 'pink');
            }

            $('.goToBtn').removeClass('d-block').addClass('d-none');
        }

    } else {
        $('.goToBtn').removeClass('d-block').addClass('d-none');
    }
});
$(".activity_area").click(function() {
    setPageNumbers();
    $('.goToBtn').removeClass('d-block').addClass('d-none');
});

$('.screen_numbers_wrap').on('click', ".goToBtn", function(e) {
    var _tInput = $('.screen_numbers_wrap').find('input');
    var thisPgIndex = parseInt($('.screen_numbers_wrap').data('thisIndx'));
    var totalNumOfPages = parseInt($('.screen_numbers_wrap').data('totalNum'));
    if (_tInput.val() != '' && _tInput.length > 0 && thisPgIndex > 0 && totalNumOfPages > 0) {
        var fPage = parseInt(_tInput.val());
        if (fPage != thisPgIndex && fPage <= totalNumOfPages) {
            if (typeof _aData != undefined && _aData != null) {
                var newUrl = ((_aData.list)[fPage - 1]).file;
                if (newUrl != undefined && newUrl != null) {
                    location.href = newUrl;
                }
            }
        } else {
            $('.goToBtn').removeClass('d-block').addClass('d-none');
        }
    }
});
$('.sub_footer_buttons_wrap').on('click', ".sub_footer_buttons", function(e) {
    var target = $(event.target);
    if (target.hasClass('act_ctrls') || target.hasClass('sub_footer_buttons') || target.hasClass('act_showall_img')) {
        toggleActCtrls();
    }
});

function toggleActCtrls() {
    if ($('.act_ctrls').hasClass('d-none')) {
        $('.act_ctrls').removeClass('d-none')
    } else {
        $('.act_ctrls').addClass('d-none');
    }
}
//buildSubFooter(_templateData.subfooter);
function setActivityIconGrp() {
    showActivityControlButs(false);
    if ($('.activity_buts').length > 0) {
        var act_buttons = ($('.activity_buts').data('buttons') != undefined && $('.activity_buts').data('buttons') != null) ? $('.activity_buts').data('buttons') : 'none';
        $('.act_showall').data('buttons', []);
        if (act_buttons != 'none') {
            var act_buttons_arr = getStrArray(act_buttons, 'controls');
            $('.act_showall').data('buttons', act_buttons_arr);
            if (act_buttons_arr.length > 1) {
                for (var aa = 0; aa < act_buttons_arr.length; aa++) {
                    var thisCtrl = $('.act_ctrls').find('.act_' + act_buttons_arr[aa]);
                    thisCtrl.data('name', act_buttons_arr[aa]);
                    if (thisCtrl !== null && thisCtrl != undefined) {
                        thisCtrl.css('left', (aa * 60) + 'px');
                        thisCtrl.show();
                        thisCtrl.click(function() {
                            $('.activityCtrlPanel').data('launch', $(this).data('name'));
                        });
                    }
                }
            }
        }
    }
}
$('.activityCtrlPanel').on('show.bs.modal', function(event) {
    var $this = $(this);
    var thisClass = $(this).data('launch');
    var fIcon = $(this).find('.ctrlIcon');
    var fTitle = $(this).find('.modal-title');
    fIcon.find('img').hide();
    fIcon.find('#img_' + thisClass).show();

    fTitle.html('');

    if (thisClass != 'ccss') {
        var tmp = '';
        tmp = (thisClass == 'tips') ? 'Learn with Peter' : (thisClass == 'homework') ? 'Homework' : 'Link';
        fTitle.html(tmp);
    }
    var ctrlCnt = $('.activity_buts').find('.' + thisClass + '_content');
    if (ctrlCnt != null) {
        var cntClone = ctrlCnt.clone();
        $this.find('.modal-body').empty();
        $this.find('.modal-body').append(cntClone);
        if (cntClone.data('height') != undefined && cntClone.data('height') != null && cntClone.data('height') != '') {
            var cntHeight = cntClone.data('height');
            $this.find('.modal-body').css('height', (cntHeight) + 'px');
        } else {
            $this.find('.modal-body').css('height', 'auto');
        }
        // $actCtrlPanel.css('bottom', (cntHeight+181)+'px');

        cntClone.find('.audioBox').each(function() {
            $(this).click(function() {
                playThisAudio($(this));
            });
        });
        // $this.show();
    } else {
        // $actCtrlPanel.hide();
    }
});

function showActivityControlButs(aVis) {
    if (!aVis) {
        //$('.act_ctrls').find('div').hide();
        $('.act_ccss').hide();
        $('.act_homework').hide();
        $('.act_link').hide();
        $('.act_tips').hide();
    }
}

function initiateActivityType(aActTyp, aActSubType) {
    _activityInitiated = 0;
    var quePart = $('.activity_area');
    $('.checkBtn').addClass('disabled');
    $('.resetBtn').addClass('disabled');
    $('.activity_area').data('type', aActTyp);
    $('.activity_area').data('subtype', aActSubType);
    if (aActTyp == 'fillin') {
        if (aActSubType == 'none') {
            theActivity = new FillIn(quePart, fillin_data);
        } else {
            if (aActSubType == 'order') {
                theActivity = new FillIn(quePart, fillin_order_data);
            }
        }

    } else if (aActTyp == 'mcq') {
        if (aActSubType == 'none') {
            theActivity = new MCQ(quePart, mcq_data);
        } else {
            if (aActSubType == 'tick') {
                theActivity = new MCQ(quePart, mcq_tick_data);
            }
        }
    } else if (aActTyp == 'wordpuzzle') {
        theActivity = new WordPuzzle(quePart, wordpuzzle_data);
    } else if (aActTyp == 'wordsearch') {
        theActivity = new WordSearch(quePart, wordsearch_data);
    } else if (aActTyp == 'linedraw') {
        theActivity = new LineDraw(quePart, linedraw_data);
    } else if (aActTyp == 'dragndrop') {
        theActivity = new DragAndDrop(quePart, dragndrop_data);
    } else if (aActTyp == 'coloring') {
        theActivity = new Coloring(quePart, coloring_data);
    } else if (aActTyp == 'standAlone') {
        theActivity = "standAlone";

    } else {
        theActivity = null;
    }
    if (theActivity != null && theActivity != "standAlone") {
        theActivity.initialSettings();
        if (aActTyp == 'wordsearch') {
            $('.resetBtn').removeClass("disabled");
        }
    } else {
        _activityInitiated = 1;
    }
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend" || "touchcancel", touchHandler, true);
    _aInterval = setInterval(checkActivityLoaded, 200);
}

function touchHandler(e) {
    var fActType = $('.activity_area').data('type');
    /* try{
         //if(fActType == 'wordsearch'){
             e.preventDefault();
        // }
         
     }
     catch(ex){}*/
    var touchend = (e.type == 'touchend');

    if (event.touches) {
        var touch;
        try {
            touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
        } catch (error) {
            touch = event.touches[0];
        }

        if (touch != undefined && touch != null) {
            var xcoord = touch.pageX;
            var ycoord = touch.pageY;
            var targetElement = document.elementFromPoint(xcoord, ycoord);
            // console.log('touch move> ', targetElement, targetElement.classList); 
            if (typeof targetElement != undefined && targetElement != null && targetElement.classList != null) {
                if (targetElement.classList.contains("ws_col")) {
                    if (fActType == 'wordsearch') {
                        theActivity.cellMove(targetElement.classList.value);
                    }
                }
            }
        } else {
            if (touchend) {
                if (fActType == 'wordsearch') {
                    theActivity.cellTouchEnd();
                }
            }
        }
    }

}
$('.sub_footer_buttons_wrap').on('click', ".checkBtn", function(e) {
    $(this).addClass('disabled');
    if (theActivity == "standAlone") {
        validateActivity();
    } else {
        theActivity.validate();
    }
});
$('.sub_footer_buttons_wrap').on('click', ".resetBtn", function(e) {
    var fActType = $('.activity_area').data('type');
    if (fActType != 'wordsearch') {
        $(this).addClass('disabled');
    }
    $("#feedbackPopup").modal("hide");
    if (theActivity == "standAlone") {
        initActivity(_activity_json);
    } else {
        theActivity.reset();
    }
});

function callActivityFunctions(_actData, _actIndx, _actType, _actSubType) {
    if ($('.activity_area').length > 0) {
        $('.activity_area').data('type', '');
        $('.activity_area').data('subtype', '');
    }
    if ($('.activity_buts').length > 0) {
        $('.activity_buts').hide();
    }
    if (typeof _actData != undefined && _actData != null && typeof _actType != undefined && _actType != null) {
        _aData = _actData;
        theActivity = {};
        $('.screen_number_wrap').addClass('d-none');
        buildActivityCtrls(_actIndx, _actData, _actType, _actSubType);
    }
}

function initialSettingsDone(aDone) {
    if (typeof aDone != undefined && aDone != null) {
        _activityInitiated = aDone;
    }
}

function checkActivityLoaded() {
    if (_activityInitiated == 1) {
        clearInterval(_aInterval);
        $('#pgnum').on('input', function(event) {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
        setLoadedStatus(getCurrFileOrDirectory('file') + '_functions');
    }
}