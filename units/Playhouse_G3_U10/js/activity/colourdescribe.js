//  ****************************************** //
//  ColourDescribe - Version no: 2
//  Free-hand colouring canvas (palette + brush) for EACH image, fully
//  independent from the others - drawing/colour/brush/clear on one image
//  never affects any other image on the page.
//  ****************************************** //
window.ColourDescribe = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('ColourDescribe > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.instances = []; // one entry per .cd_colour_container
    this.init(this.settings);
}
ColourDescribe.prototype = {
    init:function(ob){
        this.ob = ob;
        this.setupAllCanvases(ob);
        this.listenAll(ob);
        // no check button needed for this activity type
        if(document.getElementsByClassName('checkBtn')[0]){
            document.getElementsByClassName('checkBtn')[0].classList.add("d-none");
        }
    },
    // sets up ONE canvas/resize-handler for a single container, and returns
    // the state object that everything else (drawing, palette, etc.) needs
    setupOneCanvas:function(containerEl, dataObj){
        var self = this;
        var canvas = containerEl.querySelector('.colour_canvas');
        var box = containerEl.querySelector('.colour_box');

        var tempCanvas = document.createElement('canvas');
        var tempCtx = tempCanvas.getContext('2d');

        var state = {
            container: containerEl,
            canvas: canvas,
            ctx: canvas.getContext('2d'),
            tempCanvas: tempCanvas,
            tempCtx: tempCtx,
            boxW: 0,
            boxH: 0,
            currentColor: (dataObj.palette && dataObj.palette.length > 0) ? dataObj.palette[0].hex : '#2f6fb3',
            currentWidth: (dataObj.brushSizes && dataObj.brushSizes.length > 0) ? dataObj.brushSizes[0].width : 8,
            brushOpacity: (dataObj.brushOpacity != undefined) ? dataObj.brushOpacity : 0.45
        };

        function resizeThisCanvas(){
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

            state.boxW = w;
            state.boxH = h;

            if(prevData){
                var img = new Image();
                img.onload = function(){ ctx.drawImage(img, 0, 0, w, h); };
                img.src = prevData;
            }
        }
        resizeThisCanvas();
        window.addEventListener('resize', resizeThisCanvas);

        return state;
    },
    setupAllCanvases:function(ob){
        var self = this;
        var e = (ob.activity_area);
        var containers = e.querySelectorAll('.cd_colour_container');
        for (var c = 0; c < containers.length; c++) {
            self.instances.push(self.setupOneCanvas(containers[c], ob.data_obj));
        }
    },
    // wires up drawing + palette/brush/clear controls for ONE image,
    // scoped entirely to that image's own container
    listenOneInstance:function(state){
        var self = this;
        var canvas = state.canvas;
        var ctx = state.ctx;
        var tempCanvas = state.tempCanvas;
        var tempCtx = state.tempCtx;
        var container = state.container;
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
            tempCtx.strokeStyle = state.currentColor;
            tempCtx.lineWidth = state.currentWidth;
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

            ctx.clearRect(0, 0, state.boxW, state.boxH);
            ctx.globalAlpha = 1;
            ctx.drawImage(baseSnapshot, 0, 0, state.boxW, state.boxH);
            ctx.globalAlpha = state.brushOpacity;
            ctx.drawImage(tempCanvas, 0, 0, state.boxW, state.boxH);
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

        // colour palette - scoped to THIS image's own container only
        var swatches = container.querySelectorAll('.paletteSwatch');
        for (var i = 0; i < swatches.length; i++) {
            swatches[i].addEventListener('click', function(){
                for (var s = 0; s < swatches.length; s++) {
                    swatches[s].classList.remove('active');
                }
                this.classList.add('active');
                state.currentColor = this.dataset.hex;
            });
        }
        if(swatches.length > 0){ swatches[0].classList.add('active'); }

        // brush size - scoped to THIS image's own container only
        var brushBtns = container.querySelectorAll('.brushSizeBtn');
        for (var i = 0; i < brushBtns.length; i++) {
            brushBtns[i].addEventListener('click', function(){
                for (var b = 0; b < brushBtns.length; b++) {
                    brushBtns[b].classList.remove('active');
                }
                this.classList.add('active');
                state.currentWidth = parseInt(this.dataset.width);
            });
        }
        if(brushBtns.length > 0){ brushBtns[0].classList.add('active'); }

        // clear button - only clears THIS image's canvas
        var clearBtn = container.querySelector('.clearColourBtn');
        clearBtn.addEventListener('click', function(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        });
    },
    listenAll:function(ob){
        var self = this;
        for (var i = 0; i < this.instances.length; i++) {
            self.listenOneInstance(this.instances[i]);
        }
    },
    reset:function(){
        for (var i = 0; i < this.instances.length; i++) {
            var state = this.instances[i];
            state.ctx.clearRect(0, 0, state.canvas.width, state.canvas.height);
        }
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}