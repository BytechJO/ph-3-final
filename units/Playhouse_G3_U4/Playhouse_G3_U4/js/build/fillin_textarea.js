function buildFillInBody(aObj) {	
	var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null){		
       
		var layOut = parseInt(aObj.layout);
        var numOfQuestions = (aObj.questions).length;
        var numInRowArray = aObj.numinrow;
        var numOfRows = numInRowArray.length;
    	var currentQue = 1;			
		
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
					htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + '">';
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
					htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
				htmlStmt += '</div>';
			htmlStmt += '</div>';
		htmlStmt += '</div>';
		// ===================================================================== all_cont =====================
		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';
		htmlStmt += '<div class="screen_elements d-flex flex-column">';
		//text  ======================
		htmlStmt += '<div class="audioIcon off d-flex contant" data-audio="'+aObj.textAudio+'">' ;
			htmlStmt += '<div class="q_text">' + aObj.text + '</div>';
			htmlStmt += '</div>';
		htmlStmt += '<div class="group_elm d-flex flex-wrap justify-content-center align-items-center mb-70">';
		// Options =====================
		if (typeof aObj.options != undefined && aObj.options != null) {
			if (aObj.options.length > 0) {
			  htmlStmt += '<div class="word_opt_sticky d-flex flex-wrap justify-content-center">';
			  htmlStmt += '<div class="word_options d-flex flex-wrap justify-content-around">';
			  jQuery.each(aObj.options, function (key, value) {
				htmlStmt += '<div class="audioIcon off d-flex contant" data-audio="'+aObj.optionsAudios[key]+'">' ;
				  htmlStmt += '<div class="clue_word">' + value + '</div>';
				htmlStmt += '</div>';
			  });
	  
			  htmlStmt += '</div>';
			  htmlStmt += '</div>';
			}
		}
			
			//textarea
			htmlStmt += '<div class="textarea-container">';
				htmlStmt += '<textarea id="paper-textarea" rows="10" cols="50" maxlength="400"></textarea>';
			htmlStmt += '</div>';
		htmlStmt += '</div>';
		htmlStmt += '</div></div></div>'; // end - all_cont / options 
		
	}

	console.log('htmlStmt >> fillin Built');
	$( ".activity_area" ).append( htmlStmt );	
	setLoadedStatus(getCurrFileOrDirectory('file'));
}
function nextChar(c) {
	return String.fromCharCode(c.charCodeAt(0) + 1);
}  