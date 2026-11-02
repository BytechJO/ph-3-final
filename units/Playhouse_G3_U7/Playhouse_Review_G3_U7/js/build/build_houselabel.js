//  ****************************************** //
//  HouseLabel - build file
//  ****************************************** //
function buildHouseLabelBody(aObj) {
    var htmlStmt = '';
    if (typeof aObj != undefined && aObj != null) {

        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';
        htmlStmt += '<a href=""><img src="../images/icons/back_btn.png" /></a>';
        htmlStmt += '</div>';
        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';
        htmlStmt += '<a href=""><img src="../images/icons/next_btn.png" /></a>';
        htmlStmt += '</div>';

        // ===================================================================== heading =====================
        htmlStmt += '<div class="act_head_group justify-content-center">';
        htmlStmt += '<div class="activityHeading">';
        htmlStmt += "<div class='page_sub_title'>";
        htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
        htmlStmt += "</div>";
        htmlStmt += '</div>';
        htmlStmt += '</div>';

        // ===================================================================== word bank =====================
        htmlStmt += '<div class="hl_wordbank d-flex flex-wrap">';
        jQuery.each(aObj.wordBank, function (i, wObj) {
            htmlStmt += '<div class="hl_wordbank_item"><b>' + wObj.letter + '</b> ' + wObj.text + '</div>';
        });
        htmlStmt += '</div>';

        // ===================================================================== all_cont =====================
        htmlStmt += '<div class="options mx-auto">';
        htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';

        htmlStmt += '<div class="hl_img_wrap">';
        htmlStmt += '<img class="hl_bg_image" src="' + aObj.backgroundImage + '" />';

        jQuery.each(aObj.blanks, function (i, bObj) {
            htmlStmt += '<div class="que hl_blank" data-qno="' + (i + 1) + '" style="top:' + bObj.topPct + '%; left:' + bObj.leftPct + '%;">';
            htmlStmt += '<input type="text" maxlength="1" class="hl_input" />';
            htmlStmt += '<div class="icon_wrap">';
            htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
            htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
            htmlStmt += '</div>';
            htmlStmt += '</div>';
        });

        htmlStmt += '</div>'; // hl_img_wrap

        htmlStmt += '</div></div>'; // all_cont / options
    }

    console.log('htmlStmt >> HouseLabel Built');
    $(".activity_area").append(htmlStmt);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}