function initActivity(activity){
	var html = '';
	var question = activity.questions+"";
	html += question.replace(/___/g, ' <input type="number" maxlength="1" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" />');

	writeHtml(activity, html);

	var default_answer = '';
	if(typeof(activity.default_answer)!='undefined'){
		jQuery.each(activity.default_answer, function(k, v){
			jQuery('.fill_orders_activity input[type="number"]:eq('+(k-1)+')').val(v);
		});
	}


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
"type":"fill_orders",
"questions":"What do you call ___ a piece of pizza ___ What do you call a piece of abc ___",
"answers": [2,3,1],
"default_answer": {0:1}
};
*/