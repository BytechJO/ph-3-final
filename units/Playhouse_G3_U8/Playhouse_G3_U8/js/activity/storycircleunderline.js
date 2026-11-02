//  ****************************************** //
//  StoryCircleUnderline - Version no: 1
//  Click a word to cycle: none -> circle -> underline -> none.
//  Validate compares each interactive word's mark against its data-correct
//  attribute (already computed at build time).
//  ****************************************** //
window.StoryCircleUnderline = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('StoryCircleUnderline > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
StoryCircleUnderline.prototype = {
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
        svg.innerHTML = '<path d="' + path + '" fill="none" stroke="#e2574c" stroke-width="2.5" stroke-linecap="round"/>';
    },
    drawUnderline:function(svg, wordEl){
        var w = wordEl.offsetWidth;
        var h = wordEl.offsetHeight;
        svg.setAttribute('viewBox', '0 0 ' + w + ' ' + (h + 8));
        var y = h + 2;
        var path = 'M 1 ' + y + ' Q ' + (w/2) + ' ' + (y+3) + ' ' + (w-1) + ' ' + y;
        svg.innerHTML = '<path d="' + path + '" fill="none" stroke="#2f6fb3" stroke-width="2.5" stroke-linecap="round"/>';
    },
    listen:function(ob){
        var self = this;
        var e = (ob.activity_area);
        var wordWraps = e.querySelectorAll('.scu_wordWrap');

        for (var i = 0; i < wordWraps.length; i++) {
            wordWraps[i].addEventListener('click', function(){
                var wordEl = this.querySelector('.scu_word');
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
        var wordWraps = e.querySelectorAll('.scu_wordWrap');
        var iconHolders = e.querySelectorAll('.icon_wrap_holder');
        var allCorrect = true;

        // hide every icon first
        for (var h = 0; h < iconHolders.length; h++) {
            iconHolders[h].querySelector('.tick').style.display = 'none';
            iconHolders[h].querySelector('.cross').style.display = 'none';
        }

        // group correctness by pair index: a pair is only correct if EVERY
        // one of its words (adjective + noun) is marked correctly
        var pairCorrect = {};

        for (var i = 0; i < wordWraps.length; i++) {
            var correctType = wordWraps[i].dataset.correct;
            var userMark = wordWraps[i].dataset.userMark || 'none';
            var pairIdx = wordWraps[i].dataset.pairidx;

            var isRight = (userMark == correctType);
            if(pairCorrect[pairIdx] == undefined){ pairCorrect[pairIdx] = true; }
            if(!isRight){ pairCorrect[pairIdx] = false; }

            if(isRight){
                wordWraps[i].classList.remove('scu_wrong');
                wordWraps[i].classList.add('scu_right');
            }else{
                wordWraps[i].classList.add('scu_wrong');
                wordWraps[i].classList.remove('scu_right');
            }
        }

        for (var h = 0; h < iconHolders.length; h++) {
            var pIdx = iconHolders[h].dataset.pairidx;
            var isPairRight = (pairCorrect[pIdx] == true);

            if(isPairRight){
                iconHolders[h].querySelector('.tick').style.display = 'inline-block';
            }else{
                iconHolders[h].querySelector('.cross').style.display = 'inline-block';
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
        var wordWraps = e.querySelectorAll('.scu_wordWrap');
        var iconHolders = e.querySelectorAll('.icon_wrap_holder');

        for (var i = 0; i < wordWraps.length; i++) {
            delete wordWraps[i].dataset.userMark;
            wordWraps[i].classList.remove('scu_wrong', 'scu_right');
            wordWraps[i].querySelector('.circle_svg').innerHTML = '';
            wordWraps[i].querySelector('.underline_svg').innerHTML = '';
        }

        for (var h = 0; h < iconHolders.length; h++) {
            iconHolders[h].querySelector('.tick').style.display = 'none';
            iconHolders[h].querySelector('.cross').style.display = 'none';
        }

        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}