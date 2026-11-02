//  ****************************************** //
//  CircleCorrectPic - build file
//  A question + two pictures side by side in a bordered box. Click a
//  picture to circle it (radio-style: only one per question).
//  ****************************************** //
function buildCircleCorrectPicBody(aObj) {
	var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null){

		var numOfQuestions = (aObj.questions).length;

	  htmlStmt += '<div class="sub_footer_icon subFooterNav backNav mx-1">';
    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/back_btn.png" />';
    htmlStmt += "</a>";
    htmlStmt += "</div>";
    htmlStmt += '<div class="sub_footer_icon subFooterNav nextNav mx-1">';
    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/next_btn.png" />';
    htmlStmt += "</a>";
    htmlStmt += "</div>";

    // ===================================================================== heading =====================
    htmlStmt += '<div class="act_head_group justify-content-center">';
    htmlStmt +=
      '<div class="audioIcon off contant " data-slideNum="' +
      1 +
      '" data-audio="' +
      aObj.mainTitleAudio +
      '">';
    htmlStmt += '<div class="q-type-img-container">';
    htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + ">";
    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
      htmlStmt +=
        '<img class="mainTitleIcon" src=' +
        aObj.mainTitleIcon +
        ' style="right: ' +
        aObj.mainTitleIconPos.right +
        ';">';
    }
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += '<div class="activityHeading">';
    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' +
      1 +
      '" data-audio="' +
      aObj.subTitleAudio +
      '">';
    if (aObj.title_position != undefined && aObj.title_position == "under") {
      htmlStmt += "<div class='page_sub_title'>";
      htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
      }
      htmlStmt +=
        "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
      htmlStmt += "</div>";
    } else {
      htmlStmt += "<div class='page_sub_title'>";
      htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
    //   for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
    //     htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    //   }
    //   htmlStmt +=
    //     "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
      htmlStmt += "</div>";
    }
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    // ===================================================================== all_cont =====================


		// ===================================================================== all_cont =====================
		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';

		htmlStmt += '<div class="screen_elements d-flex justify-content-center align-items-start h-100">';
		htmlStmt += '<div class="group_elm ccp_group d-flex flex-wrap">';

			for (var x = 0; x < numOfQuestions; x++) {
				var qObj = aObj.questions[x];

				htmlStmt += '<div class="que ccp_item" data-qno="' + (x + 1) + '">';

					htmlStmt += '<div class="ccp_qtext d-flex align-items-start">';
						htmlStmt += '<div class="q_num_space">' + (x + 1) + '</div>';
						htmlStmt += '<div class="audioIcon off contant">' + qObj.text + '</div>';
					htmlStmt += '</div>';

					htmlStmt += '<div class="ccp_imgBox d-flex">';
					for (var i = 0; i < qObj.images.length; i++) {
						htmlStmt += '<div class="ccp_imgWrap" data-iidx="' + i + '">';
							htmlStmt += '<img class="ccp_img" src="' + qObj.images[i].img + '">';
							htmlStmt += '<svg class="ccp_svg" viewBox="0 0 100 100"></svg>';
						htmlStmt += '</div>';
					}
					htmlStmt += '</div>'; // - end ccp_imgBox

				htmlStmt += '</div>'; // - end que / ccp_item
			}

		htmlStmt += '</div>'; // - end group_elm
		htmlStmt += '</div>'; // - end screen_elements

		htmlStmt += '</div></div></div>'; // end - all_cont / options / cont_ht_sf

	}

	console.log('htmlStmt >> circlecorrectpic Built');
	$( ".activity_area" ).append( htmlStmt );

	setLoadedStatus(getCurrFileOrDirectory('file'));
}