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
      audiourl: "../audios/page_46/1.mp3",
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
    "<span class='orange_text'>1</span>  Look at the picture.  Read the words in the word box.  Pretend you are the girl.  Where are the things in the picture? Write the words in the columns",
  subTitleAudio:
    "../audios/page_46/1_Look_at_the_picture_Read_the_words_in_the_word_box_Pretend_you_are_the_girl.mp3",

  tables: [
   {
      id: "right here",
      title: "right here",
      exampleText: "",
      numCols: 1,
      rowsPerCol: 6,
    }, {
      id: "over there",
      title: "over there",
      exampleText: "",
      numCols: 1,
      rowsPerCol: 6,
    },
    
 
  ],
sideImg : "../images/pages/activities/sideImg.jpg",
  words: [
    { id: "w1", num: 1, text: "plates", category: "over there" },
    { id: "w2", num: 2, text: "blender", category: "over there" },
    { id: "w3", num: 3, text: "rolling pin", category: "right here" },
    { id: "w4", num: 4, text: "table", category: "right here" },
    { id: "w5", num: 5, text: "spoon", category: "right here" },
    { id: "w6", num: 6, text: "pot", category: "over there" },
    { id: "w7", num: 7, text: "oven gloves", category: "over there" },
    { id: "w8", num: 8, text: "Mum", category: "right here" },
    { id: "w9", num: 9, text: "fizzy drink", category: "over there" },
    { id: "w10", num: 10, text: "cup", category: "right here" },
  ],
};
