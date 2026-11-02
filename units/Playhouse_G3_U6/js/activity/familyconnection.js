//  ****************************************** //
//  FamilyConnection - Version no: 1
//  Open-ended writing activity: students add as many rows as they need.
//  There is no right/wrong answer here, so validate() never marks anything
//  incorrect - it just confirms the student is done.
//  ****************************************** //
window.FamilyConnection = function (obj, dataObj) {
    ob = obj[0].getElementsByClassName("options");
    console.log('FamilyConnection > ', $('.activity_area'));
    this.settings = {
        'activity_area': ob[0],
        'has_audio': (obj[0].dataset.audio != undefined && obj[0].dataset.audio != null) ? obj[0].dataset.audio : 'no',
        'data_obj': dataObj,
        'parent_holder': obj[0]
    }
    this.init(this.settings);
}
FamilyConnection.prototype = {
    init: function (ob) {
        this.ob = ob;
        this.listen(ob);
    },
    listen: function (ob) {
        var self = this;
        var $area = $(ob.activity_area);

        // add a new empty row to the same table
        $area.on('click', '.fam_add_row', function () {
            var $tbody = $(this).closest('.fam_table_wrap').find('.fam_tbody');
            var $newRow = $tbody.find('.fam_row').first().clone();
            $newRow.find('.fam_input').val('');
            $tbody.append($newRow);

            // document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
            document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
        });

        // remove a row, but always leave at least one row in the table
        $area.on('click', '.fam_remove_row', function () {
            var $tbody = $(this).closest('.fam_tbody');
            if ($tbody.find('.fam_row').length > 1) {
                $(this).closest('.fam_row').remove();
            }
        });

        $area.on('input', '.fam_input', function () {
            // document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
            document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
        });
    },
    // this is an open-ended activity (every family's kitchen is different),
    // so there is nothing to grade - checking just confirms completion
    validate: function () {
        showFeedback(true, true);
    },
    reset: function () {
        var ob = this.ob;
        var $area = $(ob.activity_area);
        var origData = ob.data_obj;

        $area.find('.fam_table_wrap').each(function (tIndex) {
            var tObj = origData.tables[tIndex];
            var $tbody = $(this).find('.fam_tbody');

            $tbody.empty();
            for (var r = 0; r < tObj.initialRows; r++) {
                var $row = $('<tr class="fam_row"></tr>');
                jQuery.each(tObj.columns, function () {
                    $row.append('<td><input type="text" class="fam_input" /></td>');
                });
                $row.append('<td class="fam_row_action_col"><span class="fam_remove_row" title="Remove row">&times;</span></td>');
                $tbody.append($row);
            }
        });

        // document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings: function () {
        this.reset();
        initialSettingsDone(1);
    }
}