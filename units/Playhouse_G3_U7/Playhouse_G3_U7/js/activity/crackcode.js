//  ****************************************** //
//  CrackCode - Version no: 1
//  Each blank must contain the letter matching its number (a=1 ... z=26).
//  One overall tick/cross for the whole puzzle.
//  ****************************************** //
window.CrackCode = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('CrackCode > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
CrackCode.prototype = {
    init:function(ob){
        this.ob = ob;
        this.buildAnswerMap(ob);
        this.listen(ob);
    },
    // flatten sentences/words/numbers into "wordIdx_nIdx" -> correct letter
    buildAnswerMap:function(ob){
        var map = {};
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        var wordIdx = 0;
        var sentences = (ob.data_obj).sentences;
        for (var s = 0; s < sentences.length; s++) {
            var words = sentences[s].words;
            for (var w = 0; w < words.length; w++) {
                var numbers = words[w].numbers;
                for (var n = 0; n < numbers.length; n++) {
                    map[wordIdx + '_' + n] = alphabet[numbers[n] - 1];
                }
                wordIdx++;
            }
        }
        this.answerMap = map;
    },
    listen:function(ob){
        var e = (ob.activity_area);
        var inputs = e.querySelectorAll('.cc_letterInput');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('input', function(){
                this.value = (this.value).toLowerCase();
                $(this).css('color', 'black');
                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
            });
        }
    },
    validate:function(){
    var ob = this.ob;
    var e = (ob.activity_area);
    var _case = (ob.data_obj.strictcase != undefined && ob.data_obj.strictcase!=null )? (ob.data_obj.strictcase).toLowerCase():'no';
    var inputs = e.querySelectorAll('.cc_letterInput');
    var allCorrect = true;

    for (var i = 0; i < inputs.length; i++) {
        var key = inputs[i].dataset.wordidx + '_' + inputs[i].dataset.nidx;
        var correctLetter = this.answerMap[key];
        var uVal = inputs[i].value;
        if(_case != 'yes'){
            uVal = uVal.toLowerCase();
            correctLetter = correctLetter.toLowerCase();
        }

        // NEW: find this input's own little icon pair and hide both first
        var cellIconWrap = inputs[i].closest('.cc_letter_col').querySelector('.cc_cell_icon_wrap');
        var cellTick = cellIconWrap.querySelector('.cc_cell_tick');
        var cellCross = cellIconWrap.querySelector('.cc_cell_cross');
        cellTick.style.display = 'none';
        cellCross.style.display = 'none';

        if(uVal == correctLetter && uVal.length > 0){
            cellTick.style.display = 'block';   // NEW
        }else{
            cellCross.style.display = 'block';  // NEW
            allCorrect = false;
        }
    }

    (e.querySelector('.tick')).style.display = 'none';
    (e.querySelector('.cross')).style.display = 'none';

    if(allCorrect){
        (e.querySelector('.tick')).style.display = 'block';
    }else{
        (e.querySelector('.cross')).style.display = 'block';
    }

    showFeedback(true, allCorrect);

    if(allCorrect){
        document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
    }
},
reset:function(){
    var ob = this.ob;
    var e = (ob.activity_area);
    var inputs = e.querySelectorAll('.cc_letterInput');

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
        inputs[i].style.color = 'black';

        // NEW: hide each cell's own icons too
        var cellIconWrap = inputs[i].closest('.cc_letter_col').querySelector('.cc_cell_icon_wrap');
        cellIconWrap.querySelector('.cc_cell_tick').style.display = 'none';
        cellIconWrap.querySelector('.cc_cell_cross').style.display = 'none';
    }

    (e.querySelector('.tick')).style.display = 'none';
    (e.querySelector('.cross')).style.display = 'none';

    document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
},
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}