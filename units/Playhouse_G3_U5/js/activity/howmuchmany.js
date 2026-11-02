//  ****************************************** //
//  HowMuchMany - Version no: 1
//  Sentences: exact-match text validation (like FillIn).
//  Pictures: click cycles none -> circle -> X -> none, validated against type.
//  ****************************************** //
window.HowMuchMany = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('HowMuchMany > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
HowMuchMany.prototype = {
    init:function(ob){
        this.ob = ob;
        this.listen(ob);
    },
    drawCircle:function(svg, imgEl){
        var w = imgEl.offsetWidth;
        var h = imgEl.offsetHeight;
        var pad = 6;
        svg.setAttribute('viewBox', '0 0 ' + (w + pad*2) + ' ' + (h + pad*2));
        var rx = (w/2) + (pad*0.7);
        var ry = (h/2) + (pad*0.7);
        var cx = (w/2) + pad;
        var cy = (h/2) + pad;
        var path = 'M ' + cx + ' ' + (cy-ry) +
                   ' C ' + (cx+rx*1.1) + ' ' + (cy-ry*0.9) + ', ' + (cx+rx*1.05) + ' ' + (cy+ry*1.05) + ', ' + cx + ' ' + (cy+ry) +
                   ' C ' + (cx-rx*1.15) + ' ' + (cy+ry*0.95) + ', ' + (cx-rx*0.9) + ' ' + (cy-ry*1.1) + ', ' + cx + ' ' + (cy-ry) + ' Z';
        svg.innerHTML = '<path d="' + path + '" fill="none" stroke="#e2574c" stroke-width="4" stroke-linecap="round"/>';
    },
    listen:function(ob){
        var self = this;
        var e = (ob.activity_area);

        // sentence inputs
        var inputs = e.querySelectorAll('.hmm_input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('input', function(){
                $(this).css('color', 'black');
                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
            });
        }

        // picture click -> cycle none -> circle -> x -> none
        var imgWraps = e.querySelectorAll('.hmm_imgWrap');
        for (var i = 0; i < imgWraps.length; i++) {
            imgWraps[i].addEventListener('click', function(){
                var imgEl = this.querySelector('.hmm_img');
                var circleSvg = this.querySelector('.circle_svg');
                var xMark = this.querySelector('.hmm_xMark');
                var current = this.dataset.userMark || 'none';
                var next = (current == 'none') ? 'circle' : (current == 'circle') ? 'x' : 'none';
                this.dataset.userMark = next;

                circleSvg.innerHTML = '';
                xMark.style.display = 'none';
                this.classList.remove('hmm_wrong');

                if(next == 'circle'){
                    self.drawCircle(circleSvg, imgEl);
                }else if(next == 'x'){
                    xMark.style.display = 'flex';
                }

                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
            });
        }
    },
    validate:function(){
        var ob = this.ob;
        var e = (ob.activity_area);
        var allCorrect = true;

        // ---- sentences ----
        var sentQues = e.querySelectorAll('.hmm_sentence');
        var _case = (ob.data_obj.strictcase != undefined && ob.data_obj.strictcase!=null )? (ob.data_obj.strictcase).toLowerCase():'no';

        for (var i = 0; i < sentQues.length; i++) {
            var fIndx = parseInt(sentQues[i].dataset.qno);
            var sData = (ob.data_obj).sentences[fIndx-1];
            var inputEl = sentQues[i].querySelector('.hmm_input');

            (sentQues[i].querySelector('.tick')).style.display = 'none';
            (sentQues[i].querySelector('.cross')).style.display = 'none';

            var uVal = inputEl.value;
            var cVal = sData.answer;
            if(_case != 'yes'){
                uVal = uVal.toLowerCase();
                cVal = cVal.toLowerCase();
            }
            uVal = uVal.trim().replace(/\s+/g, ' ');
            cVal = cVal.trim().replace(/\s+/g, ' ');

            if(uVal == cVal && uVal.length > 0){
                (sentQues[i].querySelector('.tick')).style.display = 'block';
            }else{
                (sentQues[i].querySelector('.cross')).style.display = 'block';
                allCorrect = false;
            }
        }

        // ---- pictures ----
        var imgWraps = e.querySelectorAll('.hmm_imgWrap');
        for (var i = 0; i < imgWraps.length; i++) {
            var iIdx = parseInt(imgWraps[i].dataset.iidx);
            var imgData = (ob.data_obj).images[iIdx];
            var correctMark = (imgData.type == 'countable') ? 'circle' : 'x';
            var userMark = imgWraps[i].dataset.userMark || 'none';

            if(userMark == correctMark){
                imgWraps[i].classList.remove('hmm_wrong');
            }else{
                imgWraps[i].classList.add('hmm_wrong');
                allCorrect = false;
            }
        }

        showFeedback(true, allCorrect);

        if(allCorrect){
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
        }
    },
    reset:function(){
        var ob = this.ob;
        var e = (ob.activity_area);

        var sentQues = e.querySelectorAll('.hmm_sentence');
        for (var i = 0; i < sentQues.length; i++) {
            (sentQues[i].querySelector('.tick')).style.display = 'none';
            (sentQues[i].querySelector('.cross')).style.display = 'none';
            var inputEl = sentQues[i].querySelector('.hmm_input');
            inputEl.value = '';
            inputEl.style.color = 'black';
        }

        var imgWraps = e.querySelectorAll('.hmm_imgWrap');
        for (var i = 0; i < imgWraps.length; i++) {
            delete imgWraps[i].dataset.userMark;
            imgWraps[i].classList.remove('hmm_wrong');
            imgWraps[i].querySelector('.circle_svg').innerHTML = '';
            imgWraps[i].querySelector('.hmm_xMark').style.display = 'none';
        }

        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}