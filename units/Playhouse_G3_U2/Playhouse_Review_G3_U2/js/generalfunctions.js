//  ****************************************** //
 
//  ****************************************** //
//--------------[ Variables ] ----------------------
var win = $(this);
var theAudio = new Audio();
var theCurrAudioObj = null;
var _templatePath = buildTemplatePath();
var audioIndex = 0;
var audioArray;
var _alignInterval;
var maskWidth;
var containerWidth;
//--------------[ // Variables ] ---------------------- 

$('.loading').show();
function buildTemplatePath() {
    var _templatePath = "";
    _templatePath = (getCurrFileOrDirectory('directory') == 'views') ? '.' : '';
    return (_templatePath);
}
function getCurrFileOrDirectory(aNeed, aPath) {
    var href = (aPath == undefined && aPath == null) ? document.location.href : aPath;
    var lastPathSegment = '';
    var currFolder = '';
    var unitFolder = '';     
    if (href != null && href != undefined) {
        lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
        var pathArr = [];
        var path = href.substr(0, Math.max(href.lastIndexOf("/"), href.lastIndexOf("\\")));
        currFolder = (path.substr(path.lastIndexOf('/') + 1)).toLowerCase();        
        if(currFolder == 'views'){
            pathArr = path.split("/");
            var a = pathArr.indexOf(currFolder);           
            unitFolder = pathArr[a-1];
        }else{
            unitFolder = currFolder;
        }               
    }
    lastPathSegment = (lastPathSegment == "") ? 'index.html' : lastPathSegment;
    return (aNeed == 'file') ? lastPathSegment :(aNeed == 'directory') ?  currFolder: unitFolder;
}
function getThisFileName(aPath) {
    var retFileName = "";
    if (aPath.lastIndexOf('/') > -1) {
        retFileName = aPath.substr(aPath.lastIndexOf('/') + 1);
    } else {
        retFileName = aPath;
    }
    return retFileName;
}
function getStrArray(str, pos) {
    var arr = [];
    var arrIndx = 0;
    if (str != null) {
        str = ((str).toString()).split(',');
        for (var i = 0; i < str.length; i++) {
            arr[arrIndx] = $.trim(str[i]);
            arrIndx++;
        }
    }
    return arr;
}
function getIntArray(arr) {
    var arr1 = [];
    if (arr != null) {
        arr = ((arr).toString()).split(',');
        for (var i = 0; i < arr.length; i++) {
            arr1[i] = parseInt(arr[i]);
        }
    }
    return arr1;
};
function sortTheArrayIn(aOrder, aArr) {
    if (aArr.length > 1) {
        for (i = 0; i < aArr.length; ++i) {
            for (j = i + 1; j < aArr.length; ++j) {
                var a = parseInt(aArr[i]);
                var b = parseInt(aArr[j]);
                if (aOrder == 'ascending') {
                    if (a > b) {
                        t = aArr[i];
                        aArr[i] = aArr[j];
                        aArr[j] = t;
                    }
                } else if (aOrder == 'descending') {
                    if (a < b) {
                        t = aArr[i];
                        aArr[i] = aArr[j];
                        aArr[j] = t;
                    }
                }

            }
        }
    }
    return (aArr);
}
function compareArrays(a, b) {
    var isEq = false;
    var isIn = 0;
    var isNotIn = 0;
    if (a.length == b.length) {
        $.each(a, function (i, val) {
            var result = $.inArray(val, b);
            if (result != -1) {
                isIn++;
            } else {
                isNotIn++;
            }
        })
        isEq = ((isIn == b.length) && (isNotIn == 0));
    }
    return isEq;
}
function strictCompareArrays(a, b) {
    // if length is not equal 
    if (a.length != b.length)
        return false;
    else {
        // comparing each element of array 
        for (var i = 0; i < a.length; i++)
            if (a[i] != b[i])
                return false;
        return true;
    }
}
//--------------[ Words to Know ] ----------------------
$('.wordsToKnowHeader').click(function () {
    var partElm = $(this).parent();
    if (partElm.hasClass('cls')) {
        partElm.css({ "height": "auto" });
        partElm.removeClass('cls');
    } else {
        partElm.addClass('cls');
        partElm.css({ "height": "40px" });
    }
});
//--------------[ Words to Know Audio ] ----------------------
function showFeedback(aVis, aFeedback) {
    stopPlaying();
    $("#feedbackPopup").find('#video_1').hide();
    $("#feedbackPopup").find('#video_2').hide();
    if (aVis) {
        if (aFeedback) {
            $("#feedbackPopup").find('#video_1').show();
            $("#feedbackPopup").find('#video_1').trigger('play');
        } else {
            $("#feedbackPopup").find('#video_2').show();
            $("#feedbackPopup").find('#video_2').trigger('play');
        }
    }


    $("#feedbackPopup").modal("show");
}
$('.closeFeedback').click(function () {
    closeFeedbackPop();
});
$('#feedbackPopup').on('hidden.bs.modal', function (e) {
    closeFeedbackPop();
});
function closeFeedbackPop() {
    $("#feedbackPopup").find('#video_1').trigger('pause');
    $("#feedbackPopup").find('#video_2').trigger('pause');
    $("#feedbackPopup").find('#video_1')[0].currentTime = 0;
    $("#feedbackPopup").find('#video_2')[0].currentTime = 0;
}
//--------------[ Audio ]-----------------------------------------

