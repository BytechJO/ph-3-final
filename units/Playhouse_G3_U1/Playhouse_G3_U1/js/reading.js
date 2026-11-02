
var audioControl = {};
var audioControlsObjAdded = false;
var _readingInterval;
function callReadingFunctions() {
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
}
function checkReadingLoaded() {
    clearInterval(_readingInterval);
    setLoadedStatus('reading.html_functions');
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