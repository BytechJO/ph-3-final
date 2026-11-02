//  ****************************************** //
//  CircleCorrectPic - Version no: 1
//  Click a picture to circle it (radio-style: only one per question).
//  Validate compares the circled picture's index against "correct".
//  ****************************************** //
window.CircleCorrectPic = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('CircleCorrectPic > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
CircleCorrectPic.prototype = {
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
        var elsQue = e.querySelectorAll('.que');

        for (var i = 0; i < elsQue.length; i++) {
            var imgWraps = elsQue[i].querySelectorAll('.ccp_imgWrap');
            for (var w = 0; w < imgWraps.length; w++) {
                imgWraps[w].addEventListener('click', function(){
                    var parentQue = this.closest('.que');
                    var siblingWraps = parentQue.querySelectorAll('.ccp_imgWrap');

                    for (var s = 0; s < siblingWraps.length; s++) {
                        siblingWraps[s].classList.remove('ccp_circled');
                        siblingWraps[s].querySelector('.ccp_svg').innerHTML = '';
                    }

                    this.classList.add('ccp_circled');
                    self.drawCircle(this.querySelector('.ccp_svg'), this.querySelector('.ccp_img'));

                    document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                    document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
                });
            }
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
            var qData = (ob.data_obj).questions[fIndx-1];

            elsQue[i].classList.remove('ccp_right', 'ccp_wrong');

            var circledWrap = elsQue[i].querySelector('.ccp_imgWrap.ccp_circled');
            var isRight = false;

            if(circledWrap){
                var iIdx = parseInt(circledWrap.dataset.iidx);
                isRight = (qData.images[iIdx].correct == true);
            }

            if(isRight){
                resultArr[i] = 1;
                elsQue[i].classList.add('ccp_right');
            }else{
                resultArr[i] = 0;
                elsQue[i].classList.add('ccp_wrong');
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
            elsQue[i].classList.remove('ccp_right', 'ccp_wrong');
            var imgWraps = elsQue[i].querySelectorAll('.ccp_imgWrap');
            for (var w = 0; w < imgWraps.length; w++) {
                imgWraps[w].classList.remove('ccp_circled');
                imgWraps[w].querySelector('.ccp_svg').innerHTML = '';
            }
        }
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}