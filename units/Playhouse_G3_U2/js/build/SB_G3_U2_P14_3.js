function buildFillInBody(aObj) {
  var htmlStmt = '';
  if (aObj != undefined && aObj != null) {
    var numOfQuestions = (aObj.questions).length;

    htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">'
		htmlStmt +=  '<a href="">'
		htmlStmt +=  '<img src="../images/icons/back_btn.png" />'
		htmlStmt +=  '</a>'
		htmlStmt +=  '</div>'
		htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">'
		htmlStmt +=  '<a href="">'
		htmlStmt +=  '<img src="../images/icons/next_btn.png" />'
		htmlStmt +=  '</a>'
		htmlStmt +=  '</div>'

		// ===================================================================== heading =====================
		htmlStmt += '<div class="act_head_group justify-content-center">';
		htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '">';
			htmlStmt += '<div class="q-type-img-container">';
			htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
			if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
				htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + ';">';
			}
			htmlStmt += '</div>';
		htmlStmt += '</div>';

		htmlStmt += '<div class="activityHeading">'
			htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
			htmlStmt += "<div class='page_sub_title d-flex'>";
				htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
				for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
					htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
				}
				htmlStmt += "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
			htmlStmt += "</div>";
			htmlStmt += '</div>';
		htmlStmt += '</div>';
		htmlStmt += '</div>';
		// ===================================================================== all_cont =====================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt += '<div class="all_cont justify-content-start">';
    htmlStmt += '<div class="screen_elements h-100">';
    if (typeof aObj.options != undefined && aObj.options != null) {
      if (aObj.options.length > 0) {
        htmlStmt += '<div class="word_opt_sticky d-flex justify-content-center">';
        htmlStmt += '<div class="word_options d-flex flex-wrap justify-content-around">';
        jQuery.each(aObj.options, function (key, value) {
          htmlStmt += '<div class="clue_word">' + value + '</div>';
        });
        htmlStmt += '</div>';
        htmlStmt += '</div>';
      }
    }

    htmlStmt += '<div class="group_elm h-100 d-flex flex-wrap">';
    for (x = 0; x < numOfQuestions; x++) {
      var tmpObj = aObj.questions[x];
      htmlStmt += '<div class="que img_fillin_gr d-flex flex-column" data-qno="' + (x + 1) + '">';
      if (tmpObj.image != '' && tmpObj.image != "no") {
        htmlStmt += '<div class="image_space"><img src="' + tmpObj.image + '"></div>';
      }
      if (tmpObj.singleword) {
        var str = tmpObj.text;
        var qStr = '<div class="audioIcon txt-audioIcon off contant min_w_fit_contant" data-audio="' + tmpObj.textaudios[0] + '">' + '<img src="../images/icons/sound-wave.png" class="audio_icon">' + '</div>'
        qStr += str.replace(/\[_]/g, '<input class="text_input_area" type="text" maxlength="' + tmpObj.maxlength + '" data-type="' + tmpObj.type + '">');
      } else {
        var wordIndex = -1;
        words = tmpObj.text.split('[_]')
        qStr = words.map((word, index) => {
          if (word !== '') {
            wordIndex++;
            return '<div class="audioIcon txt-audioIcon off contant min_w_fit_contant" data-audio="' + tmpObj.textaudios[wordIndex] + '">' + word + '</div>'
          }
        }).join('<input class="text_input_area" type="text" maxlength="' + tmpObj.maxlength + '" data-type="' + tmpObj.type + '">');
      }
      htmlStmt += '<div class="fillin_gr d-flex align-items-center">';
      htmlStmt += '<div class="q_space d-flex">';
      htmlStmt += '<div class="fillin_set">';
      htmlStmt += qStr;
      htmlStmt += '</div>';// - end fillin_1
      if (qStr.includes('input')){
        htmlStmt += '<div class="icon_wrap_holder">';
        htmlStmt += '<div class="icon_wrap">';
        htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
        htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
        htmlStmt += '</div></div>';// - end icon_wrap_holder / icon_wrap
      } else {
        htmlStmt += '<div class="icon_wrap_holder" style="display: none;">';
        htmlStmt += '<div class="icon_wrap">';
        htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
        htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
        htmlStmt += '</div></div>';// - end icon_wrap_holder / icon_wrap
      }
      htmlStmt += '</div>';
      htmlStmt += '</div></div>';// - end  - fillin_gr / img_fillin_gr
    }
    htmlStmt += '</div></div></div>';// - end - all_cont			
    htmlStmt += '</div>';// - end - options			
  }
  console.log('htmlStmt >> fillin Built');
  $(".activity_area").append(htmlStmt);
  setLoadedStatus(getCurrFileOrDirectory('file'));
}
function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
