function initActivity(activity){
	var html = '<div><div class="drag_drop_questions">';
	html += '<ul>';
	jQuery.each(activity.questions, function(question, image){

		var default_answer = '';
		if((typeof(activity.default_answer)!='undefined') && (typeof(activity.default_answer[question])!='undefined') ){
			default_answer = activity.default_answer[question];
		}

		var question = question+"";
		html += '<li><div class="question_image"><img src="../images/pages/activities/'+image+'" /></div><div class="question_text">'+question.replace(/___/g, '<input type="text" value="'+default_answer+'" class="droppable_div" />')+'</div><div style="clear: both;"></div></li>';
	});
	html += '</ul>';
	html += '</div>';
	html += '<div class="drag_drop_options">';
	jQuery.each(activity.options, function(key, value){
		html += '<div class="draggable_div" data-value="'+value+'">'+value+'</div>';
	});
	html += '</div>';
	html += '</div>';
	writeHtml(activity, html);
	setDefaultAnswerDragDrop(activity);

	//for mobile view
	if(window.outerWidth<=600){
		jQuery('.drag_drop_options').css('top', (jQuery('.activity-heading').offset().top + jQuery('.activity-heading').height())+20);
	}

	jQuery('.drag_drop_options div.draggable_div').draggable({
	  container: jQuery('.activity-content'),
      revert: true,
      placeholder: true,
      droptarget: '.drag_drop_questions input.droppable_div',
      drop: function(evt, droptarget) {
        jQuery(droptarget).val(evt.target.innerText);
        jQuery(droptarget).removeClass('droppable_div');

        jQuery(this).remove();//('destroy');
        detectDragend();
      }
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
"heading":"Write the correct answers",
"type":"drag_drop_image_left",
"questions":{
			"What do you call a piece of pizza1 ___":"ARC_2_1_SB_U13_P144.png",
			"What ___ dfgfdg ___ dfgd":"ARC_2_1_SB_U13_P145.png",
			},
"options": ["slice","abc","xyz"],
"answers": ["slice","xyz","abc"],
"default_answer": {"What do you call a piece of pizza1 ___":"slice"}
};
*/