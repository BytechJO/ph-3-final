//  ****************************************** //
//  DragDrop - Word Sort - Build file
//  ****************************************** //
function buildDragDropBody(aObj) {
    var htmlStmt = '';
    if (typeof aObj != undefined && aObj != null) {

        // ===================================================================== section ribbon (optional) ====
      

        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';
        htmlStmt += '<a href="">';
        htmlStmt += '<img src="../images/icons/back_btn.png" />';
        htmlStmt += '</a>';
        htmlStmt += '</div>';
        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';
        htmlStmt += '<a href="">';
        htmlStmt += '<img src="../images/icons/next_btn.png" />';
        htmlStmt += '</a>';
        htmlStmt += '</div>';

        // ===================================================================== heading =====================
     htmlStmt += '<div class="act_head_group justify-content-center">';
			htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '">';
				htmlStmt += '<div class="q-type-img-container">';
				htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
				if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
					htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + '">';
				}
				htmlStmt += '</div>';
			htmlStmt += '</div>';

			htmlStmt += '<div class="activityHeading">'
				htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
				htmlStmt += "<div class='page_sub_title d-flex'>";
					htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
					for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
						htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
					}
					htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
				htmlStmt += '</div>';
			htmlStmt += '</div>';
		htmlStmt += '</div>';

        // ===================================================================== all_cont =====================
        htmlStmt += '<div class="options cont_ht_sf mx-auto">';
        htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center flex-column">';

        // collect ids that come pre-placed as a worked example, so the bank shows them as already used
        var prefilledIds = [];
        jQuery.each(aObj.questions, function (qIndex, qObj) {
            if (qObj.prefilled != undefined && qObj.prefilled.length > 0) {
                prefilledIds = prefilledIds.concat(qObj.prefilled);
            }
        });

        // ---------------- word bank (draggable words) ----------------
        if (aObj.options != undefined && aObj.options != null && aObj.options.length > 0) {
            htmlStmt += '<div class="word_opt_sticky d-flex justify-content-center">';
            htmlStmt += '<div class="word_options d-flex flex-wrap justify-content-around">';
            jQuery.each(aObj.options, function (key, value) {
                var isLocked = (jQuery.inArray(value.id, prefilledIds) > -1);
                var lockedClass = isLocked ? ' used_in_bank locked' : '';
                htmlStmt += '<div class="audioIcon textEnd off d-flex contant clue_word_wrap" data-audio="' + value.audio + '">';
                htmlStmt += '<div class="clue_word draggable_word' + lockedClass + '" data-wordid="' + value.id + '">' + value.word + '</div>';
                htmlStmt += '</div>';
            });
            htmlStmt += '</div>';
            htmlStmt += '</div>';
        }

        // ---------------- drop zones ----------------
        // layout 2 = columns sit side by side (row); default (1) = columns stack on top of each other
        var isRowLayout = (parseInt(aObj.layout) == 2);
        var groupDirClass = isRowLayout ? 'flex-row flex-wrap justify-content-center align-items-start' : 'flex-column align-items-center';
        var boxExtraClass = isRowLayout ? ' col_layout' : '';
        var linesExtraClass = (aObj.showLines == true) ? ' lined_bg' : '';

        htmlStmt += '<div class="screen_elements d-flex flex-column">';
        htmlStmt += '<div class="group_elm d-flex ' + groupDirClass + ' mb-70">';

        jQuery.each(aObj.questions, function (qIndex, qObj) {
            var qNo = qIndex + 1;
            htmlStmt += '<div class="que drop_box_wrap' + boxExtraClass + ' h-100" data-qno="' + qNo + '">';
            htmlStmt += '<div class="audioIcon txt-audioIcon off d-flex justify-content-center contant drop_box_label" data-audio="' + qObj.audio + '">';
            htmlStmt += '<span>' + qObj.textfront + '</span>';
            htmlStmt += '</div>';
            htmlStmt += '<div class="drop_zone' + linesExtraClass + '" data-qno="' + qNo + '">';
            htmlStmt += '<div class="dropped_words d-flex flex-wrap">';

            // render any worked-example word(s) already placed and locked in this zone
            if (qObj.prefilled != undefined && qObj.prefilled.length > 0) {
                jQuery.each(qObj.prefilled, function (pIndex, wordId) {
                    var wordObj = null;
                    jQuery.each(aObj.options, function (oIndex, oVal) {
                        if (oVal.id == wordId) { wordObj = oVal; }
                    });
                    if (wordObj != null) {
                        htmlStmt += '<div class="placed_word locked" data-wordid="' + wordObj.id + '">' + wordObj.word + '</div>';
                    }
                });
            }

            htmlStmt += '</div>'; // dropped_words
            htmlStmt += '</div>'; // drop_zone
            htmlStmt += '<div class="theIcons">';
            htmlStmt += '<div class="icon_wrap">';
            htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"/></div>';
            htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"/></div>';
            htmlStmt += '</div>';
            htmlStmt += '</div>';
            htmlStmt += '</div>';
        });

        htmlStmt += '</div>'; // group_elm

        if (aObj.image != "" && aObj.image != undefined) {
            htmlStmt += '<div class="img-container"><img src="' + aObj.image + '"></div>';
        }
        htmlStmt += '</div>'; // screen_elements
        htmlStmt += '</div></div></div>'; // end - all_cont / options
    }
    console.log('htmlStmt >> DragDrop Built');
    $(".activity_area").append(htmlStmt);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}