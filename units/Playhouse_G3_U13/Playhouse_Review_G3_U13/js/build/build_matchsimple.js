//  ****************************************** //
//  MatchOnImage - build file
//  ****************************************** //
function buildMatchSimpleBody(aObj) {
    var htmlStmt = '';
    if (typeof aObj != undefined && aObj != null) {

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
				
					// htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
				htmlStmt += '</div>';
			htmlStmt += '</div>';
		htmlStmt += '</div>';
        // ===================================================================== all_cont =====================
        htmlStmt += '<div class="options mx-auto">';
        htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center flex-column">';

        jQuery.each(aObj.groups, function (gIndex, gObj) {
            htmlStmt += '<div class="moi_group_wrap" data-gindex="' + gIndex + '">';
            htmlStmt += '<svg class="moi_svg_layer"></svg>';

            // ---------------- left column (words + dots) ----------------
            htmlStmt += '<div class="moi_col moi_left_col">';
            jQuery.each(gObj.leftItems, function (i, itObj) {
                htmlStmt += '<div class="moi_row moi_left_row">';
                htmlStmt += '<span class="moi_text">' + itObj.text + '</span>';
                htmlStmt += '<span class="moi_word_dot" data-role="word" data-gindex="' + gIndex + '" data-itemid="' + itObj.id + '"></span>';
                htmlStmt += '</div>';
            });
            htmlStmt += '</div>';

            // ---------------- image with points overlaid on it ----------------
            htmlStmt += '<div class="moi_img_wrap">';
            htmlStmt += '<img class="moi_bg_image" src="' + gObj.image + '"/>';
            jQuery.each(gObj.points, function (i, pObj) {
                htmlStmt += '<span class="moi_point_dot" data-role="point" data-gindex="' + gIndex + '" data-itemid="' + pObj.id + '" style="top:' + pObj.topPct + '%; left:' + pObj.leftPct + '%;"></span>';
            });
            htmlStmt += '</div>';

            // ---------------- right column (words + dots) ----------------
            htmlStmt += '<div class="moi_col moi_right_col">';
            jQuery.each(gObj.rightItems, function (i, itObj) {
                htmlStmt += '<div class="moi_row moi_right_row">';
                htmlStmt += '<span class="moi_word_dot" data-role="word" data-gindex="' + gIndex + '" data-itemid="' + itObj.id + '"></span>';
                htmlStmt += '<span class="moi_text">' + itObj.text + '</span>';
                htmlStmt += '</div>';
            });
            htmlStmt += '</div>';

            htmlStmt += '</div>'; // moi_group_wrap
        });

        htmlStmt += '</div></div>'; // all_cont / options
    }

    console.log('htmlStmt >> MatchOnImage Built');
    $(".activity_area").append(htmlStmt);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}