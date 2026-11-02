//  ****************************************** //
//  ReadColourPoem - Version no: 1
//  Free-hand colouring canvas over a line-art background image, with colour
//  palette + brush size, no validation. Poem text shown below.
//  ****************************************** //
window.ReadColourPoem = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('ReadColourPoem > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.currentColor = (dataObj.palette && dataObj.palette.length > 0) ? dataObj.palette[0].hex : '#2f6fb3';
    this.currentWidth = (dataObj.brushSizes && dataObj.brushSizes.length > 0) ? dataObj.brushSizes[0].width : 8;
    this.brushOpacity = (dataObj.brushOpacity != undefined) ? dataObj.brushOpacity : 0.45;
    this.init(this.settings);
}
ReadColourPoem.prototype = {
    init:function(ob){
        this.ob = ob;
        this.setupCanvas(ob);
        this.listen(ob);
        // no check button needed for this activity type
        if(document.getElementsByClassName('checkBtn')[0]){
            document.getElementsByClassName('checkBtn')[0].classList.add("d-none");
        }
    },
    setupCanvas:function(ob){
        var self = this;
        var e = (ob.activity_area);
        var canvas = e.querySelector('.colour_canvas');
        var box = e.querySelector('.colour_box');

        // offscreen canvas: holds only the CURRENT stroke, drawn fully opaque
        var tempCanvas = document.createElement('canvas');
        var tempCtx = tempCanvas.getContext('2d');

        function resizeCanvas(){
            var ratio = window.devicePixelRatio || 1;
            var w = box.clientWidth;
            var h = box.clientHeight;
            var prevData = null;
            if(canvas.width > 0 && canvas.height > 0){
                prevData = canvas.toDataURL();
            }
            canvas.width = w * ratio;
            canvas.height = h * ratio;
            canvas.style.width = w + 'px';
            canvas.style.height = h + 'px';
            var ctx = canvas.getContext('2d');
            ctx.scale(ratio, ratio);
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';

            tempCanvas.width = w * ratio;
            tempCanvas.height = h * ratio;
            tempCtx.scale(ratio, ratio);
            tempCtx.lineJoin = 'round';
            tempCtx.lineCap = 'round';

            self.boxW = w;
            self.boxH = h;

            if(prevData){
                var img = new Image();
                img.onload = function(){ ctx.drawImage(img, 0, 0, w, h); };
                img.src = prevData;
            }
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.tempCanvas = tempCanvas;
        this.tempCtx = tempCtx;
    },
    listen:function(ob){
        var self = this;
        var e = (ob.activity_area);
        var canvas = this.canvas;
        var ctx = this.ctx;
        var tempCanvas = this.tempCanvas;
        var tempCtx = this.tempCtx;
        var drawing = false;
        var baseSnapshot = null;

        function enableReset(){
            if(document.getElementsByClassName('resetBtn')[0]){
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
            }
        }

        function getPos(evt){
            var rect = canvas.getBoundingClientRect();
            var clientX = (evt.touches) ? evt.touches[0].clientX : evt.clientX;
            var clientY = (evt.touches) ? evt.touches[0].clientY : evt.clientY;
            return { x: clientX - rect.left, y: clientY - rect.top };
        }

        function startDraw(evt){
            drawing = true;

            baseSnapshot = document.createElement('canvas');
            baseSnapshot.width = canvas.width;
            baseSnapshot.height = canvas.height;
            baseSnapshot.getContext('2d').drawImage(canvas, 0, 0);

            tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
            tempCtx.strokeStyle = self.currentColor;
            tempCtx.lineWidth = self.currentWidth;
            tempCtx.globalAlpha = 1;

            var pos = getPos(evt);
            tempCtx.beginPath();
            tempCtx.moveTo(pos.x, pos.y);
            evt.preventDefault();
            enableReset();
        }
        function moveDraw(evt){
            if(!drawing) return;
            var pos = getPos(evt);
            tempCtx.lineTo(pos.x, pos.y);
            tempCtx.stroke();

            ctx.clearRect(0, 0, self.boxW, self.boxH);
            ctx.globalAlpha = 1;
            ctx.drawImage(baseSnapshot, 0, 0, self.boxW, self.boxH);
            ctx.globalAlpha = self.brushOpacity;
            ctx.drawImage(tempCanvas, 0, 0, self.boxW, self.boxH);
            ctx.globalAlpha = 1;

            evt.preventDefault();
        }
        function endDraw(evt){
            drawing = false;
        }

        canvas.addEventListener('mousedown', startDraw);
        canvas.addEventListener('mousemove', moveDraw);
        canvas.addEventListener('mouseup', endDraw);
        canvas.addEventListener('mouseleave', endDraw);

        canvas.addEventListener('touchstart', startDraw, {passive:false});
        canvas.addEventListener('touchmove', moveDraw, {passive:false});
        canvas.addEventListener('touchend', endDraw);

        // colour palette
        var swatches = e.querySelectorAll('.paletteSwatch');
        for (var i = 0; i < swatches.length; i++) {
            swatches[i].addEventListener('click', function(){
                for (var s = 0; s < swatches.length; s++) {
                    swatches[s].classList.remove('active');
                }
                this.classList.add('active');
                self.currentColor = this.dataset.hex;
            });
        }
        if(swatches.length > 0){ swatches[0].classList.add('active'); }

        // brush size
        var brushBtns = e.querySelectorAll('.brushSizeBtn');
        for (var i = 0; i < brushBtns.length; i++) {
            brushBtns[i].addEventListener('click', function(){
                for (var b = 0; b < brushBtns.length; b++) {
                    brushBtns[b].classList.remove('active');
                }
                this.classList.add('active');
                self.currentWidth = parseInt(this.dataset.width);
            });
        }
        if(brushBtns.length > 0){ brushBtns[0].classList.add('active'); }

        // clear button
        var clearBtn = e.querySelector('.clearColourBtn');
        clearBtn.addEventListener('click', function(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        });
    },
    reset:function(){
        var ob = this.ob;
        var e = (ob.activity_area);
        if(this.ctx && this.canvas){
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}