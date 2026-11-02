function buildFillInBody(aObj) {	
	var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null){		
       
		var layOut = parseInt(aObj.layout);
        var numOfQuestions = (aObj.questions).length;
        var numInRowArray = aObj.numinrow;
        var numOfRows = numInRowArray.length;
    	var currentQue = 1;			
		
        htmlStmt +=  '<div class="sub_footer_icon subFooterNav backNav mx-1">'
		htmlStmt +=  '<a href="">'
		htmlStmt +=  '<img src="../images/icons/back_btn.png" />'
		htmlStmt +=  '</a>'
		htmlStmt +=  '</div>'
		htmlStmt +=  '<div class="sub_footer_icon subFooterNav nextNav mx-1">'
		htmlStmt +=  '<a href="">'
		htmlStmt +=  '<img src="../images/icons/next_btn.png" />'
		htmlStmt +=  '</a>'
		htmlStmt +=  '</div>'

            // ===================================================================== heading =====================
            htmlStmt += '<div class="act_head_group justify-content-center">';
            htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '">';
                htmlStmt += '<div class="q-type-img-container">';
                htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
                if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
                    htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + ';">';
                }
                htmlStmt += '</div>';
            htmlStmt += '</div>';

            htmlStmt += '<div class="activityHeading">'
                htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
                htmlStmt += "<div class='page_sub_title'>";
                    htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
                    for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
                        htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
                    }
                    htmlStmt += "<br><p class='subTitleTextRight'> " + aObj.subTitleTextRight + " </p>";
                htmlStmt += "</div>";
                htmlStmt += '</div>';
            htmlStmt += '</div>';
            htmlStmt += '</div>';
		// ===================================================================== all_cont =====================
		htmlStmt += '<div class="options mx-auto">';
		htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';
		htmlStmt += '<div class="screen_elements d-flex flex-column">';
		htmlStmt += '<div class="group_elm d-flex flex-wrap justify-content-center align-items-center mb-70">';
			htmlStmt += '<div class="area d-flex flex-wrap">';

				htmlStmt += '<div class="textarea-container">';
					htmlStmt += '<div class="heading d-flex flex-wrap">';
                        htmlStmt += '<div class="audioIcon off contant" data-audio="'+aObj.textAudio+'">' ;
                            htmlStmt += '<div class="text">' + aObj.text + '</div>';
                        htmlStmt += '</div>';
                        if(aObj.image != undefined && aObj.image != ""){
                            htmlStmt += '<img class="writing-img" src="' + aObj.image + '">';
                        }
                    htmlStmt += '</div>';
                    
					htmlStmt += '<textarea id="paper-textarea" rows="10" cols="50" maxlength="400"></textarea>';
				htmlStmt += '</div>';
			htmlStmt += '</div>';
		htmlStmt += '</div>';

		htmlStmt += '</div></div></div>'; // end - all_cont / options 
        // ========================= Drawing Canvas =========================
htmlStmt += '<div class="drawing-tools">';
htmlStmt += '    <button id="clearCanvasBtn" class="clear-btn">Clear</button>';
htmlStmt += '</div>';

htmlStmt += '<div class="drawing-container">';
htmlStmt += '    <canvas id="drawingCanvas"></canvas>';
htmlStmt += '</div>';
		
	}

	console.log('htmlStmt >> fillin Built');
	$( ".activity_area" ).append( htmlStmt );
	setLoadedStatus(getCurrFileOrDirectory('file'));
    initCanvas();	
}
function nextChar(c) {
	return String.fromCharCode(c.charCodeAt(0) + 1);
}  



function initCanvas() {

    const canvas = document.getElementById("drawingCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
const clearBtn = document.getElementById("clearCanvasBtn");

clearBtn.addEventListener("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
    // ضبط حجم الرسم الحقيقي
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let drawing = false;

    function getPos(e) {
        const rect = canvas.getBoundingClientRect();

        if (e.touches) {
            return {
                x: e.touches[0].clientX - rect.left,
                y: e.touches[0].clientY - rect.top
            };
        }

        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }

    function start(e) {
        drawing = true;

        const p = getPos(e);

        ctx.beginPath();
        ctx.moveTo(p.x, p.y);

        e.preventDefault();
    }

    function draw(e) {
        if (!drawing) return;

        const p = getPos(e);

        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();

        e.preventDefault();
    }

    function end() {
        drawing = false;
        ctx.closePath();
    }

    // Mouse
    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", draw);
    window.addEventListener("mouseup", end);

    // Touch
    canvas.addEventListener("touchstart", start, { passive: false });
    canvas.addEventListener("touchmove", draw, { passive: false });
    canvas.addEventListener("touchend", end);
}