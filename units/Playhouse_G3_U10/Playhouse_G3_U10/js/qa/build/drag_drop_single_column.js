function initActivity(activity){

	//Options
	drag_drop_options = '<div class="drag_drop_options sticky-top center_item">';
	drag_drop_options += '<span class="options_title_img"><u>Word Box</u></span>';
	jQuery.each(activity.options, function(key, value){
		drag_drop_options += '<div class="draggable_div" data-value="'+value+'" style="background-color: transparent;">'+value+'</div>';
	});
	drag_drop_options += '</div>';


	//Questions
	drag_drop_questions = '<div class="drag_drop_questions center_item"><ul>';
	jQuery.each(activity.questions, function(key, values){
		drag_drop_questions += '<li><ul class="d-flex flex-wrap">';
		if(typeof(values)=="string"){
			var has_single_text = '';
			if((values[0]=='_')==true){
				has_single_text = 'has_single_text';
			}

			drag_drop_questions += '<li class="'+has_single_text+'"><div class="droppable_label">'+ values.replace(/___/g, '<input readonly type="text" class="droppable_div" /></div><div class="droppable_label">')+'</div></li>';

		} else {
			jQuery.each(values, function(k, v){
				var v = v+"";
				drag_drop_questions += '<li class="drag_drop_multiple" style="margin: 10px 20px">'+ v.replace('___', ' <input readonly type="text" class="droppable_div" />') +'</li>';
			});
		}
		drag_drop_questions += '</ul></li>';
	});
	drag_drop_questions += '</ul></div>';


	

	var html = '';
	html += '<div class="main d-flex flex-wrap align-items-center">';

	/*if(
		(typeof(_activity_json.layout)!="undefined")&&
		(_activity_json.layout=="top")
	){
		html += drag_drop_options + drag_drop_questions;
	} else {
		html += drag_drop_questions + drag_drop_options;
	}*/

	html +=  drag_drop_questions  + drag_drop_options;


	if(
		(typeof(activity.background_image)!='undefined') && 
		(activity.background_image!='')
	) {
		html += '<div class="image_container">';
		html += '<img src="../images/pages/activities/'+activity.background_image+'" />';
		html += '</div>';
	}


	html += '</div>';
	writeHtml(activity, html);
	setDefaultAnswerDragDrop(activity);

	//for mobile view
	if(window.outerWidth<=600){
		//jQuery('.drag_drop_options').css('top', (jQuery('.activity-heading').offset().top + jQuery('.activity-heading').height())+20);
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

    
}
		
