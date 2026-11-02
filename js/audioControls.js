//  ****************************************** //
//  AudioControls - Version no: 2
//  Date updated - March 28, 2020
//  Features:
//  1) controls audio playing given startime and endtime
//  Date updated - April 30, 2020
//  2) Implement Couple of audios merge.
//  ****************************************** //
window.AudioControls = function (audioSrc) {
  //---------[ Audio controls ]--------------
  this.audio = null; //$("#soundClip")[0];
  this.secondAudio = null;
  this.isDoubleAudio = audioSrc.indexOf(",") > -1;
  this.audioTimer = 0;
  this.init(audioSrc);
};
AudioControls.prototype = {
  init: function (audioSrc) {
    this.audio = new Audio();
    if (this.isDoubleAudio) {
      this.audio.src = audioSrc.split(",")[0];
      this.secondAudio = new Audio();
      this.secondAudio.src = audioSrc.split(",")[1];
    } else this.audio.src = audioSrc;
  },
  playAudio: function (control, startTime, endTime) {
    try {
      if (typeof window.parent.stopHeaderAudio != "undefined") {
        window.parent.stopHeaderAudio();
      }
    } catch (err) {}
    var self = this;
    var audioLength = this.audio.duration;
    if (startTime != undefined) {
      if (Number(startTime) >= 0 && Number(startTime) < audioLength) {
        startTime = Number(startTime);
      }
    }
    if (endTime != undefined) {
      if (Number(endTime) >= 0 && Number(endTime) <= audioLength) {
        endTime = Number(endTime);
        if (endTime <= startTime) {
          alert(
            "Audio End time is lesser than or equal to Start time ! Hence it is set to Audio length ! "
          );
          endTime = audioLength;
        }
      }
    }

    this.audio.currentTime = startTime;
    this.switchAudioIcon("on", control);
    if (this.isDoubleAudio) {
      if (!this.secondAudio.paused) {
        this.secondAudio.pause();
        this.secondAudio.currentTime = 0;
      }
    }

    this.audio.play();
    if (!this.isDoubleAudio) {
      this.audio.ontimeupdate = function () {
        if (self.audio.currentTime > endTime) {
          self.resetAudio(control);
        }
      };
    } else {
      this.audio.addEventListener("ended", function () {
        try {
          if (typeof window.parent.stopHeaderAudio != "undefined") {
            window.parent.stopHeaderAudio();
          }
        } catch (err) {}
        self.secondAudio.play();
        self.secondAudio.addEventListener("ended", function () {
          self.resetAudio(control);
        });
      });
    }
  },
  stopAllAudio: function () {
    this.audio.pause();
    if (this.isDoubleAudio) this.secondAudio.pause();
  },
  switchAudioIcon: function (val, control) {
    val = val !== undefined ? val : "off";
    var toRemove = val == "on" ? "off" : "on";
    if (control) {
      if ($(control).hasClass(toRemove)) {
        $(control).removeClass(toRemove);
      }
      $(control).addClass(val);
    }
  },
  resetAudio: function (control) {
    if (!this.audio.paused) {
      this.audio.pause();
    }
    if (this.isDoubleAudio) {
      if (!this.secondAudio.paused) {
        this.secondAudio.pause();
      }
    }
    this.switchAudioIcon("off", control);
  },
  getCurrentTime: function () {
    console.log("Current second:", this.audio.currentTime);
  },
  //---------[ Audio controls ]--------------
};
