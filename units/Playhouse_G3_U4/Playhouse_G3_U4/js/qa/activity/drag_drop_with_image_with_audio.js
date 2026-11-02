function validateActivity() {
    var activity_type = jQuery('.activity_container').data('activity_type');
    if(typeof(activity_type)!='undefined'){
        var err = 0;
        jQuery('.'+activity_type+'_activity .activity_result').remove();

        // NEW: count how many CORRECT words are currently placed per column
        var correctPlacedPerCol = {};

        jQuery('.'+activity_type+'_activity input[type="text"]').each(function(k, v){
            var i = k+1;
            var colIndex = parseInt(jQuery(this).data('col'));
            var userVal = jQuery(this).val();
            var correctList = (_activity_json.columnAnswers && _activity_json.columnAnswers[colIndex])
                ? _activity_json.columnAnswers[colIndex] : [];

            if(userVal === ''){
                // NEW: فراغ فاضي مش خطأ بحد ذاته - عندك 5 صفوف بس 4 كلمات لكل عمود،
                // فطبيعي يضل صف فاضي بكل عمود، وما لازم نحسبه خطأ
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

        // NEW: لازم كل الكلمات المطلوبة لكل عمود تكون متحطة صح، وإلا في خطأ عام
        // (متلاً الطالب نسي كلمة بالبنك أو حطها بعمود غلط)
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