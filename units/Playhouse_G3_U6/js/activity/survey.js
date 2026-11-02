//  ****************************************** //
//  Survey - Version no: 1
//  Fully open-ended survey - there is no right/wrong answer, so the
//  check/reset buttons are hidden completely (not just disabled).
//  ****************************************** //
window.Survey = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    console.log('Survey > ', $('.activity_area'));
    this.settings = {
        'activity_area': ob[0],
        'has_audio': (obj[0].dataset.audio != undefined && obj[0].dataset.audio != null) ? obj[0].dataset.audio : 'no',
        'data_obj': dataObj,
        'parent_holder': obj[0]
    }
    this.init(this.settings);
}
Survey.prototype = {
    init: function (ob) {
        this.ob = ob;

        // this activity is never graded - hide the check/reset controls
        // completely instead of just leaving them disabled
        if (document.getElementsByClassName('checkBtn')[0]) {
            document.getElementsByClassName('checkBtn')[0].classList.add('d-none');
        }
        if (document.getElementsByClassName('resetBtn')[0]) {
            document.getElementsByClassName('resetBtn')[0].classList.add('d-none');
        }

        this.listen(ob);
    },
    listen: function (ob) {
        var $area = $(ob.activity_area);

        // clicking Yes or No in a row picks that one and clears the other
        $area.on('click', '.survey_yn_cell', function () {
            var $row = $(this).closest('.survey_row');
            $row.find('.survey_yn_cell').removeClass('survey_picked').html('');
            $(this).addClass('survey_picked').html('<span class="survey_tick">&#10003;</span>');
        });
    },
    // kept only in case something else in the framework calls these -
    // they intentionally do nothing, since this activity is never graded
    validate: function () { },
    reset: function () {
        var ob = this.ob;
        var $area = $(ob.activity_area);

        $area.find('.survey_name_input, .survey_question_input').val('');
        $area.find('.survey_yn_cell').removeClass('survey_picked').html('');
    },
    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
}