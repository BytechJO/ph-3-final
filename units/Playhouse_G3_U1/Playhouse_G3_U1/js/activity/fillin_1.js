$(function() { 
    console.log('fill in js added');

    $('.icon_wrap').hide();
//--------------[fill in ] ----------------------
var $contentFooter = $(".content_footer");
var activity = $('.content_wrap');  
var currentQObj =  {};
function initActivity(){

    console.log('getAActivityTypeinitActivity >> ', $('.activity_area').data('activity'));
    if($('.activity_area').data('activity') == 'fillin'){
        currentQObj = {};
        currentQObj.qType = $('.activity_area').data('activity');
        resetFillIn();
    }

   
    // showFeedback(false);
    
}
$('.checkBtn').click(function(){       
    validatefillIn();
});

$('.resetBtn').click(function(){       
    resetFillIn();
});
function validatefillIn(){
    var options = (currentQObj.quePart).find('.options');
    var numOfFillIns = options.find('.que').length; 
    // console.log(options.find('.que').length)      ;
    var allCorrect = false;
    var resultArr = [];  
    // var _indx=0;
    options.find('.que').each(function(){ 
        var _indx = parseInt(($(this).attr('class').split(' ')[1]).split('_')[1]) -1 ; 
        var iconWrap = $(this).find('.icon_wrap'); 
        iconWrap.find(".tick").hide();
        iconWrap.find(".cross").hide();
        var _case = ($(this).data('strictcase') != undefined && $(this).data('strictcase')!=null )? $(this).data('strictcase').toLowerCase():'no';
        
        
        var _cAns = getStrArray($(this).data('answer'), 'activity');
        var _uAns = [];
        var _corr = 0;
        var _wrong = 0;            
        if($(this).find('input').length > 0){
            var fCt = 0;
            for(var ua=0;ua<$(this).find('input').length;ua++){
                var _tInput = $(this).find('input').eq(ua);                    
                if ((_tInput.attr('readonly') || _tInput.attr('disabled'))== undefined){
                    if(_tInput.val().length > 0){
                        _uAns[fCt]=  (_case == 'yes')? _tInput.val():_tInput.val().toLowerCase();
                    }else{
                        _uAns[fCt]= ' ';    
                    }
                    fCt++;
                }
            }
        }            
        if(_cAns.length == _uAns.length){
            for(var cc=0;cc<_cAns.length;cc++){
                _cAns[cc] = (_case == 'yes')? _cAns[cc]: _cAns[cc].toLowerCase();                    
               if( _cAns[cc].indexOf("#")>-1){
                _cAns[cc] = (_cAns[cc]).replace(/\#/g, ',');
               }
               _cAns[cc] = (_cAns[cc]).replace(/\s/g, '');
               _uAns[cc] = (_uAns[cc]).replace(/\s/g, '');
                if(_cAns[cc] == _uAns[cc]){
                    _corr++;
                    $(this).find('input').eq(cc).css('color','green');     
                }else{
                    _wrong++; 
                    $(this).find('input').eq(cc).css('color','red');   
                }
            } 
        }
        if(_corr == _uAns.length && _wrong == 0){
            resultArr[_indx] = 1;
            // iconWrap.append('<div class="tick"></div>');
            iconWrap.find('.tick').show();
        }else{
            resultArr[_indx] = 0;
            // iconWrap.append('<div class="cross"></div>');
            iconWrap.find('.cross').show();
        }   
        // console.log(_indx, resultArr[_indx]) ;   
        _indx++;  
    });
    
    allCorrect = (((resultArr.join('').split('0'))[0]).length == numOfFillIns); 
    
    //--- audio functions // ----------
    if(currentQObj.audioQue == 'yes'){
        enableAudioIcons(resultArr);
    }  
    //--- /audio functions // ----------
    showFeedback(true,allCorrect);
    // console.log(resultArr, allCorrect);
    if(allCorrect){
        $(".resetBtn").addClass( "disabled" );
    }
} 
function enableAudioIcons(aArr){
    var options = (currentQObj.quePart).find('.options');
    if(aArr.length > 0){
        options.find('.que').each(function(){ 
            // var _findx = $(this).index();    
            var _findx = parseInt(($(this).attr('class').split(' ')[1]).split('_')[1]) -1 ;               
            var _fIcon;            
            if(aArr[_findx] == 1){                    
                $(this).find('.audioIcon').removeClass('disabled');
            }                
        });
    }
}
$('.txtBox').find('input').on('input', function(){    
    var v = this.value;  
    $(this).css('color','black');
    // var _typ = ($(this).parent().data('type') != undefined)? $(this).parent().data('type'):'number';
    var _typ =  'text';
    if(_typ == 'number'){            
        if($.isNumeric(v) === false) {               
            this.value = this.value.slice(0,-1);            
        }else{
            $contentFooter.find(".resetBtn").removeClass( "disabled" );
            $contentFooter.find(".checkBtn").removeClass( "disabled" ); 
        }
    }else if(_typ == 'text'){
        if(this.value.length > 0) {
            $('.sub_footer').find(".resetBtn").removeClass( "disabled" );
            $('.sub_footer').find(".checkBtn").removeClass( "disabled" ); 
            console.log(this.value,' -- ', this.value.length);
        }
    }
    if(currentQObj.qType == 'fill_in'){
        $(this).parent().parent().find('.tick').hide(); 
        $(this).parent().parent().find('.cross').hide(); 
    } 
});
function resetFillIn(){
    var actArea =  $('.activity_area');   
    
    actArea.find('.que').each(function(){             
        $(this).find('input').css('color','black');
        if($(this).find('input').length > 0){
            for(var ua=0;ua<$(this).find('input').length;ua++){
                var _txtBx = $(this).find('input').eq(ua); 
                if ((_txtBx.attr('readonly') || _txtBx.attr('disabled'))== undefined){
                    _txtBx.val('');
                }

            }
        }
        $(this).find('.tick').hide(); 
        $(this).find('.cross').hide();             
        if(currentQObj.audioQue == 'yes'){
            $(this).find('.audioIcon').show();
            $(this).find('.audioIcon').addClass('disabled');
        }else{
            $(this).find('.audioIcon').hide();
        }
    });
    $contentFooter.find(".resetBtn").addClass( "disabled" );
    $contentFooter.find(".checkBtn").addClass( "disabled" ); 
    // console.log('reset > ',  $contentFooter.find(".resetBtn"))
}

initActivity();
//--------------[  general ] ----------------------
function getStrArray(str, pos){
    var arr = [];
    var arrIndx = 0;
    if(str != null){
        str = ((str).toString()).split(',');
        if(currentQObj.qType == 'drop_down' && pos == 'activity'){
           arr[arrIndx]=' - select -'; 
           arrIndx++;
        }            
        for(var i=0;i<str.length;i++){
            arr[arrIndx]= $.trim(str[i]);
            arrIndx++;
        }
    }         
    return arr;
}
// window.showFeedback = function(aBool, aCorrect){
function showFeedback(aBool, aCorrect){
    $('.goodJob').hide();
    $('.tryAgain').hide();
    if(aBool){
        $('.feedback').css('display', 'grid');
        (aCorrect)?$('.goodJob').show():$('.tryAgain').show();
        if(aCorrect){
            $('#video_1').trigger('play');
        }else{
            $('#video_2').trigger('play');
        }            
    }else{
        $('.feedback').css('display', 'none');
    }
    // console.log('showFeedback > ', aBool);
}
$('.closePop').click(function(){
    $('#video_1').trigger('pause');
    $('#video_2').trigger('pause');
    $('#video_1')[0].currentTime = 0;
    $('#video_2')[0].currentTime = 0;        
    showFeedback(false); 
});  
//--------------[  Audio ] ----------------------
var theAudio = new Audio(); 
var theCurrAudioObj = null;
$('.audioIcon').click(function(){        
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
function switchAudioIcon(val, control){ 
    if(currentQObj !=undefined && currentQObj!=null){
        var options = (currentQObj.quePart).children('.options');
        if(currentQObj.audioQue == 'yes'){
            options.find('.que').each(function(){ 
                $(this).find('.audioIcon').removeClass('on').addClass('off');
            });
        }
    }        
    val = (val !== undefined)? val: 'off';
    var toRemove = (val == 'on') ? 'off':'on';
    if(control)
    {            
        if($(control).hasClass(toRemove)){
            $(control).removeClass(toRemove);
        }
        $(control).addClass(val);
    }
}
function stopPlaying(){
    if(theAudio!= undefined && theAudio!= 'none' && theAudio!=null){
        if(theAudio.isPlaying || !theAudio.paused || theAudio.currentTime>0){
            theAudio.pause();
            theAudio.currentTime = 0;          
        }
    }
   
    if(theCurrAudioObj!= undefined && theCurrAudioObj!=null){            
        if(theCurrAudioObj.hasClass('audioIcon')){
            switchAudioIcon('off', theCurrAudioObj);
        }else{
            var fThisCss1 = ((theCurrAudioObj.data('onaudioplay')) != undefined &&  (theCurrAudioObj.data('onaudioplay')) != null)? (theCurrAudioObj.data('onaudioplay')) : 'none';
            if(fThisCss1 != 'none'){
                var cssArr1 = ((fThisCss1).toString()).split('|');                    
                for(var css1=0;css1<cssArr1.length;css1++){
                    var tmpCss1 = cssArr1[css1].split(':');
                    var tstyle = theCurrAudioObj.data(tmpCss1[0]);
                    theCurrAudioObj.css(tmpCss1[0], tstyle);    
                    // -- for all the child elements -- 
                    if(theCurrAudioObj[0].hasChildNodes()){
                        (theCurrAudioObj.find("*")).each(function(){
                            var tstyle1 = $(this).data(tmpCss1[0]);                            
                            $(this).css(tmpCss1[0], tstyle1);
                        });                                
                    }                
                }
            }
        }
    }
}
function playThisAudio1(aAudioObj){
    if(theAudio!= undefined && theAudio!= 'none' && theAudio!=null){
        if(theAudio.isPlaying && !theAudio.paused){
            theAudio.pause();
            theAudio.currentTime = 0;          
        }
    }
    if(theCurrAudioObj!= undefined && theCurrAudioObj!=null){
        
        var fThisCss1 = ((theCurrAudioObj.data('onaudioplay')) != undefined &&  (theCurrAudioObj.data('onaudioplay')) != null)? (theCurrAudioObj.data('onaudioplay')) : 'none';
        if(fThisCss1 != 'none'){
            var cssArr1 = ((fThisCss1).toString()).split('|');
            for(var css1=0;css1<cssArr1.length;css1++){
                var tmpCss1 = cssArr1[css1].split(':');
                theCurrAudioObj.css(tmpCss1[0], 'inherit');                       
            }
        }
    }
    // _fIcon = $(this);        
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
                    
                    aAudioObj.css(tmpCss[0], tmpCss[1]);                       
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
                       
                        aAudioObj.css(tmpCss[0], 'inherit');                       
                    }
                }
            }           
        }
    }

}  


});