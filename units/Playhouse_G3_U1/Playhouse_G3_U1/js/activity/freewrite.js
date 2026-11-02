//  ****************************************** //
//  FreeWrite - Version no: 1
//  Single free-write textarea, no validation
//  ****************************************** //
window.FreeWrite = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('FreeWrite > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
FreeWrite.prototype = {
    init:function(ob){
        this.ob = ob;
        this.listen(ob);
        // no check button needed for this activity type
        if(document.getElementsByClassName('checkBtn')[0]){
            document.getElementsByClassName('checkBtn')[0].classList.add("d-none");
        }
    },
    listen:function(ob){
        var e = (ob.activity_area);
        var textarea = e.querySelector('.fw_textarea');

        textarea.addEventListener('input', function(){
            $(this).css('color', 'black');
            if(document.getElementsByClassName('resetBtn')[0]){
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
            }
        });
    },
    reset:function(){
        var ob = this.ob;
        var e = (ob.activity_area);
        var textarea = e.querySelector('.fw_textarea');

        textarea.value = '';
        textarea.style.color = 'black';
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}