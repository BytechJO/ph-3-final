//  ****************************************** //
//  PickWordImg - build file
//  A background picture with word-choice boxes positioned by % over it.
//  Each box has two stacked words; click one to select it (radio-style).
//  ****************************************** //
function buildPickWordImgBody(aObj) {
	var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null){
htmlStmt +=  '<div class="sub_footer_icon subFooterNav backNav mx-1">'
		htmlStmt +=  '<a href="">'
		htmlStmt +=  '<img src="../images/icons/back_btn.png" />'
		htmlStmt +=  '</a>'
		htmlStmt +=  '</div>'
		htmlStmt +=  '<div class="sub_footer_icon subFooterNav nextNav mx-1">'
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
				htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right:' + aObj.mainTitleIconPos.right + ';">';
			}
			htmlStmt += '</div>';
		htmlStmt += '</div>';

		htmlStmt += '<div class="activityHeading">'
			htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
			htmlStmt += "<div class='page_sub_title d-flex'>";
				htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
				// for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
				// 	htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
				// }
				htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
			htmlStmt += "</div>";
			htmlStmt += '</div>';
		htmlStmt += '</div>';
		htmlStmt += '</div>';

		// ===================================================================== all_cont =====================
		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont justify-content-center">';

		htmlStmt += '<div class="screen_elements d-flex justify-content-center align-items-center h-100">';

			htmlStmt += '<div class="pwi_picture_wrap" style="background-image:url(' + aObj.bgImage + '); aspect-ratio:' + aObj.aspectRatio + ';">';

			for (var c = 0; c < aObj.choices.length; c++) {
				var choiceObj = aObj.choices[c];

				htmlStmt += '<div class="que pwi_choiceBox" data-qno="' + (c + 1) + '" style="top:' + choiceObj.top + '; left:' + choiceObj.left + ';">';
				for (var w = 0; w < choiceObj.words.length; w++) {
					htmlStmt += '<div class="pwi_wordOpt" data-oidx="' + w + '">' + choiceObj.words[w] + '</div>';
				}
				htmlStmt += '</div>'; // - end que / pwi_choiceBox
			}

			htmlStmt += '</div>'; // - end pwi_picture_wrap

		htmlStmt += '</div>'; // - end screen_elements

		htmlStmt += '</div></div></div>'; // end - all_cont / options / cont_ht_sf

	}

	console.log('htmlStmt >> pickwordimg Built');
	$( ".activity_area" ).append( htmlStmt );

	setLoadedStatus(getCurrFileOrDirectory('file'));
}