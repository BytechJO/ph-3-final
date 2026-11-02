function initActivity(activity){
	var html = '';
	html += '<ul>';
	jQuery.each(activity.questions, function(question, image){

		var default_answer = '';
		if((typeof(activity.default_answer)!='undefined') && (typeof(activity.default_answer[question])!='undefined') ){
			default_answer = activity.default_answer[question];
		}

		var question = question+"";
		html += '<li><div class="question_image"><img src="../images/pages/activities/'+image+'" /></div><div class="question_text">'+question.replace('___', '<br /><input type="text" value="'+default_answer+'" />')+'</div><div style="clear: both;"></div></li>';
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
"heading":"Write the correct answers",
"type":"write_correct_answer_image_left",
"questions":{
			"What do you call a piece of pizza1 ___":"ARC_2_1_SB_U13_P143.png",
			"What do you call a piece of pizza2 ___":"ARC_2_1_SB_U13_P144.png",
			"What do you call a piece of pizza3 ___":"ARC_2_1_SB_U13_P145.png",
			},
"answers": ["slice","xyz","abc"],
"default_answer": {"What do you call a piece of pizza1 ___":"slice"}
};
*/