$(function() {  
    //--------------[ Full screen functions ] ---------------------- 
    $('[data-toggle="tooltip"]').tooltip();  
    $('header').on('click', ".full_screen", function(e) {       
        toggleFullscreen();
    });
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
    function changeFullScreenIcon(aCondition){
        if(aCondition == 'exit'){
            $('.full_screen').find('img').attr('src', "./images/exitfullscreen.png");
        }else{
            $('.full_screen').find('img').attr('src', "./images/fullscreen.png"); 
        }
    }
//--------------[ // Full screen functions ] ----------------------
doWindowResize();
});
$(window).on('load', function(){       
    doWindowResize();
});
$(window).on('resize', function(){    
    doWindowResize();
});

function doWindowResize(){
    var win = $(this);    
    //console.log('win >> ', win.height(), win.width(), $('header').height(), $('footer').height());
    var contentHeight = 0; 
    //console.log('inner >> ', contentHeight, win.innerHeight(), win.innerWidth(), $('header').innerHeight(), $('footer').innerHeight());
    contentHeight = win.innerHeight() -($('header').innerHeight()+$('footer').innerHeight());
    $('.content_wrap').css('height', contentHeight+'px');
    $('.content_wrap').css('margin-top', $('header').height()+'px');
    
    if(win.innerWidth()<=768){
        $('.img_box').css('height', '100%');
    }else{
        $('.img_box').css('height', contentHeight+'px');
    }
    

    $('.wordsList_wrap').css('max-height',(contentHeight/2)+'px')
    window.scrollTo(0,0); 
    $('.content_wrap').scrollTop = 0;

}

