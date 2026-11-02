var pickwordimg_data = {
  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/under.mp3",

  subTitleTextLeft:
    "<span class='orange_text'>1</span> <b>Look and circle the correct word.</b>",
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",

  bgImage: "../images/pages/activities/1_kitchen.jpg",
  aspectRatio: "472 / 375",

  /*
       top/left = % position of the TOP-LEFT corner of the choice box,
       relative to the picture. "words" = the two stacked options shown in
       that box, "correct" = 0-based index of the word that matches the
       picture (0 = first word, 1 = second word).
    */
  choices: [
    {
      top: "22%",
      left: "3%",
      words: ["cutting board", "oven gloves"],
      correct: 1,
    },
    { top: "15%", left: "28%", words: ["peeler", "grater"], correct: 1 },
    {
      top: "41%",
      left: "52%",
      words: ["measuring cups", "spatula"],
      correct: 1,
    },
    { top: "65%", left: "11%", words: ["spatula", "peeler"], correct: 1 },
    {
      top: "67%",
      left: "32%",
      words: ["frying pan", "drying rack"],
      correct: 0,
    },
  ],
};
