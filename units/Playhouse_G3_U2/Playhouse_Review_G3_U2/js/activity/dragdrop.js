//  ****************************************** //
//  DragDrop - Word Sort - Version no: 1.0
//  ****************************************** //
window.DragDrop = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    console.log('DragDrop > ', $('.activity_area'));
    this.settings = {
        'activity_area': ob[0],
        'has_audio': (obj[0].dataset.audio != undefined && obj[0].dataset.audio != null) ? obj[0].dataset.audio : 'no',
        'data_obj': dataObj,
        'parent_holder': obj[0]
    }
    this.init(this.settings);
}
DragDrop.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen(ob);
    },
    listen: function (ob) {
        var self = this;
        var $area = $(ob.activity_area);

        // make every word in the bank + any dropped word draggable
        $area.find('.draggable_word').draggable({
            revert: 'invalid',
            revertDuration: 200,
            helper: 'clone',
            appendTo: 'body',
            zIndex: 100,
            start: function () {
                $(this).addClass('dragging');
            },
            stop: function () {
                $(this).removeClass('dragging');
            }
        });

        // each drop zone accepts a draggable word
        $area.find('.drop_zone').droppable({
            accept: '.draggable_word',
            hoverClass: 'drop_zone_hover',
            drop: function (event, ui) {
                var $word = ui.draggable;
                var $targetZone = $(this).find('.dropped_words');

                // if the word came from another drop zone, just move it
                if ($word.closest('.drop_zone').length > 0) {
                    $word.appendTo($targetZone);
                } else {
                    // came from the word bank - hide original, clone into the zone
                    $word.addClass('used_in_bank');
                    var $clone = $word.clone().removeClass('used_in_bank dragging').addClass('placed_word');
                    $clone.appendTo($targetZone);
                    self.makeDraggableAgain($clone);
                }

                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
            }
        });

        // clicking a placed word sends it back to the word bank
        $area.on('click', '.placed_word', function () {
            var wordId = $(this).data('wordid');
            $(this).remove();
            $area.find('.clue_word[data-wordid="' + wordId + '"]').removeClass('used_in_bank');
            document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
        });
    },
    makeDraggableAgain: function ($el) {
        $el.draggable({
            revert: 'invalid',
            revertDuration: 200,
            helper: 'clone',
            appendTo: 'body',
            zIndex: 100,
            start: function () { $(this).addClass('dragging'); },
            stop: function () { $(this).removeClass('dragging'); }
        });
    },
    validate: function () {
        var self = this;
        var ob = this.ob;
        var $area = $(ob.activity_area);
        self.showTickCross(false);

        var resultArr = [];
        var numOfBoxes = $area.find('.drop_box_wrap').length;

        $area.find('.drop_box_wrap').each(function () {
            var qNo = parseInt($(this).data('qno'));
            var qDataObj = (ob.data_obj).questions[qNo - 1];
            var correctIds = qDataObj.answer.slice().sort();

            var placedIds = [];
            $(this).find('.placed_word').each(function () {
                placedIds.push($(this).data('wordid').toString());
            });
            placedIds.sort();

            var isCorrect = (placedIds.length === correctIds.length) &&
                placedIds.every(function (val, idx) { return val === correctIds[idx].toString(); });

            resultArr[qNo - 1] = isCorrect ? 1 : 0;
        });

        var allCorrect = (resultArr.length === numOfBoxes) && resultArr.every(function (v) { return v === 1; });
        self.showTickCross(true, resultArr);
        showFeedback(true, allCorrect);

        if (allCorrect) {
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
        }
    },
    showTickCross: function (aBool, aArr) {
        var ob = this.ob;
        var e = (ob.activity_area);
        var elsQue = e.querySelectorAll('.drop_box_wrap');
        if (!aBool) {
            for (var i = 0; i < elsQue.length; i++) {
                (elsQue[i].querySelector('.icon_wrap')).style.display = 'none';
                (elsQue[i].querySelector('.tick')).style.display = 'none';
                (elsQue[i].querySelector('.cross')).style.display = 'none';
            }
        } else {
            for (var i = 0; i < elsQue.length; i++) {
                (elsQue[i].querySelector('.icon_wrap')).style.display = 'block';
                if (aArr.length > 0) {
                    if (aArr[i] == 1) {
                        (elsQue[i].querySelector('.tick')).style.display = 'block';
                        (elsQue[i].querySelector('.cross')).style.display = 'none';
                    } else {
                        (elsQue[i].querySelector('.tick')).style.display = 'none';
                        (elsQue[i].querySelector('.cross')).style.display = 'block';
                    }
                }
            }
        }
    },
    reset: function () {
        var self = this;
        var ob = this.ob;
        var $area = $(ob.activity_area);

        // move all placed words back out and remove them, then un-hide bank words
        $area.find('.placed_word').remove();
        $area.find('.clue_word').removeClass('used_in_bank');

        self.showTickCross(false);
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
}