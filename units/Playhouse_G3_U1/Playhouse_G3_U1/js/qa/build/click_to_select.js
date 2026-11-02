function initActivity(activity){
	var html = '';
	html += '<ul>';
	jQuery.each(activity.questions, function(key, value){
		html += '<li onclick="select_this(this, 0)" data-value="'+value+'"><div class="option_image"><img src="../images/pages/activities/'+value+'" /></div><div align="center" class="result">&nbsp;</div></li>';
	});
	html += '<input type="hidden" />';
	html += '</ul>';
	writeHtml(activity, html);
	jQuery('.activity_container .activity-content').on('click', function(){ 
		detectOnClick();
	});
}

//Example

/*
var stereo_data = {
    "audio":"",
    "exist":false,
    "bgColor_rgb":"rgb(53, 130, 180)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/demo.mp3',
        },
        {
          'url': '',
        },
        {
          'url': '',
        },
        {
          'url': '',
        }
    ],
  }
var _activity_json = {
"image":"new_click.png",
"heading":"Circle what the boy said, “See you in the morning,” to.",
"type":"click_to_select",
"questions":[
				"ARC_2.1_SB_U3_P31_A1_I1.png", 
				"ARC_2.1_SB_U3_P31_A1_I2.png", 
				"ARC_2.1_SB_U3_P31_A1_I3.png", 
				"ARC_2.1_SB_U3_P31_A1_I4.png", 
				"ARC_2.1_SB_U3_P31_A1_I5.png"
			],
"answer": "ARC_2.1_SB_U3_P31_A1_I4.png"
};
*/