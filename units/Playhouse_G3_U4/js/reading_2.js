var audioControl = {};
var audioControlsObjAdded = false;
var _readingInterval;
function callReadingFunctions(_activityData, _actIndx) {
    // var $ =jQuery.noConflict();
    var numSlides = $('.slides').find("div[class^='slide']").length;
    console.log("numslides" + numSlides);
    var currentSlide = 1;
    $('.slide').hide();
    $('.slide').eq(currentSlide - 1).show();
    console.log("numSlides", numSlides, currentSlide);
    /*start page numbering*/
    $(".curSlideNum").text(currentSlide);
    $(".totalSlideNum").text(numSlides);
    /*end page numbering*/
    checkPageStatus();
    var readingData = {};

    $('.nextNav').click(function () {
        stopPlaying();
        resetAllReadingAudio();
        if (currentSlide < numSlides) {
            currentSlide++;
            /*start page numbering*/
            $(".curSlideNum").text(currentSlide);
            $(".totalSlideNum").text(numSlides);
            /*end page numbering*/
            $('.slide').hide();
            $('.slide').eq(currentSlide - 1).show();
            checkPageStatus();
        }
    });
    $('.backNav').click(function () {
        stopPlaying();
        resetAllReadingAudio();
        if (currentSlide > 0) {
            currentSlide--;
            /*start page numbering*/
            $(".curSlideNum").text(currentSlide);
            $(".totalSlideNum").text(numSlides);
            /*end page numbering*/
            $('.slide').hide();
            $('.slide').eq(currentSlide - 1).show();
            checkPageStatus();
        }
    });
    function checkPageStatus() {
        setReadingSlideNumber(currentSlide);
        if (currentSlide > 1) {
            $('.backNav').removeClass('disabled');
        } else {
            $('.backNav').addClass('disabled');
        }
        if (currentSlide < numSlides) {
            $('.nextNav').removeClass('disabled');
        } else {
            $('.nextNav').addClass('disabled');
        }
        doWindowResize();
        setTheLayout(currentSlide);
    }
    function setTheLayout(num) {

        var thsSlide = $('.slide_' + num);
        var txtGrp = thsSlide.find('.text_grp');
        txtGrp.removeClass('small_txt');
        txtGrp.removeClass('tall_txt');
        var txtHt = thsSlide.find('.text_cont').outerHeight();
        var containHt = $('.reading_container').height();
        var imgBox = thsSlide.find('.read_img_box');

        var txtGrpHt = txtGrp.outerHeight();
        var contentHt = txtGrp.find('.content').outerHeight();
        console.log('the heights >> ', containHt, txtHt, txtGrpHt, contentHt);
        /* if(txtHt < 165){
             var theHt = containHt- txtHt;
             thsSlide.find('.read_img_box').css('height', (theHt-10)+'px') ;
         }else{*/
        if (txtGrpHt < txtHt) {
            txtGrp.addClass('small_txt');
        } else {
            txtGrp.addClass('tall_txt');
        }
        var imgSrc = imgBox.data('imgsrc');
        console.log(' ---  ht max --- ', imgSrc);
        //  $('header').css('background-image', 'url("' + _templatePath + aObj.bgimage + '")');
        imgBox.css('background-image', 'url("' + imgSrc + '")');
        imgBox.css('background-repeat', "no-repeat");
        imgBox.css('background-position', "center center");
        //  }

    }
    /*start page numbering*/
    $('#gotoBtn').click(function () {
        stopPlaying();
        resetAllReadingAudio();
        var enterNum = $("#txt_num").val();
        if (parseInt(enterNum) <= numSlides) {
            currentSlide = parseInt(enterNum);
            $(".curSlideNum").text(currentSlide);
            $(".totalSlideNum").text(numSlides);
            checkPageStatus();
            $('.slide').hide();
            $('.slide').eq(currentSlide - 1).show();
            $("#txt_num").val("");

        }
    });
    /*end page numbering*/
    function getAudioData() {
        if (reading_data != undefined && reading_data != null) {
            readingData = reading_data;
            var firstObj = (readingData.slides)[0];
            if (firstObj != undefined && firstObj != null) {
                if (firstObj.startTime != undefined && firstObj.endTime != null) {
                    if (parseInt(firstObj.startTime) >= 0) {
                        audioControl = new AudioControls(firstObj.audio);
                        audioControlsObjAdded = true;
                    }
                }
            }
        }


    }
    getAudioData();
    // -------------------- [ audio icon control ]----------------


    $('.reading_container').find(".audioIcon").click(function () {
        console.log('clicked this');
        // debugger
        if (readingData != undefined && readingData != null) {
            var theObjNum = parseInt($(this).data('slidenum'))
            if (theObjNum > 0) {
                startTime = Number((readingData.slides)[theObjNum - 1].startTime);
                endTime = Number((readingData.slides)[theObjNum - 1].endTime);
                if (startTime >= 0 && endTime >= 0) {
                    stopPlaying();
                    resetAllReadingAudio();
                    audioControl.playAudio($(this), startTime, endTime);
                } else {
                    playThisAudio($(this));
                }

            }
        }
    });
    _readingInterval = setInterval(checkReadingLoaded, 200);
    // -------------------- [ audio icon control ]----------------   
    
    // debugger
    setNavigationFiles(_actIndx, _activityData)
}

function setNavigationFiles(aIndx, aObj) {
    // debugger
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

function checkReadingLoaded() {
    clearInterval(_readingInterval);
    setLoadedStatus(getCurrFileOrDirectory('file') + '_functions');
}
function resetAllReadingAudio() {
    // if(_loadObj.functions){
    $('.reading_container').find(".audioIcon").each(function () {
        $(this).removeClass('on').addClass('off');
        if (audioControlsObjAdded) {
            audioControl.resetAudio('off', $(this));
        }
    });
    // }
}
function tryThis() {
    console.log('tryThis is called > ', _loadObj);
}