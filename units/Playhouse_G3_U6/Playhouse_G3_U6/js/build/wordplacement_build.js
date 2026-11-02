//  ****************************************** //
//  WordPlacement - build file
//  Words spread apart with a small blank GAP between every pair of words.
//  The student writes the missing word ("of") in exactly the right gap.
//  ****************************************** //
function buildWordPlacementBody(aObj) {
  var htmlStmt = "";
  if (typeof aObj != undefined && aObj != null) {
    var numOfQuestions = aObj.sentences.length;

    // ---------------- ribbon title ----------------

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
    if (aObj.title_position != undefined && aObj.title_position == "under") {
      htmlStmt += "<div class='page_sub_title'>";
      htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
      // for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
      // 	htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
      // }
      htmlStmt +=
        "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
      htmlStmt += "</div>";
    } else {
      htmlStmt += "<div class='page_sub_title d-flex'>";
      htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
      // for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
      // 	htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
      // }
      // htmlStmt += "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
      htmlStmt += "</div>";
    }
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    // ===================================================================== all_cont =====================
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt +=
      '<div class="all_cont flex-column justify-content-start justify-content-sm-center">';

    htmlStmt +=
      '<div class="screen_elements d-flex flex-column justify-content-center align-items-center h-100">';
    htmlStmt += '<div class="group_elm wp_group flex-column">';

    for (var x = 0; x < numOfQuestions; x++) {
      var sObj = aObj.sentences[x];
      var words = sObj.words;
      var numGaps = words.length - 1;

      htmlStmt +=
        '<div class="que wp_item d-flex align-items-center flex-wrap" data-qno="' +
        (x + 1) +
        '">';

      htmlStmt += '<div class="q_num_space">' + (x + 1) + "</div>";

      // first word (no gap before it)
      htmlStmt += '<div class="wp_word">' + words[0] + "</div>";

      for (var g = 0; g < numGaps; g++) {
        htmlStmt +=
          '<input class="text_input_area wp_gap" type="text" maxlength="' +
          aObj.maxlength +
          '" data-gap="' +
          g +
          '">';
        htmlStmt += '<div class="wp_word">' + words[g + 1] + "</div>";
      }

      htmlStmt += '<div class="icon_wrap_holder">';
      htmlStmt += '<div class="icon_wrap">';
      htmlStmt +=
        '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
      htmlStmt +=
        '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
      htmlStmt += "</div></div>";

      htmlStmt += "</div>"; // - end que / wp_item
    }

    htmlStmt += "</div>"; // - end group_elm
    htmlStmt += "</div>"; // - end screen_elements

    htmlStmt += "</div></div></div>"; // end - all_cont / options / cont_ht_sf
  }

  console.log("htmlStmt >> wordplacement Built");
  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
