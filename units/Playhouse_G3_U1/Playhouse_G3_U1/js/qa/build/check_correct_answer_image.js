function initActivity(activity){
	var html = questions_html = question_image_html = '';
	html += '<div>';

	questions_html += '<div class="questions">';
	jQuery.each(activity.questions, function(key, question){
		questions_html += '<div>'+question;
		questions_html += '<div class="options">';
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

		questions_html += '<div onclick="select_this(this, 2)" class="'+default_value+' option_div" data-value="'+option+'"><div class="option_value" style="float: left;">'+option+'</div><div class="result" style="display:block; float: left;">&nbsp;</div><div style="clear: both;"></div></div>';
		});
		questions_html += '<div style="clear: both;"></div></div>';
		questions_html += '<input type="text" style="display: none;" /></div>';
	});
	questions_html += '</div>';

	question_image_html += '<div class="question_image"><img src="../images/pages/activities/'+activity.question_image+'" /></div>';

	if(window.outerWidth<=600){
		html += question_image_html+questions_html;
	} else {
		html += questions_html+question_image_html;
	}

	html += '<div style="clear: both;"></div></div>';

	writeHtml(activity, html);
	jQuery('.activity_container .activity-content').on('click', function(){ 
		detectOnClick();
	});

	jQuery('div.default_value').trigger('click');
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
"heading":"Answer the questions..",
"type":"check_correct_answer_image",
"questions":[
			"What is a ding-a-ling choo-choo? Tick(√)",
			"What is a ding-a-ling choo-choo 123? Tick(√)"
			],
"options":[
			["airplane", "cricket", "train", "rocking chair"],
			["airplane", "cricket", "train", "rocking chair"]
		  ],
"question_image": "ARC_2.1_SB_U3_P31_A1_I5.png",		  
"answers":["train","cricket"],
"default_answer":{
					"What is a ding-a-ling choo-choo? Tick(√)":"train"
				}
};
*/