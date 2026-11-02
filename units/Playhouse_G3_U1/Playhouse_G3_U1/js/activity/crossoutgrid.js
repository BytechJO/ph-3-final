//  ****************************************** //
//  CrossOutGrid - Version no: 1
//  Click a letter to toggle a cross-out mark. Validate compares the crossed-out
//  cells against the "path" list in the data (order doesn't matter for validation,
//  only which cells are/aren't crossed out).
//  ****************************************** //
window.CrossOutGrid = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('CrossOutGrid > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
CrossOutGrid.prototype = {
    init:function(ob){
        this.ob = ob;
        this.buildPathSet(ob);
        this.listen(ob);
    },
    // turn the ordered "path" array into a quick-lookup set: "row_col" -> true
    buildPathSet:function(ob){
        var pathSet = {};
        var path = (ob.data_obj).path;
        for (var i = 0; i < path.length; i++) {
            pathSet[path[i].row + '_' + path[i].col] = true;
        }
        this.pathSet = pathSet;
    },
    listen:function(ob){
        var self = this;
        var e = (ob.activity_area);
        var cells = e.querySelectorAll('.cog_cell');

        for (var i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', function(){
                var isCrossed = (this.dataset.crossed == 'true');
                if(isCrossed){
                    this.dataset.crossed = 'false';
                    this.classList.remove('cog_crossed');
                }else{
                    this.dataset.crossed = 'true';
                    this.classList.add('cog_crossed');
                }

                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
            });
        }
    },
    validate:function(){
        var ob = this.ob;
        var e = (ob.activity_area);
        var cells = e.querySelectorAll('.cog_cell');
        var allCorrect = true;

        for (var i = 0; i < cells.length; i++) {
            var key = cells[i].dataset.row + '_' + cells[i].dataset.col;
            var shouldBeCrossed = (this.pathSet[key] == true);
            var isCrossed = (cells[i].dataset.crossed == 'true');

            if(isCrossed == shouldBeCrossed){
                cells[i].classList.remove('cog_wrong');
            }else{
                cells[i].classList.add('cog_wrong');
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
        var cells = e.querySelectorAll('.cog_cell');

        for (var i = 0; i < cells.length; i++) {
            cells[i].dataset.crossed = 'false';
            cells[i].classList.remove('cog_crossed');
            cells[i].classList.remove('cog_wrong');
        }
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}