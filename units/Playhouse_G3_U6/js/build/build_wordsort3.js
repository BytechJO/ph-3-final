//  ****************************************** //
//  WordSort3 - build file
//  ****************************************** //
function buildWordSort3Body(aObj) {
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
        htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center flex-column">';

        // ---------------- numbered word bank ----------------
        htmlStmt += '<div class="ws3_bank d-flex flex-wrap justify-content-center">';
        jQuery.each(aObj.words, function (i, wObj) {
            htmlStmt += '<div class="ws3_bank_chip draggable_word" data-wordid="' + wObj.id + '">';
            htmlStmt += '<span class="ws3_num">' + wObj.num + '</span> ' + wObj.text;
            htmlStmt += '</div>';
        });
        htmlStmt += '</div>'; // ws3_bank

        // ---------------- the 3 ruled tables ----------------
        htmlStmt += '<div class="ws3_tables d-flex flex-wrap justify-content-center">';
        jQuery.each(aObj.tables, function (tIndex, tObj) {
            htmlStmt += '<div class="ws3_table_wrap" data-tableid="' + tObj.id + '">';
            htmlStmt += '<div class="ws3_table_title">' + tObj.title + '</div>';
            htmlStmt += '<div class="ws3_table_box" style="grid-template-columns: repeat(' + tObj.numCols + ', 1fr);">';

            for (var c = 0; c < tObj.numCols; c++) {
                htmlStmt += '<div class="ws3_col">';
                for (var r = 0; r < tObj.rowsPerCol; r++) {
                    if (c == 0 && r == 0) {
                        // the printed example line - not a drop target, just a sample
                        htmlStmt += '<div class="ws3_line ws3_example_line"><span class="ws3_example_text">' + tObj.exampleText + '</span></div>';
                    } else {
                        htmlStmt += '<div class="ws3_line ws3_slot" data-tableid="' + tObj.id + '"></div>';
                    }
                }
                htmlStmt += '</div>'; // ws3_col
            }

            htmlStmt += '</div>'; // ws3_table_box
            htmlStmt += '</div>'; // ws3_table_wrap
        });
        htmlStmt += '</div>'; // ws3_tables

        htmlStmt += '</div></div></div>'; // all_cont / options
    }

    console.log('htmlStmt >> WordSort3 Built');
    $(".activity_area").append(htmlStmt);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}