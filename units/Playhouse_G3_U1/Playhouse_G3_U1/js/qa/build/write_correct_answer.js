function initActivity(activity){
	var html = '';
	html += '<ul class="questions_list">';
	jQuery.each(activity.questions, function(key, question){

		var default_answer = '';
		if((typeof(activity.default_answer)!='undefined') && (typeof(activity.default_answer[question])!='undefined') ){
			default_answer = activity.default_answer[question];
		}

		var question = question+"";
		html += '<li>'+ question.replace('___', '<br /><input type="text" class="inputTextBox" value="'+default_answer+'" />')+'</li>';
	});
	if(activity.question_image != "" && activity.question_image != undefined){
	html += '</ul><div class="question_image"><img src="../images/pages/activities/'+activity.question_image+'" /></div>';
	}
	writeHtml(activity, html);
	jQuery('.activity_container .activity-content').on('input', function(){ 
		detectKeyPress();
	});
	
}
$(document).ready(function(){	
    $(".inputTextBox").keypress(function(event){			
		var inputValue = event.charCode;
        if(!(inputValue >= 65 && inputValue <= 122) && (inputValue != 32 && inputValue != 0)){
            event.preventDefault();
        }
    });
});
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
"type":"write_correct_answer",
"questions":[
			"What do you call a piece of pizza ___",
			"What do you call a piece of abc ___"
			],
"answers": ["slice","xyz"],
"default_answer": {"What do you call a piece of pizza ___":"slice"}
};
*/