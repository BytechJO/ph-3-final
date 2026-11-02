function buildMcqBody(aObj) {
  var htmlStmt = '';
  if (aObj != undefined && aObj != null) {

    var numOfQuestions = (aObj.questions).length;

    var currentQue = 1;
    // console.log("NUm of Question: ",numOfQuestions,numInRowArray, numOfRows);

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
			htmlStmt += "<div class='page_sub_title d-flex'>";
				htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
				for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
					htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
				}
				htmlStmt += "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
			htmlStmt += "</div>";
			htmlStmt += '</div>';
		htmlStmt += '</div>';
		htmlStmt += '</div>';
		// ===================================================================== all_cont =====================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt += '<div class="all_cont h-100 justify-content-start justify-content-sm-center">';
	//  htmlStmt += '<div class="d-flex justify-content-center flex-wrap align-items-center">';
	htmlStmt += '<div class="group_elm d-flex justify-content-center align-items-center">';
	htmlStmt += '<div class="ques_part_space my-2">';
    for (var x = 0; x < numOfQuestions; x++) {
      var tpOb = (aObj.questions)[x];
      htmlStmt += '<div id="que_' + (x + 1) + '" class="que align-items-baseline d-flex" data-qno="' + (x + 1) + '">';
      
     
      if(aObj.numbering!=''){
        htmlStmt += '<div class="q_num_space ">';
          if(aObj.numbering == 'alphabet'){
            xx =(x == 0) ?aObj.numberstartfrom:nextChar(xx);					
          }else if (aObj.numbering == 'number'){
            xx =(x+parseInt(aObj.numberstartfrom));					
          }
          // x++;
        htmlStmt += xx+'. </div>';
      }    
      htmlStmt += '<div class="picks_grp background_audio">';
      htmlStmt += '<div class="d-flex flex-wrap justify-content-start">';
      var options = (tpOb.options);
      for (var y = 0; y < options.length; y++) {
        var needspace = (options[y].needspaceafter == 'yes') ? 'right_space' : '';

        htmlStmt += '<div id="pick_' + (x + 1) + '_' + (y + 1) + '" class="mcq_1_5_q_group pick ' + needspace + '">';
        htmlStmt += '<div class="txt_box d-flex justify-content-center align-items-center" data - type="text" >';
        htmlStmt += '<span>' + options[y].text + '</span>';
        htmlStmt += '</div>';
        htmlStmt += '</div>';
      }


     
      
      htmlStmt += '<div class="fill-group mx-2">';
      htmlStmt += '<input class="py-1" type="text" style="color: black;">';
      htmlStmt += '</div>'; // end - fill-group
      htmlStmt += '</div>';
      htmlStmt += '</div>';// end - d-flex / picks_grp
      htmlStmt += '<div class="icon_wrap_holder">';
      htmlStmt += '<div class="icon_wrap">';
      htmlStmt += '<div class="tick">';
      htmlStmt += '<img src="../images/icons/check_btn.png">';
      htmlStmt += '</div>';// end - tick
      htmlStmt += '<div class="cross">';
      htmlStmt += '<img src="../images/icons/cross_btn.png">';
      htmlStmt += '</div>';// end - cross
      htmlStmt += '</div>';// end - icon_wrap
      htmlStmt += '</div>';// end - icon_wrap_holder      
      htmlStmt += '</div>';// end - que

    }
	  htmlStmt += '</div>';
		if(aObj.image!='')
    {
			  htmlStmt += '<div class="image_space d-flex justify-content-center align-items-center">';
      htmlStmt += '<img src="' + aObj.image + '">';
       htmlStmt += '</div>';// end - image_space
    }
	  htmlStmt +='</div>';
	// htmlStmt += '</div>';// 
    htmlStmt += '</div>';// end - all_cont
    htmlStmt += '</div>';// end - options


  }
  // console.log('htmlStmt buildMcqBody >> ', htmlStmt);
  $(".activity_area").append(htmlStmt);
  setLoadedStatus(getCurrFileOrDirectory('file'));
}
function nextChar(c) {
	return String.fromCharCode(c.charCodeAt(0) + 1);
}