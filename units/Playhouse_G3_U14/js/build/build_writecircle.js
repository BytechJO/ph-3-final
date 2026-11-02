//  ****************************************** //
//  WriteCircle - build file
//  ****************************************** //
function buildWriteCircleBody(aObj) {
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
        htmlStmt += '<div class="group_elm wc_group d-flex flex-column">';

        jQuery.each(aObj.questions, function (qIndex, qObj) {
            var qNo = qIndex + 1;
            htmlStmt += '<div class="que wc_row d-flex align-items-baseline" data-qno="' + qNo + '">';
            htmlStmt += '<div class="wc_qnum">' + qObj.number + '</div>';
            htmlStmt += '<div class="wc_sentence">';

            jQuery.each(qObj.segments, function (sIndex, seg) {
                if (seg.type == 'text') {
                    htmlStmt += seg.text;

                } else if (seg.type == 'blank') {
                    if (qObj.locked) {
                        htmlStmt += '<span class="wc_locked_answer">' + seg.answer + '</span>';
                    } else {
                        htmlStmt += '<input type="text" class="wc_blank_input" />';
                    }

                } else if (seg.type == 'circle') {
                    var lockedClass = qObj.locked ? ' wc_locked' : '';
                    htmlStmt += '<span class="wc_circleWrap' + lockedClass + '">';
                    htmlStmt += '<span class="wc_circle_text">' + seg.text + '</span>';
                    htmlStmt += '<svg class="wc_circle_svg" viewBox="0 0 100 40"></svg>';
                    htmlStmt += '</span>';
                }
            });

            htmlStmt += '</div>'; // wc_sentence

            htmlStmt += '<div class="icon_wrap">';
            htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
            htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
            htmlStmt += '</div>';

            htmlStmt += '</div>'; // que / wc_row
        });

        htmlStmt += '</div>'; // wc_group
        htmlStmt += '</div></div>'; // all_cont / options
    }

    console.log('htmlStmt >> WriteCircle Built');
    $(".activity_area").append(htmlStmt);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}