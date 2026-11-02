function initActivity(activity){
		
	//Options
	drag_drop_options = '<div class="drag_drop_options sticky-top">';
	jQuery.each(activity.options, function(key, value){
  drag_drop_options += '<div class="draggable_div" data-value="'+value+'" data-qno="'+key+'" style="background-color: transparent;">'+value+'</div>';
});
	drag_drop_options += '</div>';


	//Questions
	drag_drop_questions = '<div class="drag_drop_questions"><ul  class="d-flex flex-column">';
	img_array = activity.images
	jQuery.each(activity.questions, function(key, values){
		drag_drop_questions += '<li class="d-flex flex-wrap" style=" width: 950px;"><ul>';
		if(typeof(values)=="string"){
			var has_single_text = '';
			if((values[0]=='_')==true){
				has_single_text = 'has_single_text';
			}

			drag_drop_questions += '<li style="width: 100%;" class="'+has_single_text+'"><div class="droppable_label">';
			drag_drop_questions += '<div class="i_container"><div class="i_row d-flex flex-wrap""><div class="l_col"></div><div class="r_col"><div class="droppable_text_div">'
			drag_drop_questions += values.replace(/___/g, '<input readonly type="text" class="droppable_div" /></div><div class="droppable_label">')
			drag_drop_questions += '</div></div></div></div>'
			drag_drop_questions += '</div></li>';

		} else {
			jQuery.each(values, function(k, v){
				var v = v+"";
				drag_drop_questions += '<li class="drag_drop_multiple">'+ v.replace('___', ' <input readonly type="text" class="droppable_div" />') +'</li>';
			});
		}
		drag_drop_questions += '</ul></li>';
	});
	drag_drop_questions += '</ul></div>';


	

	var html = '';
	html += '<div style="height:100%;">';

	/*if(
		(typeof(_activity_json.layout)!="undefined")&&
		(_activity_json.layout=="top")
	){
		html += drag_drop_options + drag_drop_questions;
	} else {
		html += drag_drop_questions + drag_drop_options;
	}*/

	html += drag_drop_options + drag_drop_questions;


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
		  jQuery(document).on("click", ".drag_drop_questions input", function () {
    returnWordToBank(this);
  });
	setDefaultAnswerDragDrop(activity);

	//for mobile view
	if(window.outerWidth<=600){
		//jQuery('.drag_drop_options').css('top', (jQuery('.activity-heading').offset().top + jQuery('.activity-heading').height())+20);
	}

	jQuery(".drag_drop_options div.draggable_div").draggable({
  container: jQuery(".activity-content"),
  revert: true,
  placeholder: true,
  droptarget: ".drag_drop_questions input.droppable_div",
  drop: function (evt, droptarget) {
    const $word = jQuery(this);
    const $input = jQuery(droptarget);

    if ($input.val() !== "") return; // NEW: don't drop onto an already-filled blank

    $input.val($word.text());
    $input.removeClass("droppable_div");
    $input.attr("data-word", $word.text());
    $input.attr("data-word-qno", $word.attr("data-qno")); // NEW: remember which original word this is

    // NEW: hide the ORIGINAL element instead of removing it from the DOM
    $word.css({
      visibility: "hidden",
      pointerEvents: "none",
    });

    detectDragend();
  },
});

}


function returnWordToBank(input) {
  const $input = jQuery(input);
  const wordValue = $input.attr("data-word");
  const wordQno = $input.attr("data-word-qno"); // NEW: use the original element's stable id, not its text

  if (!wordValue) return;

  // NEW: find the ORIGINAL draggable element (still in the DOM, just hidden)
  // instead of creating a brand new one every time
  var $originalWord = jQuery('.drag_drop_options .draggable_div[data-qno="' + wordQno + '"]');

  if ($originalWord.length > 0) {
    $originalWord.css({
      visibility: "visible",
      pointerEvents: "auto",
    });
  }

  // clean the input
  $input.val("");
  $input.addClass("droppable_div");
  $input.removeAttr("data-word");
  $input.removeAttr("data-word-qno");

  jQuery(".activity_result").remove();
  detectDragend();
}