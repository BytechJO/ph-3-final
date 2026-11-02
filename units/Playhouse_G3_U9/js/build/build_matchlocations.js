//  ****************************************** //
//  MatchLocations - build file (two-stage matching)
//  ****************************************** //
function buildMatchLocationsBody(aObj) {
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
					// htmlStmt += "<br><p class='subTitleTextRight'> " + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
				htmlStmt += '</div>';
			htmlStmt += '</div>';
		htmlStmt += '</div>';

        // ===================================================================== all_cont =====================
        htmlStmt += '<div class="options mx-auto">';
        htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';

        htmlStmt += '<div class="ml_match_wrap">';
        htmlStmt += '<svg class="ml_svg_layer"></svg>';

        // ---------------- left column: the 6 items ----------------
        htmlStmt += '<div class="ml_col ml_left_col">';
        jQuery.each(aObj.leftItems, function (i, itObj) {
            htmlStmt += '<div class="ml_row ml_left_row">';
            htmlStmt += '<span class="ml_num">' + itObj.num + '</span>';
            htmlStmt += '<span class="ml_text">' + itObj.text + '</span>';
            htmlStmt += '<span class="ml_dot" data-role="left" data-itemid="' + itObj.id + '"></span>';
            htmlStmt += '</div>';
        });
        htmlStmt += '</div>'; // ml_left_col

        // ---------------- middle column: the 2 phrases ----------------
        htmlStmt += '<div class="ml_col ml_mid_col">';
        jQuery.each(aObj.middleItems, function (i, mObj) {
            htmlStmt += '<div class="ml_row ml_mid_row">';
            htmlStmt += '<span class="ml_dot ml_mid_left_dot" data-role="midleft" data-itemid="' + mObj.id + '"></span>';
            htmlStmt += '<span class="ml_mid_box">' + mObj.text + '</span>';
            htmlStmt += '<span class="ml_dot ml_mid_right_dot" data-role="midright" data-itemid="' + mObj.id + '"></span>';
            htmlStmt += '</div>';
        });
        htmlStmt += '</div>'; // ml_mid_col

        // ---------------- right column: the 6 full descriptions ----------------
        htmlStmt += '<div class="ml_col ml_right_col">';
        jQuery.each(aObj.rightItems, function (i, itObj) {
            htmlStmt += '<div class="ml_row ml_right_row">';
            htmlStmt += '<span class="ml_dot" data-role="right" data-itemid="' + itObj.id + '"></span>';
            htmlStmt += '<span class="ml_letter">' + itObj.letter + '</span>';
            htmlStmt += '<span class="ml_text">' + itObj.text + '</span>';
            htmlStmt += '</div>';
        });
        htmlStmt += '</div>'; // ml_right_col

        // ---------------- character image ----------------
        if (aObj.characterImage != undefined && aObj.characterImage != '') {
            htmlStmt += '<div class="ml_char_image"><img src="' + aObj.characterImage + '"/></div>';
        }

        htmlStmt += '</div>'; // ml_match_wrap

        htmlStmt += '</div></div>'; // all_cont / options
    }

    console.log('htmlStmt >> MatchLocations Built');
    $(".activity_area").append(htmlStmt);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}