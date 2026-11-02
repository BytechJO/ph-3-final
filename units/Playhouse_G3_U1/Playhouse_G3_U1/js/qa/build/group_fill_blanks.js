function initActivity(activity){
	var html = '';
	html += '<div>';
	var width = 100/(activity.questions.length);
	jQuery.each(activity.questions, function(key, question){
		html += '<div class="group_fill_cols" style="width:'+(width-5)+'%;">';
		html += '<div class="question">'+question+'</div>';
		for(var i=0;i<activity.no_of_rows;i++){
		
			var default_answer = '';
			if( (typeof(activity.default_answer)!='undefined') && (typeof(activity.default_answer[question])!='undefined') && (typeof(activity.default_answer[question][i+1])!='undefined') ){
				default_answer = activity.default_answer[question][i+1];
			}

		html += '<div><input type="text" value="'+default_answer+'" /></div>';
		}
		html += '</div>';
	});
	html += '<div style="clear: both;"></div>';
	html += '</div>';
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
"heading":"Write the answers. The boy said, “See you in the morning” to ...",
"type":"group_fill_blanks",
"questions":[
				"toys",
				"animals",
				"other",
				"people"
			],
"no_of_rows": 4,
"answers": [
				[
					"a",
					"b",
					"c",
					"d"
				],
				[
					"a",
					"b",
					"c",
					"d"
				],
				[
					"a",
					"b",
					"c",
					"d"
				],
				[
					"a",
					"b",
					"c",
					"d"
				]
		   ],
"default_answer":{"toys":{2:"b"}} //{"question":{row_number:"answer"}}
};
*/