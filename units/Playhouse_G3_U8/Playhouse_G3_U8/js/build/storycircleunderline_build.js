//  ****************************************** //
//  StoryCircleUnderline - build file
//  A flowing story paragraph. The build automatically finds each
//  "adjective of amount" + "noun" pair (in reading order) from plain text
//  and makes exactly those words interactive: circle for the adjective
//  phrase, underline for the noun phrase. Everything else stays static.
//  ****************************************** //

// strip punctuation/quotes and lowercase, for matching only
function scuCleanWord(w){
	return w.replace(/^[^a-zA-Z']+|[^a-zA-Z']+$/g, '').toLowerCase();
}

// find the first place (at/after startIdx) where "phraseWords" occurs in "words"
function scuFindPhrase(words, startIdx, phraseWords){
	for (var i = startIdx; i <= words.length - phraseWords.length; i++) {
		var match = true;
		for (var j = 0; j < phraseWords.length; j++) {
			if(scuCleanWord(words[i + j]) != phraseWords[j].toLowerCase()){
				match = false;
				break;
			}
		}
		if(match) return i;
	}
	return -1;
}

function buildStoryCircleUnderlineBody(aObj) {
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
					htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + '">';
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
					// htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
				htmlStmt += '</div>';
			htmlStmt += '</div>';
		htmlStmt += '</div>';
		// ===================================================================== work out which words are interactive =====================================================================
		var words = aObj.storyText.split(' ');
		var wordType = new Array(words.length).fill('none'); // 'none' | 'circle' | 'underline'
		var wordPairIdx = new Array(words.length).fill(-1);  // which pair (0-based) this word belongs to, -1 = none
		var pairLastWordIdx = {}; // pairIdx -> last word index belonging to that pair
		var pointer = 0;

		for (var p = 0; p < aObj.pairs.length; p++) {
			var adjWords = aObj.pairs[p].adjective.split(' ');
			var nounWords = aObj.pairs[p].noun.split(' ');

			var adjIdx = scuFindPhrase(words, pointer, adjWords);
			if(adjIdx == -1) continue; // phrase not found - skip safely

			for (var a = 0; a < adjWords.length; a++) {
				wordType[adjIdx + a] = 'circle';
				wordPairIdx[adjIdx + a] = p;
			}
			pairLastWordIdx[p] = adjIdx + adjWords.length - 1;
			pointer = adjIdx + adjWords.length;

			// look for the noun within a small window after the adjective
			// (allows a word or two in between, like "my" or "different")
			var nounIdx = scuFindPhrase(words, pointer, nounWords);
			if(nounIdx == -1 || nounIdx > pointer + 4) continue; // too far away - skip safely

			for (var n = 0; n < nounWords.length; n++) {
				wordType[nounIdx + n] = 'underline';
				wordPairIdx[nounIdx + n] = p;
			}
			pairLastWordIdx[p] = nounIdx + nounWords.length - 1;
			pointer = nounIdx + nounWords.length;
		}

		// ===================================================================== all_cont =====================
		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont justify-content-center">';

		htmlStmt += '<div class="screen_elements d-flex justify-content-center align-items-start h-100">';
		htmlStmt += '<div class="group_elm scu_group d-flex">';

			// ---- left: the story card ----
			htmlStmt += '<div class="scu_story_card">';
				htmlStmt += '<p class="scu_para">';
				for (var i = 0; i < words.length; i++) {
					if(wordType[i] == 'circle' || wordType[i] == 'underline'){
						htmlStmt += '<span class="scu_wordWrap" data-widx="' + i + '" data-correct="' + wordType[i] + '" data-pairidx="' + wordPairIdx[i] + '">';
							htmlStmt += '<span class="scu_word">' + words[i] + '</span>';
							htmlStmt += '<svg class="scu_svg circle_svg" viewBox="0 0 100 40"></svg>';
							htmlStmt += '<svg class="scu_svg underline_svg" viewBox="0 0 100 40"></svg>';
						htmlStmt += '</span> ';

						// NEW: right after the LAST word of this pair, add one tick/cross icon for the whole pair
						if(pairLastWordIdx[wordPairIdx[i]] == i){
							htmlStmt += '<span class="icon_wrap_holder" data-pairidx="' + wordPairIdx[i] + '">';
							htmlStmt += '<span class="icon_wrap">';
							htmlStmt += '<span class="tick"><img src="../images/icons/check_btn.png"></span>';
							htmlStmt += '<span class="cross"><img src="../images/icons/cross_btn.png"></span>';
							htmlStmt += '</span></span> ';
						}
					}else{
						htmlStmt += '<span class="scu_plainWord">' + words[i] + '</span> ';
					}
				}
				htmlStmt += '</p>';
			htmlStmt += '</div>'; // - end scu_story_card

			// ---- right: illustration ----
			if(aObj.storyImage != undefined && aObj.storyImage != ''){
				htmlStmt += '<div class="scu_image_col">';
					htmlStmt += '<img src="' + aObj.storyImage + '">';
				htmlStmt += '</div>';
			}

		htmlStmt += '</div>'; // - end group_elm
		htmlStmt += '</div>'; // - end screen_elements

		htmlStmt += '</div></div></div>'; // end - all_cont / options / cont_ht_sf

	}

	console.log('htmlStmt >> storycircleunderline Built');
	$( ".activity_area" ).append( htmlStmt );

	setLoadedStatus(getCurrFileOrDirectory('file'));
}