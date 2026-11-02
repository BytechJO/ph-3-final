function callsnapshotfunctions(_activityData, _actIndx) {
	
	
	setTimeout(function(){
    var numSlides = $('.slides').find("div[class^='slide']").length;
	console.log("numslides" + numSlides);
    var currentSlide = 1;
    $('.slide').hide();
    $('.slide').eq(currentSlide - 1).show();
    console.log("numSlides", numSlides, currentSlide);
    checkSlideForAudio();
    checkPageStatus();

    $('.nextNav').click(function () {
        if (currentSlide < numSlides) {
            currentSlide++;
            $('.slide').hide();
            $('.slide').eq(currentSlide - 1).show();
            checkSlideForAudio();
            checkPageStatus();
            //----------- audio controls-----------
            // try {
            //     if (typeof window.parent.stopHeaderAudio != 'undefined') {
            //         window.parent.stopHeaderAudio();
            //     }
            // }
            // catch (err) { }
            // $('.audioIcon').removeClass('on').addClass('off');
            // audioControl.resetAudio('off', $('.audioIcon'));
            //----------- /audio controls-----------
        }
    });
    $('.backNav').click(function () {
        if (currentSlide > 0) {
            currentSlide--;
            $('.slide').hide();
            $('.slide').eq(currentSlide - 1).show();
            checkSlideForAudio();
            checkPageStatus();
            //----------- audio controls-----------
            // try {
            //     if (typeof window.parent.stopHeaderAudio != 'undefined') {
            //         window.parent.stopHeaderAudio();
            //     }
            // }
            // catch (err) { }
            // $('.audioIcon').removeClass('on').addClass('off');
            // audioControl.resetAudio('off', $('.audioIcon'))
            //----------- /audio controls-----------
        }
    });
    function checkPageStatus() {
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
    }
    // -------------------- [ audio icon control ]----------------
    // window.stopPageAudio = function () {
    //     audioControl.resetAudio($(".audioIcon"));
    // }
    function checkSlideForAudio() {
        // try {
        //     if (typeof window.parent.isReadingSlide != 'undefined') {
        //         window.parent.isReadingSlide(currentSlide);
        //     }
        // }
        // catch (err) { }
    }
    // $(".audioIcon").click(function () {
    //     startTime = $(this).data('starttime');
    //     endTime = $(this).data('endtime');
    //     // audioControl.playAudio($(this), startTime, endTime);
    // });

    // -------------------- [ audio icon control ]----------------
    $('.snap_card').click(function(){        
        playThisAudio($(this));
    });
    function playThisAudio(aAudioObj){
        stopPlaying();               
        theAudio.src = ((aAudioObj.data('audio')) != undefined &&  (aAudioObj.data('audio')) != null)? (aAudioObj.data('audio')) : 'none';                    
        if(theAudio.src!='none'){
            try {
                if(typeof window.parent.stopHeaderAudio != 'undefined'){
                    window.parent.stopHeaderAudio(); 
                }
            }
            catch(err) { }
            theAudio.play();
            theCurrAudioObj = aAudioObj;
            if(aAudioObj.hasClass('audioIcon')){
                switchAudioIcon('on', aAudioObj);
            }else{
                var fThisCss = ((aAudioObj.data('onaudioplay')) != undefined &&  (aAudioObj.data('onaudioplay')) != null)? (aAudioObj.data('onaudioplay')) : 'none';
                if(fThisCss != 'none'){
                    var cssArr = ((fThisCss).toString()).split('|');
                    for(var css=0;css<cssArr.length;css++){
                        var tmpCss = cssArr[css].split(':'); 
                        var tstyle = aAudioObj.css(tmpCss[0]);
                        aAudioObj.data(tmpCss[0], tstyle);   
                        
                        aAudioObj.css(tmpCss[0], tmpCss[1]);   
                        // -- for all the child elements -- 
                        if(aAudioObj[0].hasChildNodes()){
                            (aAudioObj.find("*")).each(function(){
                                var tstyle1 = $(this).css(tmpCss[0]);
                                $(this).data(tmpCss[0], tstyle1);
                                $(this).css(tmpCss[0], tmpCss[1]);
                            });
                        }
                        
                    }
                }
            }           
            theAudio.onended = function(){
                theCurrAudioObj = null;         
                // switchAudioIcon('off', aAudioObj);
                if(aAudioObj.hasClass('audioIcon')){
                    switchAudioIcon('off', aAudioObj);
                }else{
                    var fThisCss = ((aAudioObj.data('onaudioplay')) != undefined &&  (aAudioObj.data('onaudioplay')) != null)? (aAudioObj.data('onaudioplay')) : 'none';
                    if(fThisCss != 'none'){
                        var cssArr = ((fThisCss).toString()).split('|');
                        for(var css=0;css<cssArr.length;css++){
                            var tmpCss = cssArr[css].split(':');
                            var tstyle = aAudioObj.data(tmpCss[0]);
                            aAudioObj.css(tmpCss[0], tstyle);    
                            // -- for all the child elements -- 
                            if(aAudioObj[0].hasChildNodes()){
                                (aAudioObj.find("*")).each(function(){
                                    var tstyle1 = $(this).data(tmpCss[0]);
                                    $(this).css(tmpCss[0], tstyle1);
                                });                                
                            }                
                        }
                    }
                }           
            }
        }
    }

    setNavigationFiles(_actIndx, _activityData)

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

},1000);
}
// .call(this));