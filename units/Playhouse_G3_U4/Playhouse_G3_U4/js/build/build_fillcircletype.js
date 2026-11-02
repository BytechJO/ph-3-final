//  ****************************************** //
//  FillCircleType - build file
//  ****************************************** //
function buildFillCircleTypeBody(aObj) {
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
    htmlStmt += '<div class="group_elm fc_group d-flex">';

    // ---------------- sentence list (left side) ----------------
    htmlStmt += '<div class="fc_list_col">';
    jQuery.each(aObj.questions, function (qIndex, qObj) {
      var qNo = qIndex + 1;

      htmlStmt +=
        '<div class="que fc_item d-flex align-items-baseline" data-qno="' +
        qNo +
        '">';

      htmlStmt += '<div class="fc_type_wrap">';
      htmlStmt += '<input type="text" maxlength="1" class="fc_type_input" />';
      htmlStmt += "</div>";

      htmlStmt += '<div class="fc_qnum">' + qNo + "</div>";

      htmlStmt += '<div class="fc_sentence">';
      jQuery.each(qObj.segments, function (sIndex, seg) {
        if (seg.type == "text") {
          htmlStmt += seg.text;
        } else if (seg.type == "underline") {
          htmlStmt += '<span class="fc_underline">' + seg.text + "</span>";
        } else if (seg.type == "verbpick") {
          htmlStmt += '<span class="fc_verbpick" data-qno="' + qNo + '">(';
          jQuery.each(seg.options, function (oIndex, optWord) {
            if (oIndex > 0) {
              htmlStmt += " / ";
            }
            htmlStmt +=
              '<span class="fc_verb_option" data-value="' +
              optWord +
              '">' +
              optWord +
              "</span>";
          });
          htmlStmt += ")</span>";
        }
      });
      htmlStmt += "</div>"; // fc_sentence

      htmlStmt += '<div class="icon_wrap">';
      htmlStmt +=
        '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
      htmlStmt +=
        '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
      htmlStmt += "</div>";

      htmlStmt += "</div>"; // que / fc_item
    });
    htmlStmt += "</div>"; // fc_list_col

    // ---------------- decorative side image (right side) ----------------
    if (aObj.rightImage != undefined && aObj.rightImage != "") {
      htmlStmt +=
        '<div class="fc_side_image"><img src="' + aObj.rightImage + '"/></div>';
    }

    htmlStmt += "</div>"; // fc_group
    htmlStmt += "</div></div></div>"; // all_cont / options
  }

  console.log("htmlStmt >> FillCircleType Built");
  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
