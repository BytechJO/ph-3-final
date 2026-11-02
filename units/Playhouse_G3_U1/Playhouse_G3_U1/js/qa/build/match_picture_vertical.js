function initActivity(activity){
	var html = '<svg></svg>';
	html += '<div>';
	html += '	<div class="questions">';
	html += '		<ul>';
	jQuery.each(activity.questions, function(question_key, question_image){
		html += '			<li><div align="center"><img src="../images/pages/activities/'+question_image+'" /></div><div align="center"><span data-node_question="'+question_image+'" class="node_circle">&nbsp;</span></div></li>';
	});
	html += '		</ul>';
	html += '	</div>';
	html += '	<div class="answers">';
	html += '		<ul>';
	jQuery.each(activity.options, function(option_key, option){
	html += '			<li><div><span class="node_circle">&nbsp;</span></div><div class="option">'+option+'</div><input type="text" class="question_text" style="display: none;" /></li>';
	});
	html += '		</ul>'
	html += '	</div>'
	html += '	<div style="clear: both;"></div>'
	html += '</div>';
	writeHtml(activity, html);
	var is_drag = false;

	jQuery('.match_picture_vertical_activity').on('mousedown', function(e){
		e.preventDefault(true);
		if(jQuery(e.target).hasClass('node_circle')){
			is_drag = true;

			var xx = (jQuery(e.target).position().left - jQuery('.questions').position().left)+10;
			var yy = (jQuery(e.target).position().top - jQuery('.questions').position().top)+10;

			jQuery('.match_picture_vertical_activity svg').css('z-index', 999);
			jQuery('.match_picture_vertical_activity svg').append('<line class="current_line" x1="'+xx+'" y1="'+yy+'" x2="'+xx+'" y2="'+yy+'" style="stroke:rgb(255,0,0);stroke-width:2" />');
			jQuery('.match_picture_vertical_activity svg').html(jQuery('.match_picture_vertical_activity svg').html());

			jQuery('.match_picture_vertical_activity svg .current_line').attr('data-node_question', jQuery(e.target).attr('data-node_question'));
		}
	});

	jQuery('.match_picture_vertical_activity').on('mousemove', function(e){
		if(is_drag==true){
			jQuery('.match_picture_vertical_activity .current_line').attr('x2', e.offsetX);
			jQuery('.match_picture_vertical_activity .current_line').attr('y2', e.offsetY);
		}
	});

	jQuery('.match_picture_vertical_activity').on('mouseup', function(e){
		if(jQuery('.match_picture_vertical_activity svg line:last-child').hasClass('line_end')==false){
			setTimeout(function(){
				jQuery('.match_picture_vertical_activity svg .current_line').remove();
			}, 100);
		}
		jQuery('.match_picture_vertical_activity svg').css('z-index', -1);
		detectKeyPress();
	});

	jQuery('.match_picture_vertical_activity .answers .node_circle').on('mouseover', function(e){
		if(is_drag){
			var node_question = jQuery('.match_picture_vertical_activity svg .current_line').attr('data-node_question');
			jQuery('.match_picture_vertical_activity svg .current_line').addClass('line_end');
			jQuery(e.target).parent().parent().find('input[type="text"]').val(node_question);
			jQuery('.match_picture_vertical_activity svg line').removeClass('current_line');
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
"type":"match_picture_vertical",
"questions":[
				"ARC_2.1_SB_U3_P31_A1_I1.png",
				"ARC_2.1_SB_U3_P31_A1_I2.png",
				"ARC_2.1_SB_U3_P31_A1_I3.png",
				"ARC_2.1_SB_U3_P31_A1_I4.png",
				"ARC_2.1_SB_U3_P31_A1_I5.png",
				"ARC_2_2_SB_U1_P10_A1.png"
			],
"options":["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5", "Answer 6"],
"answers":["Answer 3", "Answer 2", "Answer 1", "Answer 6", "Answer 5", "Answer 4"],
};
*/