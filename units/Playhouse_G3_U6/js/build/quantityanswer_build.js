//  ****************************************** //
//  QuantityAnswer - build file
//  A row of pictures per question, each with a free-write blank underneath.
//  The first item can be a pre-filled, non-editable EXAMPLE.
//  ****************************************** //
function buildQuantityAnswerBody(aObj) {
  var htmlStmt = "";
  if (typeof aObj != undefined && aObj != null) {
    var numOfQuestions = aObj.questions.length;

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
    htmlStmt += '<div class="group_elm qa_group flex-column">';

    for (var x = 0; x < numOfQuestions; x++) {
      var qObj = aObj.questions[x];

      htmlStmt += '<div class="qa_question_block">';

      htmlStmt += '<div class="qa_prompt_row d-flex align-items-start">';
      htmlStmt += '<div class="q_num_space">' + (x + 1) + "</div>";
      htmlStmt +=
        '<div class="audioIcon off contant qa_promptText" data-audio="' +
        qObj.promptAudio +
        '">' +
        qObj.prompt +
        "</div>";
      htmlStmt += "</div>";

      htmlStmt += '<div class="qa_items_row d-flex flex-wrap">';
      for (var i = 0; i < qObj.items.length; i++) {
        var itObj = qObj.items[i];

        htmlStmt +=
          '<div class="que qa_item" data-qno="' + (x + 1) + "_" + i + '">';
        htmlStmt += '<div class="qa_img"><img src="' + itObj.img + '"></div>';

        if (itObj.isExample) {
          htmlStmt +=
            '<div class="qa_example_answer">' + itObj.answer + "</div>";
        } else {
          htmlStmt += '<div class="qa_input_wrap d-flex align-items-center">';
          htmlStmt +=
            '<input class="text_input_area qa_input" type="text" maxlength="' +
            aObj.maxlength +
            '">';
          htmlStmt += '<div class="icon_wrap_holder">';
          htmlStmt += '<div class="icon_wrap">';
          htmlStmt +=
            '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
          htmlStmt +=
            '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
          htmlStmt += "</div></div>";
          htmlStmt += "</div>"; // - end qa_input_wrap
        }

        htmlStmt += "</div>"; // - end que / qa_item
      }
      htmlStmt += "</div>"; // - end qa_items_row

      htmlStmt += "</div>"; // - end qa_question_block
    }
      htmlStmt += "</div>"; // - end group_elm
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
  
    htmlStmt += "</div>"; // - end screen_elements
   
    htmlStmt += "</div></div></div>"; // end - all_cont / options / cont_ht_sf
  }

  console.log("htmlStmt >> quantityanswer Built");
  shakeImage()
  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function showBox(){
	$("#right_image_container").toggle(2500);
} 
function shakeImage() {
	$("#shakingImage").css("transform", "rotate(4deg)");
	setTimeout(function() {
	  $("#shakingImage").css("transform", "rotate(-4deg)");
	  setTimeout(function() {
		$("#shakingImage").css("transform", "rotate(0deg)");
		// Call shakeImage again after 3 seconds (adjust as needed)
		setTimeout(shakeImage, 900);
	  }, 100);
	}, 100);
  }
