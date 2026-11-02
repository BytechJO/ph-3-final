//  ****************************************** //
//  DialogueCircle - build file
//  Character image on the left, dialogue lines on the right. Lines with a
//  word choice show both words - click one to circle it (radio-style pair).
//  ****************************************** //
function buildDialogueCircleBody(aObj) {
  var htmlStmt = "";
  if (typeof aObj != undefined && aObj != null) {
    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';
    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/back_btn.png" />';
    htmlStmt += "</a>";
    htmlStmt += "</div>";
    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';
    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/next_btn.png" />';
    htmlStmt += "</a>";
    htmlStmt += "</div>";
    // ===================================================================== heading =====================
    htmlStmt += '<div class="act_head_group justify-content-center">';
    htmlStmt +=
      '<div class="audioIcon off contant " data-slideNum="' +
      1 +
      '" data-audio="' +
      aObj.mainTitleAudio +
      '">';
    htmlStmt += '<div class="q-type-img-container">';
    htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + ">";
    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
      htmlStmt +=
        '<img class="mainTitleIcon" src=' +
        aObj.mainTitleIcon +
        ' style="right: ' +
        aObj.mainTitleIconPos.right +
        '">';
    }
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += '<div class="activityHeading">';
    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' +
      1 +
      '" data-audio="' +
      aObj.subTitleAudio +
      '">';
    htmlStmt += "<div class='page_sub_title d-flex'>";
    htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
    // for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
    // 	htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    // }
    htmlStmt += "<p> " + (aObj.subTitleTextRight || "") + " </p>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    // ===================================================================== all_cont =====================
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt += '<div class="all_cont justify-content-center">';

    htmlStmt +=
      '<div class="screen_elements d-flex justify-content-center align-items-start h-100">';
    htmlStmt += '<div class="group_elm dc_group d-flex">';

    // ---- left: character image ----
    htmlStmt += '<div class="dc_image_col">';
    htmlStmt += '<img src="' + aObj.characterImage + '">';
    htmlStmt += "</div>";

    // ---- right: dialogue lines ----
    htmlStmt += '<div class="dc_dialogue_col">';
    var qCounter = 0;
    for (var i = 0; i < aObj.lines.length; i++) {
      var lineObj = aObj.lines[i];

      if (lineObj.options) {
        qCounter++;
        htmlStmt +=
          '<div class="que dc_line" data-qno="' +
          qCounter +
          '" data-lineidx="' +
          i +
          '">';
        htmlStmt += '<span class="dc_speaker">' + lineObj.speaker + "</span> ";
        htmlStmt += '<span class="dc_text">' + lineObj.textBefore + " (</span>";

        for (var o = 0; o < lineObj.options.length; o++) {
          htmlStmt += '<span class="dc_wordWrap" data-oidx="' + o + '">';
          htmlStmt += '<span class="dc_word">' + lineObj.options[o] + "</span>";
          htmlStmt += '<svg class="dc_svg" viewBox="0 0 100 40"></svg>';
          htmlStmt += "</span>";
          if (o < lineObj.options.length - 1) {
            htmlStmt += '<span class="dc_text"> / </span>';
          }
        }

        htmlStmt += '<span class="dc_text">)' + lineObj.textAfter + "</span>";
        // NEW: wrap tick/cross in icon_wrap_holder, placed AFTER the closing text
        htmlStmt += '<span class="icon_wrap_holder">';
        htmlStmt += '<span class="icon_wrap">';
        htmlStmt +=
          '<span class="tick"><img src="../images/icons/check_btn.png"/></span>';
        htmlStmt +=
          '<span class="cross"><img src="../images/icons/cross_btn.png"/></span>';
        htmlStmt += "</span>";
        htmlStmt += "</span>";
        htmlStmt += "</div>"; // - end que / dc_line
      } else {
        htmlStmt += '<div class="dc_line">';
        htmlStmt += '<span class="dc_speaker">' + lineObj.speaker + "</span> ";
        htmlStmt += '<span class="dc_text">' + lineObj.text + "</span>";
        htmlStmt += "</div>";
      }
    }
    htmlStmt += "</div>"; // - end dc_dialogue_col

    htmlStmt += "</div>"; // - end group_elm
    htmlStmt += "</div>"; // - end screen_elements

    htmlStmt += "</div></div></div>"; // end - all_cont / options / cont_ht_sf
  }

  console.log("htmlStmt >> dialoguecircle Built");
  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
