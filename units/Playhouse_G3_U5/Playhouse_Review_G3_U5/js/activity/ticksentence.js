//  ****************************************** //
//  TickSentence - Version no: 1
//  Click a checkbox to select it (radio-style: only one selected per question).
//  Validate compares the selected option against isCorrect in the data.
//  ****************************************** //
window.TickSentence = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('TickSentence > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
TickSentence.prototype = {
    init:function(ob){
        this.ob = ob;
        this.listen(ob);
    },
    listen:function(ob){
        var e = (ob.activity_area);
        var elsQue = e.querySelectorAll('.que');

        for (var i = 0; i < elsQue.length; i++) {
            var checkboxes = elsQue[i].querySelectorAll('.ts_checkbox');
            for (var c = 0; c < checkboxes.length; c++) {
                checkboxes[c].addEventListener('click', function(){
                    var parentQue = this.closest('.que');
                    var siblingBoxes = parentQue.querySelectorAll('.ts_checkbox');
                    for (var s = 0; s < siblingBoxes.length; s++) {
                        siblingBoxes[s].classList.remove('ts_checked');
                    }
                    this.classList.add('ts_checked');

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
            var fDataObj = ((ob.data_obj).questions[fIndx-1]);

            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';

            var checkedBox = elsQue[i].querySelector('.ts_checkbox.ts_checked');
            var isRight = false;

            if(checkedBox){
                var oIdx = parseInt(checkedBox.dataset.oidx);
                isRight = (fDataObj.options[oIdx].isCorrect == true);
            }

            var optionRows = elsQue[i].querySelectorAll('.ts_option_row');
            for (var r = 0; r < optionRows.length; r++) {
                optionRows[r].classList.remove('ts_right', 'ts_wrong');
            }

            if(isRight){
                resultArr[i] = 1;
                checkedBox.closest('.ts_option_row').classList.add('ts_right');
                (elsQue[i].querySelector('.tick')).style.display = 'block';
            }else{
                resultArr[i] = 0;
                if(checkedBox){
                    checkedBox.closest('.ts_option_row').classList.add('ts_wrong');
                }
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

            var checkboxes = elsQue[i].querySelectorAll('.ts_checkbox');
            for (var c = 0; c < checkboxes.length; c++) {
                checkboxes[c].classList.remove('ts_checked');
            }
            var optionRows = elsQue[i].querySelectorAll('.ts_option_row');
            for (var r = 0; r < optionRows.length; r++) {
                optionRows[r].classList.remove('ts_right', 'ts_wrong');
            }
        }
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}