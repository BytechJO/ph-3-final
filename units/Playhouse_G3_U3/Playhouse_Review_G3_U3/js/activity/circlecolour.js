//  ****************************************** //
//  CircleColour - Version no: 1
//  Single click on a word -> toggle circle. Double click on a word -> toggle colour.
//  Validate compares each word's circle/colour state against the data.
//  ****************************************** //
window.CircleColour = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('ColourWords > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
CircleColour.prototype = {
    init:function(ob){
        this.ob = ob;
        this.listen(ob);
    },
    listen:function(ob){
        var self = this;
        var e = (ob.activity_area);
        var wordWraps = e.querySelectorAll('.cw_wordWrap');
 
        for (var i = 0; i < wordWraps.length; i++) {
            wordWraps[i].addEventListener('click', function(){
                self.toggleColour(this);
            });
        }
    },
    toggleColour:function(wordWrap){
        var wordEl = wordWrap.querySelector('.cw_word');
        var isColoured = (wordWrap.dataset.coloured == 'true');
        var targetColour = (this.ob.data_obj.targetColour != undefined && this.ob.data_obj.targetColour != '')
            ? this.ob.data_obj.targetColour : '';
 
        if(isColoured){
            wordWrap.dataset.coloured = 'false';
            wordWrap.classList.remove('cw_coloured');
            wordEl.style.color = '';
            wordEl.style.webkitTextStroke = '';
            wordEl.style.textShadow = '';
        }else{
            wordWrap.dataset.coloured = 'true';
            wordWrap.classList.add('cw_coloured');
            if(targetColour != ''){
                wordEl.style.color = targetColour;
                wordEl.style.webkitTextStroke = '0';
                wordEl.style.textShadow = 'none';
            }
        }
 
        document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
        document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
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
 
            var wordWraps = elsQue[i].querySelectorAll('.cw_wordWrap');
            var isRight = true;
 
            for (var w = 0; w < wordWraps.length; w++) {
                var widx = parseInt(wordWraps[w].dataset.widx);
                var wordData = fDataObj.words[widx];
 
                var userColoured = (wordWraps[w].dataset.coloured == 'true');
 
                if(userColoured != wordData.needsColour){ isRight = false; }
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
 
            var wordWraps = elsQue[i].querySelectorAll('.cw_wordWrap');
            for (var w = 0; w < wordWraps.length; w++) {
                wordWraps[w].dataset.coloured = 'false';
                wordWraps[w].classList.remove('cw_coloured');
                var wordEl = wordWraps[w].querySelector('.cw_word');
                wordEl.style.color = '';
                wordEl.style.webkitTextStroke = '';
                wordEl.style.textShadow = '';
            }
        }
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}
 