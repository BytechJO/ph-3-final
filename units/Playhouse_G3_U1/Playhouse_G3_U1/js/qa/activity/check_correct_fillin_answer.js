//Validate answers with JSON data
function validateActivity() {
	var activity_type = jQuery('.activity_container').data('activity_type');
	if(typeof(activity_type)!='undefined'){
		var err = 0;
		jQuery('.'+activity_type+'_activity .activity_result').remove();
		jQuery('.'+activity_type+'_activity input[type="text"]').each(function(k, v){


			var tick_uAns =jQuery(this).parent().find('input[class="tickVal"]').val();
			
			var tick_cAns =_activity_json.tickAnswers[k];
			var input_uAns = jQuery(this).val();
			var input_cAns = _activity_json.answers[k];

			console.log("Tick", tick_uAns, tick_cAns)
			console.log("Input", input_uAns, input_cAns)

			if(input_uAns != input_cAns || tick_uAns != tick_cAns){
				jQuery(this).parent().find('.result').html('<span class="activity_result"><img src="../images/icons/cross_btn.png" /></span>');
				err++;
			} else {
				jQuery(this).parent().find('.result').html('<span class="activity_result"><img src="../images/icons/check_btn.png" /></span>');
			}
		});

		if(err>0){
			tryagain();
		} else {
			goodjob();
		}		
	}
}