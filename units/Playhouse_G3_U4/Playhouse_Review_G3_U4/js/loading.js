
var _media = {};
_media.audioLoaded = false;
_media.imageLoaded = false;
_media.videoLoaded = false;
_media.imgLoadCount = 0;
_media.tracksLoadArr = [];
_media.videotracksLoadArr = []; 

function loadAllImages(aPg,aImgs){        
    if(aImgs.length > 0){
        aImgs.forEach(function(src) {
            var $this = $(this);
            var im = document.createElement("img");            
            im.src = (aPg != 'pageMedia')?(_templatePath+src):src;
            im.onload = function () {
                var theImage = $this;
                // $this.hide("slow");                    
                theImage[0].src = im.src;
                $this.show('fast');                    
                _media.imgLoadCount++                           
                var _chk =  (_media.imgLoadCount == aImgs.length);
                if(_chk){ 
                    _media.imageLoaded = true; 
                }
            };
        });
    }else{       
        _media.imageLoaded = true; 
    }
} 
function loadAllAudios(aPg,aAudio){
    if(aAudio.length > 0){
        aAudio.forEach(function(src) {
            var audio = document.createElement("audio");                
           // audio.oncanplay = function() {
            audio.addEventListener('loadedmetadata',function() {
                (_media.tracksLoadArr).push(this);
                var _chk = ((_media.tracksLoadArr).length == aAudio.length);
                if (_chk) {
                    _media.audioLoaded = true;
                }
            });
            
            audio.src = (aPg != 'pageMedia')?(_templatePath+src):src;
        });
    } else {
        _media.audioLoaded = true;
    }      
}
function loadAllVideos(aPg, aVideo){
    if(aVideo.length > 0){
        aVideo.forEach(function(src) {
            var video = document.createElement("video");                
            //video.oncanplay = function() {
            video.addEventListener('loadedmetadata',function() {
                // videoLoaded.push(this);  
                (_media.videotracksLoadArr).push(this);
                var _chk =  ((_media.videotracksLoadArr).length == aVideo.length);
                if (_chk) {                 
                    _media.videoLoaded = true; 
                }
            });
            video.src = (aPg != 'pageMedia')? (_templatePath+src):src;
        });
    }else{
        _media.videoLoaded = true;
    }
}
function checkAllLoaded(){  
    _loadCount++;    
    // console.log(_loadCount, 'loading > ',_media.audioLoaded, _media.imageLoaded,_media.videoLoaded);    
    if(_media.audioLoaded && _media.imageLoaded &&_media.videoLoaded){      
      clearInterval(_interval);
      setLoadedStatus(_loadingNow);
    }else{
        if(_loadCount >= 20){
            clearInterval(_interval);
            setLoadedStatus(_loadingNow); 
        }
    }
}  
var _interval;
var _loadingNow = '';
var _loadCount = 0;
function loadThisObject(aPg, aOb){
    _loadCount = 0;
    //console.log('loadThisObject called', aOb, ((aOb).video!=null));
    _loadingNow = aPg;
    if(typeof aOb !== undefined && aOb != null){ 
        _media = {};
        _media.audioLoaded = false;
        _media.imageLoaded = false;
        _media.videoLoaded = false;
        _media.imgLoadCount = 0;
        _media.tracksLoadArr = [];
        _media.videotracksLoadArr = [];
        if(typeof (aOb).audio !=undefined && (aOb).audio!=null) {
            loadAllAudios(aPg, (aOb).audio); 
        }
        if(typeof (aOb).image !=undefined && (aOb).image!=null) {
            loadAllImages(aPg, (aOb).image);
        }
        if(typeof (aOb).video !=undefined && (aOb).video!=null) {
            loadAllVideos(aPg, (aOb).video);
        }
        _interval = setInterval(checkAllLoaded, 200);
    }
}



