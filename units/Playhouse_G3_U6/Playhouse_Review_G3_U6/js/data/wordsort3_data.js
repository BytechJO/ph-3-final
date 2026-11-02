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
    "<span class='orange_text'>3</span> Put each word into the right box.",
  subTitleAudio: "",

  tables: [
    {
      id: "measurement",
      title: "Measurement words",
      exampleText: "",
      numCols: 2,
      rowsPerCol: 5,
    },
    {
      id: "container",
      title: "Container words",
      exampleText: "",
      numCols: 2,
      rowsPerCol: 5,
    },
    {
      id: "piece",
      title: "Piece words",
      exampleText: "",
      numCols: 2,
      rowsPerCol: 5,
    },
  ],

  words: [
    { id: "w1", num: 1, text: "grams", category: "measurement" },
    { id: "w2", num: 2, text: "stick", category: "piece" },
    { id: "w3", num: 3, text: "bar", category: "piece" }, 
    { id: "w4", num: 4, text: "litre", category: "measurement" },
    { id: "w5", num: 5, text: "packet", category: "container" },
    { id: "w6", num: 6, text: "tube", category: "container" },
    { id: "w7", num: 7, text: "head", category: "piece" },
    { id: "w8", num: 8, text: "loaf", category: "piece" },
    { id: "w9", num: 9, text: "carton", category: "container" },
    { id: "w10", num: 10, text: "cup", category: "measurement" },
    { id: "w11", num: 11, text: "slice", category: "piece" },
    { id: "w12", num: 12, text: "teaspoon", category: "measurement" },
   
  ],
};
