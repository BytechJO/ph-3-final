function initActivity(activity){

	//Options
	drag_drop_options = '<div class="drag_drop_options sticky-top">';
	jQuery.each(activity.options, function(key, value){
		drag_drop_options += '<div class="draggable_div" data-value="'+value+'" style="background-color: transparent;">'+value+'</div>';
	});
	drag_drop_options += '</div>';


	//Questions
	drag_drop_questions = '<div class="drag_drop_questions"><ul>';
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
				drag_drop_questions += '<li class="drag_drop_multiple" style="margin:20px">'+ v.replace('___', ' <input readonly type="text" class="droppable_div" />') +'</li>';
			});
		}
		drag_drop_questions += '</ul></li>';
	});
	drag_drop_questions += '</ul></div>';


	

	var html = '';
	html += '<div>';

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

    // jQuery('.content_wrap').scroll(function(){  
    // 	console.log(jQuery(this).scrollTop());
	//      if(jQuery(this).scrollTop()>72){
	//      	jQuery('.drag_drop_options').addClass('drag_drop_options_fixed');
	//      } else {
	//      	jQuery('.drag_drop_options').removeClass('drag_drop_options_fixed');
	//      }
	// });

    // disableBtns();
}
		
//Example 1
/*
var _activity_json = {
"image":"new_drag_drop.png",
"heading":"Complete the rhyme",
"type":"drag_drop",
"questions":[
				[
					["Pizza, pizza, pizza,<br /> We like it hot or ___."],
					["Pizza, pizza, pizza,<br /> For people young and ___."]
				],
				[
					["Pizza, pizza, pizza,<br /> Have a slice or ___."],
					["Pizza, pizza, pizza,<br /> Enough for me and ___!"]
				]
			],
"options": ["cold", "two", "old", "you"],
"answers": ["cold", "old", "two", "you"],
"default_answer": {1:"cold"}
};
*/

//Example 2
/*
var _activity_json = {
"image":"new_drag_drop.png",
"heading":"Complete the sentences.",
"type":"drag_drop",
"questions":[
				"The girl’s body ___ the sun from shining on the ground",
				"ometimes your shadow is in ___ of, in ___ of, or ___you"
			],
"options": ["back", "stops", "beside", "front","back", "stops", "beside", "front"],
"answers": ["stops", "front", "back", "beside"],
"default_answer":{2:"front"}
};
*/

//Example 3
/*
var _activity_json = {
"image":"new_drag_drop.png",
"heading":"Complete",
"type":"drag_drop",
"questions":[
				"___ choo-choo",
				"___ Rabbit",
				"___ cricket",
				"___ airplane",
				"___ Bear",
				"___ cat",
				"___ pine tree"
			],
"options": ["Oliver", "speedy", "green", "fuzzy gray", "ding-a-ling", "little black", "Bubby"],
"answers": ["ding-a-ling", "Oliver", "little black", "speedy", "Bubby", "fuzzy gray", "green"],
"default_answer": {3:"little black"}
};
*/