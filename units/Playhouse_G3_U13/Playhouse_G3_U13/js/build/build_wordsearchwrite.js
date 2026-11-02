//  ****************************************** //
//  WordSearchWrite - build file
//  ****************************************** //
function buildWordSearchWriteBody(aObj) {
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
					for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
						htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
					}
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
        htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center flex-column">';

        // ---------------- the letter grid ----------------
        htmlStmt += '<div class="wsw_grid_wrap">';
        htmlStmt += '<div class="wsw_grid" style="grid-template-columns: repeat(' + aObj.gridCols + ', 1fr);">';
        for (var r = 0; r < aObj.grid.length; r++) {
            for (var c = 0; c < aObj.grid[r].length; c++) {
                htmlStmt += '<div class="wsw_cell" data-row="' + r + '" data-col="' + c + '">' + aObj.grid[r][c] + '</div>';
            }
        }
        htmlStmt += '</div>'; // wsw_grid
        htmlStmt += '</div>'; // wsw_grid_wrap

        // ---------------- pictures + blanks ----------------
        htmlStmt += '<div class="wsw_pictures d-flex flex-wrap justify-content-center">';
        jQuery.each(aObj.pictures, function (i, pObj) {
            htmlStmt += '<div class="que wsw_pic_item" data-qno="' + (i + 1) + '">';
            htmlStmt += '<div class="wsw_pic_num">' + (i + 1) + '</div>';
            htmlStmt += '<div class="wsw_pic_image"><img src="' + pObj.image + '"/></div>';
            htmlStmt += '<input type="text" class="wsw_pic_input" />';
            htmlStmt += '<div class="icon_wrap">';
            htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
            htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
            htmlStmt += '</div>';
            htmlStmt += '</div>'; // que / wsw_pic_item
        });
        htmlStmt += '</div>'; // wsw_pictures

        htmlStmt += '</div></div>'; // all_cont / options
    }

    console.log('htmlStmt >> WordSearchWrite Built');
    $(".activity_area").append(htmlStmt);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}