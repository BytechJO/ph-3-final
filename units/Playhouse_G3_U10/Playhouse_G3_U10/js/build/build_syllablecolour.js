//  ****************************************** //
//  SyllableColour - build file
//  ****************************************** //
function buildSyllableColourBody(aObj) {
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
        htmlStmt += '<div class="options mx-auto">';
        htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';
        htmlStmt += '<div class="group_elm sc_group d-flex flex-column">';

        jQuery.each(aObj.words, function (i, wObj) {
            htmlStmt += '<div class="que sc_row d-flex align-items-center" data-qno="' + (i + 1) + '">';

            htmlStmt += '<div class="sc_word_label"><span class="sc_num">' + wObj.num + '</span> ' + wObj.text + '</div>';

            htmlStmt += '<div class="sc_choices d-flex">';
            for (var s = 1; s <= 3; s++) {
                htmlStmt += '<div class="sc_choice_wrap" data-value="' + s + '">';
                htmlStmt += '<span class="sc_choice_num">' + s + '</span>';
                htmlStmt += '<div class="icon_wrap">';
                htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
                htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
                htmlStmt += '</div>';
                htmlStmt += '</div>';
            }
            htmlStmt += '</div>'; // sc_choices

            htmlStmt += '</div>'; // que / sc_row
        });

        htmlStmt += '</div>'; // sc_group
        htmlStmt += '</div></div>'; // all_cont / options
    }

    console.log('htmlStmt >> SyllableColour Built');
    $(".activity_area").append(htmlStmt);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}