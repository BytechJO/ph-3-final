var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_50/2.mp3",
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

var storywordchoice_data = {
  mainTitle: "../images/pages/sb-icons/grammer_main_title.png",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/page_50/GRAMMAR.mp3",
  subTitleTextLeft:
    "<span class='blue_text'>2</span> Circle the correct word in the story.",
  subTitleAudio: "../audios/page_50/2_Circle_the_correct_word_in_the_story.mp3",
  storyImage: "../images/pages/activities/2_sabretooth.jpg",

  /*
       The story as a sequence of parts, in reading order:
       { "text": "..." }                                   -> plain, non-interactive text
       { "options": ["correctSpelling","wrongSpelling"], "correct": 0 } -> a clickable word pair (click one to circle it)
    */
  parts: [
    {
      text: "Yesterday, I went to the museum with my parents. We saw a lot of extinct animals. We saw a mammoth. The mammoth is ",
    },
    { options: ["bigger", "biger"], correct: 0 },
    {
      text: " than the sabre-toothed cat! I like the sabre-toothed cat. He is ",
    },
    { options: ["scarier", "scaryer"], correct: 0 },
    {
      text: " than a lion! There are many hairy animals that lived during the Ice Age. There are the woolly rhinocerous and the woolly mammoth. The woolly mammoth is ",
    },
    { options: ["hairier", "haryer"], correct: 0 },
    { text: " than the woolly rhinocerous. It is said that the climate got " },
    { options: ["hoter", "hotter"], correct: 1 },
    { text: " and that's why the Ice Age animals are extinct." },
  ],
};
