//  ****************************************** //
//  WordSearch - build file
//  ****************************************** //
function buildWordSearchBody(aObj) {
    var htmlStmt = '';
    if (typeof aObj != undefined && aObj != null) {

        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';
        htmlStmt += '<a href=""><img src="../images/icons/back_btn.png" /></a>';
        htmlStmt += '</div>';
        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';
        htmlStmt += '<a href=""><img src="../images/icons/next_btn.png" /></a>';
        htmlStmt += '</div>';

        // ===================================================================== all_cont =====================
        htmlStmt += '<div class="options mx-auto">';
        htmlStmt += '<div class="all_cont flex-column justify-content-start justify-content-sm-center">';
        htmlStmt += '<div class="screen_elements d-flex flex-column align-items-center h-100">';

        // ---------------- title ribbon ----------------
        htmlStmt += '<div class="ws_title_wrap"><div class="ws_title">Word Search</div></div>';

        // ---------------- the letter grid ----------------
        htmlStmt += '<div class="ws_grid_wrap">';
        htmlStmt += '<div class="ws_grid" data-size="' + aObj.gridSize + '" style="grid-template-columns: repeat(' + aObj.gridSize + ', 1fr);">';
        for (var r = 0; r < aObj.grid.length; r++) {
            for (var c = 0; c < aObj.grid[r].length; c++) {
                htmlStmt += '<div class="ws_cell" data-row="' + r + '" data-col="' + c + '">' + aObj.grid[r][c] + '</div>';
            }
        }
        htmlStmt += '</div>'; // ws_grid
        htmlStmt += '</div>'; // ws_grid_wrap

        // ---------------- instructions + direction hint icon ----------------
        htmlStmt += '<div class="que ws_instructions d-flex align-items-center" data-qno="1">';
        htmlStmt += '<div class="audioIcon off contant" data-audio="' + aObj.subTitleAudio + '">';
        htmlStmt += '<div class="ws_instr_text">' + aObj.subTitleTextLeft + '</div>';
        htmlStmt += '</div>';
        htmlStmt += '<div class="ws_direction_icon"><svg viewBox="0 0 60 40"><path d="M8 32 L52 8 M8 32 L14 26 M8 32 L16 33 M52 8 L46 14 M52 8 L44 9" stroke="black" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
        htmlStmt += '</div>';

        // ---------------- two-column word list ----------------
        htmlStmt += '<div class="ws_word_list d-flex justify-content-center">';
        htmlStmt += '<div class="ws_word_col">';
        jQuery.each(aObj.wordsLeft, function (i, wId) {
            var wObj = null;
            jQuery.each(aObj.words, function (wi, wv) { if (wv.id == wId) { wObj = wv; } });
            if (wObj != null) {
                htmlStmt += '<div class="ws_word_item" data-wordid="' + wObj.id + '">' + wObj.display + '</div>';
            }
        });
        htmlStmt += '</div>';
        htmlStmt += '<div class="ws_word_col">';
        jQuery.each(aObj.wordsRight, function (i, wId) {
            var wObj = null;
            jQuery.each(aObj.words, function (wi, wv) { if (wv.id == wId) { wObj = wv; } });
            if (wObj != null) {
                htmlStmt += '<div class="ws_word_item" data-wordid="' + wObj.id + '">' + wObj.display + '</div>';
            }
        });
        htmlStmt += '</div>';
        htmlStmt += '</div>'; // ws_word_list

        htmlStmt += '</div>'; // screen_elements
        htmlStmt += '</div></div></div>'; // all_cont / options
    }

    console.log('htmlStmt >> WordSearch Built');
    $(".activity_area").append(htmlStmt);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}