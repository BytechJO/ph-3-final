//Validate answers with JSON data
function validateActivity() {
	var activity_type = jQuery('.activity_container').data('activity_type');
	if(typeof(activity_type)!='undefined'){
		var err = 0;
		jQuery('.'+activity_type+'_activity .activity_result').remove();
		jQuery('.'+activity_type+'_activity .question_text').each(function(k, v){
			
			//var circle_uAns =jQuery(this).parent().data('circle').split(",").sort().toString().toLowerCase();
			var circle_uAns_txt =jQuery(this).parent().find('span[class="lineVal"]').text();
			var circle_uAns  = [];

			if(circle_uAns_txt!=undefined || circle_uAns_txt!="")
			circle_uAns = circle_uAns_txt.split(",").sort().toString();
			
			//var circle_uAns =jQuery(this).parent().data('circle').split(",").sort().toString().toLowerCase();
			// var circle_uAns=[];
			// jQuery('.'+activity_type+'_activity input[class="circleVal"]').each(function(i, u)
			// {
			// 	var _ans= jQuery(this).val();
			// 	circle_uAns= _ans;
			// 	console.log("Answer", _ans)
			// });
			var circle_cAns =_activity_json.answers[k].sort().toString();
			
			var input_uAns = jQuery(this).parent().find('input[type="text"]').val().toLocaleLowerCase();
			var input_cAns = _activity_json.fillin_answers[k].toLocaleLowerCase();
			
			console.log("INPUT " , input_cAns, input_uAns);
			console.log("CIRCLE", circle_cAns, circle_uAns);
			
			if(input_uAns!=input_cAns || circle_uAns != circle_cAns){
				//jQuery(this).parent().find('.question_text').text(jQuery(this).parent().find('.question_text').text());
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


function validateAnswers()
{
	
	
	
}