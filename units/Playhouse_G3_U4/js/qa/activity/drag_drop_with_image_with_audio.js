//Validate answers with JSON data
function validateActivity() {
    var activity_type = jQuery('.activity_container').data('activity_type');
    if(typeof(activity_type)!='undefined'){
        var err = 0;
        jQuery('.'+activity_type+'_activity .activity_result').remove();
        jQuery('.'+activity_type+'_activity input[type="text"]').each(function(k, v){
            var i = k+1;

            // NEW: figure out which column this blank belongs to (set as
            // data-col on the input when it was built), then check if the
            // word the student dropped is anywhere in that column's correct
            // list - position/order inside the column no longer matters.
            var colIndex = parseInt(jQuery(this).data('col'));
            var userVal = jQuery(this).val();
            var correctList = (_activity_json.columnAnswers && _activity_json.columnAnswers[colIndex])
                ? _activity_json.columnAnswers[colIndex] : [];
            var isCorrect = (userVal !== '' && jQuery.inArray(userVal, correctList) > -1);

            if(!isCorrect){
                jQuery('<span class="activity_result"><img src="../images/icons/cross_btn.png" /></span>').insertAfter(jQuery(this));
                err++;
            } else {
                jQuery('<span class="activity_result"><img src="../images/icons/check_btn.png" /></span>').insertAfter(jQuery(this));
                $( ".drop_audio_"+i ).removeClass( "disabled" );
            }
        });

        if(err>0){
            tryagain();
        } else {
            goodjob();
        }
    }
}