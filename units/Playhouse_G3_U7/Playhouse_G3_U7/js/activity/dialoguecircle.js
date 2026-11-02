//  ****************************************** //
//  DialogueCircle - Version no: 1
//  Click a word in a pair to circle it (radio-style: only one word per pair
//  can be circled at a time). Validate compares the circled word's index
//  against "correct" in the data.
//  ****************************************** //
window.DialogueCircle = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('DialogueCircle > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
DialogueCircle.prototype = {
    init:function(ob){
        this.ob = ob;
        this.listen(ob);
    },
    drawCircle:function(svg, wordEl){
        var w = wordEl.offsetWidth;
        var h = wordEl.offsetHeight;
        var pad = 7;
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
    listen:function(ob){
        var self = this;
        var e = (ob.activity_area);
        var elsQue = e.querySelectorAll('.que');

        for (var i = 0; i < elsQue.length; i++) {
            var wordWraps = elsQue[i].querySelectorAll('.dc_wordWrap');
            for (var w = 0; w < wordWraps.length; w++) {
                wordWraps[w].addEventListener('click', function(){
                    var parentQue = this.closest('.que');
                    var siblingWraps = parentQue.querySelectorAll('.dc_wordWrap');

                    for (var s = 0; s < siblingWraps.length; s++) {
                        siblingWraps[s].classList.remove('dc_circled');
                        siblingWraps[s].querySelector('.dc_svg').innerHTML = '';
                    }

                    this.classList.add('dc_circled');
                    self.drawCircle(this.querySelector('.dc_svg'), this.querySelector('.dc_word'));

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
        var lineIdx = parseInt(elsQue[i].dataset.lineidx);
        var lineData = (ob.data_obj).lines[lineIdx];

        // NEW: hide both icons first, same pattern as FillIn/other activities
        (elsQue[i].querySelector('.tick')).style.display = 'none';
        (elsQue[i].querySelector('.cross')).style.display = 'none';

        var circledWrap = elsQue[i].querySelector('.dc_wordWrap.dc_circled');
        var isRight = false;

        if(circledWrap){
            var oIdx = parseInt(circledWrap.dataset.oidx);
            isRight = (oIdx == lineData.correct);
        }

        elsQue[i].classList.remove('dc_right', 'dc_wrong');

        if(isRight){
            resultArr[i] = 1;
            elsQue[i].classList.add('dc_right');
            (elsQue[i].querySelector('.tick')).style.display = 'inline-block'; // NEW
        }else{
            resultArr[i] = 0;
            elsQue[i].classList.add('dc_wrong');
            (elsQue[i].querySelector('.cross')).style.display = 'inline-block'; // NEW
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
        elsQue[i].classList.remove('dc_right', 'dc_wrong');

        // NEW: hide the icons again on reset
        (elsQue[i].querySelector('.tick')).style.display = 'none';
        (elsQue[i].querySelector('.cross')).style.display = 'none';

        var wordWraps = elsQue[i].querySelectorAll('.dc_wordWrap');
        for (var w = 0; w < wordWraps.length; w++) {
            wordWraps[w].classList.remove('dc_circled');
            wordWraps[w].querySelector('.dc_svg').innerHTML = '';
        }
    }
    document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
},
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}