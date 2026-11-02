//  ****************************************** //
//  ColourDescribe - build file
//  Free-hand colouring canvas over a line-art image, then a lined free-write
//  area below it to describe what's in the picture. No checking.
//  ****************************************** //
function buildColourDescribeBody(aObj) {
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
    //     htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    // }
    htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    // ===================================================================== all_cont =====================
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt +=
      '<div class="all_cont flex-column justify-content-start justify-content-sm-center">';

    htmlStmt +=
      '<div class="screen_elements d-flex flex-column justify-content-center align-items-center h-100">';
    htmlStmt += '<div class="group_elm cd_group">';

    // ---- colouring area: canvas over the line-art image ----
    htmlStmt += '<div class="cd_colour_area">';
    for (var a = 0; a < aObj.bgImages.length; a++) {
    htmlStmt += '<div class="cd_colour_container">';

      var bgImage = aObj.bgImages[a];
      htmlStmt +=
        '<div class="colour_box" style="background-image:url(' +
        bgImage +
        ');">';
      htmlStmt += '<canvas id="'+ a +'-img" class="colour_canvas"></canvas>';
      htmlStmt += "</div>";

      htmlStmt +=
        '<div class="colour_controls d-flex flex-wrap justify-content-center">';

      htmlStmt +=
        '<div class="palette d-flex flex-wrap justify-content-center">';
      for (var p = 0; p < aObj.palette.length; p++) {
        var colObj = aObj.palette[p];
        htmlStmt +=
          '<div class="paletteSwatch" data-hex="' +
          colObj.hex +
          '" style="background-color:' +
          colObj.hex +
          ';" title="' +
          colObj.name +
          '"></div>';
      }
      htmlStmt += "</div>"; // - end palette

      htmlStmt += '<div class="brushSizes d-flex">';
      for (var b = 0; b < aObj.brushSizes.length; b++) {
        var brObj = aObj.brushSizes[b];
        htmlStmt +=
          '<div class="brushSizeBtn" data-width="' +
          brObj.width +
          '" data-label="' +
          brObj.label +
          '">';
        htmlStmt += '<div class="brushDot brush_' + brObj.label + '"></div>';
        htmlStmt += "</div>";
      }
      htmlStmt += "</div>"; // - end brushSizes

      htmlStmt +=
        '<div class="clearColourBtn"><img src="../images/icons/reset_btn.png"></div>';

      htmlStmt += "</div>"; // - end colour_controls
    htmlStmt += "</div>"; // - end cd_colour_container

    }

    htmlStmt += "</div>"; // - end cd_colour_area

    // ---- describe / free write area ----
    // htmlStmt += '<div class="cd_write_area">';
    // 	htmlStmt += '<div class="cd_writeLabel">' + aObj.writeLabel + '</div>';
    // 	htmlStmt += '<textarea class="text_input_area cd_textarea" rows="' + aObj.writeRows + '" maxlength="' + aObj.maxlength + '" spellcheck="false"></textarea>';
    // htmlStmt += '</div>'; // - end cd_write_area

    htmlStmt += "</div>"; // - end group_elm
    htmlStmt += "</div>"; // - end screen_elements

    htmlStmt += "</div></div></div>"; // end - all_cont / options / cont_ht_sf
  }

  console.log("htmlStmt >> colourdescribe Built");
  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
