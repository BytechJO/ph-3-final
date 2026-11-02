let isDeveloperMode = false;
(function () {
  var isDemoMode = true;
  var currentSlideIndex = 1;
  var __scale = 1;
  var $el = $("#mainContainer");
  var elHeight = $el.outerHeight();
  var elWidth = $el.outerWidth();
  var currUnit = 1;
  var numUnits = $(".pinsContainer").find(".pin").length;
  var currUnitTitle = "";
  var currUnitLink = "";
  var audioControl = null;

  doResize();
  checkUnitStatus();

  window.onload = function () {
    doResize();
  };
  window.onresize = function () {
    doResize();
  };

  function doResize() {
    var scale, origin;
    scale = Math.min(
      $("#scaleable-wrapper").outerWidth() / elWidth,
      $("#scaleable-wrapper").outerHeight() / elHeight
    );
    __scale = scale;
    $el.css({
      transform: "translate(-50%, -50%) " + "scale(" + scale + ")",
    });
    $(".loader").hide();
  }
  if ($(".bookTitle").is(":visible")) {
    audioControl = new AudioControls($(".bookTitle").data("audio"));
  } else if ($(".seriesNum").is(":visible")) {
    audioControl = new AudioControls($(".seriesNum").data("audio"));
  }
  $(".seriesNum, .audioIcon").click(function () {
    startTime = $(this).data("starttime");
    endTime = $(this).data("endtime");
    try {
      if (typeof window.frames[0].stopPageAudio != "undefined") {
        window.frames[0].stopPageAudio();
      }
    } catch (err) {}

    audioControl.playAudio($(this), startTime, endTime);
  });
  $(".reading1Btn").click(function () {
    window.location.href = "./reading1.html";
  });
  $(".reading2Btn").click(function () {
    window.location.href = "./reading2.html";
  });
  $(".grammarBtn").click(function () {
    window.location.href = "./language.html";
  });
  $(".spellingBtn").click(function () {
    window.location.href = "./spelling.html";
  });
  $(".homeBtn").click(function () {
    window.location.href = "./index.html";
  });
  $(".clickBtn").click(function () {
    window.location.href = currUnitLink;
  });

  $(".full_screen").click(function () {
    toggleFullscreen();
  });

  $(".nextBtn").click(function () {
    if (currUnit < numUnits) {
      currUnit++;
      checkUnitStatus();
    }
  });
  $(".backBtn").click(function () {
    if (currUnit > 1) {
      currUnit--;
      checkUnitStatus();
    }
  });
  /*hover audio image*/
  $(".seriesNum").hover(function (ev) {
    $(this).css({ right: "196px", bottom: "25px" });
    $(this)
      .find("img")
      .attr("height", "190")
      .attr("src", "./images/1_hover.png");
  });
  $(".seriesNum").mouseleave(function (ev) {
    $(this).css({ right: "201px", bottom: "30px" });
    $(this).find("img").attr("height", "180").attr("src", "./images/1.png");
  });

  $(".pinsContainer .pin").hover(function () {
    try {
      $(".units").find(".unit").hide();
      $(".units")
        .find(".unit")
        .eq(currUnit - 1)
        .show();
      $(".units")
        .find(".unit")
        .eq(parseInt($(this).text()) - 1)
        .show();
    } catch (e) {}
  });
  $(".pinsContainer .pin").mouseleave(function () {
    try {
      $(".units").find(".unit").hide();
      $(".units")
        .find(".unit")
        .eq(currUnit - 1)
        .show();
    } catch (e) {}
  });
  $(".pinsContainer .pin").mousedown(function () {
    currUnit = parseInt($(this).text());
    checkUnitStatus();
  });

  function checkUnitStatus() {
    if (currUnit == 1) {
      $(".backBtn").addClass("disabled");
    } else {
      $(".backBtn").removeClass("disabled");
    }
    if (currUnit == numUnits) {
      $(".nextBtn").addClass("disabled");
    } else {
      $(".nextBtn").removeClass("disabled");
    }
    $(".pinsContainer").find(".pin").removeClass("selected");
    $(".pinsContainer")
      .find(".pin")
      .eq(currUnit - 1)
      .addClass("selected");
    $(".units").find(".unit").hide();
    $(".units")
      .find(".unit")
      .eq(currUnit - 1)
      .show();

    currUnitTitle = $(".units")
      .find(".unit")
      .eq(currUnit - 1)
      .data("title");
    currUnitLink = $(".units")
      .find(".unit")
      .eq(currUnit - 1)
      .data("ref");
    $(".paperRoll .pin").text(currUnit);
    $(".paperRoll .unitTitle").text(currUnitTitle);
  }
  function toggleFullscreen(elem) {
    elem = elem || document.documentElement;
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
      changeFullScreenIcon("exit");
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
      changeFullScreenIcon("full");
    }
  }
  function changeFullScreenIcon(aCondition) {
    if (aCondition == "exit") {
      $(".full_screen").find("img").attr("src", "./images/exitfullscreen.png");
    } else {
      $(".full_screen").find("img").attr("src", "./images/fullscreen.png");
    }
  }
}.call(this));
