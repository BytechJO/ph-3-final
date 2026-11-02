//  ****************************************** //
//  CrossOutGrid - build file
//  A static letter grid where clicking a letter toggles a cross-out mark.
//  Story text + illustration shown alongside.
//  ****************************************** //
function buildCrossOutGridBody(aObj) {
	var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null){

		var numRows = aObj.grid.length;
		var numCols = aObj.grid[0].length;

		htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">'
		htmlStmt +=  '<a href=""><img src="../images/icons/back_btn.png" /></a>'
		htmlStmt +=  '</div>'
		htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">'
		htmlStmt +=  '<a href=""><img src="../images/icons/next_btn.png" /></a>'
		htmlStmt +=  '</div>'

		// ===================================================================== heading =====================
	      htmlStmt += '<div class="act_head_group justify-content-center">';
                    htmlStmt += '<div class="audioIcon off contant " data-audio="' + aObj.main_activityheading_audio + '">';
                        htmlStmt += '<div class="q-type-img-container">';
                        htmlStmt += '<img class="" src=' + aObj.main_activityheading + '>';
                        htmlStmt += '</div>';
                    htmlStmt += '</div>';
                
                    htmlStmt += '<div class="activityHeading">'
                        htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-audio="' + aObj.subTitleAudio + '">';
                        htmlStmt += aObj.subTitleTextLeft;
                        htmlStmt += '</div>';
                    htmlStmt += '</div>';
                htmlStmt += '</div>';
    

		// ===================================================================== all_cont =====================
		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont justify-content-center">';

		htmlStmt += '<div class="screen_elements d-flex justify-content-center align-items-start h-100">';
		htmlStmt += '<div class="group_elm crossoutgrid_group d-flex">';

			// ---- left side: the letter grid ----
			htmlStmt += '<div class="cog_grid" style="grid-template-columns: repeat(' + numCols + ', 1fr); grid-template-rows: repeat(' + numRows + ', 1fr);">';
			for (var r = 0; r < numRows; r++) {
				for (var c = 0; c < numCols; c++) {
					htmlStmt += '<div class="cog_cell" data-row="' + r + '" data-col="' + c + '">';
						htmlStmt += '<span class="cog_letter">' + aObj.grid[r][c] + '</span>';
					htmlStmt += '</div>';
				}
			}
			htmlStmt += '</div>'; // - end cog_grid

			// ---- right side: story sentences + illustration ----
			htmlStmt += '<div class="cog_story_col">';
				htmlStmt += '<div class="cog_story_lines">';
				for (var s = 0; s < aObj.storyLines.length; s++) {
					htmlStmt += '<div class="cog_story_line">' + aObj.storyLines[s] + '</div>';
				}
				htmlStmt += '</div>';
				if(aObj.storyImage != undefined && aObj.storyImage != ''){
					htmlStmt += '<div class="cog_story_img"><img src="' + aObj.storyImage + '"></div>';
				}
			htmlStmt += '</div>'; // - end cog_story_col

		htmlStmt += '</div>'; // - end group_elm
		htmlStmt += '</div>'; // - end screen_elements

		htmlStmt += '</div></div></div>'; // end - all_cont / options / cont_ht_sf

	}

	console.log('htmlStmt >> crossoutgrid Built');
	$( ".activity_area" ).append( htmlStmt );

	setLoadedStatus(getCurrFileOrDirectory('file'));
}