//Validate answers with JSON data
function validateActivity() {
	var activity_type = jQuery('.activity_container').data('activity_type');
	if(typeof(activity_type)!='undefined'){
		var err = 0;
		jQuery('.'+activity_type+'_activity .activity_result').remove();
		jQuery('.'+activity_type+'_activity input[type="text"]').each(function(k, v){
			if(_activity_json.answers[k]!=jQuery(this).val()){
				jQuery('<span class="activity_result"><img src="../images/icons/cross_btn.png" /></span>').insertAfter(jQuery(this));
				err++;
			} else {
				jQuery('<span class="activity_result"><img src="../images/icons/check_btn.png" /></span>').insertAfter(jQuery(this));;
			}
		});

		if(err>0){
			tryagain();
		} else {
			goodjob();
		}
	}
}