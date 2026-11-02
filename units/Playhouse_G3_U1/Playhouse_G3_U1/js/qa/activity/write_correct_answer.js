//Validate answers with JSON data
function validateActivity() {
	var activity_type = jQuery('.activity_container').data('activity_type');
	if(typeof(activity_type)!='undefined'){
		var err = 0;
		jQuery('.'+activity_type+'_activity .activity_result').remove();
		jQuery('.'+activity_type+'_activity input[type="text"]').each(function(k, v){
			if(!validateArray(_activity_json.answers[k],jQuery(this).val())){
				jQuery(this).parent().append('<span class="activity_result"><img src="../images/icons/cross_btn.png" /></span>');
				err++;
			} else {
				jQuery(this).parent().append('<span class="activity_result"><img src="../images/icons/check_btn.png" /></span>');
			}
		});

		if(err>0){
			tryagain();
		} else {
			goodjob();
		}		
	}
}


function validateArray(_array, _dropAns){
	if(Array.isArray(_array))
	{
		for(i=0; i<_array.length; i++)
		{
			console.log(_array[i]==_dropAns ,  _array[i], _dropAns)
			if(_array[i]==_dropAns)
			{
				return true;
			}
		}
	}
	else{
		if(_array == _dropAns)
		{	
			return true;
		}
	}
	
return false;
}