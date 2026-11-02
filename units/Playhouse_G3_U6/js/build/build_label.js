function buildLabelBody(aObj) {
    var htmlStmt = '';
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


    htmlStmt += '<div class="options mx-auto"><div class="all_cont">';
    htmlStmt += '<div class="lbl_wrap" style="position:relative;width:100%;max-width:' + aObj.imageWidth + 'px;">';
    htmlStmt += '<img class="lbl_bg_image" src="' + aObj.backgroundImage + '" style="width:100%;display:block;">';

    jQuery.each(aObj.blanks, function (i, bObj) {
        var topPct = (bObj.top / aObj.imageHeight) * 100;
        var leftPct = (bObj.left / aObj.imageWidth) * 100;
        var wPct = (bObj.width / aObj.imageWidth) * 100;
        var hPct = (bObj.height / aObj.imageHeight) * 100;

        htmlStmt += '<div class="que lbl_blank_wrap" data-qno="' + (i + 1) + '" style="position:absolute;top:' + bObj.top + '%;left:' + bObj.left + '%;">';
        if (bObj.locked) {
            htmlStmt += '<div class="lbl_input lbl_locked">' + bObj.answer + '</div>';
        } else {
            htmlStmt += '<input type="text" class="lbl_input lbl_text_input" style="    width: 120px;height: 30px;"/>';
        }
        htmlStmt += '<div class="icon_wrap"><div class="tick"><img src="../images/icons/check_btn.png"></div><div class="cross"><img src="../images/icons/cross_btn.png"></div></div>';
        htmlStmt += '</div>';
    });

    htmlStmt += '</div></div></div>';
    $(".activity_area").append(htmlStmt);
    setLoadedStatus(getCurrFileOrDirectory('file'));
}