//--------------[ Welcome & Reading Page - Stop Audio when popup opens ]-----------------------------------------
$('.readHighlightsBtn, .apkBtn, .qusBtn').click(function () {
    stopPlaying();
});


//--------------[ Reading screen ]-----------------------------------------
var _readingSlideNum = 0;
function setReadingSlideNumber(aNum) {
    if (aNum != undefined && aNum != null && aNum > 0) {
        _readingSlideNum = aNum;
    }
}
function getReadingSlideNumber(aNum) {
    return (_readingSlideNum);
}
//--------------[ // Reading screen  ]-----------------------------------------
var headerAudioCtrl = {};
$('header').on('click', ".audioIcon", function (e) {
    var thisFile = getCurrFileOrDirectory('file');
    var _titlAudio = _templatePath + (_data.header).audio;
    if ($(this).hasClass('off')) {
        if (thisFile == 'reading.html') {
            resetAllReadingAudio();
            if (getReadingSlideNumber() == 1) {
                var _readOneData = (_data.header).readingPageOne;
                $(this).data('audio', _templatePath + _readOneData.audio);
                if (_readOneData.startTime != undefined && _readOneData.endTime != undefined) {
                    if (_readOneData.startTime > 0 || _readOneData.endTime > 0) {
                        headerAudioCtrl = new AudioControls(_templatePath + _readOneData.audio);
                        headerAudioCtrl.playAudio($(this), _readOneData.startTime, _readOneData.endTime);
                    }
                } else {
                    playThisAudio($(this));
                }
            } else {
                $(this).data('audio', _titlAudio);
                playThisAudio($(this));
            }
        } else {
            $(this).data('audio', _titlAudio);
            playThisAudio($(this));
        }
    }

});
$('.audioIcon').click(function () {
    playThisAudio($(this));
});
$('.activity_area').on('click', ".audioIcon", function (e) {
    playThisAudio($(this));
});
$('.activity_area').on('click', ".audioTile", function (e) {
    playThisAudio($(this));
});
$('.snapShotLoader').on('click', ".audioTile", function (e) {
    playThisAudio($(this), 'new');
});
$('.wordsToKnowBody').on('click', ".audioTile", function (e) {
    playThisAudio($(this));
});
$('.audioTile').click(function () {
    playThisAudio($(this));
});
function playThisAudio(aAudioObj, aState) {
    stopPlaying();
    var _currFile = getCurrFileOrDirectory('file');
    theAudio.src = ((aAudioObj.data('audio')) != undefined && (aAudioObj.data('audio')) != null) ? (aAudioObj.data('audio')) : 'none';
    if (_currFile == 'snapshot.html') {
        if (typeof aState != undefined && aState != null) {
            if (aState == 'new') {
                audioIndex = 0;
            }
        }
    }
    // console.log(' >>> ', _currFile, aState, audioIndex);
    if (theAudio.src != 'none') {
        try {
            if (typeof window.parent.stopHeaderAudio != 'undefined') {
                window.parent.stopHeaderAudio();
            }
        }
        catch (err) { }
        audioArray = theAudio.src.split(",");
        // console.log("audioIndex :: ", audioIndex, audioArray[audioIndex], _templatePath);
        theAudio.src = (audioIndex == 0) ? audioArray[audioIndex] : _templatePath + audioArray[audioIndex];
        theAudio.src = audioArray[audioIndex];
        theAudio.play();
        theCurrAudioObj = aAudioObj;
        if (aAudioObj.hasClass('audioIcon')) {
            switchAudioIcon('on', aAudioObj);
        } else {
            var fThisCss = ((aAudioObj.data('onaudioplay')) != undefined && (aAudioObj.data('onaudioplay')) != null) ? (aAudioObj.data('onaudioplay')) : 'none';
            if (fThisCss != 'none') {
                var cssArr = ((fThisCss).toString()).split('|');
                for (var css = 0; css < cssArr.length; css++) {
                    var tmpCss = cssArr[css].split(':');
                    var tstyle = aAudioObj.css(tmpCss[0]);
                    aAudioObj.data(tmpCss[0], tstyle);

                    aAudioObj.css(tmpCss[0], tmpCss[1]);
                    // -- for all the child elements -- 
                    if (aAudioObj[0].hasChildNodes()) {
                        if (_currFile == 'snapshot.html') {
                            (aAudioObj.find("span").eq(audioIndex)).each(function () {
                                var tstyle1 = $(this).css(tmpCss[0]);
                                $(this).data(tmpCss[0], tstyle1);
                                $(this).css(tmpCss[0], tmpCss[1]);
                            });
                        } else {
                            (aAudioObj.find("*")).each(function () {
                                var tstyle1 = $(this).css(tmpCss[0]);
                                $(this).data(tmpCss[0], tstyle1);
                                $(this).css(tmpCss[0], tmpCss[1]);
                            });
                        }
                    }

                }
            }
        }
        theAudio.onended = function () {
            theCurrAudioObj = null;
            // switchAudioIcon('off', aAudioObj);
            if (aAudioObj.hasClass('audioIcon')) {
                switchAudioIcon('off', aAudioObj);
            } else {
                var fThisCss = ((aAudioObj.data('onaudioplay')) != undefined && (aAudioObj.data('onaudioplay')) != null) ? (aAudioObj.data('onaudioplay')) : 'none';
                if (fThisCss != 'none') {
                    var cssArr = ((fThisCss).toString()).split('|');
                    for (var css = 0; css < cssArr.length; css++) {
                        var tmpCss = cssArr[css].split(':');
                        var tstyle = aAudioObj.data(tmpCss[0]);
                        aAudioObj.css(tmpCss[0], tstyle);
                        // -- for all the child elements -- 
                        if (aAudioObj[0].hasChildNodes()) {
                            (aAudioObj.find("*")).each(function () {
                                var tstyle1 = $(this).data(tmpCss[0]);
                                $(this).css(tmpCss[0], tstyle1);
                            });
                        }
                    }
                }
            }
            audioIndex = Number(audioIndex) + 1;
            if (audioIndex < audioArray.length) {
                playThisAudio(aAudioObj);
            } else {
                audioIndex = 0;
            }
        }
    }
}
function switchAudioIcon(val, control) {
    val = (val !== undefined) ? val : 'off';
    var toRemove = (val == 'on') ? 'off' : 'on';
    if (control) {
        if ($(control).hasClass(toRemove)) {
            $(control).removeClass(toRemove);
        }
        $(control).addClass(val);
    }
}
function stopPlaying() {
    if (theAudio != undefined && theAudio != 'none' && theAudio != null) {
        if (theAudio.isPlaying || !theAudio.paused || theAudio.currentTime > 0) {
            theAudio.pause();
            theAudio.currentTime = 0;
        }
    }
    if (theCurrAudioObj != undefined && theCurrAudioObj != null) {
        if (theCurrAudioObj.hasClass('audioIcon')) {
            switchAudioIcon('off', theCurrAudioObj);
        } else {
            var fThisCss1 = ((theCurrAudioObj.data('onaudioplay')) != undefined && (theCurrAudioObj.data('onaudioplay')) != null) ? (theCurrAudioObj.data('onaudioplay')) : 'none';
            if (fThisCss1 != 'none') {
                var cssArr1 = ((fThisCss1).toString()).split('|');
                for (var css1 = 0; css1 < cssArr1.length; css1++) {
                    var tmpCss1 = cssArr1[css1].split(':');
                    var tstyle = theCurrAudioObj.data(tmpCss1[0]);
                    theCurrAudioObj.css(tmpCss1[0], tstyle);
                    // -- for all the child elements -- 
                    if (theCurrAudioObj[0].hasChildNodes()) {
                        (theCurrAudioObj.find("*")).each(function () {
                            var tstyle1 = $(this).data(tmpCss1[0]);
                            $(this).css(tmpCss1[0], tstyle1);
                        });
                    }
                }
            }
        }
    }
}
//--------------[  // Audio ]-----------------------------------------

