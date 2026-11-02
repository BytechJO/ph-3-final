jQuery(function(){
	jQuery('.activity_area').addClass('activity_container');
	jQuery('.activity_container').attr( 'data-activity_type', _activity_json.type );
	jQuery('.activity_container').addClass( _activity_json.type+'_activity' );
	initActivity(_activity_json);

	jQuery('.checkBtn').click(function(){
        jQuery(this).addClass('disabled');
        validateActivity();
    });
    jQuery('.resetBtn').click(function(){
        jQuery(this).addClass('disabled');
        initActivity(_activity_json);
    });
});

function detectKeyPress(){
	enableBtns();
}

function detectOnClick(){
	enableBtns();	
}

function detectDragend(){
	enableBtns();
}

function enableBtns(){
	jQuery('.checkBtn').removeClass('disabled');
    jQuery('.resetBtn').removeClass('disabled');
}

function resetActivity(){
	var activity_type = jQuery('.activity_container').data('activity_type');
	if(typeof(activity_type)!='undefined'){
		initActivity(_activity_json);
	}
}

function setDefaultAnswerDragDrop(activity){
	var default_answer = '';
	if(typeof(activity.default_answer)!='undefined'){
		jQuery.each(activity.default_answer, function(key, value){
			jQuery('.drag_drop_options div[data-value="'+value+'"]').css('text-decoration', 'line-through').attr('draggable', false).removeClass('draggable_div');
			jQuery('.drag_drop_questions input[type="text"]:eq('+(key-1)+')').val(value).removeClass('droppable_div');
		});
	}
}

function setDefaultAnswerGroupCircle(activity){
	var default_answer = '';
	if(typeof(activity.default_answer)!='undefined'){
		jQuery.each(activity.default_answer, function(key, value){
			jQuery('.group_circle_correct_answer_activity .group_fill_cols[data-value="'+key+'"] ul.options li[data-value="'+value+'"]').trigger('click');
		});
	}
}

		

function writeHtml(activity, activity_html){
	
	var htmlStmt = "";

	htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">'
	htmlStmt +=  '<a href="">'
	htmlStmt +=  '<img src="../images/icons/Righ- Icons-02.png" />'
	htmlStmt +=  '</a>'
	htmlStmt +=  '</div>'
	htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">'
	htmlStmt +=  '<a href="">'
	htmlStmt +=  '<img src="../images/icons/Righ- Icons-04.png" />'
	htmlStmt +=  '</a>'
	htmlStmt +=  '</div>';
	htmlStmt += '<div class="act_head_group justify-content-center">';
		htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + activity.mainTitleAudio + '">';
			htmlStmt += '<div class="q-type-img-container">';
			htmlStmt += '<img class="mainTitle" src=' + activity.mainTitle + '>';
			if (activity.mainTitleIcon != undefined && activity.mainTitleIcon != '') {
			htmlStmt += '<img class="mainTitleIcon" src=' + activity.mainTitleIcon + ' style="right: ' + activity.mainTitleIconPos.right + '">';
			}
		htmlStmt += '</div>';
		htmlStmt += '</div>';

		htmlStmt += '<div class="activityHeading">'
			htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + activity.subTitleAudio + '">';
			htmlStmt += "<div class='page_sub_title d-flex'>";
				htmlStmt += "<p> " + activity.subTitleTextLeft + " </p>";
				for (var sicons = 0 ; sicons < activity.subTitleIcons.length ; sicons++) {
					htmlStmt += "<img src='" + activity.subTitleIcons[sicons] + "'/>";
				}
				htmlStmt += "<p> " + activity.subTitleTextRight + " </p>";
			htmlStmt += "</div>";
			htmlStmt += '</div>';
		htmlStmt += '</div>';
	htmlStmt += '</div>';
	
	
	jQuery('.activity_container').html(
		htmlStmt +
	'<div class="activity-content">'+activity_html+'</div>');
}

function allowOnlyTrueAndFalse(obj) {
  if ((jQuery(obj).val().toLowerCase()=='t')||(jQuery(obj).val().toLowerCase()=='f')) {
      return true;
  } else {
      jQuery(obj).val("");
      return false;
  }
}

function select_this(obj, no_of_parent){
	jQuery(obj).parent().find(".selected").removeClass("selected");
	jQuery(obj).addClass("selected");
	
	if(no_of_parent==0){
		jQuery(obj).parent().find("input").val(jQuery(obj).attr('data-value'));
	} else if(no_of_parent==2){
		jQuery(obj).parent().parent().find("input").val(jQuery(obj).attr('data-value'));
	} else if(no_of_parent==3){
		jQuery(obj).parent().parent().parent().find("input").val(jQuery(obj).attr('data-value'));
	}
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  jQuery(ev.target).addClass('remove_item');
  ev.dataTransfer.setData("text", ev.target.innerText);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");

  //Remove options from list after drop
  jQuery('.drag_drop_activity .drag_drop_options .remove_item').remove();

  jQuery(ev.target).val(data);

  detectDragend();
}