function buildStereo(stereo_data){
    console.log("start")

    var color = stereo_data.bgColor_rgb;
    var rgbValues = color.match(/\d+/g);
    var red = parseInt(rgbValues[0]);
    var green = parseInt(rgbValues[1]);
    var blue = parseInt(rgbValues[2]);

    if(stereo_data.exist == true){
        slideHtml = '';
        slideHtml += '<div class="rotator">';
            slideHtml += '<div class="sterio_container">';
                slideHtml += '<div class="sterio">';
                    slideHtml += '<div class="top" style="background:linear-gradient(90deg, rgba(' +(red + 40) + ',' +(green + 40) + ',' + (blue + 40) + ') 25%, rgba(' + (red) + ',' + (green) + ',' + (blue) + ') 75%)">';
                    slideHtml += '</div>';
                    slideHtml += '<div class="right" style="background: rgba(' + (red) + ',' + (green - 40) + ',' + (blue - 40) + ') ">';
                        slideHtml += '<div class="right_div"></div>';
                    slideHtml += '</div>';
        
                    slideHtml += '<div class="player d-flex flex-column" style="background:linear-gradient(90deg, rgba(' +(red + 40) + ',' +(green + 40) + ',' + (blue + 40) + ') 25%, rgba(' + (red) + ',' + (green) + ',' + (blue) + ') 75%)">';
                        slideHtml += '<div class="controls">';
                            slideHtml += '<i class="rew fa fa-backward controls_back"></i>';
                            slideHtml += '<i class="fwd fa fa-forward controls_forward"></i>';
                            slideHtml += '<span class="demo_Btn1"></span>';
                            slideHtml += '<div class="volume">';
                            slideHtml += '</div>';
                            slideHtml += '<span class="demo_Btn2"></span>';
                        slideHtml += '</div>'; // end - controls
            
                        slideHtml += '<div class="tracker track_control"></div>';
                            slideHtml += '<div class="body_btns">';
                                slideHtml += '<span class="demo_Btn3"></span>';
                                slideHtml += '<span class="left_Btn"></span>';
                                slideHtml += '<span class="center_box_control">';
                                    slideHtml += '<span class="top_body">';
                                        slideHtml += '<span class="tape">';
                                            slideHtml += '<span class="tape_circle1"></span>';
                                            slideHtml += '<span class="tape_rect"></span>';
                                            slideHtml += '<span class="tape_circle2"></span>';
                                        slideHtml += '</span>';
                                    slideHtml += '</span>';
                                    slideHtml += '<div class="internal_controls">';
                                        slideHtml += '<i class="play fa fa-play"></i>';
                                        slideHtml += '<i class="pause fa fa-pause"></i>';
                                        slideHtml += '<i class="restart fa fa-sync-alt"></i>';
                                    slideHtml += '</div>';
                                slideHtml += '</span>';
                                slideHtml += '<span class="right_Btn"></span>';
                                slideHtml += '<span class="demo_Btn4"></span>';
                            slideHtml += '</div>';
                        slideHtml += '</div>';
            
                    slideHtml += '</div>';
                                            
                    slideHtml += '<div class="play-item">';
                        slideHtml += '<ul class="playlist"></ul>';
                    slideHtml += '</div>';
                    slideHtml += '<div class="sterio_hand">';
                    slideHtml += '<div class="right_hand">';
                        slideHtml += '<div class="front_face" style="background: rgba(' + (red) + ',' + (green) + ',' + (blue) + ')"></div>';
                        slideHtml += '<div class="right_face" style="background: rgba(' + (red) + ',' + (green - 40) + ',' + (blue - 40) + ') "></div>';
                    slideHtml += '</div>';
                    slideHtml += '<div class="left_hand">';
                        slideHtml += '<div class="front_face" style="background: rgba(' + (red + 40) + ',' + (green + 40) + ',' + (blue + 40 ) + ')"></div>';
                        slideHtml += '<div class="right_face" style="background: rgba(' + (red) + ',' + (green - 40) + ',' + (blue - 40) + ') "></div>';
                    slideHtml += '</div>';
                    slideHtml += '<div class="top_hand">';
                        slideHtml += '<div class="top_face" style="background:linear-gradient(90deg, rgba(' +(red + 40) + ',' +(green + 40) + ',' + (blue + 40) + ') 25%, rgba(' + (red) + ',' + (green) + ',' + (blue) + ') 75%)"></div>'; //********* */
                        slideHtml += '<div class="front_face" style="background:linear-gradient(90deg, rgba(' +(red + 40) + ',' +(green + 40) + ',' + (blue + 40) + ') 25%, rgba(' + (red) + ',' + (green) + ',' + (blue) + ') 75%)"></div>';
                    slideHtml += '</div>';
                slideHtml += '</div>';
            slideHtml += '</div>';
        slideHtml += '</div>';

        showRaduiBox()
        $('.mainContent').append(slideHtml);
    }
};

