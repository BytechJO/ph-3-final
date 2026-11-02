function initActivity(activity){
	var html = '';
	html += '<ul class="questions">';
		html += '<li>';
		html += '<ul class="options">';
		jQuery.each(activity.options, function(option_key, option){

			var default_value = '';
			if(
				(typeof(activity.default_answer)!='undefined') &&
				(activity.default_answer==option)
			)
			{
				default_value = 'default_value';
			}

			html += '<li onclick="select_toggle_this(this, 1)" class="'+default_value+'" data-value="'+option+'">'+option+'<input type="text" style="display: none;" /></li>';
		});
		html += '</ul>';
		html += '</li>';
	html += '</ul>';
	writeHtml(activity, html);
	jQuery('.activity_container .activity-content').on('click', function(){ 
		detectOnClick();
	});

	jQuery('li.default_value').trigger('click');

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
"image":"new_click.png",
"heading":"Write the correct answers.",
"type":"circle_multiple_answer",
"options":[
			"toss", "slice", "spread", "sprinkle", "toss1", "slice1", "spread1", "sprinkle1"
		  ],
"answers":["spread","slice"],
"default_answer":"slice"
};
*/