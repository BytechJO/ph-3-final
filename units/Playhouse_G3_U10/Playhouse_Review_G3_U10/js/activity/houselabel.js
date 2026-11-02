//  ****************************************** //
//  HouseLabel - Version no: 1
//  Type the matching letter (a-f) into each circle.
//  ****************************************** //
window.HouseLabel = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    console.log('HouseLabel > ', $('.activity_area'));
    this.settings = {
        'activity_area': ob[0],
        'has_audio': (obj[0].dataset.audio != undefined && obj[0].dataset.audio != null) ? obj[0].dataset.audio : 'no',
        'data_obj': dataObj,
        'parent_holder': obj[0]
    }
    this.init(this.settings);
}
HouseLabel.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen(ob);
    },
    listen: function (ob) {
        var $area = $(ob.activity_area);

        $area.on('input', '.hl_input', function () {
            $(this).val($(this).val().toLowerCase().replace(/[^a-i]/g, ''));
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
            var bData = (ob.data_obj).blanks[qNo - 1];

            var userVal = $.trim($que.find('.hl_input').val()).toLowerCase();
            var isRight = (userVal == bData.answer);

            resultArr[i] = isRight ? 1 : 0;
            $que.removeClass('hl_correct hl_incorrect');
            $que.addClass(isRight ? 'hl_correct' : 'hl_incorrect');
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

        $area.find('.hl_input').val('');
        $area.find('.que').removeClass('hl_correct hl_incorrect');
        $area.find('.tick, .cross').css('display', 'none');

        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
}