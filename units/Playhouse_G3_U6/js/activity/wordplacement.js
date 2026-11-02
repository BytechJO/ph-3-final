//  ****************************************** //
//  WordPlacement - Version no: 1
//  Every gap between words is a small text input. The student must type the
//  target word ("of") into exactly the correct gap, and leave every other
//  gap on that sentence empty.
//  ****************************************** //
window.WordPlacement = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('WordPlacement > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
WordPlacement.prototype = {
    init:function(ob){
        this.ob = ob;
        this.listen(ob);
    },
    listen:function(ob){
        var e = (ob.activity_area);
        var inputs = e.querySelectorAll('.wp_gap');
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
        var targetWord = ob.data_obj.targetWord;

        for (var i = 0; i < elsQue.length; i++) {
            resultArr[i] = 0;
            var fIndx = parseInt(elsQue[i].dataset.qno);
            var sData = (ob.data_obj).sentences[fIndx-1];

            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';

            var gapInputs = elsQue[i].querySelectorAll('.wp_gap');
            var isRight = true;

            for (var g = 0; g < gapInputs.length; g++) {
                var gIdx = parseInt(gapInputs[g].dataset.gap);
                var val = gapInputs[g].value.trim();
                var cmpVal = (_case == 'yes') ? val : val.toLowerCase();
                var cmpTarget = (_case == 'yes') ? targetWord : targetWord.toLowerCase();

                if(gIdx == sData.correctGap){
                    // this gap MUST contain the target word
                    if(cmpVal != cmpTarget){ isRight = false; }
                }else{
                    // every other gap MUST stay empty
                    if(val.length > 0){ isRight = false; }
                }
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
            var gapInputs = elsQue[i].querySelectorAll('.wp_gap');
            for (var g = 0; g < gapInputs.length; g++) {
                gapInputs[g].value = '';
                gapInputs[g].style.color = 'black';
            }
        }
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}