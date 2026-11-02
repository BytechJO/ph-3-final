function initActivity(activity){

	//Options
	drag_drop_options = '<div class="drag_drop_options sticky-top">';
	jQuery.each(activity.options, function(key, value){
		drag_drop_options += '<div class="draggable_div" data-value="'+value+'" style="background-color: transparent;">'+value+'</div>';
	});
	drag_drop_options += '</div>';


	//Questions
	drag_drop_questions = '<div class="drag_drop_questions"><ul  class="que d-flex flex-wrap">';
	img_array = activity.images
	jQuery.each(activity.questions, function(key, values){
		drag_drop_questions += '<li class="item d-flex flex-column"><ul style="padding: 0px;">';
		if(typeof(values)=="string"){
			var has_single_text = '';
			if((values[0]=='_')==true){
				has_single_text = 'has_single_text';
			}

			drag_drop_questions += '<li style="width: 100%;" class="'+has_single_text+'"><div class="droppable_label">';
			drag_drop_questions += '<div class="i_container"><div class="i_row d-flex flex-wrap align-items-center"><div class="l_col"><img src="' + img_array[key] + '" class="qus_img"></div><div class="r_col"><div class="droppable_text_div">'
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
	html += '<div class="main">';

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

	// ============================================
	// html += '<div class="SentenceBuilding_container">';
	// 	html += '<div class="cont_items d-flex flex-wrap">';
	// 		html += '<div class="main_title_container">';
	// 			html += '<div class="main_title_text">';
	// 			if(activity.main_title_text.length > 1) {
	// 				for(let x=0; x < activity.main_title_text.length; x++){
	// 					html += "<div class='letter letter-"+x+" pulse'>" + activity.main_title_text[x] + "</div>"
	// 				}
	// 			}else{
	// 				html += "<div class=''>" + activity.main_title_text + "</div>"
	// 			}
	// 			html += '</div>';
	// 		html += '</div>';

	// 		for(let i = 0; i < activity.items.length; i++){
	// 			html += '<div class="item item-'+i+'">'+activity.items[i]+'</div>';
	// 		}
	// 	html += '</div>';
	// html += '</div>';
	// ============================================
	
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
	showSentenceImg();
}

function showSentenceImg(){
    $(document).ready(function () {
        $(".imgToggle").click(
            function () {
            var imgName = $(this).data("img");
            $('.'+imgName).fadeToggle(1000);
        }
        );
    });
}