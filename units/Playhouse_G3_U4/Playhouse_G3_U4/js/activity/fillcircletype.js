//  ****************************************** //
//  FillCircleType - Version no: 1
//  Click "is" or "are" to circle your choice (only one per sentence).
//  Type C or U in the blank. Validate checks both parts of each sentence.
//  ****************************************** //
window.FillCircleType = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    console.log('FillCircleType > ', $('.activity_area'));
    this.settings = {
        'activity_area': ob[0],
        'has_audio': (obj[0].dataset.audio != undefined && obj[0].dataset.audio != null) ? obj[0].dataset.audio : 'no',
        'data_obj': dataObj,
        'parent_holder': obj[0]
    }
    this.init(this.settings);
}
FillCircleType.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen(ob);
    },
    listen: function (ob) {
        var self = this;
        var $area = $(ob.activity_area);

        // clicking "is" or "are" circles that one and un-circles its sibling
        $area.on('click', '.fc_verb_option', function () {
            var $pickWrap = $(this).closest('.fc_verbpick');
            $pickWrap.find('.fc_verb_option').removeClass('fc_picked');
            $(this).addClass('fc_picked');
            $pickWrap.attr('data-selected', $(this).data('value'));

            document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
            document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
        });

        // typing in the C/U blank
        $area.on('input', '.fc_type_input', function () {
            $(this).val($(this).val().toUpperCase().replace(/[^CU]/g, ''));
            document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
            document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
        });
    },
    validate: function () {
        var ob = this.ob;
        var $area = $(ob.activity_area);
        var elsQue = $area.find('.que');
        var numOfQuestions = elsQue.length;
        var resultArr = [];

        elsQue.each(function (i) {
            var $que = $(this);
            var qNo = parseInt($que.data('qno'));
            var qData = (ob.data_obj).questions[qNo - 1];

            var verbCorrect = null;
            jQuery.each(qData.segments, function (si, seg) {
                if (seg.type == 'verbpick') { verbCorrect = seg.correct; }
            });

            var userVerb = $que.find('.fc_verbpick').attr('data-selected');
            var userType = $.trim($que.find('.fc_type_input').val()).toUpperCase();

            var isRight = (userVerb == verbCorrect) && (userType == qData.correctType);
            resultArr[i] = isRight ? 1 : 0;

            $que.find('.tick').css('display', isRight ? 'block' : 'none');
            $que.find('.cross').css('display', isRight ? 'none' : 'block');
        });

        var allCorrect = (((resultArr.join('').split('0'))[0]).length == numOfQuestions);
        showFeedback(true, allCorrect);

        if (allCorrect) {
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
        }
    },
    reset: function () {
        var ob = this.ob;
        var $area = $(ob.activity_area);

        $area.find('.fc_verb_option').removeClass('fc_picked');
        $area.find('.fc_verbpick').removeAttr('data-selected');
        $area.find('.fc_type_input').val('');
        $area.find('.tick, .cross').css('display', 'none');

        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
}