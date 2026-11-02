//  ****************************************** //
//  WordSort3 - Data file
//  16 words must be dragged into the correct one of 3 tables. A word never
//  disappears from the bank when dropped - the bank copy just fades and
//  gets a strikethrough, while a clone of it lands in the table.
//  "exampleText" is a static illustrative word already printed in each
//  table (it is NOT one of the 16 draggable words, just a sample).
//  ****************************************** //

var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_31/2.mp3",
    },
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
  ],
};
var wordsort3_data = {
  mainTitle: "../images/pages/sb-icons/gramprac_main_title.png",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/page_31/GRAMMAR_PRACTICE.mp3",
  subTitleTextLeft:
    "<span class='orange_text'>2</span> Write the container measurement or piece words from the ingredients above",
  subTitleAudio:
    "../audios/page_31/2_Write_the_container_measurement_or_piece_words_from_the_ingredients_above.mp3",

  tables: [
   {
      id: "container",
      title: "Container",
      exampleText: "",
      numCols: 2,
      rowsPerCol: 5,
    }, {
      id: "measurement",
      title: "Measurement",
      exampleText: "",
      numCols: 2,
      rowsPerCol: 5,
    },
    
    {
      id: "piece",
      title: "Piece",
      exampleText: "",
      numCols: 2,
      rowsPerCol: 5,
    },
  ],

  words: [
    { id: "w1", num: 1, text: "grams", category: "measurement" },
    { id: "w2", num: 2, text: "stick", category: "piece" },
    { id: "w3", num: 3, text: "jar", category: "container" },

    { id: "w4", num: 4, text: "can", category: "container" },
    { id: "w5", num: 5, text: "tablespoons", category: "container" },
    { id: "w6", num: 6, text: "cup", category: "measurement" },
    { id: "w7", num: 7, text: "slice", category: "piece" },
    { id: "w8", num: 8, text: "teaspoon", category: "measurement" },
  ],
};
