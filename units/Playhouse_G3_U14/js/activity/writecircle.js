//  ****************************************** //
//  WriteCircle - Version no: 1
//  Type the present perfect verb form in the blank. Click the time
//  phrase once to circle it. The given example is locked (already
//  filled in and already circled).
//  ****************************************** //
window.WriteCircle = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    console.log('WriteCircle > ', $('.activity_area'));
    this.settings = {
        'activity_area': ob[0],
        'has_audio': (obj[0].dataset.audio != undefined && obj[0].dataset.audio != null) ? obj[0].dataset.audio : 'no',
        'data_obj': dataObj,
        'parent_holder': obj[0]
    }
    this.init(this.settings);
}
WriteCircle.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen(ob);
        this.drawLockedCircles(ob);
    },
    drawCircle: function (svg, textEl) {
        var w = textEl.offsetWidth;
        var h = textEl.offsetHeight;
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
    drawLockedCircles: function (ob) {
        var self = this;
        var $area = $(ob.activity_area);
        $area.find('.wc_circleWrap.wc_locked').each(function () {
            this.dataset.circled = 'true';
            self.drawCircle(this.querySelector('.wc_circle_svg'), this.querySelector('.wc_circle_text'));
        });
    },
    listen: function (ob) {
        var self = this;
        var $area = $(ob.activity_area);

        $area.on('click', '.wc_circleWrap', function () {
            if ($(this).hasClass('wc_locked')) { return; }
            self.toggleCircle(this);
        });

        $area.on('input', '.wc_blank_input', function () {
            document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
            document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
        });
    },
    toggleCircle: function (wrapEl) {
        var textEl = wrapEl.querySelector('.wc_circle_text');
        var svgEl = wrapEl.querySelector('.wc_circle_svg');
        var isCircled = (wrapEl.dataset.circled == 'true');

        if (isCircled) {
            wrapEl.dataset.circled = 'false';
            svgEl.innerHTML = '';
        } else {
            wrapEl.dataset.circled = 'true';
            this.drawCircle(svgEl, textEl);
        }

        document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
        document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
    },
    normalize: function (str) {
        return $.trim(str).toLowerCase().replace(/[\u2018\u2019]/g, "'").replace(/\s+/g, ' ');
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

            var isRight = true;

            if (qData.locked) {
                isRight = true;
            } else {
                var blankAnswer = null;
                jQuery.each(qData.segments, function (si, seg) {
                    if (seg.type == 'blank') { blankAnswer = seg.answer; }
                });

                var userVal = self.normalize($que.find('.wc_blank_input').val());
                var correctVal = self.normalize(blankAnswer);
                if (userVal != correctVal) { isRight = false; }

                var isCircled = ($que.find('.wc_circleWrap').attr('data-circled') == 'true');
                if (!isCircled) { isRight = false; }
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

        $area.find('.wc_blank_input').val('');
        $area.find('.wc_circleWrap').not('.wc_locked').each(function () {
            this.dataset.circled = 'false';
            this.querySelector('.wc_circle_svg').innerHTML = '';
        });
        $area.find('.tick, .cross').css('display', 'none');

        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings: function () {
        this.reset();
        this.drawLockedCircles(this.ob);
        initialSettingsDone(1);
    }
}