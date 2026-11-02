//  ****************************************** //
//  QuantityAnswer - Version no: 1
//  Free-write blank under each picture, exact-match validation per item.
//  Example items (isExample:true) are static and skipped entirely.
//  ****************************************** //
window.QuantityAnswer = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('QuantityAnswer > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
QuantityAnswer.prototype = {
    init:function(ob){
        this.ob = ob;
        this.listen(ob);
    },
    listen:function(ob){
        var e = (ob.activity_area);
        var inputs = e.querySelectorAll('.qa_input');
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
        var numOfQuestions = 0;
        var allCorrect = false;
        var resultArr = [];

        var _case = (ob.data_obj.strictcase != undefined && ob.data_obj.strictcase!=null )? (ob.data_obj.strictcase).toLowerCase():'no';

        for (var i = 0; i < elsQue.length; i++) {
            var inputEl = elsQue[i].querySelector('.qa_input');
            if(!inputEl) continue; // skip example items entirely

            var qKey = elsQue[i].dataset.qno.split('_');
            var qIdx = parseInt(qKey[0]) - 1;
            var iIdx = parseInt(qKey[1]);
            var itemData = (ob.data_obj).questions[qIdx].items[iIdx];

            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';

            var uVal = inputEl.value;
            var cVal = itemData.answer;
            if(_case != 'yes'){
                uVal = uVal.toLowerCase();
                cVal = cVal.toLowerCase();
            }
            uVal = uVal.trim().replace(/\s+/g, ' ');
            cVal = cVal.trim().replace(/\s+/g, ' ');

            var isRight = (uVal == cVal && uVal.length > 0);
            resultArr[numOfQuestions] = isRight ? 1 : 0;
            numOfQuestions++;

            if(isRight){
                (elsQue[i].querySelector('.tick')).style.display = 'block';
            }else{
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
            var tick = elsQue[i].querySelector('.tick');
            var cross = elsQue[i].querySelector('.cross');
            if(tick) tick.style.display = 'none';
            if(cross) cross.style.display = 'none';

            var inputEl = elsQue[i].querySelector('.qa_input');
            if(inputEl){
                inputEl.value = '';
                inputEl.style.color = 'black';
            }
        }
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}