//  ****************************************** //
//  ReadColourPoem - build file
//  A line-art picture (canvas overlay, freehand colouring) on top,
//  a short poem/rhyme below it. No checking.
//  ****************************************** //
function buildReadColourPoemBody(aObj) {
	var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null){

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
				// htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
				// if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
				// 	htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + '">';
				// }
				htmlStmt += '</div>';
			htmlStmt += '</div>';

		
		htmlStmt += '</div>';

		// ===================================================================== all_cont =====================
		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont flex-column justify-content-start justify-content-sm-center">';

		htmlStmt += '<div class="screen_elements d-flex flex-column justify-content-center align-items-center h-100">';
		htmlStmt += '<div class="group_elm rcp_group">';

			// ---- colouring area: canvas over the line-art image ----
			htmlStmt += '<div class="rcp_colour_area">';

				htmlStmt += '<div class="colour_box" style="background-image:url(' + aObj.bgImage + ');">';
					htmlStmt += '<canvas class="colour_canvas"></canvas>';
				htmlStmt += '</div>';

				htmlStmt += '<div class="colour_controls d-flex flex-wrap justify-content-center">';

					htmlStmt += '<div class="palette d-flex flex-wrap justify-content-center">';
					for (var p = 0; p < aObj.palette.length; p++) {
						var colObj = aObj.palette[p];
						htmlStmt += '<div class="paletteSwatch" data-hex="' + colObj.hex + '" style="background-color:' + colObj.hex + ';" title="' + colObj.name + '"></div>';
					}
					htmlStmt += '</div>'; // - end palette

					htmlStmt += '<div class="brushSizes d-flex">';
					for (var b = 0; b < aObj.brushSizes.length; b++) {
						var brObj = aObj.brushSizes[b];
						htmlStmt += '<div class="brushSizeBtn" data-width="' + brObj.width + '" data-label="' + brObj.label + '">';
							htmlStmt += '<div class="brushDot brush_' + brObj.label + '"></div>';
						htmlStmt += '</div>';
					}
					htmlStmt += '</div>'; // - end brushSizes

					htmlStmt += '<div class="clearColourBtn"><img src="../images/icons/reset_btn.png"></div>';

				htmlStmt += '</div>'; // - end colour_controls

			htmlStmt += '</div>'; // - end rcp_colour_area

			// ---- heading + poem, below the picture ----
			htmlStmt += '<div class="rcp_text_area">';

				htmlStmt += '<div class="activityHeading">';
					htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
						htmlStmt += "<div class='page_sub_title'>";
							htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
						htmlStmt += "</div>";
					htmlStmt += '</div>';
				htmlStmt += '</div>';

				htmlStmt += '<div class="rcp_poem">';
				for (var i = 0; i < aObj.poemLines.length; i++) {
					htmlStmt += '<div class="rcp_poem_line">' + aObj.poemLines[i] + '</div>';
				}
				htmlStmt += '</div>'; // - end rcp_poem

			htmlStmt += '</div>'; // - end rcp_text_area

		htmlStmt += '</div>'; // - end group_elm
		htmlStmt += '</div>'; // - end screen_elements

		htmlStmt += '</div></div></div>'; // end - all_cont / options / cont_ht_sf

	}

	console.log('htmlStmt >> readcolourpoem Built');
	$( ".activity_area" ).append( htmlStmt );

	setLoadedStatus(getCurrFileOrDirectory('file'));
}