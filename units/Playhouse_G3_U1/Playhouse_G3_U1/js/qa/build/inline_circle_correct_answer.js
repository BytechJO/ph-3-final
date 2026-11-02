function initActivity(activity){
	var html = '';
	html += '<ul class="questions">';
	jQuery.each(activity.questions, function(key, question){
		/*
		var options = activity.options[key].join('</span><span>');

		var options_html = '<span class="options_span">( <ul class="options">';
		jQuery.each(activity.options[key], function(option_key, option){
			var delimit = '';
			if(option_key>0){
				delimit = '<li>/</li>';
			}

			var default_value = '';
			if(
				(typeof(activity.default_answer)!='undefined') &&
				(typeof(activity.default_answer[question])!='undefined') &&
				(activity.default_answer[question]==option)
			)
			{
				default_value = 'default_value';
			}

			options_html += delimit+'<li onclick="select_this(this, 3)" class="'+default_value+'" data-value="'+option+'">'+option+'</li>';
		});
		options_html += '</ul> )</span>';
		

		html += '<li>'+question.replace('___', options_html);*/
		question = question.replace(/\[/g, '<span class="options_span">( <ul class="options"><li onclick="select_this(this, 3)" class="option_li">');
		question = question.replace(/\]/g, '</li></ul> )</span> ');

		question = question.replace(/\|/g, '</li><li>/</li><li onclick="select_this(this, 3)" class="option_li">');

		html += '<li>'+question;
		html += '</li>';
	});
	html += '</ul>';
	writeHtml(activity, html);
	jQuery('.activity_container .activity-content').on('click', function(){ 
		detectOnClick();
	});

	jQuery('ul.questions li.option_li:eq('+(activity.default_answer-1)+')').trigger('click');
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
"heading":"Circle the correct answer..",
"type":"inline_circle_correct_answer",
"questions":[
			"Bert and Beth [didn't like|loved] to fly their kite.",
			"But when there’s no wind, a kite [won't|will] fly.",
			"So Bert and Beth took a [break|nap] in the [grass|house] under a tree"
			],
"answers":["loved", "won't", "break", "house"],
"default_answer":2
};
*/