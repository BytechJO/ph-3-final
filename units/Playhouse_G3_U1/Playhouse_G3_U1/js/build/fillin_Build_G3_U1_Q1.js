
function buildFillInBody(aObj) {		
	var htmlStmt = '';
	if(aObj !=undefined && aObj !=null){
		var layOut = parseInt(aObj.layout);
		var numOfQuestions = (aObj.questions).length;
		var numInRowArray = aObj.numinrow;
		var numOfRows = numInRowArray.length;
		var currentQue = 1;
		console.log("NUm of Question: ",numOfQuestions,numInRowArray, numOfRows);

		htmlStmt += '<div class="act_head_group justify-content-center">';
			htmlStmt += '<div class="audioIcon off contant " data-audio="' + aObj.main_activityheading_audio + '">';
				htmlStmt += '<div class="q-type-img-container">';
				htmlStmt += '<img class="" src=' + aObj.main_activityheading + '>';
				htmlStmt += '</div>';
			htmlStmt += '</div>';

			htmlStmt += '<div class="activityHeading">'
				htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-audio="' + aObj.activityheading_audio + '">';
				htmlStmt += aObj.activityheading;
				htmlStmt += '</div>';
			htmlStmt += '</div>';
		htmlStmt += '</div>';
		
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
				
		if(layOut == 1){
			
			htmlStmt += '<div class="options">';
			for(x= 0;x<numOfRows;x++){
				htmlStmt += '<div class="d-flex flex-wrap flex-lg-nowrap justify-content-center">';					
				for(y= 0;y<numInRowArray[x].length;y++){						
					htmlStmt += '<div class="p-0">';
					htmlStmt += '<div class="que que_'+currentQue+' d-flex justify-content-around pt-3 m-1" data-qno="'+(currentQue)+'">';
					
					htmlStmt += '<div class="image_wrap"><img src="'+((aObj.questions)[currentQue-1]).image+'"></div>';
					htmlStmt += '<div class="txt_wrap">';
					htmlStmt += '<div class="txtBox mx-2" data-type="text"><input type="text" maxlength="1"/>  <span>'+((aObj.questions)[currentQue-1]).question+'</span></div>';
					htmlStmt += '<div class="theIcons d-flex">';
					htmlStmt += '<div class="audioIcon ml-5 off disabled" data-audio="'+((aObj.questions)[currentQue-1]).audio+'"></div>';

					htmlStmt += '<div class="icon_wrap mx-1">';
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
		}else if(layOut == 2){
			htmlStmt += '<div class="options cont_ht_sf mx-auto" style="width:80%"><div class="all_cont"><div class="cont_group">';
			var rowCount = 1;
			for(x= 0;x<numOfRows;x++){
				htmlStmt += '<div class="row_'+rowCount+' d-flex flex-wrap justify-content-center que-container" style="height:100%">';
				for(y= 0;y<numInRowArray[x].length;y++){
					htmlStmt += '<div class="que f_i_t_2_q_group f_i_t_2_g_'+(y+1)+' question" data-qno="'+(currentQue)+'">';					
						htmlStmt += '<div class="img_box1"><img src="'+((aObj.questions)[currentQue-1]).image+'"></div>';
							htmlStmt += '<div class="txt_box d-flex justify-content-center align-items-center" data-type="text">';
							// htmlStmt += '<span>'+((aObj.questions)[currentQue-1]).question+'</span>';
								htmlStmt += '<div class="audioIcon off disabled" data-audio="'+((aObj.questions)[currentQue-1]).audio+'"></div>'; htmlStmt += '<input class="mx-2" type="text" maxlength="10" style="color: rgb(0, 0, 0); border-width: medium medium 1px; border-style: none none solid; border-color: currentcolor currentcolor black; border-image: none;">'
								htmlStmt += '<div class="icon_wrap">';
									htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"/></div>';
									htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"/></div>';
							htmlStmt += '</div>';
						htmlStmt += '</div>';
					htmlStmt += '</div>';
					currentQue++;
				}
				htmlStmt += '</div>';
			}

			htmlStmt += '</div>';
			htmlStmt += '</div></div>';
			console.log('htmlStmt >> ', htmlStmt);
		}
		if(layOut == 3){
		
			htmlStmt += '<div class="options Box">';
			for(x= 0;x<numOfRows;x++){
				htmlStmt += '<div class="d-flex flex-wrap flex-lg-nowrap justify-content-center">';					
				for(y= 0;y<numInRowArray[x].length;y++){						
					htmlStmt += '<div class="p-0">';
					htmlStmt += '<div class="que que_'+currentQue+' d-flex justify-content-around pt-3 m-1" data-qno="'+(currentQue)+'">';
					
					htmlStmt += '<div class="image_wrap"><img src="'+((aObj.questions)[currentQue-1]).image+'"></div>';
					htmlStmt += '<div class="txt_wrap">';
					htmlStmt += '<div class="txtBox mx-2" data-type="text"> <span>'+((aObj.questions)[currentQue-1]).textfront+'</span><input type="text" maxlength="1"/>  <span>'+((aObj.questions)[currentQue-1]).textback+'</span></div>';
					htmlStmt += '<div class="theIcons d-flex">';
					htmlStmt += '<div class="audioIcon ml-5 off disabled" data-audio="'+((aObj.questions)[currentQue-1]).audio+'"></div>';

					htmlStmt += '<div class="icon_wrap mx-1">';
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
		}
	}
	console.log('htmlStmt >> fillin Built');
	$( ".activity_area" ).append( htmlStmt );	
	
	setLoadedStatus(getCurrFileOrDirectory('file'));
}
