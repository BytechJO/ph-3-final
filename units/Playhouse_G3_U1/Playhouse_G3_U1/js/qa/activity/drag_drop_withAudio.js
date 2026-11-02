//Validate answers with JSON data
function validateActivity() {
	var activity_type = jQuery('.activity_container').data('activity_type');
	if(typeof(activity_type)!='undefined'){
		var err = 0;
		jQuery('.'+activity_type+'_activity .activity_result').remove();
		jQuery('.'+activity_type+'_activity input[type="text"]').each(function(k, v){
			var thsParent = jQuery(this).parent();
			var img_holdr = thsParent.find('.img_holder');
			if(_activity_json.answers[k]!=jQuery(this).val()){
				jQuery('<span class="activity_result"><img src="../images/icons/cross_btn.png" /></span>').insertAfter(img_holdr);
				err++;
			} else {
				jQuery('<span class="activity_result"><img src="../images/icons/check_btn.png" /></span>').insertAfter(img_holdr);
			}
		});

		if(err>0){
			tryagain();
		} else {
			jQuery('.'+activity_type+'_activity').find('.correctAnsAudio').removeClass('disabled');
			goodjob();
		}
	}
}