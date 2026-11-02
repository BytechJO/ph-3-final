//  ****************************************** //
//  WordSort3 - Version no: 1
//  Drag a word from the bank into any empty line in the correct table.
//  The bank word is NEVER removed - it just fades and gets a strikethrough
//  to show it has been used. Click a placed word to send it back to the
//  bank (un-fades it there again).
//  ****************************************** //
window.WordSort3 = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    console.log('WordSort3 > ', $('.activity_area'));
    this.settings = {
        'activity_area': ob[0],
        'has_audio': (obj[0].dataset.audio != undefined && obj[0].dataset.audio != null) ? obj[0].dataset.audio : 'no',
        'data_obj': dataObj,
        'parent_holder': obj[0]
    }
    this.init(this.settings);
}
WordSort3.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen(ob);
    },
    listen: function (ob) {
        var self = this;
        var $area = $(ob.activity_area);

        this.makeBankWordsDraggable($area);

        // empty lines accept a dropped word
        $area.find('.ws3_slot').droppable({
            accept: '.draggable_word',
            hoverClass: 'ws3_slot_hover',
            drop: function (event, ui) {
                var $slot = $(this);
                if ($slot.find('.placed_word').length > 0) { return; } // already occupied

                var $word = ui.draggable;
                var wordId = $word.data('wordid');

                if ($word.hasClass('ws3_bank_chip')) {
                    // dragged straight from the bank - fade the original,
                    // it stays visible and struck-through, never removed
                    $word.addClass('used_in_bank');
                    var wObj = self.getWordData(wordId);
                    var $clone = $('<div class="placed_word" data-wordid="' + wordId + '"></div>');
                    $clone.text(wObj != null ? wObj.text : $.trim($word.text()));
                    $slot.append($clone);
                    self.makeDraggableAgain($clone);
                } else {
                    // moving an already-placed word to a different empty line
                    $word.appendTo($slot);
                }

                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
            }
        });

        // clicking a placed word sends it back to the bank
        $area.on('click', '.placed_word', function () {
            var wordId = $(this).data('wordid');
            $(this).remove();
            $area.find('.ws3_result_icon[data-forword="' + wordId + '"]').remove();
            $area.find('.ws3_bank_chip[data-wordid="' + wordId + '"]').removeClass('used_in_bank');
            document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
        });
    },
    getWordData: function (wordId) {
        var ob = this.ob;
        var found = null;
        jQuery.each(ob.data_obj.words, function (i, w) {
            if (w.id == wordId) { found = w; }
        });
        return found;
    },
    makeBankWordsDraggable: function ($area) {
        $area.find('.draggable_word').not('.used_in_bank').draggable({
            revert: 'invalid',
            revertDuration: 200,
            helper: 'clone',
            appendTo: 'body',
            zIndex: 100
        });
    },
    makeDraggableAgain: function ($el) {
        $el.draggable({
            revert: 'invalid',
            revertDuration: 200,
            helper: 'clone',
            appendTo: 'body',
            zIndex: 100
        });
    },
    validate: function () {
        var ob = this.ob;
        var $area = $(ob.activity_area);
        var resultArr = [];
        var totalWords = (ob.data_obj.words).length;

        jQuery.each(ob.data_obj.words, function (i, wObj) {
            var $placed = $area.find('.placed_word[data-wordid="' + wObj.id + '"]');
            var isRight = false;

            // clear any icon left over from a previous check
            $area.find('.ws3_result_icon[data-forword="' + wObj.id + '"]').remove();

            if ($placed.length > 0) {
                var $tableWrap = $placed.closest('.ws3_table_wrap');
                var tableId = $tableWrap.data('tableid');
                isRight = (tableId == wObj.category);
                $placed.removeClass('ws3_correct ws3_incorrect');
                $placed.addClass(isRight ? 'ws3_correct' : 'ws3_incorrect');

                var iconSrc = isRight ? '../images/icons/check_btn.png' : '../images/icons/cross_btn.png';
                var $icon = $('<img class="ws3_result_icon" data-forword="' + wObj.id + '" src="' + iconSrc + '">');
                $placed.after($icon);
            }
            resultArr[i] = isRight ? 1 : 0;
        });

        var allCorrect = (((resultArr.join('').split('0'))[0]).length == totalWords);
        showFeedback(true, allCorrect);

        if (allCorrect) {
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
        }
    },
    reset: function () {
        var ob = this.ob;
        var $area = $(ob.activity_area);

        $area.find('.placed_word').remove();
        $area.find('.ws3_result_icon').remove();
        $area.find('.ws3_bank_chip').removeClass('used_in_bank');

        this.makeBankWordsDraggable($area);
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
}