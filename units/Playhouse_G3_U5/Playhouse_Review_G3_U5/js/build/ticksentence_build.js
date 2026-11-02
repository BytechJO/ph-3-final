//  ****************************************** //
//  TickSentence - build file
//  Two sentence options per question, tick the correct one (radio-style
//  square checkboxes), with an image beside each question.
//  ****************************************** //
function buildTickSentenceBody(aObj) {
	var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null){

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
					htmlStmt += "<p class='subTitleTextRight'> " + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
				htmlStmt += '</div>';
			htmlStmt += '</div>';
		htmlStmt += '</div>';

		// ===================================================================== all_cont =====================
		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont flex-column justify-content-start justify-content-sm-center">';

		htmlStmt += '<div class="screen_elements d-flex flex-column justify-content-center align-items-center h-100">';
		htmlStmt += '<div class="group_elm ts_group flex-column">';

			for (var x = 0; x < numOfQuestions; x++) {
				var qObj = aObj.questions[x];

				htmlStmt += '<div class="que ts_item d-flex align-items-start" data-qno="' + (x + 1) + '">';

					htmlStmt += '<div class="q_num_space">' + (x + 1) + '</div>';

					htmlStmt += '<div class="ts_options_col">';
					for (var o = 0; o < qObj.options.length; o++) {
						var optObj = qObj.options[o];
						htmlStmt += '<div class="ts_option_row d-flex align-items-center">';
							htmlStmt += '<div class="audioIcon off contant ts_optionText" data-audio="' + optObj.audio + '">' + optObj.text + '</div>';
							htmlStmt += '<div class="ts_checkbox" data-oidx="' + o + '"></div>';
						htmlStmt += '</div>';
					}
					htmlStmt += '</div>'; // - end ts_options_col

					if(qObj.image != undefined && qObj.image != ''){
						htmlStmt += '<div class="ts_image"><img src="' + qObj.image + '"></div>';
					}

					// NEW: tick/cross feedback icons, same pattern as buildMcqBody
					htmlStmt += '<div class="icon_wrap_holder">';
					htmlStmt += '<div class="icon_wrap">';
					htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
					htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
					htmlStmt += '</div></div>';

				htmlStmt += '</div>'; // - end que / ts_item
			}

		htmlStmt += '</div>'; // - end group_elm
		htmlStmt += '</div>'; // - end screen_elements

		htmlStmt += '</div></div></div>'; // end - all_cont / options / cont_ht_sf

	}

	console.log('htmlStmt >> ticksentence Built');
	$( ".activity_area" ).append( htmlStmt );

	setLoadedStatus(getCurrFileOrDirectory('file'));
}