//Validate answers with JSON data
function validateActivity() {
	var activity_type = jQuery('.activity_container').data('activity_type');
	if(typeof(activity_type)!='undefined'){
		var err = 0;
		jQuery('.'+activity_type+'_activity .activity_result').remove();
		jQuery('.'+activity_type+'_activity input[type="text"]').each(function(k, v){
			
			//var circle_uAns =jQuery(this).parent().data('circle').split(",").sort().toString().toLowerCase();
			var line_uAns_txtVal =jQuery(this).parent().find('span[class="lineVal"]').text();
			var line_uAns_txt= line_uAns_txtVal.split(",").sort().toString();
			line_uAns_txt =line_uAns_txt.replace(/[^\w\s]/gi, '');
			console.log("__",line_uAns_txt)
			var line_uAns  = [];

			if(line_uAns_txt!=undefined || line_uAns_txt!="")
			line_uAns = line_uAns_txt.split(",").sort().toString();
			
			var line_cAns_txt =_activity_json.answers[k].sort().toString();
			line_cAns_txt =line_cAns_txt.replace(/[^\w\s]/gi, '');

			var line_cAns  = [];

			if(line_cAns_txt!=undefined || line_cAns_txt!="")
			line_cAns = line_cAns_txt.split(",").sort().toString();



			var circle_uAns_txtVal =jQuery(this).parent().find('span[class="circleVal"]').text();
			var circle_uAns_txt= circle_uAns_txtVal.split(",").sort().toString();
			circle_uAns_txt =circle_uAns_txt.replace(/[^\w\s]/gi, '');
			var circle_uAns  = [];

			if(circle_uAns_txt!=undefined || circle_uAns_txt!="")
			circle_uAns = circle_uAns_txt.split(",").sort().toString();
			
			var circle_cAns_txt =_activity_json.circleAnswers[k].sort().toString();
			circle_cAns_txt =circle_cAns_txt.replace(/[^\w\s]/gi, '');

			var circle_cAns  = [];
			if(circle_cAns_txt!=undefined || circle_cAns_txt!="")
			circle_cAns = circle_cAns_txt.split(",").sort().toString();
			
			var input_uAns = jQuery(this).val().toLowerCase();
			var input_cAns = _activity_json.fillin_answers[k].toLocaleLowerCase();
			
			console.log("INPUT " , input_cAns, input_uAns);
			console.log("LINE", line_cAns, line_uAns);
			console.log("CIRCLE", circle_uAns, circle_cAns);
			
			if(input_uAns!=input_cAns || line_uAns != line_cAns || circle_uAns != circle_cAns){
				jQuery(this).parent().find('.question_text').text(jQuery(this).parent().find('.question_text').text());
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