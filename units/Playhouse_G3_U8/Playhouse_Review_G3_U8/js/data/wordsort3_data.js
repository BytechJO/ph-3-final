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
    "<span class='orange_text'>2</span> Put each item in the correct room.",
  subTitleAudio: "",

  tables: [
    {
      id: "kitchen",
      title: "kitchen",
      exampleText: "",
      numCols: 1,
      rowsPerCol: 5,
    },
    {
      id: "living",
      title: "living room",
      exampleText: "",
      numCols: 1,
      rowsPerCol: 5,
    },
    {
      id: "bedroom",
      title: "bedroom",
      exampleText: "",
      numCols: 1,
      rowsPerCol: 5,
    },
  ],

  words: [
    { id: "w1", num: 1, text: "plates", category: "kitchen" },
    { id: "w2", num: 2, text: "toy box", category: "bedroom" },
    { id: "w3", num: 3, text: "fridge", category: "kitchen" }, 
    { id: "w4", num: 4, text: "coffee table", category: "kitchen" },
    { id: "w5", num: 5, text: "sofa", category: "living" },
    { id: "w6", num: 6, text: "bed", category: "bedroom" },
    { id: "w7", num: 7, text: "pillow", category: "bedroom" },
    { id: "w8", num: 8, text: "wardrobe", category: "bedroom" },
    { id: "w9", num: 9, text: "table", category: "kitchen" },
    { id: "w10", num: 10, text: "armchair", category: "living" },
    { id: "w11", num: 11, text: "fork", category: "kitchen" },
   
  ],
};
