//  ****************************************** //
//  CountableNouns - build file
//  Click a word to cycle: none -> circle -> underline -> none
//  ****************************************** //
function buildCountableNounsBody(aObj) {
	var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null){

		var numOfQuestions = (aObj.questions).length;

		htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">'
		htmlStmt +=  '<a href=""><img src="../images/icons/back_btn.png" /></a>'
		htmlStmt +=  '</div>'
		htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">'
		htmlStmt +=  '<a href=""><img src="../images/icons/next_btn.png" /></a>'
		htmlStmt +=  '</div>'

		// ===================================================================== heading =====================
			htmlStmt += '<div class="act_head_group justify-content-center">';
			htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '">';
				htmlStmt += '<div class="q-type-img-container">';
				// htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
				// if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
				// 	htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + '">';
				// }
				htmlStmt += '</div>';
			htmlStmt += '</div>';

			htmlStmt += '<div class="activityHeading">'
				htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
				htmlStmt += "<div class='page_sub_title d-flex'>";
					htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
					// for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
					// 	htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
					// }
					// htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
				htmlStmt += '</div>';
			htmlStmt += '</div>';
		htmlStmt += '</div>';
		// ===================================================================== all_cont =====================
		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';

		htmlStmt += '<div class="screen_elements d-flex justify-content-center align-items-center h-100">';
		htmlStmt += '<div class="group_elm cn_group flex-column">';

			for (x = 0; x < numOfQuestions; x++) {
				var tmpObj = aObj.questions[x];

				htmlStmt += '<div class="que cn_item d-flex align-items-start" data-qno="' + (x + 1) + '">';

					htmlStmt += '<div class="q_num_space">' + (x + 1) + '</div>';

					htmlStmt += '<div class="cn_sentence d-flex flex-wrap">';
					for (var w = 0; w < tmpObj.words.length; w++) {
						htmlStmt += '<div class="cn_wordWrap" data-widx="' + w + '">';
							htmlStmt += '<span class="cn_word">' + tmpObj.words[w].text + '</span>';
							htmlStmt += '<svg class="cn_svg circle_svg" viewBox="0 0 100 40"></svg>';
							htmlStmt += '<svg class="cn_svg underline_svg" viewBox="0 0 100 40"></svg>';
						htmlStmt += '</div>';
					}
					htmlStmt += '</div>'; // - end cn_sentence

					htmlStmt += '<div class="icon_wrap_holder">';
					htmlStmt += '<div class="icon_wrap">';
					htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
					htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
					htmlStmt += '</div></div>';

				htmlStmt += '</div>'; // - end que / cn_item
			}

		htmlStmt += '</div>'; // - end group_elm
		htmlStmt += '</div>'; // - end screen_elements

		htmlStmt += '</div></div></div>'; // end - all_cont / options / cont_ht_sf

	}

	console.log('htmlStmt >> countablenouns Built');
	$( ".activity_area" ).append( htmlStmt );

	setLoadedStatus(getCurrFileOrDirectory('file'));
}