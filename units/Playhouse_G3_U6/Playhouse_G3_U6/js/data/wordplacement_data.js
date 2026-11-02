var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_32/3.mp3",
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

var wordplacement_data = {
  mainTitle: "../images/pages/sb-icons/phonics-sent-build.png",
  mainTitleIcon: "",
  mainTitleAudio: "../audios/page_32/PHONICS_and_Sentence_Building.mp3",
  mainTitleIconPos: { right: "-20px" },
  subTitleTextLeft:
    "<span class='blue_text'>3</span> Add <b style='color:black'>' of '</b> where it belongs in each sentence.",
  subTitleAudio:
    "../audios/page_32/3_Add_of_where_it_belongs_in_each_sentence.mp3",
  targetWord: "of",
  strictcase: "no",
  maxlength: 6,

  /*
       "words": the sentence split into words (in their FINAL correct order,
       without "of" - the student inserts it).
       "correctGap": the gap index where "of" belongs. Gaps are counted
       BETWEEN words: gap 0 sits between words[0] and words[1], gap 1 sits
       between words[1] and words[2], etc. (so there are words.length-1 gaps).
    */
  sentences: [
    {
      words: ["I", "bought", "a", "packet", "gum."],
      correctGap: 3,
    },
    {
      words: ["I", "need", "three", "cans", "fizzy", "drinks."],
      correctGap: 3,
    },
    { words: ["Please", "give", "me", "two", "bars", "soap."], correctGap: 4 },
  ],
};
