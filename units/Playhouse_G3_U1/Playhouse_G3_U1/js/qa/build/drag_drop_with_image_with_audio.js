function initActivity(activity){
	var html = '';
	
	// ----------------------
	html += '<div>';
	html += '<div class="drag_drop_options">';
	jQuery.each(activity.options, function(key, value){
		html += '<div class="draggable_div" data-value="'+value+'">'+value+'</div>';
	});
	html += '</div>';
	
	//audios/AnchorAudioPhrases-143.mp3
	html += '<div class="drag_drop_questions"><ul class="questions-container">';
	jQuery.each(activity.questions, function(key, values){

		html += '<li class="" style="width:25%"><ul>';		
		if(typeof(values)=="string"){
            // html += '<div>anas</div>'
			html += '<li class="qline_'+(key+1)+'">'+ values.replace(/___/g, ' <input readonly type="text" class="droppable_div"style="border: 1px solid #00b9f2;width: 175px; border-radius: 20px; height: 60px" />') +'</li>';

		} else {
			jQuery.each(values, function(k, v){

				var v = v+"";
				html += '<li>'+ v.replace('___', ' <input readonly type="text" class="droppable_div"  style="border: 1px solid #00b9f2;width: 175px; border-radius: 20px; height: 60px;"/>') +'</li>';

			});
		}
		
		html += '</ul></li>';
	});
	html += '</ul></div>';

	

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
    
}
		