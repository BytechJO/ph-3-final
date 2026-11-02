//  ****************************************** //
//  CircleWords - Version no: 1
//  Circle-only activity: single click on a highlighted word toggles a
//  hand-drawn circle around it. No colouring, no double-click.
//  ****************************************** //
window.CircleWords = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    console.log('CircleWords > ', $('.activity_area'));
    this.settings = {
        'activity_area': ob[0],
        'has_audio': (obj[0].dataset.audio != undefined && obj[0].dataset.audio != null) ? obj[0].dataset.audio : 'no',
        'data_obj': dataObj,
        'parent_holder': obj[0]
    }
    this.init(this.settings);
}
CircleWords.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen(ob);
    },
    drawCircle: function (svg, wordEl) {
        var w = wordEl.offsetWidth;
        var h = wordEl.offsetHeight;
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
        var e = (ob.activity_area);
        var wordWraps = e.querySelectorAll('.cw_wordWrap');

        for (var i = 0; i < wordWraps.length; i++) {
            wordWraps[i].addEventListener('click', function () {
                self.toggleCircle(this);
            });
        }
    },
    toggleCircle: function (wordWrap) {
        var wordEl = wordWrap.querySelector('.cw_word');
        var circleSvg = wordWrap.querySelector('.cw_circle_svg');
        var isCircled = (wordWrap.dataset.circled == 'true');

        if (isCircled) {
            wordWrap.dataset.circled = 'false';
            circleSvg.innerHTML = '';
        } else {
            wordWrap.dataset.circled = 'true';
            this.drawCircle(circleSvg, wordEl);
        }

        document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
        document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
    },
    validate: function () {
        var ob = this.ob;
        var e = (ob.activity_area);
        var elsQue = e.querySelectorAll('.que');
        var numOfQuestions = elsQue.length;
        var resultArr = [];

        for (var i = 0; i < elsQue.length; i++) {
            resultArr[i] = 0;
            var gIndex = parseInt(elsQue[i].dataset.gindex);
            var lIndex = parseInt(elsQue[i].dataset.lindex);
            var lineData = (ob.data_obj).groups[gIndex].lines[lIndex];

            var wordWraps = elsQue[i].querySelectorAll('.cw_wordWrap');
            var isRight = true;

            for (var w = 0; w < wordWraps.length; w++) {
                var widx = parseInt(wordWraps[w].dataset.widx);
                var wordData = lineData.words[widx];
                var userCircled = (wordWraps[w].dataset.circled == 'true');
                if (userCircled != wordData.needsCircle) { isRight = false; }
            }

            resultArr[i] = isRight ? 1 : 0;
        }

        var allCorrect = (((resultArr.join('').split('0'))[0]).length == numOfQuestions);
        showFeedback(true, allCorrect);

        if (allCorrect) {
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
        }
    },
    reset: function () {
        var ob = this.ob;
        var e = (ob.activity_area);
        var wordWraps = e.querySelectorAll('.cw_wordWrap');

        for (var w = 0; w < wordWraps.length; w++) {
            wordWraps[w].dataset.circled = 'false';
            wordWraps[w].querySelector('.cw_circle_svg').innerHTML = '';
        }

        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
}