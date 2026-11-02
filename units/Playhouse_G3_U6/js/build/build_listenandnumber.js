//  ****************************************** //
//  ListenAndNumber - build file
//  ****************************************** //
function buildListenAndNumberBody(aObj) {
    var htmlStmt = '';
    if (typeof aObj != undefined && aObj != null) {

       
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

        // ===================================================================== all_cont =====================
        htmlStmt += '<div class="options mx-auto">';
        htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';
        htmlStmt += '<div class="group_elm ln_group d-flex flex-wrap justify-content-center">';

        jQuery.each(aObj.items, function (i, itemObj) {
            htmlStmt += '<div class="que ln_item" data-qno="' + (i + 1) + '" data-itemid="' + itemObj.id + '">';
            htmlStmt += '<div class="ln_picture"><img src="' + itemObj.image + '"/></div>';

            if (itemObj.locked) {
                htmlStmt += '<div class="ln_num_box ln_locked">' + itemObj.correctOrder + '</div>';
            } else {
                htmlStmt += '<input type="text" maxlength="1" class="ln_num_box ln_num_input" />';
            }

            htmlStmt += '<div class="icon_wrap">';
            htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
            htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
            htmlStmt += '</div>';

            htmlStmt += '</div>'; // que / ln_item
        });

        htmlStmt += '</div>'; // ln_group
        htmlStmt += '</div></div>'; // all_cont / options
    }

    console.log('htmlStmt >> ListenAndNumber Built');
    $(".activity_area").append(htmlStmt);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}