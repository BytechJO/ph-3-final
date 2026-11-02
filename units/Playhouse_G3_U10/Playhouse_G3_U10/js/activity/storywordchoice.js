//  ****************************************** //
//  StoryWordChoice - Version no: 1
//  Click a word in a pair to circle it (radio-style pair). Validate
//  compares the circled word's index against "correct" (data-qno maps
//  directly to aObj.parts' choice-pairs, in order).
//  ****************************************** //
window.StoryWordChoice = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('StoryWordChoice > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
StoryWordChoice.prototype = {
    init:function(ob){
        this.ob = ob;
        this.buildPairList(ob);
        this.listen(ob);
    },
    // flatten aObj.parts into just the choice-pairs, in order, so data-qno (0,1,2...) maps directly
    buildPairList:function(ob){
        var list = [];
        var parts = (ob.data_obj).parts;
        for (var i = 0; i < parts.length; i++) {
            if(parts[i].options){
                list.push(parts[i]);
            }
        }
        this.pairList = list;
    },
    drawCircle:function(svg, wordEl){
        var w = wordEl.offsetWidth;
        var h = wordEl.offsetHeight;
        var pad = 6;
        svg.setAttribute('viewBox', '0 0 ' + (w + pad*2) + ' ' + (h + pad*2));
        var rx = (w/2) + (pad*0.9);
        var ry = (h/2) + (pad*0.7);
        var cx = (w/2) + pad;
        var cy = (h/2) + pad;
        var path = 'M ' + cx + ' ' + (cy-ry) +
                   ' C ' + (cx+rx*1.1) + ' ' + (cy-ry*0.9) + ', ' + (cx+rx*1.05) + ' ' + (cy+ry*1.05) + ', ' + cx + ' ' + (cy+ry) +
                   ' C ' + (cx-rx*1.15) + ' ' + (cy+ry*0.95) + ', ' + (cx-rx*0.9) + ' ' + (cy-ry*1.1) + ', ' + cx + ' ' + (cy-ry) + ' Z';
        svg.innerHTML = '<path d="' + path + '" fill="none" stroke="#e2574c" stroke-width="2.5" stroke-linecap="round"/>';
    },
    listen:function(ob){
        var self = this;
        var e = (ob.activity_area);
        var pairs = e.querySelectorAll('.swc_pair');

        for (var i = 0; i < pairs.length; i++) {
            var wordWraps = pairs[i].querySelectorAll('.swc_wordWrap');
            for (var w = 0; w < wordWraps.length; w++) {
                wordWraps[w].addEventListener('click', function(){
                    var parentPair = this.closest('.swc_pair');
                    var siblingWraps = parentPair.querySelectorAll('.swc_wordWrap');

                    for (var s = 0; s < siblingWraps.length; s++) {
                        siblingWraps[s].classList.remove('swc_circled');
                        siblingWraps[s].querySelector('.swc_svg').innerHTML = '';
                    }

                    this.classList.add('swc_circled');
                    self.drawCircle(this.querySelector('.swc_svg'), this.querySelector('.swc_word'));

                    document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                    document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
                });
            }
        }
    },
    validate:function(){
        var ob = this.ob;
        var e = (ob.activity_area);
        var pairs = e.querySelectorAll('.swc_pair');
        var numOfQuestions = pairs.length;
        var allCorrect = false;
        var resultArr = [];

        for (var i = 0; i < pairs.length; i++) {
            resultArr[i] = 0;
            var qIdx = parseInt(pairs[i].dataset.qno);
            var pairData = this.pairList[qIdx];

            pairs[i].classList.remove('swc_right', 'swc_wrong');

            var circledWrap = pairs[i].querySelector('.swc_wordWrap.swc_circled');
            var isRight = false;

            if(circledWrap){
                var oIdx = parseInt(circledWrap.dataset.oidx);
                isRight = (oIdx == pairData.correct);
            }

            if(isRight){
                resultArr[i] = 1;
                pairs[i].classList.add('swc_right');
            }else{
                resultArr[i] = 0;
                pairs[i].classList.add('swc_wrong');
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
        var pairs = e.querySelectorAll('.swc_pair');

        for (var i = 0; i < pairs.length; i++) {
            pairs[i].classList.remove('swc_right', 'swc_wrong');
            var wordWraps = pairs[i].querySelectorAll('.swc_wordWrap');
            for (var w = 0; w < wordWraps.length; w++) {
                wordWraps[w].classList.remove('swc_circled');
                wordWraps[w].querySelector('.swc_svg').innerHTML = '';
            }
        }
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}