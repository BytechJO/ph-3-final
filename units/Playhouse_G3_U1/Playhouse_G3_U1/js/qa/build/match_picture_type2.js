function initActivity(activity){
	var html = '<svg></svg>';
	html += '<div>';
	html += '	<div class="questions">';
	html += '		<ul>';
	jQuery.each(activity.questions, function(question_key, question_text){
	let _question_text_ = question_text.replace(/___/g, '<input type="text" class="answer_text"/>');
	html += '			<li>'+_question_text_+'&nbsp;<span data-node_question="'+question_key+'" class="node_circle">&nbsp;</span></li>';
	});
	html += '		</ul>';
	html += '	</div>';
	html += '	<div class="answers">';
	html += '		<ul>';
	jQuery.each(activity.options, function(option_key, option){
		html += '			<li><span class="node_circle">&nbsp;</span><img src="../images/pages/activities/'+option+'" /><input type="text" class="question_text" style="display: none;" /></li>';
	});
	html += '		</ul>';
	html += '	</div>';
	html += '	<div style="clear: both;"></div>'
	html += '</div>';
	writeHtml(activity, html);
	var is_drag = false;

	jQuery('.activity_container .activity-content .questions input').on('click', function(){
		jQuery(this).focus();
		detectKeyPress();
	});

	jQuery('.match_picture_type2_activity').on('mousedown', function(e){
		e.preventDefault(true);
		if(jQuery(e.target).hasClass('node_circle')){
			is_drag = true;

			var xx = (jQuery(e.target).position().left - jQuery('.questions').position().left)+10;
			var yy = (jQuery(e.target).position().top - jQuery('.questions').position().top)+10;

			jQuery('.match_picture_type2_activity svg').css('z-index', 999);
			jQuery('.match_picture_type2_activity svg').append('<line class="current_line" x1="'+xx+'" y1="'+yy+'" x2="'+xx+'" y2="'+yy+'" style="stroke:rgb(255,0,0);stroke-width:2" />');
			jQuery('.match_picture_type2_activity svg').html(jQuery('.match_picture_type2_activity svg').html());

			jQuery('.match_picture_type2_activity svg .current_line').attr('data-node_question', jQuery(e.target).attr('data-node_question'));
		}
	});

	jQuery('.match_picture_type2_activity').on('mousemove', function(e){
		if(is_drag==true){
			jQuery('.match_picture_type2_activity .current_line').attr('x2', e.offsetX);
			jQuery('.match_picture_type2_activity .current_line').attr('y2', e.offsetY);
		}
	});

	jQuery('.match_picture_type2_activity').on('mouseup', function(e){
		if(jQuery('.match_picture_type2_activity svg line:last-child').hasClass('line_end')==false){
			setTimeout(function(){
				jQuery('.match_picture_type2_activity svg .current_line').remove();
			}, 100);
		}
		jQuery('.match_picture_type2_activity svg').css('z-index', -1);
		detectKeyPress();
	});

	jQuery('.match_picture_type2_activity .answers .node_circle').on('mouseover', function(e){
		if(is_drag){
			var node_question = jQuery('.match_picture_type2_activity svg .current_line').attr('data-node_question');
			jQuery('.match_picture_type2_activity svg .current_line').addClass('line_end');
			jQuery(e.target).parent().find('input[type="text"]').val(node_question);
			jQuery('.match_picture_type2_activity svg line').removeClass('current_line');
		}
	});
}

//Example JSON
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
"image":"new_click.png",
"heading":"Match the picture to its saying.",
"type":"match_picture_type2",
"questions":["He held the ___ for Ginger Paws.", "He said, \"Try ___\".", "He let ___ of the bike."],
"options":[
				"ARC_2.1_SB_U3_P31_A1_I1.png",
				"ARC_2.1_SB_U3_P31_A1_I2.png",
				"ARC_2.1_SB_U3_P31_A1_I3.png",
			],
"answers":["ARC_2.1_SB_U3_P31_A1_I3.png", "ARC_2.1_SB_U3_P31_A1_I1.png", "ARC_2.1_SB_U3_P31_A1_I2.png"],
"answers_text":["bike", "harder", "go"],
};
*/