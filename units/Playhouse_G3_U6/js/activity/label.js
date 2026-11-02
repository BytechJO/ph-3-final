window.LabelActivity = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    this.settings = { 'activity_area': ob[0], 'data_obj': dataObj };
    this.init(this.settings);
}
LabelActivity.prototype = {
    init: function (ob) { this.ob = ob; this.listen(ob); },
    listen: function (ob) {
        $(ob.activity_area).on('input', '.lbl_text_input', function () {
            document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
            document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
        });
    },
    validate: function () {
        var ob = this.ob; var $area = $(ob.activity_area);
        var elsQue = $area.find('.que'); var resultArr = [];
        elsQue.each(function (i) {
            var qNo = parseInt($(this).data('qno'));
            var bData = (ob.data_obj).blanks[qNo - 1];
            var isRight = bData.locked ? true :
                ($.trim($(this).find('.lbl_text_input').val()).toLowerCase() == bData.answer.toLowerCase());
            resultArr[i] = isRight ? 1 : 0;
            $(this).find('.tick').css('display', isRight ? 'block' : 'none');
            $(this).find('.cross').css('display', isRight ? 'none' : 'block');
        });
        var allCorrect = (((resultArr.join('').split('0'))[0]).length == elsQue.length);
        showFeedback(true, allCorrect);
        if (allCorrect) document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
    },
    reset: function () {
        var $area = $(this.ob.activity_area);
        $area.find('.lbl_text_input').val('');
        $area.find('.tick, .cross').css('display', 'none');
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings: function () { this.reset(); initialSettingsDone(1); }
}