//  ****************************************** //
//  ChooseAndWrite - build file
//  A grid of clickable pictures (circle the correct ones) + a set of free
//  write-lines below where the student writes those items, in any order.
//  ****************************************** //
function buildChooseAndWriteBody(aObj) {
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
    htmlStmt += "<div class='page_sub_title'>";
    htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
    // for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
    // 	htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    // }
    // htmlStmt += "<br><p class='subTitleTextRight'> " + aObj.subTitleTextRight + " </p>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    // ===================================================================== all_cont =====================
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt +=
      '<div class="all_cont flex-column justify-content-start justify-content-sm-center">';

    htmlStmt +=
      '<div class="screen_elements d-flex justify-content-center align-items-center h-100">';
    htmlStmt += '<div class="group_elm caw_group d-flex">';

    // ---- left: write lines ----
    htmlStmt += '<div class="caw_lines_col">';
    for (var l = 0; l < aObj.numWriteLines; l++) {
      htmlStmt += '<div class="caw_line_row">';
      htmlStmt +=
        '<input class="text_input_area caw_line_input" type="text" maxlength="' +
        aObj.maxlength +
        '">';
      htmlStmt += "</div>";
    }
    htmlStmt += "</div>"; // - end caw_lines_col

    // ---- middle: picture grid ----
    htmlStmt += '<div class="caw_images_col d-flex flex-wrap">';
    for (var i = 0; i < aObj.images.length; i++) {
      htmlStmt += '<div class="caw_imgWrap" data-iidx="' + i + '">';
      htmlStmt += '<img class="caw_img" src="' + aObj.images[i].img + '">';
      htmlStmt +=
        '<svg class="caw_svg circle_svg" viewBox="0 0 100 100"></svg>';
      htmlStmt += "</div>";
    }
    htmlStmt += "</div>"; // - end caw_images_col

    htmlStmt += "</div>"; // - end group_elm

    htmlStmt += '<div class="icon_wrap_holder">';
    htmlStmt += '<div class="icon_wrap">';
    htmlStmt +=
      '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
    htmlStmt +=
      '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
    htmlStmt += "</div></div>";

   


   if (aObj.rightImage != undefined && aObj.rightImage != "") {
      htmlStmt += '<div class="right_container">';
      htmlStmt +=
        '<div id="right_image_container" class="right-image-container">';
      htmlStmt += '<span class="header"></span>';
      htmlStmt += '<div class="textOnImage-container">';
      for (t = 0; t < aObj.rightText.length; t++) {
        htmlStmt +=
          ' <div class="audioIcon off textOnImage" data-audio="' +
          aObj.rightTextAudio[t] +
          '" style="display: block;">' +
          aObj.rightText[t] +
          "</div> ";
      }
      htmlStmt += "</div>";
      htmlStmt += "</div>";
      htmlStmt +=
        '<img src="../images/pages/activities/find_in_story.png" id="shakingImage" onclick="showBox()"/>';
      htmlStmt += "</div>";
    }

    htmlStmt += "</div></div></div>"; // end - all_cont / options / cont_ht_sf
    htmlStmt += "</div>"; // - end screen_elements
  }

  console.log("htmlStmt >> chooseandwrite Built");
  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
  shakeImage();
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
function showBox() {
  $("#right_image_container").toggle(2500);
}
function shakeImage() {
  $("#shakingImage").css("transform", "rotate(4deg)");
  setTimeout(function () {
    $("#shakingImage").css("transform", "rotate(-4deg)");
    setTimeout(function () {
      $("#shakingImage").css("transform", "rotate(0deg)");
      // Call shakeImage again after 3 seconds (adjust as needed)
      setTimeout(shakeImage, 900);
    }, 100);
  }, 100);
}
