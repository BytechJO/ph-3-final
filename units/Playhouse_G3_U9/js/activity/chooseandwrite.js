//  ****************************************** //
//  ChooseAndWrite - Version no: 1
//  Click a picture to circle it. Write the circled items' names on any
//  blank line (order doesn't matter, empty lines are never wrong).
//  Validate checks BOTH: every "correct" picture is circled (and no
//  incorrect ones are), AND every correct item's name was written
//  correctly somewhere among the lines.
//  ****************************************** //
window.ChooseAndWrite = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('ChooseAndWrite > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
ChooseAndWrite.prototype = {
    init:function(ob){
        this.ob = ob;
        this.listen(ob);
    },
    drawCircle:function(svg, imgEl){
        var w = imgEl.offsetWidth;
        var h = imgEl.offsetHeight;
        var pad = 8;
        svg.setAttribute('viewBox', '0 0 ' + (w + pad*2) + ' ' + (h + pad*2));
        var rx = (w/2) + (pad*0.8);
        var ry = (h/2) + (pad*0.8);
        var cx = (w/2) + pad;
        var cy = (h/2) + pad;
        var path = 'M ' + cx + ' ' + (cy-ry) +
                   ' C ' + (cx+rx*1.1) + ' ' + (cy-ry*0.9) + ', ' + (cx+rx*1.05) + ' ' + (cy+ry*1.05) + ', ' + cx + ' ' + (cy+ry) +
                   ' C ' + (cx-rx*1.15) + ' ' + (cy+ry*0.95) + ', ' + (cx-rx*0.9) + ' ' + (cy-ry*1.1) + ', ' + cx + ' ' + (cy-ry) + ' Z';
        svg.innerHTML = '<path d="' + path + '" fill="none" stroke="#e2574c" stroke-width="4" stroke-linecap="round"/>';
    },
    listen:function(ob){
        var self = this;
        var e = (ob.activity_area);

        var imgWraps = e.querySelectorAll('.caw_imgWrap');
        for (var i = 0; i < imgWraps.length; i++) {
            imgWraps[i].addEventListener('click', function(){
                var imgEl = this.querySelector('.caw_img');
                var circleSvg = this.querySelector('.circle_svg');
                var isCircled = (this.dataset.circled == 'true');

                if(isCircled){
                    this.dataset.circled = 'false';
                    circleSvg.innerHTML = '';
                }else{
                    this.dataset.circled = 'true';
                    self.drawCircle(circleSvg, imgEl);
                }

                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
            });
        }

        var lineInputs = e.querySelectorAll('.caw_line_input');
        for (var i = 0; i < lineInputs.length; i++) {
            lineInputs[i].addEventListener('input', function(){
                $(this).css('color', 'black');
                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
            });
        }
    },
    validate:function(){
        var ob = this.ob;
        var e = (ob.activity_area);
        var _case = (ob.data_obj.strictcase != undefined && ob.data_obj.strictcase!=null )? (ob.data_obj.strictcase).toLowerCase():'no';
        var imagesData = (ob.data_obj).images;
        var allCorrect = true;

        // ---- pictures: every "correct" one circled, every "incorrect" one left alone ----
        var imgWraps = e.querySelectorAll('.caw_imgWrap');
        for (var i = 0; i < imgWraps.length; i++) {
            var iIdx = parseInt(imgWraps[i].dataset.iidx);
            var shouldCircle = imagesData[iIdx].correct;
            var isCircled = (imgWraps[i].dataset.circled == 'true');

            if(isCircled == shouldCircle){
                imgWraps[i].classList.remove('caw_wrong');
            }else{
                imgWraps[i].classList.add('caw_wrong');
                allCorrect = false;
            }
        }

        // ---- write lines: membership check, empty lines are never wrong ----
        var correctNames = [];
        for (var c = 0; c < imagesData.length; c++) {
            if(imagesData[c].correct){
                correctNames.push(_case == 'yes' ? imagesData[c].name : imagesData[c].name.toLowerCase());
            }
        }
        var usedNames = [];

        var lineInputs = e.querySelectorAll('.caw_line_input');
        for (var i = 0; i < lineInputs.length; i++) {
            var val = lineInputs[i].value.trim();
            var cmpVal = (_case == 'yes') ? val : val.toLowerCase();

            lineInputs[i].style.color = 'black';

            if(val === ''){
                continue; // empty line is never wrong by itself
            }

            var isCorrectWord = (correctNames.indexOf(cmpVal) > -1) && (usedNames.indexOf(cmpVal) == -1);
            if(isCorrectWord){
                usedNames.push(cmpVal);
                lineInputs[i].style.color = '#2f9e44';
            }else{
                lineInputs[i].style.color = '#d9364a';
                allCorrect = false;
            }
        }

        if(usedNames.length < correctNames.length){
            allCorrect = false;
        }

        (e.querySelector('.tick')).style.display = 'none';
        (e.querySelector('.cross')).style.display = 'none';
        if(allCorrect){
            (e.querySelector('.tick')).style.display = 'block';
        }else{
            (e.querySelector('.cross')).style.display = 'block';
        }

        showFeedback(true, allCorrect);

        if(allCorrect){
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
        }
    },
    reset:function(){
        var ob = this.ob;
        var e = (ob.activity_area);

        var imgWraps = e.querySelectorAll('.caw_imgWrap');
        for (var i = 0; i < imgWraps.length; i++) {
            delete imgWraps[i].dataset.circled;
            imgWraps[i].classList.remove('caw_wrong');
            imgWraps[i].querySelector('.circle_svg').innerHTML = '';
        }

        var lineInputs = e.querySelectorAll('.caw_line_input');
        for (var i = 0; i < lineInputs.length; i++) {
            lineInputs[i].value = '';
            lineInputs[i].style.color = 'black';
        }

        (e.querySelector('.tick')).style.display = 'none';
        (e.querySelector('.cross')).style.display = 'none';

        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}