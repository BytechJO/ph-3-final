//  ****************************************** //
//  Practise - Version no: 1
//  Single click on a word -> toggle circle. Double click on a word ->
//  toggle underline. Validate compares each word's circle/underline
//  state against the data.
//  ****************************************** //
window.Practise = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    console.log('Practise > ', $('.activity_area'));
    this.settings = {
        'activity_area': ob[0],
        'has_audio': (obj[0].dataset.audio != undefined && obj[0].dataset.audio != null) ? obj[0].dataset.audio : 'no',
        'data_obj': dataObj,
        'parent_holder': obj[0]
    }
    this.init(this.settings);
}
Practise.prototype = {
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
        var wordWraps = e.querySelectorAll('.pr_wordWrap');

        for (var i = 0; i < wordWraps.length; i++) {
            (function (wordWrap) {
                var clickCount = 0;
                var clickTimer = null;

                wordWrap.addEventListener('click', function () {
                    clickCount++;
                    if (clickCount == 1) {
                        clickTimer = setTimeout(function () {
                            self.toggleCircle(wordWrap);
                            clickCount = 0;
                        }, 250);
                    } else if (clickCount == 2) {
                        clearTimeout(clickTimer);
                        self.toggleUnderline(wordWrap);
                        clickCount = 0;
                    }
                });
            })(wordWraps[i]);
        }
    },
    toggleCircle: function (wordWrap) {
        var wordEl = wordWrap.querySelector('.pr_word');
        var circleSvg = wordWrap.querySelector('.pr_circle_svg');
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
    toggleUnderline: function (wordWrap) {
        var isUnderlined = (wordWrap.dataset.underlined == 'true');

        if (isUnderlined) {
            wordWrap.dataset.underlined = 'false';
            wordWrap.classList.remove('pr_underlined');
        } else {
            wordWrap.dataset.underlined = 'true';
            wordWrap.classList.add('pr_underlined');
        }

        document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
        document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
    },
    validate: function () {
        var ob = this.ob;
        var e = (ob.activity_area);
        var elsQue = e.querySelectorAll('.que');
        var numOfQuestions = elsQue.length;
        var allCorrect = false;
        var resultArr = [];

        for (var i = 0; i < elsQue.length; i++) {
            resultArr[i] = 0;
            var fIndx = parseInt(elsQue[i].dataset.qno);
            var fDataObj = ((ob.data_obj).lines[fIndx - 1]);

            var wordWraps = elsQue[i].querySelectorAll('.pr_wordWrap');
            var isRight = true;

            for (var w = 0; w < wordWraps.length; w++) {
                var widx = parseInt(wordWraps[w].dataset.widx);
                var wordData = fDataObj.words[widx];

                var userCircled = (wordWraps[w].dataset.circled == 'true');
                var userUnderlined = (wordWraps[w].dataset.underlined == 'true');

                if (userCircled != wordData.needsCircle) { isRight = false; }
                if (userUnderlined != wordData.needsUnderline) { isRight = false; }
            }

            resultArr[i] = isRight ? 1 : 0;
        }

        allCorrect = (((resultArr.join('').split('0'))[0]).length == numOfQuestions);
        showFeedback(true, allCorrect);

        if (allCorrect) {
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
        }
    },
    reset: function () {
        var ob = this.ob;
        var e = (ob.activity_area);
        var wordWraps = e.querySelectorAll('.pr_wordWrap');

        for (var w = 0; w < wordWraps.length; w++) {
            wordWraps[w].dataset.circled = 'false';
            wordWraps[w].dataset.underlined = 'false';
            wordWraps[w].classList.remove('pr_underlined');
            wordWraps[w].querySelector('.pr_circle_svg').innerHTML = '';
        }

        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
}