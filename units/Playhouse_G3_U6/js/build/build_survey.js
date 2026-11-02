//  ****************************************** //
//  Survey - build file
//  ****************************************** //
function buildSurveyBody(aObj) {
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

        htmlStmt += '<div class="survey_top d-flex">';
        htmlStmt += '<div class="survey_top_left">';

        htmlStmt += '<div class="survey_example_line"><span class="survey_label">' + aObj.exampleLabel + '</span> ';
        htmlStmt += '<span class="survey_speaker">' + aObj.studentALabel + '</span> ';
        htmlStmt += '<span class="survey_red">' + aObj.studentAQuestion + '</span></div>';

        htmlStmt += '<div class="survey_example_line survey_indent"><span class="survey_speaker">' + aObj.studentBLabel + '</span> ';
        htmlStmt += '<span class="survey_red">' + aObj.studentBAnswer + '</span></div>';

        htmlStmt += '<div class="survey_asked_line">I asked <input type="text" class="survey_name_input" /></div>';
        htmlStmt += '<div class="survey_asked_caption">(student name)</div>';

        htmlStmt += '</div>'; // survey_top_left

        if (aObj.sideImage != undefined && aObj.sideImage != '') {
            htmlStmt += '<div class="survey_side_image"><img src="' + aObj.sideImage + '"/></div>';
        }
        htmlStmt += '</div>'; // survey_top

        // ---------------- the table ----------------
        htmlStmt += '<table class="survey_table">';
        htmlStmt += '<thead><tr>';
        htmlStmt += '<th class="survey_col_num"></th>';
        htmlStmt += '<th>' + aObj.tableTitle + '</th>';
        htmlStmt += '<th class="survey_col_yn">Yes</th>';
        htmlStmt += '<th class="survey_col_yn">No</th>';
        htmlStmt += '</tr></thead>';
        htmlStmt += '<tbody>';

        // locked example row
        htmlStmt += '<tr class="survey_row survey_example_row">';
        htmlStmt += '<td class="survey_col_num"></td>';
        htmlStmt += '<td>' + aObj.exampleRowQuestion + '</td>';
        htmlStmt += '<td class="survey_col_yn">' + (aObj.exampleRowAnswer == 'yes' ? '<span class="survey_tick">&#10003;</span>' : '') + '</td>';
        htmlStmt += '<td class="survey_col_yn">' + (aObj.exampleRowAnswer == 'no' ? '<span class="survey_tick">&#10003;</span>' : '') + '</td>';
        htmlStmt += '</tr>';

        // open editable rows
        for (var r = 1; r <= aObj.numRows; r++) {
            htmlStmt += '<tr class="survey_row" data-rownum="' + r + '">';
            htmlStmt += '<td class="survey_col_num">' + r + '</td>';
            htmlStmt += '<td><input type="text" class="survey_question_input" /></td>';
            htmlStmt += '<td class="survey_col_yn survey_yn_cell" data-choice="yes"></td>';
            htmlStmt += '<td class="survey_col_yn survey_yn_cell" data-choice="no"></td>';
            htmlStmt += '</tr>';
        }

        htmlStmt += '</tbody>';
        htmlStmt += '</table>';

        htmlStmt += '</div></div>'; // all_cont / options
    }

    console.log('htmlStmt >> Survey Built');
    $(".activity_area").append(htmlStmt);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}