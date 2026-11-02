//  ****************************************** //
//  StoryWordChoice - build file
//  A flowing story paragraph with embedded word-choice pairs. Click one
//  word in a pair to circle it (radio-style: only one word per pair).
//  ****************************************** //
function buildStoryWordChoiceBody(aObj) {
	var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null){

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
			if(aObj.title_position !=undefined && aObj.title_position =="under"){
				htmlStmt += "<div class='page_sub_title'>";
					htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
					// for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
					// 	htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
					// }
					// htmlStmt += "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
			}else {
				htmlStmt += "<div class='page_sub_title d-flex'>";
					htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
					// for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
					// 	htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
					// }
					// htmlStmt += "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
			}
			htmlStmt += '</div>';
		htmlStmt += '</div>';
		htmlStmt += '</div>';
		// ===================================================================== all_cont =====================
		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont justify-content-center">';

		htmlStmt += '<div class="screen_elements d-flex justify-content-center align-items-start h-100">';
		htmlStmt += '<div class="group_elm swc_group d-flex">';

			// ---- left: the flowing story paragraph ----
			htmlStmt += '<div class="swc_story_col">';
				htmlStmt += '<p class="swc_para">';

				var pairCounter = 0;
				for (var i = 0; i < aObj.parts.length; i++) {
					var partObj = aObj.parts[i];

					if(partObj.options){
						htmlStmt += '<span class="que swc_pair" data-qno="' + pairCounter + '">';
						for (var o = 0; o < partObj.options.length; o++) {
							htmlStmt += '<span class="swc_wordWrap" data-oidx="' + o + '">';
								htmlStmt += '<span class="swc_word">' + partObj.options[o] + '</span>';
								htmlStmt += '<svg class="swc_svg" viewBox="0 0 100 40"></svg>';
							htmlStmt += '</span>';
							if(o < partObj.options.length - 1){
								htmlStmt += '<span class="swc_slash"> / </span>';
							}
						}
						htmlStmt += '</span>';
						pairCounter++;
					}else{
						htmlStmt += '<span class="swc_text">' + partObj.text + '</span>';
					}
				}

				htmlStmt += '</p>';
			htmlStmt += '</div>'; // - end swc_story_col

			// ---- right: illustration ----
			if(aObj.storyImage != undefined && aObj.storyImage != ''){
				htmlStmt += '<div class="swc_image_col">';
					htmlStmt += '<img src="' + aObj.storyImage + '">';
				htmlStmt += '</div>';
			}

		htmlStmt += '</div>'; // - end group_elm
		htmlStmt += '</div>'; // - end screen_elements

		htmlStmt += '</div></div></div>'; // end - all_cont / options / cont_ht_sf

	}

	console.log('htmlStmt >> storywordchoice Built');
	$( ".activity_area" ).append( htmlStmt );

	setLoadedStatus(getCurrFileOrDirectory('file'));
}