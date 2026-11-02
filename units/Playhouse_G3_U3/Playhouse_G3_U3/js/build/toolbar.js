function  buildToolbar(){
  cStmt = ''
      cStmt += '<div id="movableBox" class="toolbar show_slide" id="tools">'
      // cStmt += '<div class="section files">'
      //     cStmt += '<div id="reset" class="button"><i class="fa fa-trash-o" aria-hidden="true"></i></div>'
      //     cStmt += '<div id="tool-save" class="button"><i class="fa fa-save" aria-hidden="true"></i></div>'
      //     cStmt += '<div id="tool-load" class="button"><i class="fa fa-folder-open-o" aria-hidden="true"></i></div>'
      //     cStmt += '<div id="tool-screenshot" class="button"><i class="fa fa-camera-retro" aria-hidden="true"></i></div>'
      // cStmt += '</div>'
      cStmt += '<div class="section drawing tools-section">'
        cStmt += '<div id="tool-rainbow" class="button rbw"><i class="fa fa-magic" aria-hidden="true"></i></div>'
        cStmt += '<div id="tool-pen" class="button active"><i class="fa fa-pencil-alt" aria-hidden="true"></i></div>'
        cStmt += '<div id="tool-highlighter" class="button"><i class="fa fa-paint-brush" aria-hidden="true"></i></div>'
        cStmt += '<div id="tool-mandala" class="button mandala"><i class="fa fa-snowflake" aria-hidden="true"></i></div>'
        // cStmt += '</div>'
        // cStmt += '<div class="section drawing">'
        cStmt += '<div id="tool-line" class="button line">╱</div>'
        cStmt += '<div id="tool-rectangle" class="button rect"><i class="far fa-square" aria-hidden="true"></i></div>'
        cStmt += '<div id="tool-circle" class="button circ"><i class="far fa-circle" aria-hidden="true"></i></div>'
        // cStmt += '<div id="tool-type" class="button font"><i class="fa fa-font" aria-hidden="true"></i></div>'
        cStmt += '<div class="section rubber">'
          cStmt += '<div id="tool-eraser" class="button"><i class="fa fa-eraser" aria-hidden="true"></i></div>'
          cStmt += '<div id="tool-cutout" class="button"><i class="fas fa-cut" aria-hidden="true"></i></div>'
        cStmt += '</div>'
        // cStmt += '<div class="section special">'
        //     cStmt += '<div id="tool-rotate-viewport" class="button rotate-viewport"><i class="fa fa-circle-o-notch" aria-hidden="true"></i></div>'
        //     cStmt += '<div id="tool-move-viewport" class="button move-viewport"><i class="fa fa-hand-paper-o" aria-hidden="true"></i></div>'
        // cStmt += '</div>'
        cStmt += '<div class="section special">'
            cStmt += '<div id="tool-zoom-out" class="button"><i class="fa fa-search-minus" aria-hidden="true"></i></div>'
            cStmt += '<div id="tool-zoom-1" class="button"><i class="fa fa-home" aria-hidden="true"></i></div>'
            cStmt += '<div id="tool-zoom-in" class="button"><i class="fa fa-search-plus" aria-hidden="true"></i></div>'
        cStmt += '</div>'
        cStmt += '<div class="section special">'
            // cStmt += '<div id="tool-fast-undo" class="button f-backward"><i class="fa fa-fast-backward" aria-hidden="true"></i></div>'
            cStmt += '<div id="tool-undo" class="button undo"><i class="fa fa-backward" aria-hidden="true"></i></div>'
            cStmt += '<div id="tool-redo" class="button redo"><i class="fa fa-forward" aria-hidden="true"></i></div>'
            // cStmt += '<div id="tool-fast-redo" class="button f-forward"><i class="fa fa-fast-forward" aria-hidden="true"></i></div>'
        cStmt += '</div>'
      cStmt += '</div>'
      cStmt += '<div class="section drawing">'
        // cStmt += '<div class="section special">'
        //     // cStmt += '<hr>'
        //     // cStmt += '<span id="toolName">Tool name</span>'
        // cStmt += '</div>'
        cStmt += '<div id="size" class="section size">'
            cStmt += '<input class="slider" id="size-slider" type ="range" min ="1" max="20" step ="1" value ="1"/>'
        cStmt += '</div>'
        cStmt += '<div id="colorpaletteSection"  class="section colorpicker">'
            cStmt += '<div id="colorpalette" class="colorpalette"></div>'
        cStmt += '</div>'
        cStmt += '<div id="colorpaletteFillSection" class="section colorpicker">'
            cStmt += '<div id="colorpaletteFill" class="colorpalette"></div>'
            cStmt += '</div>'
        cStmt += '</div>'
      cStmt += '</div>'
      ccStmt = '<div id="sketchpad"></div>'
      ccStmt += '<script src="../js/build/draw.js"></script>'
      $('body').append(cStmt)
      $('body').append(ccStmt)
      show_slide();
      moveToolbar();
};

function show_slide(){
  $(".toolbarToggleBtn").click(
      function () {
        var imgName = $(this).data("point");
      $('.'+imgName).fadeToggle().css('display', 'flex');
      $('#sketchpad').fadeToggle();
    }
  );
}

function moveToolbar(){
var buttonToggle =  document.getElementsByClassName("toolbarToggleBtn")[0];
buttonToggle.addEventListener('click', function () {
  const box = document.getElementById('movableBox');
  let isDragging = false;
  let offsetX, offsetY;

  // Function to handle the mouse down event
  function handleMouseDown(e) {
    isDragging = true;
    offsetX = e.clientX - box.getBoundingClientRect().left;
    offsetY = e.clientY - box.getBoundingClientRect().top;
    box.style.cursor = 'grabbing';
  }

  // Function to handle the mouse move event
  function handleMouseMove(e) {
    if (isDragging) {
      box.style.left = e.clientX - offsetX + 'px';
      box.style.top = e.clientY - offsetY + 'px';
    }
  }

  // Function to handle the mouse up event
  function handleMouseUp() {
    isDragging = false;
    box.style.cursor = 'grab';
  }

  // Add event listeners
  box.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
});

}
