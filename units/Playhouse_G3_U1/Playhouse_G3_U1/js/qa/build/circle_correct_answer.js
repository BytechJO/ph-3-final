function initActivity(activity){
	var html = '';
	html += '<ul class="questions">';
	jQuery.each(activity.questions, function(key, question){
		html += '<li>'+question;
		html += '<ul class="options">';
		jQuery.each(activity.options[key], function(option_key, option){

			var default_value = '';
			if(
				(typeof(activity.default_answer)!='undefined') &&
				(typeof(activity.default_answer[question])!='undefined') &&
				(activity.default_answer[question]==option)
			)
			{
				default_value = 'default_value';
			}

			html += '<li onclick="select_this(this, 2)" class="'+default_value+'" data-value="'+option+'">'+option+'</li>';
		});
		html += '</ul>';
		html += '<input type="text" style="display: none;" /></li>';
	});
	html += '</ul>';
	writeHtml(activity, html);
	jQuery('.activity_container .activity-content').on('click', function(){ 
		detectOnClick();
	});

	jQuery('li.default_value').trigger('click');
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
"heading":"Write the correct answers.",
"type":"circle_correct_answer",
"questions":[
			"How do you put sauce on a pizza? Circle",
			"How do you put sauce on a pizza? abc"
			],
"options":[
			["toss", "slice", "spread", "sprinkle"],
			["toss", "slice", "spread", "sprinkle"]
		  ],
"answers":["spread","slice"],
"default_answer":{"How do you put sauce on a pizza? abc":"slice"}
};
*/