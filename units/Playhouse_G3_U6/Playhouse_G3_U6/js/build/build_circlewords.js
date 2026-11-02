//  ****************************************** //
//  CircleWords - build file
//  ****************************************** //
function buildCircleWordsBody(aObj) {
    var htmlStmt = '';
    if (typeof aObj != undefined && aObj != null) {

        // ---------------- ribbon title ----------------
     	
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
					htmlStmt += "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
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
        htmlStmt += '<div class="group_elm cw_layout d-flex">';

        // ---------------- ingredient lists (left column) ----------------
        htmlStmt += '<div class="cw_lists_col">';
        var qNo = 0;

        jQuery.each(aObj.groups, function (gIndex, gObj) {
            htmlStmt += '<div class="cw_group">';
            htmlStmt += '<div class="cw_group_title">' + gObj.title + '</div>';
            htmlStmt += '<ul class="cw_line_list">';

            jQuery.each(gObj.lines, function (lIndex, lineObj) {
                qNo++;
                htmlStmt += '<li class="que cw_line" data-qno="' + qNo + '" data-gindex="' + gIndex + '" data-lindex="' + lIndex + '">';

                jQuery.each(lineObj.words, function (wIndex, wObj) {
                    if (wObj.needsCircle) {
                        htmlStmt += '<span class="cw_wordWrap" data-widx="' + wIndex + '">';
                        htmlStmt += '<span class="cw_word">' + wObj.text + '</span>';
                        htmlStmt += '<svg class="cw_circle_svg" viewBox="0 0 100 40"></svg>';
                        htmlStmt += '</span> ';
                    } else {
                        htmlStmt += '<span class="cw_plain_word">' + wObj.text + '</span> ';
                    }
                });

                htmlStmt += '</li>';
            });

            htmlStmt += '</ul>';
            htmlStmt += '</div>'; // cw_group
        });
        htmlStmt += '</div>'; // cw_lists_col

        // ---------------- images (right column) ----------------
        if (aObj.rightImages != undefined && aObj.rightImages.length > 0) {
            htmlStmt += '<div class="cw_images_col">';
            jQuery.each(aObj.rightImages, function (i, imgSrc) {
                htmlStmt += '<div class="cw_side_image"><img src="' + imgSrc + '"/></div>';
            });
            htmlStmt += '</div>';
        }

        htmlStmt += '</div>'; // cw_layout
        htmlStmt += '</div></div>'; // all_cont / options
    }

    console.log('htmlStmt >> CircleWords Built');
    $(".activity_area").append(htmlStmt);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}