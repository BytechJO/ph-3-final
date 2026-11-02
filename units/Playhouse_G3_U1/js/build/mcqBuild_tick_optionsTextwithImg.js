function buildMcqTickBody(aObj) {
    var htmlStmt = '';
    if (aObj != undefined && aObj != null) {
        var layOut = parseInt(aObj.layout);
        var numOfQuestions = (aObj.questions).length;
        var numInRowArray = aObj.numinrow;
        var numOfRows = numInRowArray.length;
        var currentQue = 1;
		var xx;
		// htmlStmt += '<div class="keyIcon"><img src="' + aObj.activityicon + '"/></div>';
		
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
		//====================================================================== header ======================
		htmlStmt += '<div class="act_head_group justify-content-center">';
            htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '">';
                htmlStmt += '<div class="q-type-img-container">';
                htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
                if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
                    htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + '>';
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

        
        if (layOut == 1) {
            htmlStmt += '<div class="options cont_ht_sf mx-auto" style="width:85%">';
            htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center align-items-center">';
             
            htmlStmt += '<div class="tick_group d-flex flex-wrap" style="width:100%">'; 
            for (x = 0; x < numOfQuestions; x++) {
                var tempObj = (aObj.questions)[x];
                htmlStmt += '<div  id="que_' + (x + 1) + '" class="que" data-qno="' + (x + 1) + '">';
                htmlStmt += '<div class="d-flex justify-content-end icon_wrap_holder">';
                htmlStmt += '<div class="icon_wrap mx-1">';
                htmlStmt += '<div class="tick iconcontainer"><img src="../images/icons/check_btn.png"/></div>';
                htmlStmt += '<div class="cross iconcontainer"><img src="../images/icons/cross_btn.png"/></div>';
                htmlStmt += '</div></div>'; // end - icon_wrap / icon_wrap_holder
                htmlStmt += '<div class="que_group  d-flex flex-wrap justify-content-center align-items-center">';
             //   htmlStmt += '<div class="image_wrap"><img src="' + tempObj.image + '"></div>';
                htmlStmt += '<div class="tick_fields" style="width:100%">';
                htmlStmt += '<div class="question_div d-flex flex-row">';
                if (tempObj.audio != "" && tempObj.audio != "no") {
                    htmlStmt += ' <div class="audioIcon off disabled" data-audio="' + tempObj.audio + '" style="display: block;"></div> ';
                }
                htmlStmt += ' <div class="heading">' + tempObj.question + '</div> ';
                htmlStmt += '</div>'; // end - question_div

                htmlStmt += '<div class="ans_grup que_group d-flex flex-wrap gap-20">';
                for (y = 0; y < ((tempObj).options).length; y++) {
                    htmlStmt += ' <div id="pick_' + (x + 1) + '_' + (y + 1) + '" class="tick_field d-flex flex-column gap-20 pick align-items-baseline"> ';
					
                    htmlStmt += '<div class="q_num_space">';
					if (tempObj.numbering == 'alphabet') {
						xx = (y == 0) ? tempObj.numberstartfrom : nextChar(xx);
					} else if (tempObj.numbering == 'number') {
						xx = (y + parseInt(tempObj.numberstartfrom));
					}else{
                        xx=''
                    }
					htmlStmt += xx + '</div>';
                    htmlStmt +=(((tempObj).options)[y]).image? `<img class="images-border" src="${(((tempObj).options)[y]).image}" alt="image"/>` : '';
                    htmlStmt += '<div class="tickBox">';
                    htmlStmt += '<span class="selectTick" style="display: none;"><i class="fa fa-check" aria-hidden="true"></i></span>';
                    htmlStmt += '</div>'; // end - tickBox

                    htmlStmt +=(((tempObj).options)[y]).text.length ? '<div class="tickContent">' + (((tempObj).options)[y]).text + '</div>' : '';
                    htmlStmt += '</div>'; // end - pick                    
                }
             

                htmlStmt += '</div>'; // end - ans_grup
                htmlStmt += '</div>';// end - tick_fields
                htmlStmt +=tempObj.image ? '<div class="image_wrap"><img src="' + tempObj.image + '"></div>' :'';
                htmlStmt +='</div></div>';  // d-flex / que
            }


            htmlStmt += '</div>'; // end - tick_group / justify-content-center / options
        }
    }
    // console.log('htmlStmt buildMcqBody >> ', htmlStmt);
    $(".activity_area").append(htmlStmt);
    setLoadedStatus(getCurrFileOrDirectory('file'));
}
function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}