function initActivity(activity){
	var html = '';
	html += '<ul>';
	jQuery.each(activity.questions, function(key, question){

		var default_answer = '';
		if((typeof(activity.default_answer)!='undefined') && (typeof(activity.default_answer[question])!='undefined')){
			default_answer = activity.default_answer[question];
		}

		var question = question+"";
		html += '<li>'+ question.replace('___', ' <input type="text" value="'+default_answer+'" />');
		html += '<br />('+activity.options[key]+')';
		html += '</li>';
	});
	html += '</ul>';
	writeHtml(activity, html);
	jQuery('.activity_container .activity-content').on('input', function(){ 
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
"heading":"Write the correct word to complete the sentence.",
"type":"fill_blanks",
"questions":[
			"Squirrel’s tummy ___",
			"Oh,___!” grumbled Squirrel",
			"our tummy’s little rumble means that it is ___"
			],
"options": [
			"rumbled / mumbled / grumbled",
			"mumble / tumble / jumble",
			"rude / hungry / fine"
		   ],
"answers": ["rumbled", "jumble", "hungry"],
"default_answer": {"Oh,___!” grumbled Squirrel":"jumble"}
};
*/