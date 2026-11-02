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
					htmlStmt += "<p class='subTitleTextRight'> " + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
				htmlStmt += '</div>';
			htmlStmt += '</div>';
		htmlStmt += '</div>';
		// ===================================================================== all_cont =====================

		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';
		// options
		if (typeof aObj.options != undefined && aObj.options != null) {
			if (aObj.options.length > 0) {
				htmlStmt += '<div class="word_opt_sticky d-flex justify-content-center">';
				htmlStmt += '<div class="word_options d-flex flex-wrap justify-content-around">';
				jQuery.each(aObj.options, function (key, value) {
				htmlStmt += '<div class="audioIcon textEnd off d-flex contant" data-audio="'+aObj.optionsAudios[key]+'">' ;
					htmlStmt += '<div class="clue_word">' + value + '</div>';
					htmlStmt += '</div>';
				});
				htmlStmt += '</div>';
				htmlStmt += '</div>';
			}
		}
		// ===========================================================
		htmlStmt += '<div class="screen_elements d-flex flex-wrap">';
		htmlStmt += '<div class="group_elm d-flex flex-wrap justify-content-center align-items-center mb-70">';
		
		htmlStmt += '<div class="all-images d-flex flex-wrap">';
		for (x = 0; x < aObj.image.length; x++) {
				htmlStmt += '<div class="image_space"><img src="' + aObj.image[x] + '"></div>';
		}
		htmlStmt += '</div>';

		for (x = 0; x < numOfRows; x++) {
			htmlStmt += '<div class="ques w-80 d-flex flex-wrap">';
			for (y = 0; y < numInRowArray[x].length; y++) {

				htmlStmt += '<div class="p-0 q_box align-content-between flex-wrap">'; // put hight in css or data 
												 
				htmlStmt += '<div class="que que_' + currentQue + ' h-100" data-qno="' + (currentQue) + '">';

				htmlStmt += '<div class="txt_wrap  align-content-between flex-wrap justify-content-center">';
				var inputboxstmt = '<input type="number" maxlength="1"/>';
				console.log("aObj.defaultAnswer", aObj.defaultAnswer, currentQue);
				if (aObj.defaultAnswer == currentQue) {
					inputboxstmt = '<input type="number" maxlength="1" readonly value="' + ((aObj.questions)[currentQue - 1]).answer[0] + '"/>'
				}

				var textBack = ((aObj.questions)[currentQue - 1]).textback;
				htmlStmt += '<div class="txtBox" data-type="text">';
				// htmlStmt += '<span class="q_order">' +currentQue+ '</span>';
				
					htmlStmt +=  inputboxstmt ;
					if(textBack !=""){
						htmlStmt += '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" data-audio="' + ((aObj.questions)[currentQue - 1]).audio + '">';
							htmlStmt += textBack;
						htmlStmt += '</div>';
					}

					
				htmlStmt += '</div>';
				   
				htmlStmt += '<div class="theIcons">';
				// htmlStmt += '<div class="audioIcon ml-5 off disabled" data-audio="'+((aObj.questions)[currentQue-1]).audio+'"></div>';
				htmlStmt += '<div class="icon_wrap">';
				htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"/></div>';
				htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"/></div>';
				htmlStmt += '</div>';
				htmlStmt += '</div>';
				htmlStmt += '</div></div></div>';
				currentQue++;

			}
			htmlStmt += '</div>';
		}
		htmlStmt += '</div>';
		htmlStmt += '</div></div></div>'; // end - all_cont / options 
		
	}
	// htmlStmt += '<div class="image-container"><img src="../images/pages/activities/p9_1_f.png"/></div>';
	console.log('htmlStmt >> fillin Built');
	$( ".activity_area" ).append( htmlStmt );	
	
	setLoadedStatus(getCurrFileOrDirectory('file'));
}
function nextChar(c) {
	return String.fromCharCode(c.charCodeAt(0) + 1);
}  