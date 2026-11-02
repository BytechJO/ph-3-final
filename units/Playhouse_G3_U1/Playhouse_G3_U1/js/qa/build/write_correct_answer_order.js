function initActivity(activity){
	var html = '';
	html += '<ul>';
	jQuery.each(activity.questions, function(key, image){

		var default_answer = '';
		var default_answer_order = '';
		if((typeof(activity.default_answer)!='undefined') && (typeof(activity.default_answer[image])!='undefined') ){
			default_answer = activity.default_answer[image].answer;
			default_answer_order = activity.default_answer[image].order;
		}

		html += '<li><div class="question_image"><img src="../images/pages/activities/'+image+'" /></div><div class="question_text"><input type="text" class="answer_text" value="'+default_answer+'" /><input type="text" class="order_text" value="'+default_answer_order+'" /></div><div style="clear: both;"></div></li>';
	});
	html += '</ul>';
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
"heading":"Write the correct answers and Order",
"type":"write_correct_answer_order",
"questions":[
			"ARC_2_1_SB_U13_P143.png",
			"ARC_2_1_SB_U13_P144.png",
			"ARC_2_1_SB_U13_P145.png"
			],
"answers": [
			{"answer":"slice", "order":1},
			{"answer":"xyz", "order":2},
			{"answer":"abc", "order":3}
		   ],
"default_answer": {"ARC_2_1_SB_U13_P143.png":{"answer":"slice","order":1}}
};
*/