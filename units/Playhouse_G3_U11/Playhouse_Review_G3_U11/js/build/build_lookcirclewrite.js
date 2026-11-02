//  ****************************************** //
//  LookCircleWrite - build file
//  ****************************************** //
function buildLookCircleWriteBody(aObj) {
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
        htmlStmt += '<div class="options mx-auto">';
        htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';
        htmlStmt += '<div class="group_elm lcw_group d-flex flex-column">';

        jQuery.each(aObj.questions, function (i, qObj) {
            htmlStmt += '<div class="que lcw_row d-flex align-items-center" data-qno="' + (i + 1) + '">';

            htmlStmt += '<div class="lcw_image"><img src="' + qObj.image + '"/></div>';

            htmlStmt += '<div class="lcw_letters d-flex flex-column">';
            jQuery.each(qObj.letterOptions, function (li, letter) {
                htmlStmt += '<div class="lcw_letter_wrap" data-letter="' + letter + '">';
                htmlStmt += '<span class="lcw_letter">' + letter + '</span>';
                htmlStmt += '<svg class="lcw_circle_svg" viewBox="0 0 60 60"></svg>';
                htmlStmt += '</div>';
            });
            htmlStmt += '</div>'; // lcw_letters

            htmlStmt += '<div class="lcw_word d-flex align-items-center">';
            htmlStmt += '<input type="text" maxlength="2" class="lcw_input" />';
            htmlStmt += '<span class="lcw_ending">' + qObj.wordEnding + '</span>';
            htmlStmt += '</div>';

            htmlStmt += '<div class="icon_wrap">';
            htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
            htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
            htmlStmt += '</div>';

            htmlStmt += '</div>'; // que / lcw_row
        });

        htmlStmt += '</div>'; // lcw_group
        htmlStmt += '</div></div>'; // all_cont / options
    }

    console.log('htmlStmt >> LookCircleWrite Built');
    $(".activity_area").append(htmlStmt);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}