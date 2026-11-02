function initActivity(activity){
	var html = '';
	html += '<ul class="questions_list">';
	jQuery.each(activity.questions, function(key, question){

		var has_default_answer = '';
		if((typeof(activity.default_answer)!='undefined') && (typeof(activity.default_answer[question])!='undefined')){
			has_default_answer = 'has_default_answer';
		}

		var question = question+"";
		var width = '';
		if(question.search('<br />')==-1){
			
		} else {
			var underscore_count = (question.split("_").length - 1)/3;
			width = 'width: '+((100/underscore_count)-5)+'%';
		}
		html += '<li>'+ question.replace(/___/g, '<input type="text" class="'+has_default_answer+'" style="'+width+'" />');
		html += '</li>';
	});
	html += '</ul>';
	writeHtml(activity, html);

	//Set default answer
	if(jQuery('.has_default_answer').length>0){
		var answer_key = Object.keys(Object.values(_activity_json.default_answer)[0])[0];
		var answer_value = Object.values(Object.values(_activity_json.default_answer)[0])[0];
		jQuery('.has_default_answer').eq((answer_key-1)).val(answer_value);
	}
	//

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
"heading":"Write the correct word to complete the sentence.",
"type":"fill_multi_blanks",
"questions":[
			"___ ___",
			"Squirrel’s tummy dfgdg fgfdgdf ___ ___ ___",
			"Squirrel’s tummy dfgdg fgfdgdf ___ ___",
			"Squirrel’s tummy dfgdg fgfdgdf ___",
			"Squirrel’s tummy ___ dfgdg ___ fgfdgdf ___",
			"Oh,___!” grumbled Squirrel",
			"our tummy’s little rumble means that it is ___",
			"___ our tummy’s little rumble means that it is"
			],
"answers": [
			["rumbled", "jumble", "hungry"],
			["rumbled"],
			["hungry"],
		   ],
"default_answer": {"Oh,___!” grumbled Squirrel":"rumbled"}
};
*/