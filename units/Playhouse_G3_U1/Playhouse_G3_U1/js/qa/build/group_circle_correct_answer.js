function initActivity(activity){
	var html = '';
	html += '<div>';
	var width = 100/(activity.questions.length);
	jQuery.each(activity.questions, function(key, question){
		html += '<div class="group_fill_cols" data-value="'+question+'" style="width:'+(width-5)+'%;">';
		html += '<div class="col_title">'+question+'</div>';

		html += '<div>';
		html += '<ul class="options">';
		jQuery.each(activity.options[key], function(option_key, option){
		html += '<li onclick="select_this(this, 2)" data-value="'+option+'">'+option+'</li>';
		});
		html += '</ul>';
		html += '<input type="text" style="display: none;" />';
		html += '</div>';

		
		html += '</div>';
	});
	//html += '<div style="clear: both;"></div>';
	html += '</div>';
	writeHtml(activity, html);
	setDefaultAnswerGroupCircle(activity);
	jQuery('.activity_container .activity-content').on('click', function(){ 
		detectOnClick();
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
"image":"new_click.png",	
"heading":"What do you think these words mean? Circle",
"type":"group_circle_correct_answer",
"questions":[
				"wibble-wobble",
				"tippy-toppy",
				"tip over",
				"meow! meow!"
			],
"no_of_rows": 3,
"options": [
				[
					"to dance",
					"to move side to side",
					"to crash"
				],
				[
					"to tip-toe",
					"to go to the top",
					"going to fall"
				],
				[
					"to trip",
					"to tip-toe",
					"to fall to the side"
				],
				[
					"a bike sound",
					"a cat sound",
					"a cow sound"
				]
		   ],
"answers": [
		   	"to dance",
		   	"going to fall",
		   	"to tip-toe",
		   	"a cat sound"
		   ],
"default_answer":{"wibble-wobble":"to dance"}
};
*/