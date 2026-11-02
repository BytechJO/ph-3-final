function initActivity(activity){
	var html = '';
	html += '<ul>';
	jQuery.each(activity.questions, function(question, image){

		var default_answer = '';
		if((typeof(activity.default_answer)!='undefined') && (typeof(activity.default_answer[question])!='undefined') ){
			default_answer = activity.default_answer[question];
		}

		var question = question+"";
		html += '<li><div class="question_text">'+question.replace('___', '<input type="text" value="'+default_answer+'" /><br />')+'</div><div class="question_image"><img src="../images/pages/activities/'+image+'" /></div><div style="clear: both;"></div></li>';
	});
	html += '</ul>';
	writeHtml(activity, html);
	jQuery('.activity_container .activity-content').on('keypress', function(){ 
		detectKeyPress();
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
"image":"new_keyboard.png",
"heading":"Write the correct answers",
"type":"write_correct_answer_image",
"questions":{
			"___ What do you call a piece of pizza":"ARC_2.1_SB_U3_P31_A1_I4.png",
			"___ What do you call a piece of abc":"ARC_2.1_SB_U3_P31_A1_I5.png"
			},
"answers": ["slice","xyz"],
"default_answer": {"___ What do you call a piece of pizza":"slice"}
};
*/