//--------------[ Full screen functions ] ---------------------- 
$('header').on('click', ".full_screen", function (e) {
    toggleFullscreen();
    doWindowResize();
});
document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);

function exitHandler() {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        ///fire your event
        changeFullScreenIcon('full');
    }
}
function toggleFullscreen(elem) {
    elem = elem || document.documentElement;
    if (!document.fullscreenElement && !document.mozFullScreenElement &&
        !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        changeFullScreenIcon('exit');
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        changeFullScreenIcon('full');
    }
}
function changeFullScreenIcon(aCondition) {
    if (aCondition == 'exit') {
        $('.full_screen').find('img').attr('src', _templatePath + "./images/icons/exitfullscreen.png");
    } else {
        $('.full_screen').find('img').attr('src', _templatePath + "./images/icons/fullscreen.png");
    }
}
//--------------[ // Full screen functions ] ----------------------
// written on - 10/06/2020
// updated on - 11/06/2020 
var _loadingObj = [];
var _loadingStatus = 'no';
function setLoadedStatus(val) {
    _loadingObj.push(val);
    var _currFile = getCurrFileOrDirectory('file');
    var _currDir = getCurrFileOrDirectory('directory');
    var _actIndx = -1;
    var _fileType = '';
    var _fileSubType = 'none';
    var _fileBuild = 'no';
    _loadingStatus = 'no';
   
    if (_currDir == 'views') {
        if (_currFile != 'reading.html' && _currFile != 'snapshot.html') {
            _actIndx = getIndexOfFile(_currFile, _activityData.list, "file");
            if (_actIndx != -1) {
                _fileType = ((_activityData.list)[_actIndx]).type;
                _fileBuild = ((_activityData.list)[_actIndx]).build;
                _fileSubType = (typeof ((_activityData.list)[_actIndx]).subtype != undefined && ((_activityData.list)[_actIndx]).subtype != null && ((_activityData.list)[_actIndx]).subtype != '') ? ((_activityData.list)[_actIndx]).subtype : 'none';
            }
            //console.log('_activityData >> ', _actIndx, _fileType, _fileBuild, _fileSubType);
        } else {
            _fileType = (_currFile == 'reading.html') ? 'reading' : 'snapshot';
        }
    }
    console.log('Load - Status > ', val, _loadingObj, _currFile, _fileType, _fileBuild);
    if (val == 'templateMedia') {
        // loading step - 2 ( build titletext, header, footer, body from the _data)        
        buildCoreFrame(_data);
    } else if (val == 'coreFrame') {
        // loading step - 3 ( load assets required for the page )             
        loadThisObject('pageMedia', _mediaList);
    } else if (val == 'pageMedia') {
        // loading step - 4 ( build the page )  
        if (_currFile == 'index.html') {
            // _loadingStatus = 'loaded';
            // doWindowResize();
            if (typeof welcome_data != undefined && welcome_data != null && typeof welcome_data != undefined && welcome_data != null) {
                buildWelcomeContent(welcome_data);
            }
        } else if (_currFile == 'snapshot.html') {
            if (typeof snapshot_data != undefined && snapshot_data != null && typeof snapshotPopup_data != undefined && snapshotPopup_data != null) {
                buildSnapShotContent(snapshot_data, snapshotPopup_data);
            }
        } else if (_currFile == 'reading.html') {
            if (typeof reading_data != undefined && reading_data != null) {
                buildReadingHTML(reading_data);
            }
        } else {

            if (_fileType != '' && _fileBuild != '') {
                if (_fileBuild == 'yes') {
                    switch (_fileType) {
                        case 'fillin':
                            if (_fileSubType == 'none') {
                                if (typeof fillin_data != undefined && fillin_data != null) {
                                    buildFillInBody(fillin_data);
                                }
                            } else {
                                if (_fileSubType == 'order') {
                                    if (typeof fillin_order_data != undefined && fillin_order_data != null) {
                                        buildFillInOrderBody(fillin_order_data);
                                    }
                                }
                            }
                            break;
                        case 'mcq':
                            if (_fileSubType == 'none') {
                                if (typeof mcq_data != undefined && mcq_data != null) {
                                    buildMcqBody(mcq_data);
                                }
                            } else {
                                if (_fileSubType == 'tick') {
                                    if (typeof mcq_tick_data != undefined && mcq_tick_data != null) {
                                        buildMcqTickBody(mcq_tick_data);
                                    }
                                }
                            }
                            break;
                        case 'wordpuzzle':
                            if (typeof wordpuzzle_data != undefined && wordpuzzle_data != null) {
                                buildWordPuzzleBody(wordpuzzle_data);
                            }
                            break;
                        case 'wordsearch':
                            if (typeof wordsearch_data != undefined && wordsearch_data != null) {
                                buildWordSearchBody(wordsearch_data);
                            }
                            break;
                        case 'linedraw':
                            if (typeof linedraw_data != undefined && linedraw_data != null) {
                                buildLineDrawBody(linedraw_data);
                            }
                            break;
                            case 'dragdrop':
                            if (typeof dragdrop_data != undefined && dragdrop_data != null) {
                               buildDragDropBody(dragdrop_data);
                            }
                            break;
                        case 'letterpath':
                            if (typeof letterpath_data != undefined && letterpath_data != null) {
                                buildLetterPathBody(letterpath_data);
                            }
                            break;
                    }
                } else {
                    // console.log('no build');
                    setLoadedStatus(_currFile);
                }
            }
        }

        

    } else if (val == _currFile) {
        if (_currFile == 'index.html' || _currFile == 'snapshot.html') {
            _loadingStatus = 'loaded';
            doWindowResize();
        } else {
            if (_fileType != '') {
                switch (_fileType) {
                    case 'reading':
                        callReadingFunctions();
                        break;
                    case 'fillin':
                    case 'mcq':
                    case 'wordpuzzle':
                    case 'wordsearch':
                    case 'linedraw':
                    case 'dragndrop':
                    case 'dragdrop':
                    case 'coloring':
                        callActivityFunctions(_activityData, _actIndx, _fileType, _fileSubType);
                        break;
                    default:
                        callActivityFunctions(_activityData, _actIndx, _fileType, _fileSubType);
                        //setLoadedStatus(getCurrFileOrDirectory('file')+'_functions');
                        break;
                }
            }
        }
    } else if (val == _currFile + '_functions') {
        _loadingStatus = 'loaded';
        doWindowResize();
        // $('.loading').hide();
    }
}

