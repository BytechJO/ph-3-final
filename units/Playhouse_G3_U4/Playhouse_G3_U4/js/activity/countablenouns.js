//  ****************************************** //
//  CountableNouns - Version no: 1
//  Click a word to cycle: none -> circle -> underline -> none
//  Validate: each word's mark must match its "type" in the data (circle/underline/none)
//  ****************************************** //
window.CountableNouns = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('CountableNouns > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
CountableNouns.prototype = {
    init:function(ob){
        this.ob = ob;
        this.listen(ob);
    },
    drawCircle:function(svg, wordEl){
        var w = wordEl.offsetWidth;
        var h = wordEl.offsetHeight;
        var pad = 8;
        svg.setAttribute('viewBox', '0 0 ' + (w + pad*2) + ' ' + (h + pad*2));
        var rx = (w/2) + (pad*0.9);
        var ry = (h/2) + (pad*0.7);
        var cx = (w/2) + pad;
        var cy = (h/2) + pad;
        var path = 'M ' + cx + ' ' + (cy-ry) +
                   ' C ' + (cx+rx*1.1) + ' ' + (cy-ry*0.9) + ', ' + (cx+rx*1.05) + ' ' + (cy+ry*1.05) + ', ' + cx + ' ' + (cy+ry) +
                   ' C ' + (cx-rx*1.15) + ' ' + (cy+ry*0.95) + ', ' + (cx-rx*0.9) + ' ' + (cy-ry*1.1) + ', ' + cx + ' ' + (cy-ry) + ' Z';
        svg.innerHTML = '<path d="' + path + '" fill="none" stroke="#e2574c" stroke-width="3" stroke-linecap="round"/>';
    },
    drawUnderline:function(svg, wordEl){
        var w = wordEl.offsetWidth;
        var h = wordEl.offsetHeight;
        svg.setAttribute('viewBox', '0 0 ' + w + ' ' + (h + 10));
        var y = h + 3;
        var path = 'M 1 ' + y + ' Q ' + (w/2) + ' ' + (y+4) + ' ' + (w-1) + ' ' + y;
        svg.innerHTML = '<path d="' + path + '" fill="none" stroke="#2f6fb3" stroke-width="3" stroke-linecap="round"/>';
    },
    listen:function(ob){
        var self = this;
        var e = (ob.activity_area);
        var wordWraps = e.querySelectorAll('.cn_wordWrap');

        for (var i = 0; i < wordWraps.length; i++) {
            wordWraps[i].addEventListener('click', function(){
                var wordEl = this.querySelector('.cn_word');
                var circleSvg = this.querySelector('.circle_svg');
                var underlineSvg = this.querySelector('.underline_svg');
                var current = this.dataset.userMark || 'none';
                var next = (current == 'none') ? 'circle' : (current == 'circle') ? 'underline' : 'none';
                this.dataset.userMark = next;

                circleSvg.innerHTML = '';
                underlineSvg.innerHTML = '';
                if(next == 'circle'){
                    self.drawCircle(circleSvg, wordEl);
                }else if(next == 'underline'){
                    self.drawUnderline(underlineSvg, wordEl);
                }

                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
            });
        }
    },
    validate:function(){
        var ob = this.ob;
        var e = (ob.activity_area);
        var elsQue = e.querySelectorAll('.que');
        var numOfQuestions = elsQue.length;
        var allCorrect = false;
        var resultArr = [];

        for (var i = 0; i < elsQue.length; i++) {
            resultArr[i] = 0;
            var fIndx = parseInt(elsQue[i].dataset.qno);
            var fDataObj = ((ob.data_obj).questions[fIndx-1]);

            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';

            var wordWraps = elsQue[i].querySelectorAll('.cn_wordWrap');
            var isRight = true;

            for (var w = 0; w < wordWraps.length; w++) {
                var widx = parseInt(wordWraps[w].dataset.widx);
                var correctType = fDataObj.words[widx].type; // "circle" | "underline" | "none"
                var userMark = wordWraps[w].dataset.userMark || 'none';

                if(userMark != correctType){ isRight = false; }
            }

            if(isRight){
                resultArr[i] = 1;
                (elsQue[i].querySelector('.tick')).style.display = 'block';
            }else{
                resultArr[i] = 0;
                (elsQue[i].querySelector('.cross')).style.display = 'block';
            }
        }

        console.log(resultArr, numOfQuestions);
        allCorrect = (((resultArr.join('').split('0'))[0]).length == numOfQuestions);
        showFeedback(true,allCorrect);

        if(allCorrect){
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
        }
    },
    reset:function(){
        var ob = this.ob;
        var e = (ob.activity_area);
        var elsQue = e.querySelectorAll('.que');

        for (var i = 0; i < elsQue.length; i++) {
            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';

            var wordWraps = elsQue[i].querySelectorAll('.cn_wordWrap');
            for (var w = 0; w < wordWraps.length; w++) {
                delete wordWraps[w].dataset.userMark;
                wordWraps[w].querySelector('.circle_svg').innerHTML = '';
                wordWraps[w].querySelector('.underline_svg').innerHTML = '';
            }
        }
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}