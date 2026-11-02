function initActivity(activity){
	var html = '';
	html += '<div>';
	jQuery.each(activity.questions, function(key, value){

		var default_answer = '';
		var disabled_attr = '';
		if(
			(typeof(activity.default_answer)!='undefined') && 
			(typeof(activity.default_answer[value])!='undefined')
		  )
		{
			default_answer = activity.default_answer[value];
		}

		if(default_answer!=''){
			disabled_attr = 'disabled';
		}

		html += '<div class="image_div"><img class="question_image" src="../images/pages/activities/'+value+'" /><br /><input type="text" '+disabled_attr+' value="'+default_answer+'" /></div>';
	});
	html += '</div>';

	writeHtml(activity, html);
	jQuery('.activity_container .activity-content').on('keypress', function(){ 
		detectKeyPress();
	});

	disableBtns();
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
"image":"new_keyboard.png",
"heading":"Write the correct answers",
"type":"fill_answer_image_vertical",
"questions":[
				"ARC_2.1_SB_U3_P31_A1_I2.png",
				"ARC_2.1_SB_U3_P31_A1_I3.png",
				"ARC_2.1_SB_U3_P31_A1_I4.png",
			],
"answers": [
		   	"abc",
		   	"efg",
		   	"xyz",
		   ],
"default_answer":{"ARC_2.1_SB_U3_P31_A1_I2.png":"abc"}
};
*/