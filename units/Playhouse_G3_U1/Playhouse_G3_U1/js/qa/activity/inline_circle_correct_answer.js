//Validate answers with JSON data
function validateActivity() {
	var activity_type = jQuery('.activity_container').data('activity_type');
	if(typeof(activity_type)!='undefined'){
		var err = 0;
		jQuery('.'+activity_type+'_activity .activity_result').remove();
		jQuery('.'+activity_type+'_activity .questions .options .selected').each(function(k, v){
			if(_activity_json.answers[k]!=jQuery(this).text()){
				jQuery(this).parent().parent().append('<span class="activity_result"><img src="../images/icons/cross_btn.png" /></span>');
				err++;
			} else {
				jQuery(this).parent().parent().append('<span class="activity_result"><img src="../images/icons/check_btn.png" /></span>');
			}
		});

		if(err>0){
			tryagain();
		} else {
			goodjob();
		}		
	}
}