/*$(function () {
    var myData = {};  */
    function buildMcqBody(aObj) {		
		var htmlStmt = '';
		if(aObj !=undefined && aObj !=null){
			var layOut = parseInt(aObj.layout);
			var numOfQuestions = (aObj.questions).length;
			var numInRowArray = aObj.numinrow;
			var numOfRows = numInRowArray.length;
			var currentQue = 1;
			var xx;
			console.log("NUm of Question: ",numOfQuestions,numInRowArray, numOfRows);
			if(layOut == 1){
				// htmlStmt += '<div class="act_head_group">';
				// htmlStmt += '<div class="d-flex justify-content-start">';
				// htmlStmt += '<div class="keyIcon"><img src="'+aObj.activityicon+'"/></div>' ;
				// htmlStmt += '<div class="activityHeading">'+aObj.activityheading+'</div>';
				// htmlStmt += '</div>'; // - end - d-flex justify-content-start				
				// htmlStmt += '</div>'; // - end - act_head_group

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
                    htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
                htmlStmt += "</div>";
                htmlStmt += '</div>';
            htmlStmt += '</div>';
            htmlStmt += '</div>';
				
				htmlStmt += '<div class="options cont_ht_sf mx-auto">';
				htmlStmt += '<div class="all_cont justify-content-center">';
				htmlStmt += '<div class="group_elm d-flex justify-content-center  align-items-center">';
				if((aObj.image) != ''){
					if(aObj.imageposition == "front"){
						htmlStmt += '<div class="img_space d-flex justify-content-center align-items-center">';
						htmlStmt += '<img src="'+aObj.image+'">';
						htmlStmt += '</div>'; // - end img_space
					}
				}
				htmlStmt += '<div class="ques_part_space my-2">';
				for(x= 0;x<numOfQuestions;x++){	
				var tmpObj=aObj.questions[x];	
				htmlStmt += '<div class="fill_content d-flex justify-content-left">';
				htmlStmt += '<div class="que fill_fields d-flex" data-qno="'+(x+1)+'">';
				htmlStmt += '<div class="fill_box d-flex align-items-baseline">';
				htmlStmt += '<div class="q_num_space">';
				// if(aObj.numbering == 'alphabet'){
				// 	xx =(x == 0) ?aObj.numberstartfrom:nextChar(xx);					
				// }else if (aObj.numbering == 'number'){
				// 	xx =(x+parseInt(aObj.numberstartfrom));					
				// }
				htmlStmt += '</div>';
				htmlStmt += '<div class="d-flex flex-wrap fillin_wrap">';
				if(tmpObj.audio != "no"){
					htmlStmt += '<div class="text">';
					htmlStmt += '<div class="audioIcon off d-flex contant min_w_fit_contant" data-audio="' + tmpObj.audio + '">';
				}else{
					htmlStmt += '<div>'
				}
					htmlStmt += '<span class="sta_txt_cont">'+tmpObj.question+'</span>';
			  	htmlStmt += '</div>';
				htmlStmt += '</div>';
				htmlStmt += '<div class="text_input_space">';
			//	htmlStmt += '<input onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" class="text_input_area" type="text" maxlength="20">';
				htmlStmt += '<span class="pick_set" id="pick_set_'+(x+1)+'_1">';
				for(let i=0; i<tmpObj.options.length; i++){
					htmlStmt += '<span class="pick" id="pick_'+(x+1)+'_1_'+(x+1)+'" data-opttext="">'+tmpObj.options[i]+'</span>';
				}
				htmlStmt += '</span> ';
				htmlStmt += '</div>';// - end text_input_space
				// htmlStmt += '<span class="sta_txt_cont"></span>';
				htmlStmt += '</div>';// - end fill_box
				htmlStmt += '<div class="icon_wrap" style="display: none;">';
				htmlStmt += '<div class="tick" style="display: none;"><img src="../images/icons/check_btn.png"></div>';
				htmlStmt += '<div class="cross" style="display: none;"><img src="../images/icons/cross_btn.png"></div>';
				htmlStmt += '</div>';// - end icon_wrap
				htmlStmt += '</div>';
				htmlStmt += '</div>';// - end que fill_fields
				htmlStmt += '</div>';// - end fill_content
				}
				htmlStmt += '</div>'; // - end ques_part_space
				if((aObj.image) != ''){
					if(aObj.imageposition == "back"){
						htmlStmt += '<div class="img_holder d-flex justify-content-center align-items-center">';
						htmlStmt += '<div class="img_space "><img src="'+aObj.image+'">';
						htmlStmt += '</div></div>'; // - end img_space
					}
				}
				htmlStmt += '<div class="right-image-container">';
				htmlStmt += '<img class="right-image" src="' + aObj.rightImage + '" alt="image"/>';
				htmlStmt += '<div class="textOnImage-container">';
				for (t = 0; t < aObj.rightText.length; t++) {
					htmlStmt += ' <div class="audioIcon off textOnImage" data-audio="' + aObj.rightTextAudio[t] + '" style="display: block;">' + aObj.rightText[t] + '</div> ';
				}
				htmlStmt += '</div>';
				htmlStmt += '</div>';
				
				htmlStmt += '</div></div>';// - end -group_elm/ all_cont			
				htmlStmt += '</div>';// - end - options
			}
			
			
		}
		console.log('htmlStmt >> fillin Built');
		$( ".activity_area" ).append( htmlStmt );	
		
		setLoadedStatus(getCurrFileOrDirectory('file'));
    }
function nextChar(c) {
	return String.fromCharCode(c.charCodeAt(0) + 1);
}
console.log('nextchar>> ', nextChar('t'));