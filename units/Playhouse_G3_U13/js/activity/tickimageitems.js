//  ****************************************** //
//  TickImageItems - Version no: 1
//  Click a picture's checkbox to toggle a tick mark (multi-select, each
//  item independent). Validate compares each item's ticked state to
//  "correct" in the data.
//  ****************************************** //
window.TickImageItems = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('TickImageItems > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
TickImageItems.prototype = {
    init:function(ob){
        this.ob = ob;
        this.listen(ob);
    },
    listen:function(ob){
        var e = (ob.activity_area);
        var checkboxes = e.querySelectorAll('.tii_checkbox');

        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].addEventListener('click', function(){
                var isChecked = this.classList.contains('tii_checked');
                if(isChecked){
                    this.classList.remove('tii_checked');
                }else{
                    this.classList.add('tii_checked');
                }

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

    for (var i = 0; i < elsQue.length; i++) {
        resultArr[i] = 0;
        var fIndx = parseInt(elsQue[i].dataset.qno);
        var itemData = (ob.data_obj).items[fIndx-1];

        elsQue[i].classList.remove('tii_right', 'tii_wrong');

        // NEW: hide both icons first
        (elsQue[i].querySelector('.tick')).style.display = 'none';
        (elsQue[i].querySelector('.cross')).style.display = 'none';

        var checkbox = elsQue[i].querySelector('.tii_checkbox');
        var isChecked = checkbox.classList.contains('tii_checked');
        var isRight = (isChecked == itemData.correct);

        if(isRight){
            resultArr[i] = 1;
            elsQue[i].classList.add('tii_right');
            (elsQue[i].querySelector('.tick')).style.display = 'block'; // NEW
        }else{
            resultArr[i] = 0;
            elsQue[i].classList.add('tii_wrong');
            (elsQue[i].querySelector('.cross')).style.display = 'block'; // NEW
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
        elsQue[i].classList.remove('tii_right', 'tii_wrong');
        var checkbox = elsQue[i].querySelector('.tii_checkbox');
        checkbox.classList.remove('tii_checked');

        // NEW: hide the icons again
        (elsQue[i].querySelector('.tick')).style.display = 'none';
        (elsQue[i].querySelector('.cross')).style.display = 'none';
    }
    document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
},
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}