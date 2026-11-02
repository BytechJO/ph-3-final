//  ****************************************** //
//  CircleImageWord - Version no: 1
//  Click a picture to toggle a hand-drawn circle around it. Write the word
//  underneath. Validate checks BOTH: the circle state matches needsCircle,
//  and the typed word matches the answer exactly.
//  ****************************************** //
window.CircleImageWord = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('CircleImageWord > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
CircleImageWord.prototype = {
    init:function(ob){
        this.ob = ob;
        this.listen(ob);
    },
    drawCircle:function(svg, imgEl){
        var w = imgEl.offsetWidth;
        var h = imgEl.offsetHeight;
        var pad = 8;
        svg.setAttribute('viewBox', '0 0 ' + (w + pad*2) + ' ' + (h + pad*2));
        var rx = (w/2) + (pad*0.8);
        var ry = (h/2) + (pad*0.8);
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

        // picture click -> toggle circle
        var imgWraps = e.querySelectorAll('.ciw_imgWrap');
        for (var i = 0; i < imgWraps.length; i++) {
            imgWraps[i].addEventListener('click', function(){
                var imgEl = this.querySelector('.ciw_img');
                var circleSvg = this.querySelector('.circle_svg');
                var isCircled = (this.dataset.circled == 'true');

                if(isCircled){
                    this.dataset.circled = 'false';
                    circleSvg.innerHTML = '';
                }else{
                    this.dataset.circled = 'true';
                    self.drawCircle(circleSvg, imgEl);
                }

                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
            });
        }

        // word input
        var inputs = e.querySelectorAll('.ciw_input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('input', function(){
                $(this).css('color', 'black');
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

        var _case = (ob.data_obj.strictcase != undefined && ob.data_obj.strictcase!=null )? (ob.data_obj.strictcase).toLowerCase():'no';

        for (var i = 0; i < elsQue.length; i++) {
            resultArr[i] = 0;
            var fIndx = parseInt(elsQue[i].dataset.qno);
            var itemData = (ob.data_obj).items[fIndx-1];

            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';

            var imgWrap = elsQue[i].querySelector('.ciw_imgWrap');
            var isCircled = (imgWrap.dataset.circled == 'true');
            var circleRight = (isCircled == itemData.needsCircle);

            var inputEl = elsQue[i].querySelector('.ciw_input');
            var uVal = inputEl.value;
            var cVal = itemData.answer;
            if(_case != 'yes'){
                uVal = uVal.toLowerCase();
                cVal = cVal.toLowerCase();
            }
            uVal = uVal.trim();
            cVal = cVal.trim();
            var wordRight = (uVal == cVal && uVal.length > 0);

            var isRight = circleRight && wordRight;

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

            var imgWrap = elsQue[i].querySelector('.ciw_imgWrap');
            delete imgWrap.dataset.circled;
            imgWrap.querySelector('.circle_svg').innerHTML = '';

            var inputEl = elsQue[i].querySelector('.ciw_input');
            inputEl.value = '';
            inputEl.style.color = 'black';
        }
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}