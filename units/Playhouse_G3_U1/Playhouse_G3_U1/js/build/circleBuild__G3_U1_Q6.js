function buildMcqBody(aObj) {	
	var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null){		
       
		var numOfQuestions = (aObj.questions).length;
		var numberofCols = parseInt(aObj.numberofcolumns);
		var numOfQinCol = Math.round(numOfQuestions/numberofCols);
		var currQueNum = 0;				
		
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

		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';
        htmlStmt += '<div class="d-flex flex-wrap justify-content-center align-items-center mb-70">';
        if(aObj.image != 'no' && aObj.image != ''){
            if(aObj.imageposition == 'front'){
                htmlStmt += '<div class="img_space"><img src="'+aObj.image+'"></img></div>';
            }
        }
        
		for(x= 0;x<numberofCols;x++){	
			htmlStmt += '<div class="question_group">';			
			for(y= 0;y<numOfQinCol;y++){
				currQueNum++;
				var tpOb = (aObj.questions)[currQueNum -1];
				if(typeof tpOb != undefined && tpOb != null ){
					htmlStmt += '<div class="que border-none" id="que_'+currQueNum+'" data-qno="'+currQueNum+'">';
					htmlStmt += '<div class="ques_line d-flex">';
					
						htmlStmt += '<div class="q_grp d-flex flex-wrap">';

						htmlStmt += '<div class="q_part d-flex  align-items-baseline">';
					// htmlStmt += '<div class="q_num_space">a. </div>';
					if(aObj.numbering != 'none'){
						htmlStmt += '<div class="q_num_space">';
						if(aObj.numbering == 'alphabet'){
							xx =(currQueNum == 1) ?aObj.numberstartfrom:nextChar(xx);					
						}else if (aObj.numbering == 'number'){
							xx =(x+parseInt(aObj.numberstartfrom));					
						}
						htmlStmt += xx+'. </div>';
					}
                  	if(tpOb.image != '' && tpOb.image != 'no'){
						htmlStmt += '<div class="img_space"><img src='+tpOb.image+'></div>';
					}
                    var str = tpOb.question;
                    var opts = tpOb.options;
                    var count = (str.match(/[_]/g) || []).length;
                    var tCount=0;                     

                    var tmphtml = "";
                    var fillBoxesArr=[];

                    for (var rr = 0; rr < (opts).length; rr++) {
                        fillBoxesArr[rr]='';                       
						if(tpOb.inputbox == "no"){
							tmphtml = "<span class='pick_set' id='pick_set_"+currQueNum+"_"+(rr+1)+"'>";
						}else{
							tmphtml = "<span class='pick_set' id='pick_set_"+currQueNum+"_"+(rr+1)+"'><input class='text_input_area d-none' type='text' readonly disabled>";
						}						
                        var tmpOpt = opts[rr];
                        for(var aa=0;aa<tmpOpt.length;aa++){
                            tmphtml += '<span class="pick" id="pick_'+currQueNum+'_'+(rr+1)+'_'+(aa+1)+'" data-opttext="'+tmpOpt[aa]+'">'+tmpOpt[aa]+'</span>';
                            if(aa < tmpOpt.length-1){
                                tmphtml += '&nbsp;/&nbsp;';
                            }                           
                        }
						tmphtml += '</span>';
                        fillBoxesArr[rr] = tmphtml;
                    }
                    do {
                        // res = str.replace("[_]", fillBoxesArr[tCount]);
                        // str = res;
                        // tCount++;
						// debugger
						resArr = str.split("[_]")
						resArrAudio = [];
						resArr.forEach( (text,index) => {
							text !== '' ? resArrAudio.push( '<div class="audioIcon off contant not-disapled" data-audio="' + tpOb.audio + '">' + text + '</div>') : resArrAudio.push('');
						});
						str = resArrAudio.join(fillBoxesArr[tCount]);
						tCount++;
                    }
                    while (tCount < count);

					htmlStmt += '<div class="d-flex justify-content-center">';
					// htmlStmt += '<div class="audioIcon off contant not-disapled" data-audio="' + tpOb.audio + '">';
                    htmlStmt += '<div class="text_part">'+str+'</div>';
					// htmlStmt += '</div>';
					htmlStmt += '</div>'; 	
					
					htmlStmt += '</div>'; // - /q_part	
				
					// htmlStmt += '<div class="audioIcon off disabled" data-audio="'+((aObj.questions)[currQueNum-1]).audio+'"></div>';
					htmlStmt += '</div>'; // - /q_part
					htmlStmt += '</div>';
					htmlStmt += '<div class="icon_wrap p-2">';
					htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
					htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
                    htmlStmt += '</div>';
					htmlStmt += '</div>';

				}
			}									
			htmlStmt += '</div>';// --/ tick_group
							
		}
		if(aObj.image != 'no' && aObj.image != ''){
            if(aObj.imageposition == 'back'){
                htmlStmt += '<div class="img_space"><img src="'+aObj.image+'"></img></div>';
            }
        }		
		htmlStmt += '</div></div></div>'; // --/ d-flex flex-wrap / all_cont / options
		
	}
	console.log('htmlStmt >> fillin Built');
	$( ".activity_area" ).append( htmlStmt );	
	
	setLoadedStatus(getCurrFileOrDirectory('file'));
}
function nextChar(c) {
	return String.fromCharCode(c.charCodeAt(0) + 1);
}  