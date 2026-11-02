function initActivity(activity){
		
	//Options
	drag_drop_options = '<div class="drag_drop_options sticky-top">';
	jQuery.each(activity.options, function(key, value){
		drag_drop_options += '<div class="draggable_div" data-value="'+value+'" style="background-color: transparent;">'+value+'</div>';
	});
	drag_drop_options += '</div>';


	//Questions
	drag_drop_questions = '<div class="drag_drop_questions"><ul  class="d-flex flex-column align-item-center" >';
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
	html += '<div style="height:100%;margin-bottom: 65px;">';

	// ⬇️ هاد كله زي ما هو، ما لمسناه أبدًا
	html += drag_drop_options + drag_drop_questions;

	if(
		(typeof(activity.background_image)!='undefined') && 
		(activity.background_image!='')
	) {
		html += '<div class="image_container">';
		html += '<img src="../images/pages/activities/'+activity.background_image+'" />';
		html += '</div>';
	}
	// ⬆️ لهون كله بلا أي تغيير

	// ================================================================ [ SentenceBuilding ]
	// NEW SECTION — بيضاف بس هون، بعد كل شي موجود، وقبل إغلاق الـ wrapper.
	// إذا activity.sentenceBuilding مش موجود بالداتا، هاد القسم كامل ما بينبنى ولا حرف.
	if(
		(typeof(activity.sentenceBuilding) != 'undefined') &&
		(activity.sentenceBuilding != null) &&
		(typeof(activity.sentenceBuilding.items) != 'undefined') &&
		(activity.sentenceBuilding.items.length > 0)
	){
		var sbData = activity.sentenceBuilding;

		html += '<div class="SentenceBuilding_container">';
		html += '<div class="cont_items d-flex flex-wrap">';
		html += '<div class="main_title_container">';
		html += '<div class="main_title_text">';
		if (sbData.main_title_text.length > 1) {
			for (let x = 0; x < sbData.main_title_text.length; x++) {
				html += '<div class="audioIcon textEnd off d-flex contant" data-audio="' + sbData.main_title_audio + '">';
				html += "<div class='letter letter-" + x + " pulse'>" + sbData.main_title_text[x] + "</div>";
				html += "</div>";
			}
		} else {
			html += "<div class=''>" + sbData.main_title_text + "</div>";
		}
		html += "</div>";
		html += "</div>";

		html += '<div class="d-flex justify-content-between" style="width:100%">';
		for (let i = 0; i < sbData.items.length; i++) {
			if (i == 0) {
				html += '<div class="d-flex imgs_sides" >';
				html += "<img src='" + sbData.items[i].text_img + "' class='readHighlightsBtn imgToggle' data-img='showImg1'>";
				html += "<img src='" + sbData.items[i].img + "' class='text_img showImg1 audioIcon off' data-audio='" + sbData.items[i].audio + "'>";
				html += "</div>";
			} else if (i == 1) {
				html += '<div class="middle-text">';
				html += "<span class='text audioIcon off' data-audio='" + sbData.items[i].audio + "'>" + sbData.items[i].text + "</span>";
				html += "</div>";
			} else if (i == 2) {
				html += '<div class="d-flex imgs_sides">';
				html += "<img src='" + sbData.items[i].img + "' class='text_img showImg2 audioIcon off' data-audio='" + sbData.items[i].audio + "'>";
				html += "<img src='" + sbData.items[i].text_img + "' class='readHighlightsBtn imgToggle' data-img='showImg2' style='margin-left: auto;'>";
				html += "</div>";
			}
		}
		html += "</div>";
		html += "</div>";
		html += "</div>";
	}
	// ================================================================ [ / SentenceBuilding ]

	html += '</div>';
	showSentenceImg()
	writeHtml(activity, html);
	setDefaultAnswerDragDrop(activity);

	//for mobile view
	if(window.outerWidth<=600){
		//jQuery('.drag_drop_options').css('top', (jQuery('.activity-heading').offset().top + jQuery('.activity-heading').height())+20);
	}

	function makeWordsDraggable($els){
		$els.draggable({
			container: jQuery('.activity-content'),
			revert: true,
			placeholder: true,
			droptarget: '.drag_drop_questions .droppable_text_div',
			drop: function(evt, droptarget) {
				var $targetInput = jQuery(droptarget).find('input.droppable_div').first();

				if($targetInput.length == 0 || $targetInput.val() != ''){
					return;
				}

				$targetInput.val(jQuery(this).attr('data-value'));
				$targetInput.removeClass('droppable_div');

				jQuery(this).remove();
				detectDragend();
			}
		});
	}

	makeWordsDraggable(jQuery('.drag_drop_options div.draggable_div'));


	jQuery(document).on('click', '.drag_drop_questions input[type="text"]', function(){
		var $input = jQuery(this);

		if($input.val() == '' || $input.hasClass('droppable_div')){
			return;
		}

		var wordValue = $input.val();
		var $newChip = jQuery('<div class="draggable_div" data-value="'+wordValue+'" style="background-color: transparent;">'+wordValue+'</div>');
		jQuery('.drag_drop_options').append($newChip);
		makeWordsDraggable($newChip);

		$input.val('').addClass('droppable_div');

		detectDragend();
	});

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