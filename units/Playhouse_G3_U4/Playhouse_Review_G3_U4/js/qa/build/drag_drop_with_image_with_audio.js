function initActivity(activity) {
  var html = "";
  html += '<div class="main">';
  html += '<div class="drag_drop_options">';
  jQuery.each(activity.options, function (key, value) {
    // NEW: the image is now a STATIC label - it does NOT move with the
    // drag. Only the word text itself (still class="draggable_div",
    // same as before) is what gets dragged and removed on drop.
    var imgSrc =
      activity.optionsImages != undefined &&
      activity.optionsImages[value] != undefined
        ? activity.optionsImages[value]
        : "";
    var imgHtml =
      imgSrc != "" ? '<img class="drag_word_img" src="' + imgSrc + '" />' : "";

    html += '<div class="word_option_wrap">';
    // html +=   imgHtml;
    html +=
      '<div class="draggable_div" data-value="' +
      value +
      '">' +
      value +
      "</div>";
    html += "</div>";
  });
  html += "</div>";
  /*
        display: grid !important;
    grid-template-columns: 1fr 1fr 1fr;
}
    */
  var classOption =
    activity.class === "grid" ? "grid-table" : "d-flex  align-items-center";
  var styleOption = activity.style === "table" ? "table" : "";
  var styleListOption = activity.style === "table" ? "grid-table-list" : "";
  var styleInputOption =
    activity.style === "table" ? "grid-table-list-input" : "";
  //audios/AnchorAudioPhrases-143.mp3
  html += `<div class="drag_drop_questions" style=" display: flex;flex-direction: column">`;
  html += `<table class="flex-row" style=" display: flex;flex-direction: row;flex-wrap:wrap; justify-content: center">`;
  fieldIndex = 0;
  for (let x = 0; x < activity.numOfRow; x++) {
    html += `<tr>`;
    for (let y = 0; y < activity.numOfCol; y++) {
      html += `<td>`;
      // jQuery.each(activity.questions, function(key, values){

      //  if(typeof(values)=="string"){

      // NEW: data-col="${y}" tags this blank with its column
      // index, so validateActivity() can check it against the
      // correct word LIST for that column instead of one
      // fixed position
      html +=
        `<div class='flex-cell ' style="flex: 1;border: 1px solid #ccc;padding: 10px 0px;text-align: center;min-width: 25%;">` +
        activity.questions[fieldIndex].replace(
          /___/g,
          ` <input readonly type="text" class="droppable_div ${styleInputOption}" data-col="${y}" />`,
        ) +
        "</div>";

      //      } else {
      //          jQuery.each(values, function(k, v){

      //              var v = v+"";
      //              html += '<li>'+ v.replace('___', ' <input readonly type="text" class="droppable_div" />') +'</li>';

      //          });
      //      }
      //  });
      fieldIndex++;
      html += `</td>`;
    }
    html += `</tr>`;
  }

  html += "</table></div>";

  html += "</div>";
  writeHtml(activity, html);
  setDefaultAnswerDragDrop(activity);

  //for mobile view
  if (window.outerWidth <= 600) {
    jQuery(".drag_drop_options").css(
      "top",
      jQuery(".activity-heading").offset().top +
        jQuery(".activity-heading").height() +
        20,
    );
  }
  jQuery(".drag_drop_options div.draggable_div").draggable({
    container: jQuery(".activity-content"),
    revert: true,
    placeholder: true,
    droptarget: ".drag_drop_questions input.droppable_div",
    drop: function (evt, droptarget) {
      jQuery(droptarget).val(jQuery(this).data("value"));
      jQuery(droptarget).removeClass("droppable_div");

      // NEW: keep the word chip visible in the bank, just mark it as used
      // (strike-through + disabled) instead of removing it
      jQuery(this).addClass("draggable_used");
      jQuery(this).draggable("disable");

      detectDragend();
    },
  });
}
