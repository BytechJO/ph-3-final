//  ****************************************** //
//  DragIngredients - build file
//  Word bank (draggable chips) + two drop-zone columns (countable / uncountable)
//  ****************************************** //
function buildDragIngredientsBody(aObj) {
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
    htmlStmt += '<div class="options mx-auto">';
    htmlStmt +=
      '<div class="all_cont flex-column justify-content-start justify-content-sm-center">';

    htmlStmt +=
      '<div class="screen_elements d-flex flex-column justify-content-center align-items-center h-100">';
    htmlStmt += '<div class="group_elm dgi_group">';

    // ---- word bank ----
    htmlStmt +=
      '<div class="dgi_wordbank d-flex flex-wrap justify-content-center">';
    for (var i = 0; i < aObj.wordBank.length; i++) {
      htmlStmt +=
        '<div class="dgi_chip" data-value="' +
        aObj.wordBank[i] +
        '">' +
        aObj.wordBank[i] +
        "</div>";
    }
    htmlStmt += "</div>"; // - end dgi_wordbank

    // ---- recipe card with the two columns + illustration ----
    htmlStmt += '<div class="dgi_card_wrap d-flex">';

    htmlStmt += '<div class="dgi_card">';
    htmlStmt += '<div class="dgi_card_title">' + aObj.cardTitle + "</div>";
    htmlStmt += '<div class="dgi_columns d-flex">';

    for (var c = 0; c < aObj.columns.length; c++) {
      var colObj = aObj.columns[c];
      htmlStmt += '<div class="dgi_column">';
      htmlStmt += '<div class="dgi_col_label">' + colObj.label + "</div>";
      for (var b = 0; b < colObj.answers.length; b++) {
        htmlStmt += '<div class="dgi_blank_row">';
        htmlStmt +=
          '<input type="text" readonly class="dgi_blank" data-col="' + c + '">';
        htmlStmt += "</div>";
      }
      htmlStmt += "</div>"; // - end dgi_column
    }

    htmlStmt += "</div>"; // - end dgi_columns
    htmlStmt += "</div>"; // - end dgi_card

    if (aObj.cardImage != undefined && aObj.cardImage != "") {
      htmlStmt +=
        '<div class="dgi_card_img"><img src="' + aObj.cardImage + '"></div>';
    }

    htmlStmt += "</div>"; // - end dgi_card_wrap

    htmlStmt += "</div>"; // - end group_elm
    htmlStmt += "</div>"; // - end screen_elements

    htmlStmt += "</div></div></div>"; // end - all_cont / options / cont_ht_sf
  }

  console.log("htmlStmt >> dragingredients Built");
  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
