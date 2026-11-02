function initActivity(activity){
	var html = questions_html = question_image_html = '';
	questions_html += '<div class="questions">';
	jQuery.each(activity.questions, function(key, question){
		questions_html += '<div>'+question;
		questions_html += '<div class="options">';
		questions_html += '<input type="text"  value=""/><div onclick="tickSelect_this(this, 2)" class="option_div" data-value="1"><div class="option_value"></div><div class="result">&nbsp;</div><input class="tickVal" value="0" style="display: none;" /></div>';
		questions_html += '<div style="clear: both;"></div></div>';
		questions_html += '</div>';
	});
	
	questions_html += '</div>';
	if(activity.question_image != "" && activity.question_image != undefined){
	question_image_html += '<div class="question_image"><img src="../images/pages/activities/'+activity.question_image+'" /></div>';
	}
	if(window.outerWidth<=600){
		html += question_image_html+questions_html;
	} else {
		html += questions_html+question_image_html;
	}
	
	writeHtml(activity, html);
	jQuery('.activity_container .activity-content').on('click', function(){ 
		detectOnClick();
	});
	

	jQuery('div.default_value').trigger('click');
}

function tickSelect_this(obj, no_of_parent){
	jQuery(obj).parent().find(".selected").removeClass("selected");
	jQuery(obj).addClass("selected");
	
	if(no_of_parent==0){
		jQuery(obj).parent().find("input[class='tickVal']").val(jQuery(obj).attr('data-value'));
	} else if(no_of_parent==2){
		jQuery(obj).parent().parent().find("input[class='tickVal']").val(jQuery(obj).attr('data-value'));
	} else if(no_of_parent==3){
		jQuery(obj).parent().parent().parent().find("input[class='tickVal']").val(jQuery(obj).attr('data-value'));
	}

	//Remove tick/cross when choose options
	jQuery('.activity_result').remove();
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
"type":"check_correct_answer",
"questions":[
			"What is a ding-a-ling choo-choo? Tick(√)",
			"What is a ding-a-ling choo-choo 123? Tick(√)"
			],
"options":[
			["airplane", "cricket", "train", "rocking chair"],
			["airplane", "cricket", "train", "rocking chair"]
		  ],
"answers":["train","cricket"],
"default_answer":{
					"What is a ding-a-ling choo-choo? Tick(√)":"train"
				}
};
*/