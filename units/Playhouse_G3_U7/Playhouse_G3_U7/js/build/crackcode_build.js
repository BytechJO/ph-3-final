//  ****************************************** //
//  CrackCode - build file
//  a-z / 1-26 cipher key table + number sequences where the student writes
//  the matching letter above each number (grouped into words).
//  ****************************************** //
var CRACKCODE_ALPHABET = "abcdefghijklmnopqrstuvwxyz";

function buildCrackCodeBody(aObj) {
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
      '<div class="screen_elements d-flex flex-column justify-content-center align-items-center h-100">';
    htmlStmt += '<div class="group_elm cc_group">';

    // ---- top row: mouse image + cipher key table ----
    htmlStmt += '<div class="cc_top_row d-flex align-items-start">';

    if (aObj.mouseImage != undefined && aObj.mouseImage != "") {
      htmlStmt +=
        '<div class="cc_mouse_img"><img src="' + aObj.mouseImage + '"></div>';
    }

    htmlStmt += '<div class="cc_key_table">';
    for (var row = 0; row < 2; row++) {
      htmlStmt += '<div class="cc_key_row d-flex">';
      var start = row * 13;
      for (var k = start; k < start + 13; k++) {
        htmlStmt += '<div class="cc_key_cell">';
        htmlStmt +=
          '<div class="cc_key_letter">' + CRACKCODE_ALPHABET[k] + "</div>";
        htmlStmt += '<div class="cc_key_num">' + (k + 1) + "</div>";
        htmlStmt += "</div>";
      }
      htmlStmt += "</div>"; // - end cc_key_row
    }
    htmlStmt += "</div>"; // - end cc_key_table

    htmlStmt += "</div>"; // - end cc_top_row

    // ---- decode lines ----
    htmlStmt += '<div class="cc_sentences">';
    var globalWordIdx = 0;
    for (var s = 0; s < aObj.sentences.length; s++) {
      var sObj = aObj.sentences[s];
      htmlStmt += '<div class="cc_sentence d-flex flex-wrap align-items-end">';

      for (var w = 0; w < sObj.words.length; w++) {
        var wordObj = sObj.words[w];

        if (wordObj.leadPunct) {
          htmlStmt += '<div class="cc_punct">' + wordObj.leadPunct + "</div>";
        }

        htmlStmt +=
          '<div class="cc_word d-flex" data-wordidx="' + globalWordIdx + '">';
        for (var n = 0; n < wordObj.numbers.length; n++) {
          var numVal = wordObj.numbers[n];
          var givenLetter =
            wordObj.given && wordObj.given[n] != undefined
              ? wordObj.given[n]
              : null;

          htmlStmt += '<div class="cc_letter_col">';
          if (givenLetter) {
            htmlStmt += '<div class="cc_given">' + givenLetter + "</div>";
          } else {
            htmlStmt +=
              '<input class="cc_letterInput" type="text" maxlength="1" data-wordidx="' +
              globalWordIdx +
              '" data-nidx="' +
              n +
              '">';
          }

            htmlStmt += '<div class="cc_cell_icon_wrap">';
  htmlStmt += '<img class="cc_cell_tick" src="../images/icons/check_btn.png">';
  htmlStmt += '<img class="cc_cell_cross" src="../images/icons/cross_btn.png">';
  htmlStmt += '</div>';
          htmlStmt += '<div class="cc_number">' + numVal + "</div>";
          htmlStmt += "</div>";
        }
        htmlStmt += "</div>"; // - end cc_word

        if (wordObj.trailPunct) {
          htmlStmt += '<div class="cc_punct">' + wordObj.trailPunct + "</div>";
        }

        globalWordIdx++;
      }

      htmlStmt += "</div>"; // - end cc_sentence
    }
    htmlStmt += "</div>"; // - end cc_sentences

    htmlStmt += '<div class="icon_wrap_holder">';
    htmlStmt += '<div class="icon_wrap">';
    htmlStmt +=
      '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
    htmlStmt +=
      '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
    htmlStmt += "</div></div>";

    if (aObj.detectiveImage != undefined && aObj.detectiveImage != "") {
      htmlStmt +=
        '<div class="cc_detective_img"><img src="' +
        aObj.detectiveImage +
        '"></div>';
    }

    htmlStmt += "</div>"; // - end group_elm
    htmlStmt += "</div>"; // - end screen_elements

    htmlStmt += "</div></div></div>"; // end - all_cont / options / cont_ht_sf
  }

  console.log("htmlStmt >> crackcode Built");
  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
