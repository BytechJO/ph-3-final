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
		htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center flex-column">';
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
		// =============
		htmlStmt += '<div class="screen_elements d-flex flex-column">';
		htmlStmt += '<div class="group_elm d-flex flex-wrap justify-content-center align-items-center mb-70">';
		var className = '';
		for (x = 0; x < numOfRows; x++) {
			// var tmpObj = aObj.questions[x];
			htmlStmt += '<div class="ques w-80 d-flex flex-wrap">';
			for (y = 0; y < numInRowArray[x].length; y++) {
				htmlStmt += '<div class="p-0 q_box align-content-between flex-wrap">'; // put hight in css or data 
				
				if(((aObj.questions)[currentQue - 1]).image != undefined && ((aObj.questions)[currentQue - 1]).image != ""){
					htmlStmt += '<div class="image_space"><img src="' + ((aObj.questions)[currentQue - 1]).image + '"/></div>';
					className = "with_Img";
				}else{
					className = "without_Img";
				}
				
				htmlStmt += '<div class="que ' + className + ' que_' + currentQue + ' h-100" data-qno="' + (currentQue) + '">';
				htmlStmt += '<div class="txt_wrap background_audio align-content-between flex-wrap justify-content-center">';
				var inputboxstmt = '<input type="text" maxlength="300"/>';
				console.log("aObj.defaultAnswer", aObj.defaultAnswer, currentQue);
				if (aObj.defaultAnswer == currentQue) {
					inputboxstmt = '<input type="text" maxlength="1" readonly value="' + ((aObj.questions)[currentQue - 1]).answer[0] + '"/>'
				}
				
				var textFront = ((aObj.questions)[currentQue - 1]).textfront;
				var array_images = ((aObj.questions)[currentQue - 1]).array_images;

				htmlStmt += '<div class="txtBox d-flex flex-column" data-type="text">';
				
				if(array_images != undefined && array_images !=""){
					htmlStmt += '<div class="q_array_images d-flex flex-wrap '+aObj.parentClassName+'">';
					htmlStmt += '<span class="q_order">' +currentQue+ '.</span>';
					for(let x=0; x<array_images.length; x++){
						htmlStmt += '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" data-audio="' + ((aObj.questions)[currentQue - 1]).array_images_audio[x] + '">';
						htmlStmt += '<img src="'+array_images[x]+'"/>';
						htmlStmt += '</div>';
					}
					htmlStmt += '</div>';
				}

				if(textFront !=""){
					htmlStmt += '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" data-audio="' + ((aObj.questions)[currentQue - 1]).audio + '">';
					htmlStmt += '<span class="q_order">' +currentQue+ '.</span>';
					htmlStmt += textFront;
					htmlStmt += '</div>';
				}

				htmlStmt +=  inputboxstmt ;

					
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

		if(aObj.image != "" && aObj.image != undefined){
			htmlStmt += '<div class="img-container"><img src="'+aObj.image+'"></div>';
		}
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