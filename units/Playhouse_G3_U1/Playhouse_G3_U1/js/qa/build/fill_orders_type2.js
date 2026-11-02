function initActivity(activity){
	var html = '';

	jQuery.each(activity.questions, function(key, question){
		var question = question+"";
		html += '<div class="question_div"><div class="question_text"><input type="number" maxlength="1" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" /></div><div class="question_label"><span></span>'+question+'</div><div style="clear:both;"></div></div>';
	});
	

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
"image":"new_keyboard.png",
"heading":"Put the sentences in order. Retell the story.",
"type":"fill_orders_type2",
"questions":[
			"\"Now we just need one more thing,\" said Tex.",
			" Tex was taking a bite of his sandwich when a big gust of wind blew sand all over it.",
			"\"Perfect!\" said lndi. \"Our sand castle is done!\"",
			"\"Yuck!\" said Tex. \"I just got a whole mouthful of beach!\"",
			"\"Hey, kiddos!\" said Dad. \"You guys are just in time for my special super-dee-duper- seaside-peanut-butter-and-jelly sandwiches.\"",
			"\"Thanks!\" said lndi.\" All that castle building made me extra hungry!\""
			],
"answers": [2,5,1,6,3,4],
"default_answer": {3:1}
};

*/