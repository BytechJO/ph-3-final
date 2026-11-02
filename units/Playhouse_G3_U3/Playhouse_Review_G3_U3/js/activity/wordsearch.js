//  ****************************************** //
//  WordSearch - Version no: 1
//  Press and drag across letters (mouse or touch) in a straight line
//  (horizontal, vertical, or diagonal) to select a word.
//  ****************************************** //
window.WordSearch = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    console.log('WordSearch > ', $('.activity_area'));
    this.settings = {
        'activity_area': ob[0],
        'has_audio': (obj[0].dataset.audio != undefined && obj[0].dataset.audio != null) ? obj[0].dataset.audio : 'no',
        'data_obj': dataObj,
        'parent_holder': obj[0]
    }
    this.foundWordIds = [];
    this.isSelecting = false;
    this.startCell = null;
    this.init(this.settings);
}
WordSearch.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen(ob);
    },
    listen: function (ob) {
        var self = this;
        var $area = $(ob.activity_area);
        var $grid = $area.find('.ws_grid');

        $grid.on('pointerdown', '.ws_cell', function (e) {
            self.isSelecting = true;
            self.startCell = this;
            self.clearTempHighlight();
            $(this).addClass('ws_selecting');
            e.preventDefault();
        });

        $grid.on('pointermove', function (e) {
            if (!self.isSelecting) { return; }
            var el = document.elementFromPoint(e.clientX, e.clientY);
            if (el && el.classList.contains('ws_cell')) {
                self.updateSelection(self.startCell, el);
            }
        });

        $(document).on('pointerup', function () {
            if (!self.isSelecting) { return; }
            self.isSelecting = false;
            self.finishSelection();
        });
    },
    getRC: function (cell) {
        return { r: parseInt(cell.dataset.row), c: parseInt(cell.dataset.col) };
    },
    // builds the straight-line path between the start cell and the current
    // cell, if (and only if) they actually form a straight line
    getPathCells: function (ob, startCell, endCell) {
        var $area = $(ob.activity_area);
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
            var $cell = $area.find('.ws_cell[data-row="' + r + '"][data-col="' + c + '"]');
            if ($cell.length == 0) { return null; }
            cells.push($cell[0]);
        }
        return cells;
    },
    updateSelection: function (startCell, hoverCell) {
        var ob = this.ob;
        var $area = $(ob.activity_area);
        var path = this.getPathCells(ob, startCell, hoverCell);

        this.clearTempHighlight();
        if (path != null) {
            for (var i = 0; i < path.length; i++) {
                // always mark it as part of the current selection (so the
                // path length/match check below sees the full word), even
                // if this cell already belongs to a previously found word -
                // that's exactly what happens when two words overlap
                path[i].classList.add('ws_selecting');
            }
        }
    },
    clearTempHighlight: function () {
        var ob = this.ob;
        var $area = $(ob.activity_area);
        $area.find('.ws_cell.ws_selecting').removeClass('ws_selecting');
    },
    finishSelection: function () {
        var self = this;
        var ob = this.ob;
        var $area = $(ob.activity_area);
        var selectedCells = $area.find('.ws_cell.ws_selecting');

        var chosenPath = [];
        selectedCells.each(function () {
            chosenPath.push(self.getRC(this));
        });
        this.clearTempHighlight();

        if (chosenPath.length < 2) { return; }

        var matchedWord = null;
        var matchedCells = null;
        jQuery.each(ob.data_obj.words, function (i, wObj) {
            if (jQuery.inArray(wObj.id, self.foundWordIds) > -1) { return; } // already found
            var solution = self.findMatchingSolution(chosenPath, wObj.cells);
            if (solution != null) {
                matchedWord = wObj;
                matchedCells = solution;
                return false; // break
            }
        });

        if (matchedWord != null) {
            this.markWordFound(matchedWord, matchedCells);
        }
    },
    // a word can have more than one valid straight-line occurrence in the
    // grid (coincidental overlaps with the filler letters); check the
    // chosen path against ALL of them and return whichever one matches
    findMatchingSolution: function (chosenPath, wordSolutions) {
        var self = this;
        var matched = null;
        jQuery.each(wordSolutions, function (i, solutionCells) {
            if (self.pathsMatch(chosenPath, solutionCells)) {
                matched = solutionCells;
                return false; // break
            }
        });
        return matched;
    },
    pathsMatch: function (chosenPath, wordCells) {
        if (chosenPath.length != wordCells.length) { return false; }

        var sameOrder = true;
        var reverseOrder = true;
        for (var i = 0; i < wordCells.length; i++) {
            var rIdx = wordCells.length - 1 - i;
            if (chosenPath[i].r != wordCells[i][0] || chosenPath[i].c != wordCells[i][1]) { sameOrder = false; }
            if (chosenPath[i].r != wordCells[rIdx][0] || chosenPath[i].c != wordCells[rIdx][1]) { reverseOrder = false; }
        }
        return (sameOrder || reverseOrder);
    },
    markWordFound: function (wObj, matchedCells) {
        var ob = this.ob;
        var $area = $(ob.activity_area);

        this.foundWordIds.push(wObj.id);

        jQuery.each(matchedCells, function (i, rc) {
            $area.find('.ws_cell[data-row="' + rc[0] + '"][data-col="' + rc[1] + '"]').addClass('ws_found');
        });
        $area.find('.ws_word_item[data-wordid="' + wObj.id + '"]').addClass('ws_word_found');

        document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
        document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
    },
    validate: function () {
        var ob = this.ob;
        var totalWords = (ob.data_obj.words).length;
        var allCorrect = (this.foundWordIds.length == totalWords);

        showFeedback(true, allCorrect);
        if (allCorrect) {
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
        }
    },
    reset: function () {
        var ob = this.ob;
        var $area = $(ob.activity_area);

        this.foundWordIds = [];
        this.clearTempHighlight();
        $area.find('.ws_cell.ws_found').removeClass('ws_found');
        $area.find('.ws_word_item.ws_word_found').removeClass('ws_word_found');

        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
}