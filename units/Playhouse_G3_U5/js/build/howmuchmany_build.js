//  ****************************************** //
//  HowMuchMany - build file
//  Fill-in blanks (how much / how many) + a picture grid where each picture
//  is clickable to cycle: none -> circle (countable) -> X (uncountable) -> none
//  ****************************************** //
function buildHowMuchManyBody(aObj) {
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
    htmlStmt +=
      '<div class="all_cont flex-column justify-content-start justify-content-sm-center">';

    htmlStmt +=
      '<div class="screen_elements d-flex justify-content-center align-items-start h-100">';
    htmlStmt += '<div class="group_elm hmm_group d-flex flex-wrap">';

    // ---- left side: fill-in sentences ----
    htmlStmt += '<div class="hmm_sentences_col">';
    for (var x = 0; x < aObj.sentences.length; x++) {
      var sObj = aObj.sentences[x];
      htmlStmt += '<div class="que hmm_sentence" data-qno="' + (x + 1) + '">';

      var parts = sObj.text.split("[_]");
      htmlStmt +=
        '<div class="hmm_line_1">' + (x + 1) + " " + parts[0] + "</div>";
      htmlStmt += '<div class="hmm_line_2 d-flex align-items-center">';
      htmlStmt +=
        '<input class="text_input_area hmm_input" type="text" maxlength="' +
        aObj.maxlength +
        '">';
      htmlStmt += '<span class="hmm_afterBlank">' + parts[1] + "</span>";
      htmlStmt += '<div class="icon_wrap_holder">';
      htmlStmt +=
        '<div class="icon_wrap"><div class="tick"><img src="../images/icons/check_btn.png"></div><div class="cross"><img src="../images/icons/cross_btn.png"></div></div>';
      htmlStmt += "</div>";
      htmlStmt += "</div>";

      htmlStmt += "</div>"; // - end que / hmm_sentence
    }
    htmlStmt += "</div>"; // - end hmm_sentences_col

    // ---- right side: picture grid ----
    htmlStmt += '<div class="hmm_images_col d-flex flex-wrap">';
    for (var i = 0; i < aObj.images.length; i++) {
      htmlStmt += '<div class="hmm_imgWrap" data-iidx="' + i + '">';
      htmlStmt += '<img class="hmm_img" src="' + aObj.images[i].img + '">';
      htmlStmt +=
        '<svg class="hmm_svg circle_svg" viewBox="0 0 100 100"></svg>';
      htmlStmt += '<div class="hmm_xMark">&times;</div>';
      htmlStmt += "</div>";
    }
    htmlStmt += "</div>"; // - end hmm_images_col

    htmlStmt += "</div>"; // - end group_elm
    htmlStmt += "</div>"; // - end screen_elements

    htmlStmt += "</div></div></div>"; // end - all_cont / options / cont_ht_sf
  }

  console.log("htmlStmt >> howmuchmany Built");
  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
