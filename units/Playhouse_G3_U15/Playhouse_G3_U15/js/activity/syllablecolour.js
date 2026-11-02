//  ****************************************** //
//  SyllableColour - Version no: 1
//  Click a number to colour it solid red. Only one number per word can
//  be coloured at a time. Validate shows a tick/cross right on the
//  number the student coloured.
//  ****************************************** //
window.SyllableColour = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    console.log('ColourWord > ', $('.activity_area'));
    this.settings = {
        'activity_area': ob[0],
        'has_audio': (obj[0].dataset.audio != undefined && obj[0].dataset.audio != null) ? obj[0].dataset.audio : 'no',
        'data_obj': dataObj,
        'parent_holder': obj[0]
    }
    this.init(this.settings);
}
SyllableColour.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen(ob);
    },
    listen: function (ob) {
        var $area = $(ob.activity_area);
 
        $area.on('click', '.cw_choice_wrap', function () {
            var $que = $(this).closest('.que');
            $que.find('.cw_choice_wrap').removeClass('cw_coloured');
            $(this).addClass('cw_coloured');
 
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
            var rData = (ob.data_obj).rows[qNo - 1];
 
            $que.find('.tick, .cross').css('display', 'none');
 
            var $chosen = $que.find('.cw_choice_wrap.cw_coloured');
            var isRight = false;
            if ($chosen.length > 0) {
                isRight = (parseInt($chosen.data('index')) == rData.correctIndex);
                $chosen.find('.tick').css('display', isRight ? 'block' : 'none');
                $chosen.find('.cross').css('display', isRight ? 'none' : 'block');
            }
 
            resultArr[i] = isRight ? 1 : 0;
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
 
        $area.find('.cw_choice_wrap').removeClass('cw_coloured');
        $area.find('.tick, .cross').css('display', 'none');
 
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
}