//  ****************************************** //
//  LookCircleWrite - Version no: 1
//  Click a letter to circle it (only one per row). Type that letter into
//  the blank to complete the word. Validate checks both the circled
//  letter AND the written letter are correct.
//  ****************************************** //
window.LookCircleWrite = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    console.log('LookCircleWrite > ', $('.activity_area'));
    this.settings = {
        'activity_area': ob[0],
        'has_audio': (obj[0].dataset.audio != undefined && obj[0].dataset.audio != null) ? obj[0].dataset.audio : 'no',
        'data_obj': dataObj,
        'parent_holder': obj[0]
    }
    this.init(this.settings);
}
LookCircleWrite.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen(ob);
    },
    drawCircle: function (svg, letterEl) {
        var w = letterEl.offsetWidth;
        var h = letterEl.offsetHeight;
        var pad = 8;
        svg.setAttribute('viewBox', '0 0 ' + (w + pad * 2) + ' ' + (h + pad * 2));
        var rx = (w / 2) + (pad * 0.9);
        var ry = (h / 2) + (pad * 0.7);
        var cx = (w / 2) + pad;
        var cy = (h / 2) + pad;
        var path = 'M ' + cx + ' ' + (cy - ry) +
            ' C ' + (cx + rx * 1.1) + ' ' + (cy - ry * 0.9) + ', ' + (cx + rx * 1.05) + ' ' + (cy + ry * 1.05) + ', ' + cx + ' ' + (cy + ry) +
            ' C ' + (cx - rx * 1.15) + ' ' + (cy + ry * 0.95) + ', ' + (cx - rx * 0.9) + ' ' + (cy - ry * 1.1) + ', ' + cx + ' ' + (cy - ry) + ' Z';
        svg.innerHTML = '<path d="' + path + '" fill="none" stroke="#e2574c" stroke-width="3" stroke-linecap="round"/>';
    },
    listen: function (ob) {
        var self = this;
        var $area = $(ob.activity_area);

        $area.on('click', '.lcw_letter_wrap', function () {
            var $que = $(this).closest('.que');
            $que.find('.lcw_letter_wrap').each(function () {
                $(this).find('.lcw_circle_svg')[0].innerHTML = '';
                $(this).removeClass('lcw_circled');
            });

            $(this).addClass('lcw_circled');
            self.drawCircle(this.querySelector('.lcw_circle_svg'), this.querySelector('.lcw_letter'));

            document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
            document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
        });

        $area.on('input', '.lcw_input', function () {
            $(this).val($(this).val().toLowerCase().replace(/[^a-z]/g, ''));
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

            var $circled = $que.find('.lcw_letter_wrap.lcw_circled');
            var circledLetter = ($circled.length > 0) ? $circled.data('letter') : '';
            var writtenLetter = $.trim($que.find('.lcw_input').val()).toLowerCase();

            var isRight = (circledLetter == qData.correctLetter) && (writtenLetter == qData.correctLetter);

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

        $area.find('.lcw_letter_wrap').removeClass('lcw_circled');
        $area.find('.lcw_circle_svg').each(function () { this.innerHTML = ''; });
        $area.find('.lcw_input').val('');
        $area.find('.tick, .cross').css('display', 'none');

        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
}