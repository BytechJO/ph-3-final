var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(242, 101, 33)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/demo.mp3",
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
var mcq_data = {
  layout: 1,
  numinrow: [[1]],
  mainTitle: "../images/icons/adv_main_title.png",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "80px" },
  mainTitleAudio: "../audios/page_95/Playhouse_Adventures!.mp3",
  subTitleTextLeft:
    "<span class='orange_text'>2</span> Choose the correct answer. Then write it.",
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p95choose.mp3",
  select: "single", // single (or) multiple
  shape: "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
  bgcolor: "none",
  numbering: "number",
  numberstartfrom: 1,
  numberofcolumns: 1,
  image: "no",
  imageposition: "back",
  questions: [
    {
      question: "Ms. Lopez takes her class to the[_]",
      options: [["park", "Natural History Museum"]],
      answer: [2],
      inputbox: "yes",
      image: "",
      audio: "",
      audioenable: "correct", // correct (or) default
    },
    {
      question: "Max’s favourite Ice Age animal is the[_]",
      options: [["woolly mammoth", "sabre-toothed cat"]],
      answer: [2],
      inputbox: "yes",
      image: "",
      audio: "",
      audioenable: "correct", // correct (or) default
    },
    {
      question: "Yoshi’s favourite Ice Age animal is the[_]",
      options: [["woolly mammoth", "giant ground sloth"]],
      answer: [1],
      inputbox: "yes",
      image: "",
      audio: "",
      audioenable: "correct", // correct (or) default
    },
    {
      question: "Why did the animals have a lot of fur?[_]",
      options: [["To make them look good.", "To keep them warm."]],
      answer: [2],
      inputbox: "yes",
      image: "",
      audio: "",
      audioenable: "correct", // correct (or) default
    },
  ],
  rightImage: "../images/pages/activities/adv_2_right-background.png",
  rightText: [
    "<span class='right_title'>Find in the story:</span>",
    "<span class='red_text'>✓</span>It’s my favourite, too!",
    "<span class='red_text'>✓</span> My favourite is the wooly mammoth.",
    "<span class='red_text'>✓</span> And hairier, too!",
  ],
  rightTextAudio: [
    "../audios/under.mp3",
    "../audios/under.mp3",
    "../audios/under.mp3",
  ],
  bgcolor: "none",
  showicon: "true",
  ontextaudioplay: "",
  onimgaudioplay: "",
};
