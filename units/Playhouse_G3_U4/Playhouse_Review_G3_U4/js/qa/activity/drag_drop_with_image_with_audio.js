function validateActivity() {
    var activity_type = jQuery('.activity_container').data('activity_type');
    if(typeof(activity_type)!='undefined'){
        var err = 0;
        jQuery('.'+activity_type+'_activity .activity_result').remove();

        // NEW: count how many CORRECT words got placed per column, so we
        // can tell if all the required words for that column are down yet
        var correctPlacedPerCol = {};

        jQuery('.'+activity_type+'_activity input[type="text"]').each(function(k, v){
            var i = k+1;
            var colIndex = parseInt(jQuery(this).data('col'));
            var userVal = jQuery(this).val();
            var correctList = (_activity_json.columnAnswers && _activity_json.columnAnswers[colIndex])
                ? _activity_json.columnAnswers[colIndex] : [];

            if(userVal === ''){
                // NEW: an empty blank is NOT an error by itself - some
                // columns simply have more blanks than words to place.
                // Skip it entirely: no tick, no cross.
                return;
            }

            var isCorrect = (jQuery.inArray(userVal, correctList) > -1);

            if(!isCorrect){
                jQuery('<span class="activity_result"><img src="../images/icons/cross_btn.png" /></span>').insertAfter(jQuery(this));
                err++;
            } else {
                jQuery('<span class="activity_result"><img src="../images/icons/check_btn.png" /></span>').insertAfter(jQuery(this));
                $( ".drop_audio_"+i ).removeClass( "disabled" );
                correctPlacedPerCol[colIndex] = (correctPlacedPerCol[colIndex] || 0) + 1;
            }
        });

        // NEW: still fail overall if a column is missing some of its
        // required words (e.g. student left a word sitting in the bank) -
        // without blaming any specific empty blank for it
        if(_activity_json.columnAnswers){
            for(var c=0; c<_activity_json.columnAnswers.length; c++){
                var placed = correctPlacedPerCol[c] || 0;
                var required = _activity_json.columnAnswers[c].length;
                if(placed < required){
                    err++;
                }
            }
        }

        if(err>0){
            tryagain();
        } else {
            goodjob();
        }
    }
}