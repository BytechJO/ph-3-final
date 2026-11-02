//  ****************************************** //
//  WordSearchWrite - Version no: 1
//  Drag across the grid to highlight a word you've found (just a visual
//  aid). The graded part is the word typed in the blank under each
//  picture.
//  ****************************************** //
window.WordSearchWrite = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    console.log('WordSearchWrite > ', $('.activity_area'));
    this.settings = {
        'activity_area': ob[0],
        'has_audio': (obj[0].dataset.audio != undefined && obj[0].dataset.audio != null) ? obj[0].dataset.audio : 'no',
        'data_obj': dataObj,
        'parent_holder': obj[0]
    }
    this.foundWords = [];
    this.isSelecting = false;
    this.startCell = null;
    this.init(this.settings);
}
WordSearchWrite.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen(ob);
    },
    listen: function (ob) {
        var self = this;
        var $area = $(ob.activity_area);
        var $grid = $area.find('.wsw_grid');

        $grid.on('pointerdown', '.wsw_cell', function (e) {
            self.isSelecting = true;
            self.startCell = this;
            self.clearTempHighlight($area);
            $(this).addClass('wsw_selecting');
            e.preventDefault();
        });

        $grid.on('pointermove', function (e) {
            if (!self.isSelecting) { return; }
            var el = document.elementFromPoint(e.clientX, e.clientY);
            if (el && el.classList.contains('wsw_cell')) {
                self.updateSelection($area, self.startCell, el);
            }
        });

        $(document).on('pointerup', function () {
            if (!self.isSelecting) { return; }
            self.isSelecting = false;
            self.finishSelection($area);
        });

        $area.on('input', '.wsw_pic_input', function () {
            document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
            document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
        });
    },
    getRC: function (cell) {
        return { r: parseInt(cell.dataset.row), c: parseInt(cell.dataset.col) };
    },
    getPathCells: function ($area, startCell, endCell) {
        var start = this.getRC(startCell);
        var end = this.getRC(endCell);
        var dr = end.r - start.r;
        var dc = end.c - start.c;
        var stepR = dr === 0 ? 0 : (dr > 0 ? 1 : -1);
        var stepC = dc === 0 ? 0 : (dc > 0 ? 1 : -1);
        var isStraight = (dr === 0 || dc === 0 || Math.abs(dr) === Math.abs(dc));
        if (!isStraight) { return null; }
        var steps = Math.max(Math.abs(dr), Math.abs(dc));
        var cells = [];
        for (var i = 0; i <= steps; i++) {
            var r = start.r + stepR * i;
            var c = start.c + stepC * i;
            var $cell = $area.find('.wsw_cell[data-row="' + r + '"][data-col="' + c + '"]');
            if ($cell.length == 0) { return null; }
            cells.push($cell[0]);
        }
        return cells;
    },
    updateSelection: function ($area, startCell, hoverCell) {
        var path = this.getPathCells($area, startCell, hoverCell);
        this.clearTempHighlight($area);
        if (path != null) {
            for (var i = 0; i < path.length; i++) {
                path[i].classList.add('wsw_selecting');
            }
        }
    },
    clearTempHighlight: function ($area) {
        $area.find('.wsw_cell.wsw_selecting').removeClass('wsw_selecting');
    },
    finishSelection: function ($area) {
        var self = this;
        var ob = this.ob;
        var selectedCells = $area.find('.wsw_cell.wsw_selecting');
        var chosenPath = [];
        selectedCells.each(function () { chosenPath.push(self.getRC(this)); });
        this.clearTempHighlight($area);
        if (chosenPath.length < 2) { return; }

        jQuery.each(ob.data_obj.gridWords, function (i, wObj) {
            if (jQuery.inArray(wObj.word, self.foundWords) > -1) { return; }
            if (self.pathsMatch(chosenPath, wObj.cells)) {
                self.foundWords.push(wObj.word);
                jQuery.each(wObj.cells, function (ci, rc) {
                    $area.find('.wsw_cell[data-row="' + rc[0] + '"][data-col="' + rc[1] + '"]').addClass('wsw_found');
                });
            }
        });
    },
    pathsMatch: function (chosenPath, wordCells) {
        if (chosenPath.length != wordCells.length) { return false; }
        var sameOrder = true, reverseOrder = true;
        for (var i = 0; i < wordCells.length; i++) {
            var rIdx = wordCells.length - 1 - i;
            if (chosenPath[i].r != wordCells[i][0] || chosenPath[i].c != wordCells[i][1]) { sameOrder = false; }
            if (chosenPath[i].r != wordCells[rIdx][0] || chosenPath[i].c != wordCells[rIdx][1]) { reverseOrder = false; }
        }
        return (sameOrder || reverseOrder);
    },
    validate: function () {
        var ob = this.ob;
        var $area = $(ob.activity_area);
        var elsQue = $area.find('.que');
        var numOfQuestions = elsQue.length;
        var resultArr = [];

        elsQue.each(function (i) {
            var $que = $(this);
            var qNo = parseInt($que.data('qno'));
            var pData = (ob.data_obj).pictures[qNo - 1];

            var userVal = $.trim($que.find('.wsw_pic_input').val()).toLowerCase();
            var isRight = (userVal == pData.answer);

            resultArr[i] = isRight ? 1 : 0;
            $que.find('.tick').css('display', isRight ? 'block' : 'none');
            $que.find('.cross').css('display', isRight ? 'none' : 'block');
        });

        var allCorrect = (((resultArr.join('').split('0'))[0]).length == numOfQuestions);
        showFeedback(true, allCorrect);

        if (allCorrect) {
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
        }
    },
    reset: function () {
        var ob = this.ob;
        var $area = $(ob.activity_area);

        this.foundWords = [];
        $area.find('.wsw_cell').removeClass('wsw_found wsw_selecting');
        $area.find('.wsw_pic_input').val('');
        $area.find('.tick, .cross').css('display', 'none');

        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
}