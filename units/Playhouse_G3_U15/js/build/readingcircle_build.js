//  ****************************************** //
//  ReadingCircle - build file
//  Story text laid out like a storybook page. Every occurrence of a "target
//  word" (e.g. "some" / "any") is auto-detected from plain paragraph text
//  and made clickable (circle/underline). Everything else is static text.
//  ****************************************** //
function buildReadingCircleBody(aObj) {
  var htmlStmt = "";
  if (typeof aObj != undefined && aObj != null) {
    htmlStmt += '<div class="sub_footer_icon subFooterNav backNav mx-1">';
    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/back_btn.png" />';
    htmlStmt += "</a>";
    htmlStmt += "</div>";
    htmlStmt += '<div class="sub_footer_icon subFooterNav nextNav mx-1">';
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
        ' style="right:' +
        aObj.mainTitleIconPos.right +
        ';">';
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
    // htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    // ===================================================================== all_cont =====================
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt += '<div class="all_cont justify-content-center">';

    htmlStmt +=
      '<div class="screen_elements d-flex justify-content-center align-items-center h-100">';

    // ---- storybook page frame ----
    htmlStmt += '<div class="rc_book_page">';

    htmlStmt += '<div class="rc_tab_strip">';
    htmlStmt += '<div class="rc_tab rc_tab_red"></div>';
    htmlStmt += '<div class="rc_tab rc_tab_orange"></div>';
    htmlStmt += '<div class="rc_tab rc_tab_green"></div>';
    htmlStmt += '<div class="rc_tab rc_tab_blue"></div>';
    htmlStmt += '<div class="rc_tab rc_tab_green"></div>';
    htmlStmt += '<div class="rc_tab rc_tab_orange"></div>';
    htmlStmt += '<div class="rc_tab rc_tab_red"></div>';
    htmlStmt += "</div>";

    htmlStmt += '<div class="rc_page_body d-flex">';

    htmlStmt += '<div class="rc_text_col">';

    var globalIdx = 0;
    for (var p = 0; p < aObj.storyParagraphs.length; p++) {
      var paragraph = aObj.storyParagraphs[p];

      if (aObj.targetPhrases) {
        for (var i = 0; i < aObj.targetPhrases.length; i++) {
          var phrase = aObj.targetPhrases[i].text;
          var type = aObj.targetPhrases[i].type;

          paragraph = paragraph.replace(
            phrase,
            '<span class="rc_wordWrap" data-widx="' +
              globalIdx++ +
              '" data-correct="' +
              type +
              '">' +
              '<span class="rc_word">' +
              phrase +
              "</span>" +
              '<svg class="rc_svg circle_svg" viewBox="0 0 100 40"></svg>' +
              '<svg class="rc_svg underline_svg" viewBox="0 0 100 40"></svg>' +
              "</span>",
          );
        }
      }

      htmlStmt += '<p class="rc_para">' + paragraph + "</p>";
    }

    htmlStmt += "</div>"; // - end rc_text_col

    if (aObj.storyImage != undefined && aObj.storyImage != "") {
      htmlStmt += '<div class="rc_image_col">';
      htmlStmt += '<img src="' + aObj.storyImage + '">';
      htmlStmt += "</div>";
    }

    htmlStmt += "</div>"; // - end rc_page_body

    htmlStmt += '<div class="rc_binding_col">';
    for (var b = 0; b < 12; b++) {
      htmlStmt += '<div class="rc_ring"></div>';
    }
    htmlStmt += "</div>";

    htmlStmt += "</div>"; // - end rc_book_page

    htmlStmt += "</div>"; // - end screen_elements

    htmlStmt += "</div></div></div>"; // end - all_cont / options / cont_ht_sf
  }

  console.log("htmlStmt >> readingcircle Built");
  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
