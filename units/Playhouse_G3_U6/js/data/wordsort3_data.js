//  ****************************************** //
//  WordSort3 - Data file
//  16 words must be dragged into the correct one of 3 tables. A word never
//  disappears from the bank when dropped - the bank copy just fades and
//  gets a strikethrough, while a clone of it lands in the table.
//  "exampleText" is a static illustrative word already printed in each
//  table (it is NOT one of the 16 draggable words, just a sample).
//  ****************************************** //
var wordsort3_data = {
  mainTitle: "../images/icons/gram_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleAudio: "../audios/page_50/GRAMMAR.mp3",
  mainTitleIconPos: { right: "-18px" },
  subTitleTextLeft:
    "<span class='orange_text'>2</span> <i>You try it.</i> <span style='color:orange'>Look at the Word Power words on page 48 and put them in the right column. Can you think of other words to add to the lists?</span>",
  subTitleAudio: "../audios/new/p50tryit.mp3",

  tables: [
    {
      id: "measurement",
      title: "Measurement words",
      exampleText: "gram",
      numCols: 2,
      rowsPerCol: 5,
    },
    {
      id: "container",
      title: "Container words",
      exampleText: "bottle",
      numCols: 2,
      rowsPerCol: 5,
    },
    {
      id: "piece",
      title: "Piece words",
      exampleText: "slice",
      numCols: 2,
      rowsPerCol: 5,
    },
  ],

  words: [
    { id: "w1", num: 1, text: "jar", category: "container" },
    { id: "w2", num: 2, text: "stick", category: "piece" },
    { id: "w3", num: 3, text: "loaf", category: "piece" },
    { id: "w4", num: 4, text: "carton", category: "container" },
    { id: "w5", num: 5, text: "packet", category: "container" },
    { id: "w6", num: 6, text: "tube", category: "container" },
    { id: "w7", num: 7, text: "bar", category: "piece" },
    { id: "w8", num: 8, text: "litre", category: "measurement" },
    { id: "w9", num: 9, text: "head", category: "piece" },
    { id: "w10", num: 10, text: "teaspoon", category: "measurement" },
    { id: "w11", num: 11, text: "cup", category: "measurement" },
    { id: "w12", num: 12, text: "bowl", category: "container" },
    { id: "w13", num: 13, text: "glass", category: "container" },
  ],
};
