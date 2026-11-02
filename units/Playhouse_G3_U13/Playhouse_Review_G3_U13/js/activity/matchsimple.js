//  ****************************************** //
//  MatchOnImage - Version no: 1
//  Click a word's dot, then click a point on the picture (same group),
//  to draw a line between them. Each dot (word or point) can only be
//  used once - click it again to remove that connection.
//  ****************************************** //
window.MatchSimple = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    console.log('MatchOnImage > ', $('.activity_area'));
    this.settings = {
        'activity_area': ob[0],
        'has_audio': (obj[0].dataset.audio != undefined && obj[0].dataset.audio != null) ? obj[0].dataset.audio : 'no',
        'data_obj': dataObj,
        'parent_holder': obj[0]
    }
    this.connections = []; // {gIndex, wordId, pointId}
    this.selectedWord = null; // {gIndex, wordId}
    this.init(this.settings);
}
MatchSimple.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen(ob);
        var self = this;
        // point positions depend on image layout - redraw once images
        // have actually finished loading (their real size affects offsets)
        $(ob.activity_area).find('.moi_bg_image').on('load', function () {
            self.redrawAll($(ob.activity_area));
        });
    },
    getGroupWrap: function ($area, gIndex) {
        return $area.find('.moi_group_wrap[data-gindex="' + gIndex + '"]');
    },
    getDot: function ($area, gIndex, role, itemId) {
        return this.getGroupWrap($area, gIndex).find('[data-role="' + role + '"][data-itemid="' + itemId + '"]');
    },
    getDotCenter: function ($area, gIndex, $dot) {
        var $wrap = this.getGroupWrap($area, gIndex);
        var wrapOffset = $wrap.offset();
        var dotOffset = $dot.offset();
        return {
            x: dotOffset.left - wrapOffset.left + ($dot.outerWidth() / 2),
            y: dotOffset.top - wrapOffset.top + ($dot.outerHeight() / 2)
        };
    },
    drawLine: function ($area, gIndex, wordId, pointId, extraClass) {
        var $svg = this.getGroupWrap($area, gIndex).find('.moi_svg_layer');
        var $wordDot = this.getDot($area, gIndex, 'word', wordId);
        var $pointDot = this.getDot($area, gIndex, 'point', pointId);
        var p1 = this.getDotCenter($area, gIndex, $wordDot);
        var p2 = this.getDotCenter($area, gIndex, $pointDot);

        var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', p1.x);
        line.setAttribute('y1', p1.y);
        line.setAttribute('x2', p2.x);
        line.setAttribute('y2', p2.y);
        line.setAttribute('class', 'moi_line' + (extraClass ? ' ' + extraClass : ''));
        line.setAttribute('data-wordid', wordId);
        line.setAttribute('data-pointid', pointId);
        $svg[0].appendChild(line);
    },
    listen: function (ob) {
        var self = this;
        var $area = $(ob.activity_area);

        $area.on('click', '.moi_word_dot, .moi_point_dot', function () {
            var $dot = $(this);
            var gIndex = parseInt($dot.data('gindex'));
            var role = $dot.data('role');
            var itemId = $dot.data('itemid');

            if ($dot.hasClass('moi_used')) {
                self.removeConnection($area, gIndex, role, itemId);
                return;
            }

            if (role == 'word') {
                self.getGroupWrap($area, gIndex).find('.moi_word_dot.moi_selected').removeClass('moi_selected');
                $dot.addClass('moi_selected');
                self.selectedWord = { gIndex: gIndex, wordId: itemId };

            } else if (role == 'point') {
                if (self.selectedWord != null && self.selectedWord.gIndex == gIndex) {
                    self.addConnection($area, gIndex, self.selectedWord.wordId, itemId);
                    self.getGroupWrap($area, gIndex).find('.moi_word_dot.moi_selected').removeClass('moi_selected');
                    self.selectedWord = null;
                }
            }

            document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
            document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
        });

        $(window).on('resize.matchonimage', function () {
            self.redrawAll($area);
        });
    },
    addConnection: function ($area, gIndex, wordId, pointId) {
        this.connections.push({ gIndex: gIndex, wordId: wordId, pointId: pointId });
        this.getDot($area, gIndex, 'word', wordId).addClass('moi_used');
        this.getDot($area, gIndex, 'point', pointId).addClass('moi_used');
        this.drawLine($area, gIndex, wordId, pointId, '');
    },
    removeConnection: function ($area, gIndex, role, itemId) {
        var idx = -1;
        jQuery.each(this.connections, function (i, c) {
            if (c.gIndex != gIndex) { return; }
            if ((role == 'word' && c.wordId == itemId) || (role == 'point' && c.pointId == itemId)) { idx = i; }
        });
        if (idx == -1) { return; }

        var c = this.connections[idx];
        this.getGroupWrap($area, gIndex).find('.moi_svg_layer .moi_line[data-wordid="' + c.wordId + '"][data-pointid="' + c.pointId + '"]').remove();
        this.getDot($area, gIndex, 'word', c.wordId).removeClass('moi_used moi_correct moi_incorrect');
        this.getDot($area, gIndex, 'point', c.pointId).removeClass('moi_used moi_correct moi_incorrect');
        this.connections.splice(idx, 1);
    },
    redrawAll: function ($area) {
        var self = this;
        $area.find('.moi_svg_layer').empty();
        jQuery.each(this.connections, function (i, c) {
            var cls = self.getResultClass($area, c.gIndex, c.wordId);
            self.drawLine($area, c.gIndex, c.wordId, c.pointId, cls);
        });
    },
    getResultClass: function ($area, gIndex, wordId) {
        var $wordDot = this.getDot($area, gIndex, 'word', wordId);
        if ($wordDot.hasClass('moi_correct')) { return 'moi_correct_line'; }
        if ($wordDot.hasClass('moi_incorrect')) { return 'moi_incorrect_line'; }
        return '';
    },
    getAllWords: function (gObj) {
        return gObj.leftItems.concat(gObj.rightItems);
    },
    validate: function () {
        var self = this;
        var ob = this.ob;
        var $area = $(ob.activity_area);
        var resultArr = [];

        $area.find('.moi_word_dot, .moi_point_dot').removeClass('moi_correct moi_incorrect');

        jQuery.each(ob.data_obj.groups, function (gIndex, gObj) {
            var allWords = self.getAllWords(gObj);
            jQuery.each(allWords, function (i, wObj) {
                var isRight = false;
                jQuery.each(self.connections, function (ci, c) {
                    if (c.gIndex == gIndex && c.wordId == wObj.id) {
                        isRight = (c.pointId == wObj.correctPointId);
                    }
                });
                self.getDot($area, gIndex, 'word', wObj.id).addClass(isRight ? 'moi_correct' : 'moi_incorrect');
                if (isRight) {
                    self.getDot($area, gIndex, 'point', wObj.correctPointId).addClass('moi_correct');
                }
                resultArr.push(isRight ? 1 : 0);
            });
        });

        this.redrawAll($area);

        var totalChecks = resultArr.length;
        var allCorrect = (((resultArr.join('').split('0'))[0]).length == totalChecks);
        showFeedback(true, allCorrect);

        if (allCorrect) {
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
        }
    },
    reset: function () {
        var ob = this.ob;
        var $area = $(ob.activity_area);

        this.connections = [];
        this.selectedWord = null;

        $area.find('.moi_word_dot, .moi_point_dot').removeClass('moi_used moi_selected moi_correct moi_incorrect');
        $area.find('.moi_svg_layer').empty();

        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
}