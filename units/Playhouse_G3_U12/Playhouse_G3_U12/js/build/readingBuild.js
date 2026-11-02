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
            slideHtml += "<div class='page_sub_title d-flex'>";
                slideHtml += "<p> " + aObj.subTitleTextLeft + " </p>";
                for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
                    slideHtml += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
                }
                slideHtml += "<p> " + aObj.subTitleTextRight + " </p>";
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
                        slideHtml += "<div class='snap_card audioIcon mx-0 mx-md-auto audioTile audioIcon' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + slide.audios[wordsIndex] + "'data-onaudioplay='color:#e43b6d'>"
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
            } else if (slide.layout == 'grid_columns'){  // needed
                    var curIndex = 0;
                    var wordStyle = 0;
                    var audioArry = slide.audio;
                    var wordArray = slide.word;
                    var imageArray = slide.image;
                    slideHtml += "<div class='d-flex justify-content-center align-items-center grid_columns_container " + slide.parent_class_name + "'>";
                        slideHtml += "<div class='col_grid_container'>";
                            
                            if (slide.middleImage != undefined && slide.middleImage != '') {
                                slideHtml += "<img src='" + slide.middleImage + "' class='middle_image' />";
                            }
                            slideHtml += "<div class='snap_group_all cont_group' style='" + slide.group_styles + "'>";
                                if (slide.grid_main_title != undefined && slide.grid_main_title != '' ) {
                                    slideHtml += "<div class='grid_main_title_container'>";
                                    slideHtml += "<img src='" + slide.grid_main_title + "' class='grid_main_title_img'/>";
                                    slideHtml += "<div class='snap_card audioIcon grid_main_title_text' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + slide.grid_main_title_text_audio + "'data-onaudioplay='color:#e43b6d'>"
                                    slideHtml += "<div class=''>" + slide.grid_main_title_text + "</div>"
                                    slideHtml += "</div>";
                                    slideHtml += "</div>";
                                }
                                if (slide.topText) {    
                                    slideHtml += "<div class='top_image_text d-flex'>"
                                    slideHtml += "<img src='" + slide.topImage + "' class='top_image' />";
                                    slideHtml += "<div class='snap_card audioIcon' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + slide.topText_audio + "'data-onaudioplay='color:#e43b6d'>"
                                    slideHtml += "<div class='ss_text'>" + slide.topText + "</div>"
                                    slideHtml += "</div>";
                                    slideHtml += "</div>";
                                }
                                if (slide.top_right_image) {
                                    slideHtml += "<img src='" + slide.top_right_image + "' class='top_right_image'/>";
                                }
                                var ImagePos = slide.imagePlacePos;
                                if (ImagePos != undefined) {
                                    for (var snapIndex = 0; snapIndex < ImagePos.length; snapIndex++) {
                                        slideHtml += "<div class='snap_group_" + Number(snapIndex + 1) + " row mx-0'>";
                                        for (var imgIndex = 0; imgIndex < ImagePos[snapIndex].colData.length; imgIndex++) {
                                            slideHtml += "<div class='col-12 col-md-" + ImagePos[snapIndex].colWidth[imgIndex] + "'>";
                                            slideHtml += "<div class='snap_card audioIcon' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + audioArry[curIndex] + "'data-onaudioplay='color:#e43b6d'>"
                                            console.log("__", ImagePos[snapIndex])
                                            if (ImagePos[snapIndex].colData[imgIndex] != 0) {
                                                wordStyle = curIndex + 1;
                                                if (slide.word != undefined) {
                                                    slideHtml += "<div class='ss_word ss_t_" + wordStyle + "'><div class='ss_text'>" + wordArray[curIndex] + "</div></div>";
                                                } else {
                                                    slideHtml += "<img src='" + imageArray[curIndex] + "' class='img_card' />";
                                                }
                                                curIndex++;
                                            }
                                            slideHtml += "</div></div>"
                                        }
                                        slideHtml += "</div>";
                                    }
                                }
                                // slideHtml += "</div>";
                            slideHtml += "</div>";
                            var bottomImagePos = slide.bottomImagePlacePos;
                            if (bottomImagePos != undefined) {
                                var bottomAudioArry = slide.bottomAudio;
                                var bottomWordArray = slide.bottomWord;
                                var curIndex = 0;
                                var wordStyle = 0;

                                slideHtml += "<div class='snap_group_bottom'>"
                                slideHtml += "<img src='" + slide.bottomImage + "' class='back_bottom_image' />";
                                // bottomImage
                                // bottomAudio
                                // bottomWord
                                // bottomImagePlacePos
                                for (var snapIndex = 0; snapIndex < bottomImagePos.length; snapIndex++) {
                                    slideHtml += "<div class='snap_group_" + Number(snapIndex + 1) + " row mx-0'>";
                                    for (var imgIndex = 0; imgIndex < bottomImagePos[snapIndex].colData.length; imgIndex++) {
                                        slideHtml += "<div class='col-12 col-md-" + bottomImagePos[snapIndex].colWidth[imgIndex] + "'>";
                                        slideHtml += "<div class='snap_card audioIcon' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + bottomAudioArry[curIndex] + "'data-onaudioplay='color:#e43b6d'>"
                                        console.log("__", bottomImagePos[snapIndex])
                                        if (bottomImagePos[snapIndex].colData[imgIndex] != 0) {
                                            wordStyle = curIndex + 1;
                                            slideHtml += "<div class='ss_word ss_t_" + wordStyle + "'><div class='ss_text'>" + bottomWordArray[curIndex] + "</div></div>";
                                            curIndex++;
                                        }
                                        slideHtml += "</div></div>"
                                    }
                                    slideHtml += "</div>";
                                }
                                slideHtml += "</div>";
                            }
                        slideHtml += "</div>";
                    slideHtml += "</div>";
            } else if (slide.layout == "writing_tips") {
                slideHtml += "<div class='writing_tips_content_holder'>";
                    slideHtml += "<div class='writing_tips'>";
                        slideHtml += "<div class='writing_tips_background_image_container'>";
                            slideHtml += "<img src='" + slide.background_image + "' class='writing_tips_background_image'/>";
                        slideHtml += "</div>";

                        slideHtml += "<div class='writing_tips_top_right_image_image_container'>";
                            slideHtml += "<img src='" + slide.top_right_image + "' class='writing_tips_top_right_image'/>";
                        slideHtml += "</div>";

                        slideHtml += "<div class='writing_tips_container'>";
                            slideHtml += "<div class='writing_tips_header'>";
                                slideHtml += "<div class='snap_card audioIcon' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + "aa" + "'data-onaudioplay='color:#e43b6d'>"
                                    slideHtml += "<p>" + slide.header + "</p>";
                                slideHtml += "</div>";
                            slideHtml += "</div>";
                            
                            slideHtml += "<div class='snap_card audioIcon' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + "aa" + "'data-onaudioplay='color:#e43b6d'>"
                                // slideHtml += "<img src='" + slide.inner_image + "' class='writing_tips_inner_image'/>";
                                slideHtml += slide.paragraph;
                            slideHtml += "</div>";
                        slideHtml += "</div>";
                    slideHtml += "</div>"; 
                slideHtml += "</div>";
            } else if (slide.layout == "multiple_grid_containers") {
                slideHtml += "<div class='" + slide.parent_class_name + "'>";
                    slideHtml += "<div class='snap_card audioTile audioIcon' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + slide.mainTextAudio + "'data-onaudioplay='color:#e43b6d'>"
                        slideHtml += "<div class='main_text'>" + slide.mainText + "</div>";
                    slideHtml += "</div>";

                    slideHtml += "<div class='all_cont boxes_container d-flex justify-content-center align-items-center'>";
                        for (var arrows = 0; arrows < slide.arrowsImages.length; arrows++) {
                            slideHtml += "<img src='" + slide.arrowsImages[arrows] + "' class='arrows_images_" + Number(slideIndex + 1) + "_" + + arrows + "'/>";
                        }
                        for (var box = 0; box < slide.imagePlacePos.length; box++) {
                            var curIndex = 0;
                            var wordStyle = 0;
                            slideHtml += "<div class='box_with_text'>"
                                if (slide.mainImage[box] != undefined) {
                                    slideHtml += "<img src='" + slide.mainImage[box] + "' class='grammer_background'/>";
                                }
                                if (slide.boxTitle[box] != undefined) {
                                    slideHtml += "<div class='snap_card audioTile audioIcon box_title' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + slide.boxTitleAudio[box] + "'data-onaudioplay='color:#e43b6d'>"
                                        slideHtml += "<p>" + slide.boxTitle[box] + "</p>";
                                    slideHtml += "</div>";
                                }
                                groupClass = slide.word[box][curIndex].charAt(0) == '.' ? 'snap_group_single_images' : 'snap_group_single'
                                slideHtml += "<div class='" + groupClass + " cont_group'>"
                                var ImagePos = slide.imagePlacePos[box];
                                var audioArry = slide.audio[box];
                                var wordArray = slide.word[box];
                                if (ImagePos != undefined) {
                                    for (var snapIndex = 0; snapIndex < ImagePos.length; snapIndex++) {
                                        slideHtml += "<div class='snap_group_" + Number(snapIndex + 1) + " row'>";
                                        for (var imgIndex = 0; imgIndex < ImagePos[snapIndex].colData.length; imgIndex++) {
                                            slideHtml += "<div class='col-12 col-md-" + ImagePos[snapIndex].colWidth[imgIndex] + "'>";
                                            slideHtml += "<div class='snap_card audioTile audioIcon' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + audioArry[curIndex] + "'data-onaudioplay='color:#e43b6d'>"
                                            console.log("__", ImagePos[snapIndex])
                                            if (ImagePos[snapIndex].colData[imgIndex] != 0) {
                                                wordStyle = curIndex + 1;
                                                // debugger
                                                if (wordArray[curIndex].charAt(0) == '.') {
                                                    slideHtml += "<img src='" + slide.word[box][curIndex] + "' class='ss_image' />";
                                                } else {
                                                    slideHtml += "<div class='ss_word ss_t_" + wordStyle + "'><div class='ss_text'>" + wordArray[curIndex] + "</div></div>";
                                                }
                                                curIndex++;
                                            }
                                            slideHtml += "</div></div>"
                                        }
                        
                                        slideHtml += "</div>";
                                    }
                                }
                                slideHtml += "</div>";
                            slideHtml += "</div>";
                        }
                    slideHtml += "</div>";
                slideHtml += "</div>";
            } else if (slide.layout == "multible_image_with_text") {
                slideHtml += "<div class='image_with_text'>";
                slideHtml += "<img src='" + slide.secondImage + "' class='image_floating_right'/>";
                slideHtml += "<div class='main_image'>";
                slideHtml += "<img src='" + slide.mainImage + "' class='main_image_background'/>";
                slideHtml += "</div>";
                slideHtml += "<div class='snap_card audioTile audioIcon title_text' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + slide.titleAudio + "'data-onaudioplay='color:#e43b6d'>"
                slideHtml += "<p>" + slide.titleText + "'</p>";
                slideHtml += "</div>";
                for (var convIndex = 0; convIndex < slide.convImage.length; convIndex++) {
                    conv = slide.convImage[convIndex];
                    slideHtml += "<div class='image_audio' style='top:" + conv.imgPos["top"] + " ; left:" + conv.imgPos["left"] + " ;'>";
                    slideHtml += "<div class='snap_card mx-0 mx-md-auto audioTile audioIcon' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + conv.audio + "'data-onaudioplay='color:#e43b6d'>"
                    // slideHtml += "<img src='" + conv.img + "'/>";
                    slideHtml += "<p class='song_text'>" + conv.songText + "</p>";
                    slideHtml += "</div>";
                    slideHtml += "</div>";
                }
                slideHtml += "</div>";
            } else if (slide.layout == "adventure_images_with_text") {
                slideHtml += "<div class='image_with_text " + slide.parent_class_name + "'>";
                    if (slide.secondImage != undefined) {
                        slideHtml += "<img src='" + slide.secondImage + "' class='image_floating_right'/>";
                    }
                    slideHtml += "<div class='main_image'>";
                    slideHtml += "<img src='" + slide.mainImage + "' class='main_image_background'/>";
                    slideHtml += "</div>";
                    if (slide.titleText != undefined && slide.titleText != '') {
                        slideHtml += "<div class='title_text_container'>"
                            slideHtml += "<div class='snap_card audioIcon title_text' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + slide.titleAudio + "'data-onaudioplay='color:#e43b6d'>"
                                slideHtml += "<p class='title_text'>" + slide.titleText + "</p>";
                            slideHtml += "</div>";
                            slideHtml += "<img src='" + slide.titleImage + "' class='title_right_image_background'/>";
                        slideHtml += "</div>";
                    } else {
                        slideHtml += "<div class='snap_card audioIcon title_image' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + slide.titleAudio + "'data-onaudioplay='color:#e43b6d'>"
                        slideHtml += "<img src='" + slide.titleImage + "' class='title_image_background'/>";
                        slideHtml += "</div>";
                    }
                    for (var convIndex = 0; convIndex < slide.convImage.length; convIndex++) {
                        conv = slide.convImage[convIndex];
                        slideHtml += "<div class='image_audio' style='top:" + conv.imgPos["top"] + " ; left:" + conv.imgPos["left"] + " ;'>";
                        slideHtml += "<div class='snap_card mx-0 mx-md-auto audioIcon' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + conv.audio + "'data-onaudioplay='color:#e43b6d'>"
                        slideHtml += "<p class='song_text'>" + conv.songText + "</p>";
                        slideHtml += "</div>";
                        slideHtml += "</div>";
                    }
                slideHtml += "</div>";
            }
        }
        slideHtml += "</div></div></div>";
        $(".mainContent").append(slideHtml);
        setLoadedStatus(getCurrFileOrDirectory('file'));

    }
}        
