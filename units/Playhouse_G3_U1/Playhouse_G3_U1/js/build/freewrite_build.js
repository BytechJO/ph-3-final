//  ****************************************** //
//  FreeWrite - build file
//  Instructions + a single free-write textarea, no checking
//  ****************************************** //
function buildFreeWriteBody(aObj) {
	var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null){

		htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">'
		htmlStmt +=  '<a href=""><img src="../images/icons/back_btn.png" /></a>'
		htmlStmt +=  '</div>'
		htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">'
		htmlStmt +=  '<a href=""><img src="../images/icons/next_btn.png" /></a>'
		htmlStmt +=  '</div>'

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
		htmlStmt += '<div class="options mx-auto">';
		htmlStmt += '<div class="all_cont justify-content-center">';

		htmlStmt += '<div class="screen_elements d-flex justify-content-center align-items-center h-100">';
		htmlStmt += '<div class="group_elm freewrite_group">';

			htmlStmt += '<textarea class="text_input_area fw_textarea" rows="' + aObj.rows + '" maxlength="' + aObj.maxlength + '" placeholder="' + (aObj.placeholder || '') + '" spellcheck="false"></textarea>';

		htmlStmt += '</div>'; // - end group_elm
		htmlStmt += '</div>'; // - end screen_elements

		htmlStmt += '</div></div></div>'; // end - all_cont / options / cont_ht_sf

	}

	console.log('htmlStmt >> freewrite Built');
	$( ".activity_area" ).append( htmlStmt );

	setLoadedStatus(getCurrFileOrDirectory('file'));
}