function showRaduiBox(){
    $(document).ready(function () {
		$(".sterio_hand").click(function () {
            if ($('.rotator').hasClass('active')) {
                $({ deg: 0 }).animate(
                    { deg: -92 },
                    {
                      duration: 1200,
                      step: function(now) {
                        $('.rotator').css({ transform: 'rotate(' + now + 'deg)' });
                        $('.rotator').removeClass('active');
                      }
                    }
                );
            } else {
                $({ deg: -92 }).animate(
                    { deg: 0 },
                    {
                      duration: 1200,
                      step: function(now) {
                        $('.rotator').css({ transform: 'rotate(' + now + 'deg)' });
                        $('.rotator').addClass('active');
                      }
                    }
                );
            }
            
		});
	});
}

function make_change_when_audio_play(audioElement) {
    const targetTime = [[0,15],[16,20],[21,30],[31,39],[40,42]];//target time in seconds
    audioElement.addEventListener('timeupdate', function() {
      
        const currentTime = parseInt(audioElement.currentTime);
        
        let statments = document.querySelectorAll(".background_audio");
        for(let currentSent=0; currentSent<targetTime.length; currentSent++){
            if (currentTime >= targetTime[currentSent][0]  && currentTime <= targetTime[currentSent][1]) {
                if(stereo_data.type == "phonics"){
                    statments.forEach(e =>{
                        e.style.opacity="0.5";
                    });
                    statments[currentSent].style.opacity="1";
                    console.log(currentTime);
                }else if(stereo_data.type == "text"){
                    statments.forEach(e =>{
                        e.style.backgroundColor="transparent";
                    });
                    // statments[currentSent].style.backgroundColor="#00ff3e75";
                    console.log(currentTime);
                }
                else if(stereo_data.type == "slider"){
                    $('.carousel').carousel(findTimeRange(currentTime, targetTime))
                }
                else if(stereo_data.type == "toggle_slide"){
                    $(".welcomeImage").hide(1000);
                    if(currentTime >= 0 && currentTime < 24){
                        $(".slide_rule").fadeIn(1000);
                        $(".slide_example").hide();
                        $(".example_toggle_btn").removeClass("selected_btn")
                        $(".rule_toggle_btn").addClass("selected_btn")
                    }else{
                        $(".slide_rule").hide();
                        $(".slide_example").fadeIn(1000);
                        $(".rule_toggle_btn").removeClass("selected_btn")
                        $(".example_toggle_btn").addClass("selected_btn")
                    }
                    console.log(currentTime);
                }
                else if(stereo_data.type == "flip_card"){
                    if(currentTime >= 0 && currentTime <10){
                        $(".box_list_1 .flipper").css("transform", "rotateY(180deg)")
                    }else if(currentTime >= 11 && currentTime <20){
                        $(".box_list_2 .flipper").css("transform", "rotateY(180deg)")
                    }else if(currentTime >= 21 && currentTime <30){
                        $(".box_list_3 .flipper").css("transform", "rotateY(180deg)")
                    }
                }
            } else if(currentTime > targetTime[currentSent][1] ){
                if(stereo_data.type == "phonics"){
                    statments[currentSent].style.opacity="0.5";
                }else if(stereo_data.type == "text"){
                    statments[currentSent].style.backgroundColor="transparent";
                }
                else if(stereo_data.type == "slider"){
                    
                }
                else if(stereo_data.type == "toggle_slide"){
                    $(".welcomeImage").hide(1000);
                }
                else if(stereo_data.type == "flip_card"){
                    $(".box_list_1 .flipper").css("transform", "rotateY(0deg)")
                    $(".box_list_2 .flipper").css("transform", "rotateY(0deg)")
                    $(".box_list_3 .flipper").css("transform", "rotateY(0deg)")
                }
            }  
        }
    });
}