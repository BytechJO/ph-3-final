function buildReadingHTML(aObj) {
    var slide = '';
    var slideHtml = "";
    slideHtml = "<div class='container content_wrap reading_container'>";

    slideHtml +=  '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1"><a href=""><img src="../images/icons/back_btn.png"></a></div>';
    slideHtml +=  '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1"><a href=""><img src="../images/icons/next_btn.png"></a></div>';

    slideHtml += '<div class="act_head_group justify-content-center">';
        slideHtml += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '">';
            slideHtml += '<div class="q-type-img-container">';
            slideHtml += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
            if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
                slideHtml += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right:'+aObj.mainTitleIconPos.right+';">';
            }
            slideHtml += '</div>';
        slideHtml += '</div>';

        slideHtml += '<div class="activityHeading">'
            slideHtml += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
            slideHtml += "<div class='page_sub_title'>";
                slideHtml += "<p> " + aObj.subTitleTextLeft + " </p>";
                for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
                    slideHtml += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
                }
                slideHtml += "<br/><p> " + aObj.subTitleTextRight + " </p>";
            slideHtml += "</div>";
            slideHtml += '</div>';
        slideHtml += '</div>';
    slideHtml += '</div>';

    slideHtml += "<div class='options cont_ht_sf mx-auto'>";
    slideHtml += "<div class='all_cont d-flex justify-content-center align-items-center'>";
    // slideHtml += "<div class='slides cont_group my-3'>";
    if (typeof aObj !== undefined && aObj.slides.length != 0 && aObj != null) {
        for (var slideIndex = 0; slideIndex < aObj.slides.length; slideIndex++) {
            slide = aObj.slides[slideIndex];
            if (slide.layout == 'text_on_image'){
                if (slide.wordsBackground != undefined){
                    slideHtml += "<div class='d-flex read_grammer' style='text-align: center;'>";
                    allWords = slide.words
                    slideHtml += "<div class='grammer_container'>";
                    slideHtml += "<img src='" + slide.wordsBackground + "'/>";
                    slideHtml += "<div class='words_container d-flex justify-content-around'>";
                    for (var wordsIndex = 0; wordsIndex < allWords.length; wordsIndex++) {
                        slideHtml += "<div class='snap_card audioIcon mx-0 mx-md-auto audioTile' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + slide.audios[wordsIndex] + "'data-onaudioplay='color:#e43b6d'>"
                        slideHtml += "<p> " + allWords[wordsIndex] + " </p>"
                        slideHtml += "</div>";
                    }
                    slideHtml += "</div>";
                    slideHtml += "</div>";
                    slideHtml += "</div>";
                }
 
                slideHtml += "<div class='image_with_text'>";
                slideHtml += "<div class='main_image'>";
                slideHtml += "<img src='" + slide.mainImage + "'/>";
                slideHtml += "</div>";
                for (var convIndex = 0; convIndex < slide.convImage.length; convIndex++) {
                    conv = slide.convImage[convIndex];
                    slideHtml += "<div class='image_audio' style='top:" + conv.imgPos["top"] + " ; left:" + conv.imgPos["left"] + " ;'>";
                    slideHtml += "<div class='snap_card audioIcon mx-0 mx-md-auto' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + conv.audio + "'data-onaudioplay='color:#e43b6d'>"
                    if (conv.songText != undefined){
                        slideHtml += "<p class='song_text'>" + conv.songText + "'</p>";
                    } else {
                        slideHtml += "<img src='" + conv.img + "'/>";
                    }
                    slideHtml += "</div>";
                    slideHtml += "</div>";
                }
                slideHtml += "</div>";
            } else if(slide.layout == 'grammar_slide'){
                var curIndex = 0;
                var wordStyle = 0;
                var audioArry = slide.audio;
                var wordArray = slide.word;
                var wordArray_examples = slide.example_word;
                var imageArray = slide.image;
                slideHtml += "<div class='d-flex justify-content-center align-items-center grid_columns_container " + slide.parentClassName + "'>";
                    slideHtml += "<div class='letters_container d-flex flex-wrap justify-content-center'>";
                    for(let x=0; x < slide.letters.length; x++){
                        slideHtml += "<div class='letter letter-"+x+" bounce2'>"+slide.letters[x]+"</div>";
                    }
                    slideHtml += "</div>";

                slideHtml += "<div class='col_grid_container'>";
                slideHtml += "<div class='gram_title d-flex justify-content-center'>"+slide.gram_title+"</div>";
                    slideHtml += "<div class='buttons_container d-flex flex-wrap'>";
                        slideHtml += "<div class='gram_btn rule pulse rule_toggle_btn'>"+slide.slide_1_title+"</div>";
                        slideHtml += "<div class='gram_btn Example pulse example_toggle_btn'>"+slide.slide_2_title+"</div>";  
                    slideHtml += "</div>";
                    slideHtml += "<img src='" + slide.welcomeImage + "' class='welcomeImage'/>";
                    // == border divs ================
                    slideHtml += "<div class='div_border top_border'></div>";
                    slideHtml += "<div class='div_border left_border'></div>";
                    slideHtml += "<div class='div_border right_border'></div>";
                    slideHtml += "<div class='div_border bottom_border'></div>";
                    // ===============================
                    slideHtml += "<div class='snap_group_all cont_group'>";
                        slideHtml += "<div class='slide_rule' style='display:none'>";
                            var ImagePos = slide.imagePlacePos;
                            var examplesTextPos = slide.examplesTextPos;
                            if (ImagePos != undefined) {
                                for (var snapIndex = 0; snapIndex < ImagePos.length; snapIndex++) {
                                    slideHtml += "<div class='snap_group_" + Number(snapIndex + 1) + " row mx-0 rule_text'>";
                                    for (var imgIndex = 0; imgIndex < ImagePos[snapIndex].colData.length; imgIndex++) {
                                        slideHtml += "<div class='col-12 col-md-" + ImagePos[snapIndex].colWidth[imgIndex] + " col_card'>";
                                        slideHtml += "<div class='snap_card mx-0 mx-md-auto audioIcon' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + audioArry[curIndex] + "'data-onaudioplay='color:#e43b6d'>"
                                        console.log("__", ImagePos[snapIndex])
                                        if (ImagePos[snapIndex].colData[imgIndex] != 0) {
                                            wordStyle = curIndex + 1;
                                            slideHtml += "<div class='ss_word ss_t_" + wordStyle + "'><div class='ss_text background_audio'>" + wordArray[curIndex] + "</div></div>";
                                            curIndex++;
                                        }
                                        slideHtml += "</div></div>"
                                    }
                                    slideHtml += "</div>";
                                }
                            }
                        slideHtml += "</div>";
                        slideHtml += "<div class='slide_example' style='display:none'>";
                            var ImagePos = slide.imagePlacePos;
                            var examplesTextPos = slide.examplesTextPos;
                            if (examplesTextPos != undefined) {
                                curIndex = 0;
                                for (var snapIndex = 0; snapIndex < examplesTextPos.length; snapIndex++) {
                                    slideHtml += "<div class='snap_group_" + Number(snapIndex + 1) + " row mx-0 example_text'>";
                                    for (var imgIndex = 0; imgIndex < examplesTextPos[snapIndex].colData.length; imgIndex++) {
                                        slideHtml += "<div class='col-12 col-md-" + examplesTextPos[snapIndex].colWidth[imgIndex] + " col_card'>";
                                        slideHtml += "<div class='snap_card mx-0 mx-md-auto audioIcon' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + audioArry[curIndex] + "'data-onaudioplay='color:#e43b6d'>"
                                        console.log("__", examplesTextPos[snapIndex])
                                        if (examplesTextPos[snapIndex].colData[imgIndex] != 0) {
                                            wordStyle = curIndex + 1;
                                            slideHtml += "<div class='ss_word ss_t_" + wordStyle + "'><div class='ss_text background_audio'>" + wordArray_examples[curIndex] + "</div></div>";
                                            curIndex++;
                                        }
                                        slideHtml += "</div></div>"
                                    }
                                    slideHtml += "</div>";
                                }
                            }
                        slideHtml += "</div>";
                    slideHtml += "</div>";
                slideHtml += "</div>";
            slideHtml += "</div>";
                
            } else if (slide.layout == 'grid_columns'){
                    var curIndex = 0;
                    var wordStyle = 0;
                    var audioArry = slide.audio;
                    var wordArray = slide.word;
                    slideHtml += "<div class='d-flex justify-content-center align-items-center grid_columns_container " + slide.parentClassName + "'>";
                    slideHtml += "<img class='background_img' src='" + slide.mainImage + "' style='height: 500px;'/>";
                    slideHtml += "<div class='snap_group_all cont_group'>"
                    var ImagePos = slide.imagePlacePos;
                    if (ImagePos != undefined) {
                        for (var snapIndex = 0; snapIndex < ImagePos.length; snapIndex++) {
                            slideHtml += "<div class='snap_group_" + Number(snapIndex + 1) + " row mx-0'>";
                            for (var imgIndex = 0; imgIndex < ImagePos[snapIndex].colData.length; imgIndex++) {
                                slideHtml += "<div class='reading_slide_grid col-12 col-md-" + ImagePos[snapIndex].colWidth[imgIndex] + "'>";
                                slideHtml += "<div class='snap_card mx-0 mx-md-auto audioIcon' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + audioArry[curIndex] + "'data-onaudioplay='color:#e43b6d'>"
                                console.log("__", ImagePos[snapIndex])
                                if (ImagePos[snapIndex].colData[imgIndex] != 0) {
                                    wordStyle = curIndex + 1;
                                    slideHtml += "<div class='ss_word ss_t_" + wordStyle + "'><div class='ss_text'>" + wordArray[curIndex] + "</div></div>";
                                    curIndex++;
                                }
                                slideHtml += "</div></div>"
                            }
            
                            slideHtml += "</div>";
                        }
                    }
                    slideHtml += "</div>";
                    slideHtml += "</div>";
                slideHtml += "</div>";
            }  else if (slide.layout == "multible_flex_containers") {
                slideHtml += "<div class='multible_boxes_container d-flex'>";
                for (var boxnum = 0; boxnum < slide.boxes.length; boxnum++) {
                    slideHtml += "<div class='box_container box_" + Number(boxnum+1) + "'>";
                    // for (var boxObj = 0; boxObj < slide.boxes[boxnum].length; boxObj++) {
                        slideHtml += "<div class='word_with_image'>";
                            slideHtml += "<div class='snap_card audioIcon' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + slide.boxes[boxnum].audio + "'data-onaudioplay='color:#e43b6d'>"
                                // slideHtml += "<p class='box_word'>" + slide.boxes[boxnum][sentence] + "</p>";
                                slideHtml += "<img src='" + slide.boxes[boxnum].image + "' class='box_image'/>";
                                if (slide.boxes[boxnum].word != undefined) {
                                    slideHtml += "<img src='" + slide.boxes[boxnum].word + "' class='box_word'/>";
                                }
                            slideHtml += "</div>";
                        slideHtml += "</div>";
                    // }
                    slideHtml += "</div>";
                }
                slideHtml += "</div>";
            } else if (slide.layout == "multible_flex_containers_with_list") {
                slideHtml += "<div class='boxes_with_list_container d-flex'>";
                for (var boxnum = 0; boxnum < slide.boxes.length; boxnum++) {
                    slideHtml += "<div class='boxe_list_container box_list_" + Number(boxnum+1) + "'>";
                        slideHtml += "<div class='list_container'>";
                            slideHtml += '<div class="flip-container">';
                                slideHtml += '<div class="flipper">';
                                    
                                    slideHtml += '<div class="front">';
                                        slideHtml += '<img src="'+ slide.boxes[boxnum].image +'" alt="Front Image">';
                                    slideHtml += '</div>';
                                    
                                    slideHtml += '<div class="back">';
                                        // slideHtml += '<img src="'+ slide.boxes[boxnum].image + '" alt="Back Image">';
                                        slideHtml += "<ul class='list_under_image'>";
                                            for (var item = 0; item < slide.boxes[boxnum].list.length; item++) {
                                                slideHtml += "<li>";
                                                    slideHtml += "<div class='snap_card audioIcon' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + slide.boxes[boxnum].audio[item] + "'data-onaudioplay='color:#e43b6d'>"
                                                    slideHtml += "<p>" + slide.boxes[boxnum].list[item] + "</p>";
                                                    slideHtml += "</div>";
                                                slideHtml += "</li>";
                                            }
                                                slideHtml += "</div>";
                                        slideHtml += "</ul>";

                                    slideHtml += '</div>';
                                slideHtml += '</div>';
                            slideHtml += '</div>';
                    slideHtml += "</div>";
                }
                slideHtml += "</div>";
            }
        }
        slideHtml += "</div></div></div>";
        $(".mainContent").append(slideHtml);
        showRuleSlide()
        showExampleSlide()
        showSentenceImg()
        setLoadedStatus(getCurrFileOrDirectory('file'));

    }
}


function showSentenceImg(){
    $(document).ready(function () {
        $(".imgToggle").click(
            function () {
            var imgName = $(this).data("img");
            $('.'+imgName).fadeToggle(1000);
        }
        );
    });
}

function showRuleSlide(){
    $(document).ready(function () {
        $(".rule_toggle_btn").click(function () {
           $(".welcomeImage").fadeOut(1000);
           $(".slide_example").hide();
           $(".slide_rule").fadeIn(1000);
           $(".example_toggle_btn").removeClass("selected_btn")
           $(this).addClass("selected_btn")
        });
    });
}


function showExampleSlide(){
    $(document).ready(function () {
        $(".example_toggle_btn").click(function () {
            $(".welcomeImage").fadeOut(1000);
            $(".slide_rule").hide();
            $(".slide_example").fadeIn(1000);
            $(".rule_toggle_btn").removeClass("selected_btn")
            $(this).addClass("selected_btn")
        });
    });
}
