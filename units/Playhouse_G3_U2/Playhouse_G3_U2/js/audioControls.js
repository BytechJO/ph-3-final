
window.AudioControls = function(audioSrc){
    //---------[ Audio controls ]--------------
    this.audio = null;//$("#soundClip")[0];   
    this.audioTimer=0;
    this.init(audioSrc);
    console.log('audioControls js called >> ', audioSrc);
}
AudioControls.prototype = {
    init:function(audioSrc){
        this.audio = new Audio();
        this.audio.src = audioSrc;
    },
    playAudio:function(control, startTime, endTime)
    { 
        try {
            if(typeof window.parent.stopHeaderAudio != 'undefined'){
                window.parent.stopHeaderAudio(); 
            }
        }
        catch(err) { }
        var self = this;
        var audioLength = this.audio.duration; 
        if(startTime!= undefined){
            if(Number(startTime) >= 0 && Number(startTime) < audioLength){
                startTime = Number(startTime);
            }
        }
        if(endTime!= undefined){
            if(Number(endTime) >= 0 && Number(endTime) <= audioLength){
                endTime = Number(endTime);
                if(endTime <=startTime ){
                    alert('Audio End time is lesser than or equal to Start time ! Hence it is set to Audio length ! ');
                    endTime = audioLength;
                }
            }
        }  
          
        this.audio.currentTime = startTime;        
        this.switchAudioIcon('on', control);
        this.audio.play();         

        this.audio.ontimeupdate = function(){           
            if(self.audio.currentTime>endTime){                     
                self.resetAudio(control);
            } 
        }
    },
    switchAudioIcon: function(val, control){
        val = (val !== undefined)? val: 'off';
        var toRemove = (val == 'on') ? 'off':'on';
        if(control)
        {            
            if($(control).hasClass(toRemove)){
                $(control).removeClass(toRemove);
            }
            $(control).addClass(val);
        }
    },
    resetAudio:function(control){
        if(!this.audio.paused){
            this.audio.pause();
        }
        this.switchAudioIcon('off', control);
            
    },
    getCurrentTime:function(){
        console.log("Current second:", this.audio.currentTime);
    }   
//---------[ Audio controls ]--------------
};