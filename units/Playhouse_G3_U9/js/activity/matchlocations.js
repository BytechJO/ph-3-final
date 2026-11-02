//  ****************************************** //
//  MatchLocations - Version no: 1
//  Click a left dot, then a middle dot, then a right dot - that's ONE
//  complete path for that item. Middle and right dots can have MANY
//  lines pass through them (several items can share a phrase, or share
//  a final location); only left dots are one-per-item.
//  ****************************************** //
window.MatchLocations = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    console.log('MatchLocations > ', $('.activity_area'));
    this.settings = {
        'activity_area': ob[0],
        'has_audio': (obj[0].dataset.audio != undefined && obj[0].dataset.audio != null) ? obj[0].dataset.audio : 'no',
        'data_obj': dataObj,
        'parent_holder': obj[0]
    }
    this.connections = []; // {leftId, midId, rightId, locked}
    this.pendingLeftId = null;
    this.pendingMidId = null;
    this.init(this.settings);
}
MatchLocations.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen(ob);
        this.drawLockedExamples();
    },
    getDot: function ($area, role, itemId) {
        // "midleft" and "midright" both resolve to the SAME waypoint id,
        // they are just two visual connector points on the same phrase box
        return $area.find('.ml_dot[data-role="' + role + '"][data-itemid="' + itemId + '"]');
    },
    getDotCenter: function ($area, $dot) {
        var wrapOffset = $area.find('.ml_match_wrap').offset();
        var dotOffset = $dot.offset();
        return {
            x: dotOffset.left - wrapOffset.left + ($dot.outerWidth() / 2),
            y: dotOffset.top - wrapOffset.top + ($dot.outerHeight() / 2)
        };
    },
    drawSegment: function ($area, fromRole, fromId, toRole, toId, leftIdOwner, part, extraClass) {
        var $svg = $area.find('.ml_svg_layer');
        var $fromDot = this.getDot($area, fromRole, fromId);
        var $toDot = this.getDot($area, toRole, toId);
        var p1 = this.getDotCenter($area, $fromDot);
        var p2 = this.getDotCenter($area, $toDot);

        var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', p1.x);
        line.setAttribute('y1', p1.y);
        line.setAttribute('x2', p2.x);
        line.setAttribute('y2', p2.y);
        line.setAttribute('class', 'ml_line' + (extraClass ? ' ' + extraClass : ''));
        line.setAttribute('data-owner', leftIdOwner);
        line.setAttribute('data-part', part); // "1" = left->mid, "2" = mid->right
        $svg[0].appendChild(line);
    },
    drawConnectionLines: function ($area, conn, extraClass) {
        // part 1: left -> middle (enter the phrase box from its left dot)
        this.drawSegment($area, 'left', conn.leftId, 'midleft', conn.midId, conn.leftId, '1', extraClass);
        // part 2: middle -> right (leave the phrase box from its right dot)
        this.drawSegment($area, 'midright', conn.midId, 'right', conn.rightId, conn.leftId, '2', extraClass);
    },
    drawLockedExamples: function () {
        var self = this;
        var ob = this.ob;
        var $area = $(ob.activity_area);

        jQuery.each(ob.data_obj.leftAnswers, function (i, ansObj) {
            if (ansObj.locked) {
                var conn = { leftId: ansObj.leftId, midId: ansObj.correctMiddleId, rightId: ansObj.correctRightId, locked: true };
                self.connections.push(conn);
                self.getDot($area, 'left', ansObj.leftId).addClass('ml_used ml_locked');
                self.drawConnectionLines($area, conn, 'ml_locked_line');
            }
        });
    },
    listen: function (ob) {
        var self = this;
        var $area = $(ob.activity_area);

        $area.on('click', '.ml_dot', function () {
            var $dot = $(this);
            if ($dot.hasClass('ml_locked')) { return; }
            var role = $dot.data('role');
            var itemId = $dot.data('itemid');

            if (role == 'left') {
                if ($dot.hasClass('ml_used')) {
                    self.removeConnection($area, itemId);
                    return;
                }
                $area.find('.ml_dot.ml_selected').removeClass('ml_selected');
                self.clearTempLine($area);
                $dot.addClass('ml_selected');
                self.pendingLeftId = itemId;
                self.pendingMidId = null;

            } else if (role == 'midleft' || role == 'midright') {
                if (self.pendingLeftId == null) { return; } // need a left item selected first
                self.clearTempLine($area);
                self.pendingMidId = itemId;
                self.drawSegment($area, 'left', self.pendingLeftId, 'midleft', itemId, 'temp', '1', 'ml_temp_line');

            } else if (role == 'right') {
                if (self.pendingLeftId == null || self.pendingMidId == null) { return; } // path not ready yet
                self.finishConnection($area, self.pendingLeftId, self.pendingMidId, itemId);
                $area.find('.ml_dot.ml_selected').removeClass('ml_selected');
                self.clearTempLine($area);
                self.pendingLeftId = null;
                self.pendingMidId = null;
            }

            document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
            document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
        });

        $(window).on('resize.matchlocations', function () {
            self.redrawAll($area);
        });
    },
    clearTempLine: function ($area) {
        $area.find('.ml_svg_layer .ml_temp_line').remove();
    },
    finishConnection: function ($area, leftId, midId, rightId) {
        var conn = { leftId: leftId, midId: midId, rightId: rightId, locked: false };
        this.connections.push(conn);
        this.getDot($area, 'left', leftId).addClass('ml_used');
        this.drawConnectionLines($area, conn, '');
    },
    removeConnection: function ($area, leftId) {
        var idx = -1;
        jQuery.each(this.connections, function (i, c) { if (!c.locked && c.leftId == leftId) { idx = i; } });
        if (idx == -1) { return; }

        $area.find('.ml_svg_layer .ml_line[data-owner="' + leftId + '"]').remove();
        this.getDot($area, 'left', leftId).removeClass('ml_used ml_correct ml_incorrect');
        this.connections.splice(idx, 1);
    },
    redrawAll: function ($area) {
        var self = this;
        $area.find('.ml_svg_layer').empty();
        jQuery.each(this.connections, function (i, c) {
            var cls = c.locked ? 'ml_locked_line' : self.getResultClass($area, c.leftId);
            self.drawConnectionLines($area, c, cls);
        });
    },
    getResultClass: function ($area, leftId) {
        var $leftDot = this.getDot($area, 'left', leftId);
        if ($leftDot.hasClass('ml_correct')) { return 'ml_correct_line'; }
        if ($leftDot.hasClass('ml_incorrect')) { return 'ml_incorrect_line'; }
        return '';
    },
    validate: function () {
        var self = this;
        var ob = this.ob;
        var $area = $(ob.activity_area);
        var totalItems = (ob.data_obj.leftAnswers).length;
        var resultArr = [];

        $area.find('.ml_dot').removeClass('ml_correct ml_incorrect');

        jQuery.each(ob.data_obj.leftAnswers, function (i, ansObj) {
            var isRight = false;
            jQuery.each(self.connections, function (ci, c) {
                if (c.leftId == ansObj.leftId) {
                    isRight = (c.midId == ansObj.correctMiddleId && c.rightId == ansObj.correctRightId);
                }
            });
            self.getDot($area, 'left', ansObj.leftId).addClass(isRight ? 'ml_correct' : 'ml_incorrect');
            resultArr[i] = isRight ? 1 : 0;
        });

        this.redrawAll($area);

        var allCorrect = (((resultArr.join('').split('0'))[0]).length == totalItems);
        showFeedback(true, allCorrect);

        if (allCorrect) {
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
        }
    },
    reset: function () {
        var ob = this.ob;
        var $area = $(ob.activity_area);

        this.connections = jQuery.grep(this.connections, function (c) { return c.locked; });
        this.pendingLeftId = null;
        this.pendingMidId = null;

        $area.find('.ml_dot').removeClass('ml_used ml_selected ml_correct ml_incorrect');
        $area.find('.ml_dot.ml_locked').addClass('ml_used');
        $area.find('.ml_svg_layer').empty();
        this.redrawAll($area);

        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
}