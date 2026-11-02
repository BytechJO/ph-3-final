//Validate answers with JSON data
function validateActivity() {
	var activity_type = jQuery('.activity_container').data('activity_type');
	if(typeof(activity_type)!='undefined'){
		var err = 0;
		jQuery('.'+activity_type+'_activity .activity_result').remove();
		jQuery('.'+activity_type+'_activity .answers input[type="text"]').each(function(k, v){
			if(
				(typeof(_activity_json.answers[jQuery(this).val()])=='undefined') ||
				(_activity_json.options[k]!=_activity_json.answers[jQuery(this).val()])
				){
				jQuery(this).parent().append('<span class="activity_result activity_result_1"><img src="../images/icons/cross_btn.png"/></span>');
				err++;
			} else {
				jQuery(this).parent().append('<span class="activity_result activity_result_1"><img src="../images/icons/check_btn.png"/></span>');
			}
		});
		jQuery('.'+activity_type+'_activity .questions input[type="text"]').each(function(k, v){
			if(
				(typeof(_activity_json.answers_text[k])=='undefined') ||
				(_activity_json.answers_text[k].toLowerCase() != jQuery(this).val().toLowerCase() )
				){
				jQuery(this).parent().append('<span class="activity_result activity_result_2"><img src="../images/icons/cross_btn.png" /></span>');
				err++;
			} else {
				jQuery(this).parent().append('<span class="activity_result activity_result_2"><img src="../images/icons/check_btn.png" /></span>');
			}
		});

		if(err>0){
			tryagain();
		} else {
			goodjob();
		}		
	}
}