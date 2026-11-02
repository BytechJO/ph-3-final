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
		
		html += '<li><span class="question_text">'+ question.replace('___', '<input type="text" value="'+default_answer+'" />')+'</span><span type="text" class="lineVal" value="" style="display: none;"/>&nbsp;&nbsp;<a href="javascript:void(0)" onclick="getSelectedText(this)"><img src="../images/icons/new_pencil_underline.png" /></a></li>';
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
	jQuery('.activity_container .activity-content').on('input', function(){ 
		detectKeyPress();
	});
}

function getSelectedText(obj){
	detectOnClick();
	
	var curText =$(obj).parent().text();
	var curSelVal = window.getSelection();
	if(curText && curText.indexOf(curSelVal.toString())>-1){
	var selected_text = underlineSelected();
	var _val =jQuery(obj).parent().find('span[class="lineVal"]').text();
	if(_val!="")
	{
	jQuery(obj).parent().find('span[class="lineVal"]').text(_val + "," +selected_text.trim());
	}
	else{
		jQuery(obj).parent().find('span[class="lineVal"]').text(selected_text.trim());
	}//return false;
}
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