/*function collectAllAssets(aData, aArr){
    console.log(aData, aArr);
    if(aData != null){
        $.each(aData, function(key, value) 
        {
        console.log(key, ' >> ',  value, ' >> ', typeof(value));
        });
    }
}*/
function getIndexOfFile(aVal, aArr, aKey) {
    var theIndx = -1;
    if (typeof aVal != undefined && typeof aArr != undefined && typeof aKey != undefined) {
        if (aVal != null && aArr != null && aKey != null) {
            if (aArr.length > 0) {
                for (var a = 0; a < aArr.length; a++) {
                    var tObj = aArr[a];
                    $.each(tObj, function (key, value) {
                        if (key == aKey) {
                            if (value.toLowerCase() == aVal.toLowerCase()) {
                                theIndx = a;
                            }
                        }
                    });
                }
            }
        }
    }
    return theIndx;
}
$('#txt_num').on('input', function (event) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
//-------------------------- // written on - 10/06/2020
$(function () {
    // var $ =jQuery.noConflict();    
    $('.loading').show();
    // written on - 10/06/2020
    // loading step - 1 (load assets required for core Template )  
    loadThisObject('templateMedia', _templateMediaList);

    doWindowResize();
});
$(window).on('load', function () {
    doWindowResize();
});
$(window).on('resize', function () {
    doWindowResize();
});
$(window).on("orientationchange", function (event) {
    var $cw = $('.content_wrap');
    if ($cw.hasClass('activity_wrap')) {
        $('.act_ctrls').addClass('d-none');
    }
    //$('.activity_area').data('type') == 'linedraw' || 
   /* if ($('.activity_area').data('type') == 'dragndrop') {
        $('.loading').show();
        alert("Changing orientation or resizing the screen will reset the activity!");
        theActivity.reset();
        location.reload(true);
    }*/
});
function doWindowResize() {
    $('[data-toggle="tooltip"]').tooltip();    
    win = $(this);
    var contentHeight = 0;
    var $cw = $('.content_wrap');
    if ($cw.hasClass('activity_wrap')) {
        $('.act_ctrls').addClass('d-none');
    }

    var subFooterHeight = $('.sub_footer').outerHeight() || 0;
    maskWidth = $('.container').css('margin-left');
    containerWidth = parseInt($('.container').css('width'));
    //console.log('win >> ', win.height(), win.width(), $('header').height(), $('footer').height());
    // console.log('inner >> ', contentHeight, win.innerHeight(), win.innerWidth(), $('header').innerHeight(), $('footer').innerHeight());

    contentHeight = win.innerHeight() - ($('header').innerHeight() + ($('footer').innerHeight() - 20));
    // ------------ welcome page --------------
    $('.wordsList_wrap').css('max-height', (contentHeight / 2) + 'px');
    $('.read_highlights_wrap').css('bottom', ($('footer').innerHeight() - 20) + 'px');
    // ------------ reading page --------------
    if (win.innerWidth() <= 768) {
        $('.img_box').css('height', '100%');
    } else {
        $('.img_box').css('height', contentHeight + 'px');
    }
    $('.cont_ht').css('height', contentHeight + 'px');


    // ------------ activities page --------------

    // console.log('checking here > ',($('.cont_ht_sf').height() >= $('.all_cont').height()), $('.cont_ht_sf').height(), $('.all_cont').height());

    // ------------ general --------------
    $('.content_wrap').css('height', contentHeight + 'px');
    $('.content_wrap').css('margin-top', $('header').height() + 'px');
    // content_wrap_act = content_wrap - subFooterHeight
    // 
    if ($cw.hasClass('activity_wrap') || $cw.hasClass('reading_container')) {
        $('.content_wrap').css('height', (contentHeight - subFooterHeight) + 'px');
        if ($('.act_head_group') != undefined) {
            var actHeaderHeight = ($('.act_head_group').height());
            var actHeadermargin = 0;
            if (parseInt($('.act_head_group').css('margin-top'))) {
                actHeadermargin = parseInt($('.act_head_group').css('margin-top'));
            }
            $('.cont_ht_sf').css('height', (contentHeight - subFooterHeight - actHeaderHeight - actHeadermargin - 30) + 'px');
        }
        /*if ($cw.hasClass('activity_wrap')) {
            if ($('.activity_area').data('type') == 'linedraw') {
                theActivity.calculateOffset();
            }
        }*/
    }
    // console.log('doWindowResize called> ----- ', $('.activity_area').data('type'), _loadingStatus); 
    //----------
    /*$('.all_cont').removeClass('ht_fit');
    $('.all_cont').removeClass('ht_100');
    $('.all_cont').removeClass('align-items-center');*/
    if (!_alignInterval) {
        if ($cw.hasClass('activity_wrap')) {
            if (($('.activity_area').data('type') != undefined) && (_loadingStatus == 'loaded')) {
                _alignInterval = setInterval(alignStage, 100);
            }
        } else {
            if (_loadingStatus == 'loaded') {
                _alignInterval = setInterval(alignStage, 100);
            }
        }

    }

    //-------------
  if (isMobile()) {
    maskWidth = "0px";
  }
 
  if ($(".mask_parent").length > 0) {
    var maskWidthNumber = parseFloat(maskWidth) || 0;
 
    $(".rotator").css({
      right: maskWidthNumber - 15 + "px",
    });
  }
}
function alignStage() {
    clearInterval(_alignInterval);
    _alignInterval = null;
    while (_alignInterval !== null) {
        _alignInterval = null;
    }

    $('.all_cont').removeClass('ht_fit');
    $('.all_cont').removeClass('ht_100');
    $('.all_cont').removeClass('align-items-center');

    var $cw = $('.content_wrap');

    var screenContentHeight = 0;
    // console.log('cont - width : ', containerWidth, $('footer').find('.big_nav').length);
    if($('footer').find('.big_nav').length == 4){
        if(containerWidth <= 400){
            $('footer').find('.emt_space').removeClass('btnWidth');
            $('footer').find('.emt_space').addClass('noWidth');
        }else{
            $('footer').find('.emt_space').removeClass('noWidth');
            $('footer').find('.emt_space').addClass('btnWidth');
        }
    }
    
    
    if ($cw.hasClass('snapshot_container')) {
        screenContentHeight = $('.snapshot_container').height();
    } else {
        screenContentHeight = $('.cont_ht_sf').height();
    }
    
    if (screenContentHeight > $('.all_cont').height()) {
        if ($('.all_cont').hasClass('ht_fit')) {
            $('.all_cont').removeClass('ht_fit');
        }
        $('.all_cont').addClass('ht_100');
        $('.all_cont').addClass('align-items-center');

    } else if (screenContentHeight == $('.all_cont').height()) {
        // $('.all_cont').css('margin-top', '10vh');       
    } else {
        if ($('.all_cont').hasClass('ht_100')) {
            $('.all_cont').removeClass('ht_100');
            $('.all_cont').removeClass('align-items-center');
        }
        $('.all_cont').addClass('ht_fit');
    }
    $('.all_cont').addClass('d-flex');

    if (isMobile()) {
        $('.screen_numbers_wrap').css('top', 0);
        $('.screen_numbers_wrap').css('right', 0);
        $('.screen_numbers_wrap').css('z-index', 1035);
        $('header').find('.full_screen').addClass('hideInSmall');
    } else {
        $('.screen_numbers_wrap').css('right', maskWidth);
        $('.screen_numbers_wrap').css('top', ($('header').height() - 15) + 'px');
        $('.screen_numbers_wrap').css('z-index', 10);
        $('header').find('.full_screen').removeClass('hideInSmall');
    }
    if ($cw.hasClass('activity_wrap')) {
        if (theActivity != null) {
            if (theActivity.orientationAdjust == 'yes') {
                theActivity.screenPoseAdjustments();
            }
        }
    }
//--------------
// console.log($('header').find(".unitTitleText").prop('scrollWidth'), $('header').find(".unitTitleText").outerWidth(), $(".unitTitleText").data());
if (isMobile()){ 
    $("[rel='tooltip']").tooltip();
}else{
    if ($('header').find(".unitTitleText").prop('scrollWidth') > ($('header').find(".unitTitleText").outerWidth()+3) ) { 
        $("[rel='tooltip']").tooltip();
    }else{      
        $("[rel='tooltip']").tooltip('dispose');
    }
}
//------------
    window.scrollTo(0, 0);
    $('.content_wrap').scrollTop = 0;
    if ($('.mask_parent').length == 0) {
        alert(' *** MASK MISSING *** ');
    }
    $('.loading').hide();
}




