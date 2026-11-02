//  ****************************************** //
//  CircleColour - build file
//  Click a word to circle it, double-click a word to colour it
//  ****************************************** //
function buildCircleColourBody(aObj) {
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
				htmlStmt += '</div>';
			htmlStmt += '</div>';
 
			htmlStmt += '<div class="activityHeading">'
				htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
				htmlStmt += "<div class='page_sub_title d-flex'>";
					htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
				htmlStmt += "</div>";
				htmlStmt += '</div>';
			htmlStmt += '</div>';
		htmlStmt += '</div>';
 
		// ===================================================================== all_cont =====================
		htmlStmt += '<div class="options mx-auto">';
		htmlStmt += '<div class="all_cont flex-column justify-content-start justify-content-sm-center">';
 
		htmlStmt += '<div class="screen_elements d-flex flex-column justify-content-center align-items-center h-100">';
		htmlStmt += '<div class="group_elm colourwords_group flex-column">';
 
			for (x = 0; x < numOfQuestions; x++) {
				var tmpObj = aObj.questions[x];
 
				// each entry in "questions" is one stanza / sentence group,
				// rendered as its own block with spacing between stanzas
				htmlStmt += '<div class="que cw_item d-flex align-items-start" data-qno="' + (x + 1) + '">';
 
					htmlStmt += '<div class="cw_sentence d-flex flex-wrap">';
					for (var w = 0; w < tmpObj.words.length; w++) {
						var wObj = tmpObj.words[w];
						htmlStmt += '<div class="cw_wordWrap" data-widx="' + w + '">';
							htmlStmt += '<span class="cw_word">' + wObj.text + '</span>';
						htmlStmt += '</div>';
 
						// keep the poem's original line breaks instead of
						// letting the words run on as one paragraph
						if (wObj.newLine == true) {
							htmlStmt += '<div class="cw_line_break"></div>';
						}
					}
					htmlStmt += '</div>'; // - end cw_sentence
 
					htmlStmt += '<div class="icon_wrap_holder">';
					htmlStmt += '<div class="icon_wrap">';
					htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
					htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
					htmlStmt += '</div></div>';
 
				htmlStmt += '</div>'; // - end que / cw_item
			}
 
		htmlStmt += '</div>'; // - end group_elm
		htmlStmt += '</div>'; // - end screen_elements
 
		htmlStmt += '</div></div></div>'; // end - all_cont / options / cont_ht_sf
 
	}
 
	console.log('htmlStmt >> colourwords Built');
	$( ".activity_area" ).append( htmlStmt );
 
	setLoadedStatus(getCurrFileOrDirectory('file'));
}