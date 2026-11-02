//  ****************************************** //
//  FamilyConnection - build file
//  ****************************************** //
function buildFamilyConnectionBody(aObj) {
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
        htmlStmt += '<div class="group_elm fam_group d-flex">';

        jQuery.each(aObj.tables, function (tIndex, tObj) {

            htmlStmt += '<div class="fam_table_wrap" data-tindex="' + tIndex + '">';
            htmlStmt += '<div class="fam_table_title">' + tObj.title + '</div>';

            htmlStmt += '<table class="fam_table">';
            htmlStmt += '<thead><tr>';
            jQuery.each(tObj.columns, function (cIndex, colLabel) {
                htmlStmt += '<th>' + colLabel + '</th>';
            });
            htmlStmt += '<th class="fam_row_action_col"></th>';
            htmlStmt += '</tr></thead>';

            htmlStmt += '<tbody class="fam_tbody">';
            for (var r = 0; r < tObj.initialRows; r++) {
                htmlStmt += '<tr class="fam_row">';
                jQuery.each(tObj.columns, function (cIndex, colLabel) {
                    htmlStmt += '<td><input type="text" class="fam_input" /></td>';
                });
                htmlStmt += '<td class="fam_row_action_col"><span class="fam_remove_row" title="Remove row">&times;</span></td>';
                htmlStmt += '</tr>';
            }
            htmlStmt += '</tbody>';
            htmlStmt += '</table>';

            htmlStmt += '<div class="fam_add_row_wrap"><button type="button" class="fam_add_row">+ Add row</button></div>';

            htmlStmt += '</div>'; // fam_table_wrap
        });

        htmlStmt += '</div>'; // fam_group
        htmlStmt += '</div></div></div>'; // all_cont / options
    }

    console.log('htmlStmt >> FamilyConnection Built');
    $(".activity_area").append(htmlStmt);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}