//Validate answers with JSON data
function validateActivity() {
	var activity_type = jQuery('.activity_container').data('activity_type');
	if(typeof(activity_type)!='undefined'){
		var err = 0;
		var filled_count = 0;
		jQuery('.'+activity_type+'_activity .activity_result').remove();
		jQuery('.'+activity_type+'_activity input[type="text"]').each(function(k, v){
			
			if(jQuery(this).val()!=''){
				filled_count++;
			}

			if(_activity_json.answers.indexOf(jQuery(this).val())==-1){
				if(jQuery(this).parent().hasClass('selected')){
					jQuery(this).parent().append('<span class="activity_result"><img src="../images/icons/cross_btn.png" /></span>').removeClass('selected');
					err++;
				}
			} else {
				jQuery(this).parent().append('<span class="activity_result"><img src="../images/icons/check_btn.png" /></span>').removeClass('selected');
			}
		});

		//Check if all options are selected
		if(filled_count<_activity_json.answers.length){
			err++;
		}

		if(err>0){
			tryagain();
		} else {
			goodjob();
		}		
	}
}