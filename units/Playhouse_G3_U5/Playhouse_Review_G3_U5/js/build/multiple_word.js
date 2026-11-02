function buildMcqBody(aObj) {	
	var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null){		
       
		var numOfQuestions = (aObj.questions).length;
		var numberofCols = parseInt(aObj.numberofcolumns);
		var numOfQinCol = Math.round(numOfQuestions/numberofCols);
		var currQueNum = 0;				
		
		htmlStmt +=  '<div class="sub_footer_icon subFooterNav backNav mx-1">'
		htmlStmt +=  '<a href="">'
		htmlStmt +=  '<img src="../images/icons/back_btn.png" />'
		htmlStmt +=  '</a>'
		htmlStmt +=  '</div>'
		htmlStmt +=  '<div class="sub_footer_icon subFooterNav nextNav mx-1">'
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
				htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right:' + aObj.mainTitleIconPos.right + ';">';
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
        htmlStmt += '<div class="group_elm d-flex flex-wrap justify-content-center align-items-center mb-70">';
        if(aObj.image != 'no' && aObj.image != ''){
            if(aObj.imageposition == 'front'){
                htmlStmt += '<div class="img_space"><img src="'+aObj.image+'"></img></div>';
            }
        }
       
		for(x= 0;x<numberofCols;x++){	
			htmlStmt += '<div class="tick_group d-flex flex-column">';			
			for(y= 0;y<numOfQinCol;y++){
				currQueNum++;
				var tpOb = (aObj.questions)[currQueNum -1];
				if(typeof tpOb != undefined && tpOb != null ){
					htmlStmt += '<div class="que d-flex" id="que_'+currQueNum+'" data-qno="'+currQueNum+'">';
					if(tpOb.question !=""){
					htmlStmt += '<div class="d-flex q_part">';
						console.log(x, y, currQueNum, tpOb); 					
                    
						htmlStmt += '<div class="question">'+tpOb.question+'</div>';
					
					htmlStmt += '</div>'; // - /q_part
				}
					htmlStmt += '<div class="d-flex flex-wrap picks_grp">';
					
					if((tpOb.options).length > 0){
                        for(var opt=0;opt<(tpOb.options).length;opt++){
                            htmlStmt += '<div id="pick_'+(currQueNum)+'_'+(opt+1)+'" class="pick">';                            
                            htmlStmt += '<div class="txt">'+((tpOb.options)[opt]).text+'</div> ';    
							// htmlStmt += '<div><img src="'+((tpOb.options)[opt]).image+'"/></div>';                               
                            htmlStmt += '</div>';
                        }
                        
                    }
                   
                    htmlStmt += '</div>';// - /picks_grp

					htmlStmt += '<div class="icon_wrap p-2">';
					htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
					htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
                    htmlStmt += '</div>';
                    

					
					htmlStmt += '</div>';
				}
			}									
			htmlStmt += '</div>';// --/ tick_group
							
		}
		htmlStmt += '<div class="image-container">';
		htmlStmt += '<img src="'+aObj.image+'"/>';
		htmlStmt += '</div>';
		htmlStmt += '</div></div></div>'; // --/ d-flex flex-wrap / all_cont / options
		
	}
	console.log('htmlStmt >> fillin Built');
	$( ".activity_area" ).append( htmlStmt );	
	
	setLoadedStatus(getCurrFileOrDirectory('file'));
}
function nextChar(c) {
	return String.fromCharCode(c.charCodeAt(0) + 1);
}  