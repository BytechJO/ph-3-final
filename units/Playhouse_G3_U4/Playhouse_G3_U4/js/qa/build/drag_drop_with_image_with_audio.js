function initActivity(activity) {
  var html = "";

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

      // 	if(typeof(values)=="string"){

    //   html +=
    //     `<div class='flex-cell ' style="flex: 1;border: none; text-align: center;min-width: 25%;">` +
    //     activity.questions[fieldIndex].replace(
    //       /___/g,
    //       ` <input readonly type="text" class="droppable_div ${styleInputOption}" />`,
    //     ) +
    //     "</div>";

      // 		} else {
      // 			jQuery.each(values, function(k, v){

      // 				var v = v+"";
      // 				html += '<li>'+ v.replace('___', ' <input readonly type="text" class="droppable_div" />') +'</li>';

      // 			});
      // 		}
      // 	});
      // NEW: أضيفي data-col="y" على الـ input نفسه
      html += activity.questions[fieldIndex].replace(
        /___/g,
        ` <input readonly type="text" class="droppable_div" data-col="${y}" />`,
      );

      fieldIndex++;
      html += `</td>`;
    }
    html += `</tr>`;
  }

  html += "</table></div>";

  html += "<div>";
  html += '<div class="drag_drop_options">';
  jQuery.each(activity.options, function (key, value) {
    html +=
      '<div class="draggable_div" data-value="' +
      value +
      '">' +
      value +
      "</div>";
  });
  html += "</div>";

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
      jQuery(droptarget).val(evt.target.innerText);
      jQuery(droptarget).removeClass("droppable_div");

      jQuery(this).remove(); //('destroy');
      detectDragend();
    },
  });
}
