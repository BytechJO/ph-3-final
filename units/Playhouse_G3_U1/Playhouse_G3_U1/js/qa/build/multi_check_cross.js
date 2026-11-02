function initActivity(activity){
	var html = '';
	html += '<div class="question_row">';
	html += '	<div class="question_col">'+activity.label+'</div>';
	jQuery.each(activity.options, function(image, option){
	html += '	<div class="answer_col"><div align="center"><img class="option_image" src="../images/pages/activities/'+image+'" /></div><div>'+option+'</div></div>';
	});
	html += '</div>';
	jQuery.each(activity.questions, function(key, question){
	html += '<div class="question_row">';
	html += '	<div class="question_col">'+question+'</div>';
	for(var i=0;i<Object.keys(activity.options).length;i++){
		html += '	<div class="answer_col"><div class="dropdown"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Select<span class="caret"></span></button><ul class="dropdown-menu"><li><a href="javascript:void(0)" onclick="dropdown_select(this, \'cross\')"><img src="../images/icons/new_blue_cross.png" /></a></li><li><a href="javascript:void(0)" onclick="dropdown_select(this, \'tick\')"><img src="../images/icons/new_blue_tick.png" /></a></li></ul></div><input type="text" data-answer_row_index="'+key+'" data-answer_col_index="'+i+'" style="display: none;width:50px;" /></div>';
	}
	html += '</div>';
	});
	writeHtml(activity, html);
	jQuery('.activity_container .activity-content').on('click', function(){ 
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
"heading":"Who did it ?",
"type":"multi_check_cross",
"label": "Who did it ?",
"questions":[
			"spilled pancake syrup",
			"put a pancake on her head",
			"burped three times",
			],
"options":{
			"ARC_2.1_SB_U3_P31_A1_I2.png":"Little Bunny", 
			"ARC_2.1_SB_U3_P31_A1_I3.png":"Baby Bunny"
		  },
"answers": [
			['cross', 'tick'],
			['tick', 'cross'],
			['tick', 'tick'],
		   ]
};
*/