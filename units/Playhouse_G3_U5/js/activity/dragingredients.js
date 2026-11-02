//  ****************************************** //
//  DragIngredients - Version no: 1
//  jQuery UI draggable/droppable word bank -> two columns.
//  Chips stay visible in the bank after use (struck-through + disabled),
//  they are never removed from the DOM.
//  Validation checks column MEMBERSHIP (any blank in that column), not
//  exact blank position - and empty blanks are never counted as wrong.
//  ****************************************** //
window.DragIngredients = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('DragIngredients > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
DragIngredients.prototype = {
    init:function(ob){
        this.ob = ob;
        this.listen(ob);
    },
    listen:function(ob){
        var self = this;
        var e = (ob.activity_area);

        var $chips = $(e).find('.dgi_chip');
        var $blanks = $(e).find('.dgi_blank');

        $chips.draggable({
            containment: e,
            revert: 'invalid',
            revertDuration: 150,
            zIndex: 100,
            helper: 'clone'
        });

        $blanks.droppable({
            accept: '.dgi_chip:not(.dgi_used)',
            hoverClass: 'dgi_blank_hover',
            drop: function(evt, ui){
                var $blank = $(this);
                var $chip = ui.draggable;
                var value = $chip.data('value');

                // if this blank already had a word, free that old chip back up first
                var oldValue = $blank.val();
                if(oldValue){
                    var $oldChip = $chips.filter('[data-value="' + oldValue + '"]');
                    $oldChip.removeClass('dgi_used').draggable('enable');
                }

                $blank.val(value);
                $blank.removeClass('dgi_wrong');

                $chip.addClass('dgi_used');
                $chip.draggable('disable');

                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
            }
        });

        // click a filled blank to clear it and free its chip back up
        $blanks.on('click', function(){
            var $blank = $(this);
            var value = $blank.val();
            if(!value) return;

            var $chip = $chips.filter('[data-value="' + value + '"]');
            $chip.removeClass('dgi_used').draggable('enable');

            $blank.val('');
            $blank.removeClass('dgi_wrong');

            document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
        });
    },
    validate:function(){
        var ob = this.ob;
        var e = (ob.activity_area);
        var columnsData = (ob.data_obj).columns;
        var allCorrect = true;
        var correctPlacedPerCol = {};

        var $blanks = $(e).find('.dgi_blank');
        $blanks.each(function(){
            var $blank = $(this);
            var colIndex = parseInt($blank.data('col'));
            var val = $blank.val();

            $blank.removeClass('dgi_wrong dgi_right');

            if(val === ''){
                // an empty blank is not an error by itself
                return;
            }

            var correctList = columnsData[colIndex].answers;
            var isCorrect = (correctList.indexOf(val) > -1);

            if(isCorrect){
                $blank.addClass('dgi_right');
                correctPlacedPerCol[colIndex] = (correctPlacedPerCol[colIndex] || 0) + 1;
            }else{
                $blank.addClass('dgi_wrong');
                allCorrect = false;
            }
        });

        for (var c = 0; c < columnsData.length; c++) {
            var placed = correctPlacedPerCol[c] || 0;
            var required = columnsData[c].answers.length;
            if(placed < required){
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

        $(e).find('.dgi_blank').val('').removeClass('dgi_wrong dgi_right');
        $(e).find('.dgi_chip').removeClass('dgi_used').draggable('enable');

        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}