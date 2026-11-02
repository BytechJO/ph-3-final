//  ****************************************** //
//  Practise - build file
//  ****************************************** //
function buildPractiseBody(aObj) {
    var htmlStmt = '';
    if (typeof aObj != undefined && aObj != null) {

       
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
				htmlStmt += "<div class='page_sub_title'>";
					htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
					// for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
					// 	htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
					// }
					htmlStmt += "<br><p class='subTitleTextRight'> " + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
				htmlStmt += '</div>';
			htmlStmt += '</div>';
		htmlStmt += '</div>';
        // ===================================================================== all_cont =====================
        htmlStmt += '<div class="options mx-auto">';
        htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center" style="margin-top:50px;">';
        htmlStmt += '<div class="group_elm pr_group d-flex">';

        // ---------------- dialogue lines (left side) ----------------
        htmlStmt += '<div class="pr_lines_col">';
        jQuery.each(aObj.lines, function (lIndex, lineObj) {
            htmlStmt += '<div class="que pr_line" data-qno="' + (lIndex + 1) + '">';
            htmlStmt += '<span class="pr_speaker pr_speaker_' + lineObj.speaker + '">' + lineObj.speaker + '.</span> ';

            jQuery.each(lineObj.words, function (wIndex, wObj) {
                htmlStmt += '<span class="pr_wordWrap" data-widx="' + wIndex + '">';
                htmlStmt += '<span class="pr_word">' + wObj.text + '</span>';
                htmlStmt += '<svg class="pr_circle_svg" viewBox="0 0 100 40"></svg>';
                htmlStmt += '</span> ';
            });

            htmlStmt += '</div>'; // que / pr_line
        });
        htmlStmt += '</div>'; // pr_lines_col

        // ---------------- character image (right side) ----------------
        if (aObj.characterImage != undefined && aObj.characterImage != '') {
            htmlStmt += '<div class="pr_side_image"><img src="' + aObj.characterImage + '"/></div>';
        }

        htmlStmt += '</div>'; // pr_group
        htmlStmt += '</div></div>'; // all_cont / options
    }

    console.log('htmlStmt >> Practise Built');
    $(".activity_area").append(htmlStmt);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}