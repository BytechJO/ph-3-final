function initActivity(activity){
	var html = '<div>';
	html += '<div class="questionsfullWidth_container">';
	html += '<ul class="questions_list">';
	jQuery.each(activity.questions, function(key, question){

		var default_answer = '';
		if((typeof(activity.default_answer)!='undefined') && (typeof(activity.default_answer[question])!='undefined') ){
			default_answer = activity.default_answer[question];
		}

		if(default_answer!=''){
			question = default_answer;
		}
		
		html += '<li><span class="question_text">'+question+'</span><span type="text" class="circleVal" value="" style="display: none;"/>&nbsp;&nbsp;<a href="javascript:void(0)" onclick="getSelectedText(this)"><img src="../images/icons/new_pencil_circle.png" /></a></li>';
	});
	html += '</ul>';
	html += '</div>';

	if(
		(typeof(activity.background_image)!='undefined') && 
		(activity.background_image!='')
	) {
		html += '<div class="image_container"><img src="../images/pages/activities/'+activity.background_image+'" /></div>';
	}
	
	html += '<div style="clear: both;"></div>';
	html += '</div>';
	writeHtml(activity, html);
	//fillDefaultAnswer();
	disableBtns();
}

function getSelectedText(obj){
	detectOnClick();
	
	// var selected_text = circleSelected();
	// var oldValue =jQuery(obj).parent().data('circle');
	// console.log("old" , oldValue);
	// if(oldValue!="" && oldValue!=undefined)
	// {
	// 	selected_text = oldValue + ","+selected_text.trim();
	// }
	// jQuery(obj).parent().attr("data-circle",selected_text);
	
	//jQuery(obj).parent().find('input[type="text"]').val(selected_text.trim());

	var selected_text = circleSelected();
	var _val =jQuery(obj).parent().find('span[class="circleVal"]').text();
	if(_val!="")
	{
	jQuery(obj).parent().find('span[class="circleVal"]').text(_val + "," +selected_text.trim());
	}
	else{
		jQuery(obj).parent().find('span[class="circleVal"]').text(selected_text.trim());
	}//return false;
}

function fillDefaultAnswer(){
	jQuery('.circle_selected_activity .questions_list li').each(function(){
		jQuery(this).find('.circle_selected').parent().parent().find('input[type="text"]').val(jQuery(this).find('.circle_selected').text());
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
"heading":"Find and circle the subject pronouns.",
"type":"circle_selected",
"background_image": "AGW_2_SB_U1_P9_A5_I1.png",
"questions":[
			"I am in second grade.",
			"He is tall.",
			"It is on the shelf.",
			"You are friendly.",
			"They go to the park."
			],
"answers": [
			"I", 
			"He", 
			"It", 
			"You", 
			"They"
			],
"default_answer": {"He is tall.":'<span class="circle_selected">He</span> is tall.'}
				
};
*/