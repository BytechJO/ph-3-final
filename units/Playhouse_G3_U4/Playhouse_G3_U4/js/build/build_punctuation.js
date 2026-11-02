//  ****************************************** //
//  PunctuationMarks - build file
//  ****************************************** //
function buildPunctuationBody(aObj) {
  var htmlStmt = "";
  if (typeof aObj != undefined && aObj != null) {
    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';
    htmlStmt += '<a href=""><img src="../images/icons/back_btn.png" /></a>';
    htmlStmt += "</div>";
    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';
    htmlStmt += '<a href=""><img src="../images/icons/next_btn.png" /></a>';
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
    // if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
    // 	htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + '">';
    // }
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
    htmlStmt += '<div class="options mx-auto">';
    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';
    htmlStmt += '<div class="group_elm pm_group d-flex">';

    // ---------------- sentence list (left side) ----------------
    htmlStmt += '<div class="pm_list_col">';
    jQuery.each(aObj.questions, function (qIndex, qObj) {
      var qNo = qIndex + 1;
      var blankIdx = 0;

      htmlStmt +=
        '<div class="que pm_item d-flex align-items-baseline" data-qno="' +
        qNo +
        '">';
      htmlStmt += '<div class="pm_qnum">' + qNo + "</div>";
      htmlStmt += '<div class="pm_sentence">';

      jQuery.each(qObj.segments, function (sIndex, seg) {
        if (seg.type == "text") {
          htmlStmt += '<span class="pm_text">' + seg.text + "</span> ";
        } else if (seg.type == "blank") {
          var w = Math.max(seg.answer.length, 1) * 14 + 14;
          htmlStmt +=
            '<input type="text" class="pm_blank" maxlength="' +
            (seg.answer.length + 1) +
            '" style="width:' +
            w +
            'px;" /> ';
          blankIdx++;
        }
      });

      htmlStmt += "</div>"; // pm_sentence

      htmlStmt += '<div class="icon_wrap">';
      htmlStmt +=
        '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
      htmlStmt +=
        '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
      htmlStmt += "</div>";

      htmlStmt += "</div>"; // que / pm_item
    });
    htmlStmt += "</div>"; // pm_list_col

    // ---------------- decorative side image (right side) ----------------
    if (aObj.rightImage != undefined && aObj.rightImage != "") {
      htmlStmt +=
        '<div class="pm_side_image"><img src="' + aObj.rightImage + '"/></div>';
    }

    htmlStmt += "</div>"; // pm_group
    htmlStmt += "</div></div></div>"; // all_cont / options
  }

  console.log("htmlStmt >> PunctuationMarks Built");
  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
