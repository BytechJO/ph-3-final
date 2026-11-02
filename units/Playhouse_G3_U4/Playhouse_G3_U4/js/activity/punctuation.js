//  ****************************************** //
//  PunctuationMarks - Version no: 1
//  Type the missing comma/quotation marks into each small blank.
//  ****************************************** //
window.PunctuationMarks = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    console.log('PunctuationMarks > ', $('.activity_area'));
    this.settings = {
        'activity_area': ob[0],
        'has_audio': (obj[0].dataset.audio != undefined && obj[0].dataset.audio != null) ? obj[0].dataset.audio : 'no',
        'data_obj': dataObj,
        'parent_holder': obj[0]
    }
    this.init(this.settings);
}
PunctuationMarks.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen(ob);
    },
    // treats curly/smart quotes the same as a straight double-quote, so it
    // doesn't matter which one the student's keyboard/device produces
    normalize: function (str) {
        return $.trim(str).replace(/[\u201C\u201D\u2018\u2019]/g, '"');
    },
    listen: function (ob) {
        var self = this;
        var $area = $(ob.activity_area);

        // only allow commas and quote marks to be typed into a blank
        $area.on('input', '.pm_blank', function () {
            // $(this).val($(this).val().replace(/[^,"\u201C\u201D]/g, ''));
            document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
            document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
        });
    },
    validate: function () {
        var self = this;
        var ob = this.ob;
        var $area = $(ob.activity_area);
        var elsQue = $area.find('.que');
        var numOfQuestions = elsQue.length;
        var resultArr = [];

        elsQue.each(function (i) {
            var $que = $(this);
            var qNo = parseInt($que.data('qno'));
            var qData = (ob.data_obj).questions[qNo - 1];

            var blankAnswers = [];
            jQuery.each(qData.segments, function (si, seg) {
                if (seg.type == 'blank') { blankAnswers.push(seg.answer); }
            });

            var isRight = true;
            $que.find('.pm_blank').each(function (bi) {
                var userVal = self.normalize($(this).val());
                var correctVal = self.normalize(blankAnswers[bi]);
                if (userVal != correctVal) { isRight = false; }
            });

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

        $area.find('.pm_blank').val('');
        $area.find('.tick, .cross').css('display', 'none');

        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
}