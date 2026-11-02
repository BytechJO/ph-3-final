function initActivity(activity){
	var html = '<svg class="svg"></svg>';
	html += '<div>';
	html += '	<div class="questions">';
	html += '		<ul>';
	jQuery.each(activity.questions, function(question_key, question_image){
		html += '			<li><img src="../images/pages/activities/'+question_image+'" /><span data-node_question="'+question_image+'" class="node_circle">&nbsp;</span></li>';
	});
	html += '		</ul>';
	html += '	</div>';
	html += '	<svg class="svg_1"></svg>';
	html += '	<div class="answers_1">';
	html += '		<ul>';
	jQuery.each(activity.options_1, function(option_key, option){
	html += '			<li><span class="node_circle">&nbsp;</span><span class="text_backgorund">'+option+'</span>&nbsp;<input type="text" class="question_text" style="display: none;" /><span data-node_question_1="'+activity.answers_1[option_key]+'" class="node_circle_1">&nbsp;</span></li>';
	});
	html += '		</ul>';
	html += '	</div>';
	html += '	<div class="answers_2">';
	html += '		<ul>';
	jQuery.each(activity.options_2, function(option_key, option){
	html += '			<li><span class="node_circle_1">&nbsp;</span>'+option+'<input type="text" class="question_text" style="display: none;" /></li>';
	});
	html += '		</ul>';
	html += '	</div>';
	html += '	<div style="clear: both;"></div>';
	html += '</div>';
	writeHtml(activity, html);
	var is_drag = false;
	var is_drag_1 = false;

	jQuery('.match_picture_type3_activity').on('mousedown', function(e){
		e.preventDefault(true);
		if(jQuery(e.target).hasClass('node_circle')){
			is_drag = true;

			var xx = (jQuery(e.target).position().left - jQuery('.questions').position().left)+10;
			var yy = (jQuery(e.target).position().top - jQuery('.questions').position().top)+10;

			jQuery('.match_picture_type3_activity .svg').css('z-index', 999);
			jQuery('.match_picture_type3_activity .svg').append('<line class="current_line" x1="'+xx+'" y1="'+yy+'" x2="'+xx+'" y2="'+yy+'" style="stroke:rgb(255,0,0);stroke-width:2" />');
			jQuery('.match_picture_type3_activity .svg').html(jQuery('.match_picture_type3_activity .svg').html());

			jQuery('.match_picture_type3_activity .svg .current_line').attr('data-node_question', jQuery(e.target).attr('data-node_question'));
		}
		if(jQuery(e.target).hasClass('node_circle_1')){
			is_drag_1 = true;

			var xx = (jQuery(e.target).position().left - jQuery('.answers_1').position().left)+10;
			var yy = (jQuery(e.target).position().top - jQuery('.answers_1').position().top)+10;

			jQuery('.match_picture_type3_activity .svg_1').css('z-index', 999);
			jQuery('.match_picture_type3_activity .svg_1').append('<line class="current_line_1" x1="'+xx+'" y1="'+yy+'" x2="'+xx+'" y2="'+yy+'" style="stroke:rgb(255,0,0);stroke-width:2" />');
			jQuery('.match_picture_type3_activity .svg_1').html(jQuery('.match_picture_type3_activity .svg_1').html());

			jQuery('.match_picture_type3_activity .svg_1 .current_line_1').attr('data-node_question_1', jQuery(e.target).attr('data-node_question_1'));
		}
	});

	jQuery('.match_picture_type3_activity').on('mousemove', function(e){
		if(is_drag==true){
			jQuery('.match_picture_type3_activity .current_line').attr('x2', e.offsetX);
			jQuery('.match_picture_type3_activity .current_line').attr('y2', e.offsetY);
		}
		if(is_drag_1==true){
			jQuery('.match_picture_type3_activity .current_line_1').attr('x2', e.offsetX);
			jQuery('.match_picture_type3_activity .current_line_1').attr('y2', e.offsetY);
		}
	});

	jQuery('.match_picture_type3_activity').on('mouseup', function(e){
		if(jQuery('.match_picture_type3_activity .svg line:last-child').hasClass('line_end')==false){
			setTimeout(function(){
				jQuery('.match_picture_type3_activity .svg .current_line').remove();
			}, 100);
			jQuery('.match_picture_type3_activity .svg').css('z-index', -1);
		}
		if(jQuery('.match_picture_type3_activity .svg_1 line:last-child').hasClass('line_end_1')==false){
			setTimeout(function(){
				jQuery('.match_picture_type3_activity .svg_1 .current_line_1').remove();
			}, 100);
			jQuery('.match_picture_type3_activity .svg_1').css('z-index', -1);
		}
		detectKeyPress();
	});

	jQuery('.match_picture_type3_activity .answers_1 .node_circle').on('mouseover', function(e){
		if(is_drag){
			var node_question = jQuery('.match_picture_type3_activity .svg .current_line').attr('data-node_question');
			jQuery('.match_picture_type3_activity .svg .current_line').addClass('line_end');
			jQuery(e.target).parent().find('input[type="text"]').val(node_question);
			jQuery('.match_picture_type3_activity .svg line').removeClass('current_line');
		}
	});
	jQuery('.match_picture_type3_activity .answers_2 .node_circle_1').on('mouseover', function(e){
		if(is_drag_1){
			var node_question = jQuery('.match_picture_type3_activity .svg_1 .current_line_1').attr('data-node_question_1');
			jQuery('.match_picture_type3_activity .svg_1 .current_line_1').addClass('line_end_1');
			jQuery(e.target).parent().find('input[type="text"]').val(node_question);
			jQuery('.match_picture_type3_activity .svg_1 line').removeClass('current_line_1');
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
"type":"match_picture_type3",
"questions":[
				"ARC_2.1_SB_U3_P31_A1_I1.png",
				"ARC_2.1_SB_U3_P31_A1_I2.png",
				"ARC_2.1_SB_U3_P31_A1_I3.png",
			],
"options_1":["Answer 1", "Answer 2", "Answer 3"],
"options_2":["Text 1", "Text 2", "Text 3"],
"answers_1":["Answer 3", "Answer 2", "Answer 1"],
"answers_2":["Text 2", "Text 3", "Text 1"],
};
*/