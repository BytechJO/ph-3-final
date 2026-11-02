//  ****************************************** //
//  PickWordImg - Version no: 1
//  Click a word inside a box to select it (radio-style: only one word per
//  box can be selected). Validate compares the selected word's index
//  against "correct" in the data.
//  ****************************************** //
window.PickWordImg = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('PickWordImg > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
PickWordImg.prototype = {
    init:function(ob){
        this.ob = ob;
        this.listen(ob);
    },
    listen:function(ob){
        var e = (ob.activity_area);
        var elsQue = e.querySelectorAll('.que');

        for (var i = 0; i < elsQue.length; i++) {
            var wordOpts = elsQue[i].querySelectorAll('.pwi_wordOpt');
            for (var w = 0; w < wordOpts.length; w++) {
                wordOpts[w].addEventListener('click', function(){
                    var parentBox = this.closest('.que');
                    var siblingOpts = parentBox.querySelectorAll('.pwi_wordOpt');
                    for (var s = 0; s < siblingOpts.length; s++) {
                        siblingOpts[s].classList.remove('pwi_selected');
                    }
                    this.classList.add('pwi_selected');

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
            var choiceData = (ob.data_obj).choices[fIndx-1];

            elsQue[i].classList.remove('pwi_right', 'pwi_wrong');

            var selectedOpt = elsQue[i].querySelector('.pwi_wordOpt.pwi_selected');
            var isRight = false;

            if(selectedOpt){
                var oIdx = parseInt(selectedOpt.dataset.oidx);
                isRight = (oIdx == choiceData.correct);
            }

            if(isRight){
                resultArr[i] = 1;
                elsQue[i].classList.add('pwi_right');
            }else{
                resultArr[i] = 0;
                elsQue[i].classList.add('pwi_wrong');
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
            elsQue[i].classList.remove('pwi_right', 'pwi_wrong');
            var wordOpts = elsQue[i].querySelectorAll('.pwi_wordOpt');
            for (var w = 0; w < wordOpts.length; w++) {
                wordOpts[w].classList.remove('pwi_selected');
            }
        }
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}