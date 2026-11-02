function buildLineDrawBody(aObj) {
    var htmlStmt = '';
    if (aObj != undefined && aObj != null && aObj != {}) {
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

        htmlStmt += '<div class="cont_ht_sf">';
        htmlStmt += '<div class="all_cont flex-wrap justify-content-center align-items-center justify-content-lg-center">';
       

        //---------------------------------------------
        var currentQue = 1;
        htmlStmt += '<div class="que options d-flex ">'; 
        htmlStmt += '<div class="lines"></div>';
        htmlStmt += '<div class="drag_wrap d-flex align-items-center"> <div class="dragger">';
        var onTextAudioPlay = (typeof aObj.ontextaudioplay != undefined && aObj.ontextaudioplay != null) ? aObj.ontextaudioplay:'color:#f6967d';
        var onImgAudioPlay = (typeof aObj.onimgaudioplay != undefined && aObj.onimgaudioplay != null) ? aObj.onimgaudioplay:'filter:brightness(1.2)';
        
        var dragsArr = (aObj.questions).drags;
        if (dragsArr.length > 0) {
            for (var dg = 0; dg < dragsArr.length; dg++) {
                console.log('drags : ', dg, dragsArr[dg].text);
                htmlStmt += '<div class="opt drag d-flex align-items-center" id="drag_' + (currentQue) + '_' + (dg + 1) + '">';

                if (dragsArr[dg].text != "" && dragsArr[dg].text != "no" && dragsArr[dg].image == "no") {
                    if(dragsArr[dg].audio == "" || dragsArr[dg].audio == "no"){
                        htmlStmt += '<div class="txtHolder">';
                    }else{
                        htmlStmt += '<div class="txtHolder audioTile" data-audio="' + dragsArr[dg].audio + '" data-onaudioplay="'+onTextAudioPlay+'">';
                    }
                    htmlStmt += dragsArr[dg].text + '</div>';
                } else {
                    if (dragsArr[dg].image != "no" && (dragsArr[dg].text == "no" || dragsArr[dg].text == "")) {
                        htmlStmt += '<div class="imgHolder"><img src="' + dragsArr[dg].image + '"></div>';
                    }else{
                        if (dragsArr[dg].image != "no" && dragsArr[dg].text != "no" ){
                            htmlStmt += '<div class="dragcont d-flex align-items-center">';
                            htmlStmt += '<div class="imgHolder"><img src="'+dragsArr[dg].image+'"></div>';
                            htmlStmt += '<div class="txtHolder audioTile" data-audio="' + dragsArr[dg].audio + '" data-onaudioplay="'+onTextAudioPlay+'">';
                            htmlStmt +=  dragsArr[dg].text + '</div>';
                            htmlStmt += '</div>';
                        }
                    }
                }
                htmlStmt += '<div class="node dragPoint" ></div>';
                htmlStmt += '</div>';
            }
        }
        htmlStmt += '</div></div>';// end - dragger /drag_wrap
        htmlStmt += ' <div class="drop_wrap d-flex align-items-center">';
        htmlStmt += ' <div class="droppers">';
        var dropsArr = (aObj.questions).drops;
        if (dropsArr.length > 0) {
            for (var dp = 0; dp < dropsArr.length; dp++) {
                htmlStmt += '<div class="opt drop d-flex align-items-center" id="drop_' + (currentQue) + '_' + (dp + 1) + '">';
                htmlStmt += '<div class="node dropPoint" ></div>';
                htmlStmt += '<div class="drop_grp">';
                if (dropsArr[dp].text != "" && dropsArr[dp].text != "no" && dropsArr[dp].image == "no") {
                    if(dropsArr[dp].audio == "" || dropsArr[dp].audio == "no"){
                        htmlStmt += '<div class="txtHolder">';
                    }else{
                        htmlStmt += '<div class="txtHolder audioTile" data-audio="' + dropsArr[dp].audio + '" data-onaudioplay="'+onTextAudioPlay+'">';
                    }
                    htmlStmt += dropsArr[dp].text + '</div>';
                } else {
                    if (dropsArr[dp].image != "no") {
                        if (dropsArr[dp].audio == "no" || dropsArr[dp].audio == "") {
                            htmlStmt += '<div class="imgHolder">';
                        } else {
                            htmlStmt += '<div class="imgHolder audioTile" data-audio="' + dropsArr[dp].audio + '" data-onaudioplay="'+onImgAudioPlay+'">';                            
                        }
                        htmlStmt += '<div class="img_space"><img src="' + dropsArr[dp].image + '"></div>'; // end - img_space 
                        htmlStmt += '</div>'; // end - imgHolder 
                    }
                }

                htmlStmt += '<div class="icon_wrap_holder">';
                htmlStmt += '<div class="icon_wrap" ><div class="tick"><img src="../images/icons/check_btn.png"></div><div class="cross"><img src="../images/icons/cross_btn.png"></div></div>';
                htmlStmt += '</div>';// end - icon_wrap_holder  
                htmlStmt += '</div>';// end - drop_grp        
                htmlStmt += '</div>';// end - opt drag
            }
        }
        htmlStmt += '</div>';// end - div
        htmlStmt += '</div>';// end - drop_wrap
        
        htmlStmt += '</div> <!-- //que ends -->';// end - que
       
        if(aObj.image != undefined && aObj.image != "") {
            htmlStmt += '<div class="q_img"><img src="' + aObj.image + '"></div>';
        }

        // ================================================
        if(aObj.rightImage != undefined && aObj.rightImage != ""){
			htmlStmt += '<div class="right-image-container">';
			htmlStmt += '<img class="right-image" src="' + aObj.rightImage + '" alt="image"/>';
			htmlStmt += '<div class="textOnImage-container">';
			for (t = 0; t < aObj.rightText.length; t++) {
				htmlStmt += ' <div class="audioIcon off textOnImage" data-audio="' + aObj.rightTextAudio[t] + '" style="display: block;">' + aObj.rightText[t] + '</div> ';
			}
			htmlStmt += '</div>';
			htmlStmt += '</div>';
		}
        // ==================================================

        htmlStmt += '</div> <!-- //all_cont -->';// end - all_cont
        htmlStmt += '</div> <!-- //cont_ht_sf -->';// end - cont_ht_sf
        $(".activity_area").append(htmlStmt);
        setLoadedStatus(getCurrFileOrDirectory('file'));
    }
}