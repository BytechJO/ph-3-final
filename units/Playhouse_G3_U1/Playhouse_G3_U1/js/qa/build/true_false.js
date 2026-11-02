function initActivity(activity){
	var html = '';
	html += '<ul>';
	jQuery.each(activity.questions, function(key, value){
		var default_answer = '';
		if( (typeof(activity.default_answer)!='undefined') && (typeof(activity.default_answer[value])!='undefined') ){
			default_answer = activity.default_answer[value];
		}
		html += '<li><input type="text" maxlength="1" onkeyup="return allowOnlyTrueAndFalse(this)" value="'+default_answer+'" /> '+value+'</li>';
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
"heading":"1. Write <span>T</span> for true and <span>F</span> for false",
"type":"true_false",
"questions":[
			"They like pizza cold", 
			"Pizza is for young people", 
			"Pizza is made of dough", 
			"The pizza has sauce, cheese, and pepperoni on it", 
			"There is not enough pizza for everyone"
			],
"answers": ["T","T/F","T","T","F"],
"default_answer": {"Pizza is made of dough":"F"}
};
*/