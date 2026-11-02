function audio(stereo_data) {
  var playListData, playListTpl;
  playListData = stereo_data.playListData;

  playListTpl = {
    "<>": "li",
    audiourl: "${audiourl}",
  };
  $(".playlist").jsonRender(playListData, playListTpl);

  $(document).ready(function () {
    var initAudio, playAudio, song, stopAudio, tracker, volume;
    song = void 0;
    tracker = $(".tracker");
    volume = $(".volume");

    initAudio = function (elem) {
      var url = elem.attr("audiourl");

      if (song) {
        song.pause();
        song.src = "";
      }

      song = new Audio(url);
      song.load();

      song.addEventListener("canplaythrough", function () {
        tracker.slider("option", "max", song.duration);
      });

      song.addEventListener("timeupdate", function () {
        tracker.slider("value", parseInt(song.currentTime, 10));
      });

      song.addEventListener("ended", function () {
        song.currentTime = 0;
        $(".play").removeClass("hidden");
        $(".pause").removeClass("visible");
      });

      $(".playlist li").removeClass("active");
      elem.addClass("active");
    };

    playAudio = function (reset) {
      if (reset || song.ended || song.currentTime >= song.duration - 0.1) {
        song.currentTime = 0;
      }
      song.play();
      $(".play").addClass("hidden");
      $(".pause").addClass("visible");
      make_change_when_audio_play(song);
    };

    stopAudio = function () {
      song.pause();
      $(".play").removeClass("hidden");
      $(".pause").removeClass("visible");
    };

    $(document).off("click", ".play").on("click", ".play", function (e) {
      e.preventDefault();
      e.stopPropagation();
      playAudio(false);
    });

    $(document).off("click", ".pause").on("click", ".pause", function (e) {
      e.preventDefault();
      e.stopPropagation();
      stopAudio();
    });

    $(document).off("click", ".restart").on("click", ".restart", function (e) {
      e.preventDefault();
      e.stopPropagation();
      playAudio(true);
    });

    $(document).off("click", ".fa-forward").on("click", ".fa-forward", function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (song) song.currentTime = Math.min(song.currentTime + 10, song.duration);
    });

    $(document).off("click", ".rew").on("click", ".rew", function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (song) song.currentTime = Math.max(song.currentTime - 10, 0);
    });

    $(document).off("click", ".playlist li").on("click", ".playlist li", function () {
      stopAudio();
      initAudio($(this));
    });

    initAudio($(".playlist li:first-child"));
    song.volume = 0.8;

    volume.slider({
      range: "min",
      min: 1,
      max: 100,
      value: 80,
      slide: function (event, ui) {
        if (song) song.volume = ui.value / 100;
      },
    });

    tracker.slider({
      range: "min",
      min: 0,
      max: 10,
      slide: function (event, ui) {
        if (song) song.currentTime = ui.value;
      },
    });
  });
}