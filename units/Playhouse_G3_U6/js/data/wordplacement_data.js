var wordplacement_data = {
  mainTitle: "../images/icons/phonics_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",
  mainTitleAudio: "../audios/page_53/PHONICS.mp3",
  mainTitleIconPos: { right: "-20px" },
  subTitleTextLeft:
    "<span class='orange_text'>1</span> Write.  <b class='orange_text'>Put the word '<b style='color:black'>of</b>' where it belongs in each sentence.</b>",
  subTitleAudio: "../audios/new/p53write.mp3",
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
      words: ["Mum", "bought", "500", "grams", "minced", "meat."],
      correctGap: 3,
    },
    { words: ["We", "need", "two", "loaves", "bread."], correctGap: 3 },
    { words: ["Can", "I", "get", "a", "glass", "water?"], correctGap: 4 },
  ],
};
