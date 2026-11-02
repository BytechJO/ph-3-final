//  ****************************************** //
//  ListenAndNumber - Version no: 1
//  Type the order number (1-5) under each picture. Validation is ON for
//  this activity (unlike the open-ended Survey one).
//  ****************************************** //
window.ListenAndNumber = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    console.log('ListenAndNumber > ', $('.activity_area'));
    this.settings = {
        'activity_area': ob[0],
        'has_audio': (obj[0].dataset.audio != undefined && obj[0].dataset.audio != null) ? obj[0].dataset.audio : 'no',
        'data_obj': dataObj,
        'parent_holder': obj[0]
    }
    this.init(this.settings);
}
ListenAndNumber.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen(ob);
    },
    listen: function (ob) {
        var $area = $(ob.activity_area);

        $area.on('input', '.ln_num_input', function () {
            $(this).val($(this).val().replace(/[^1-5]/g, '').slice(0, 1));
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
            var itemData = (ob.data_obj).items[qNo - 1];

            var isRight;
            if (itemData.locked) {
                isRight = true; // the given example is always correct
            } else {
                var userVal = $.trim($que.find('.ln_num_input').val());
                isRight = (userVal != '' && parseInt(userVal) == itemData.correctOrder);
            }

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

        $area.find('.ln_num_input').val('');
        $area.find('.tick, .cross').css('display', 'none');

        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
}