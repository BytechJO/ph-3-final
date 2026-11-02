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
var _activity_json = {
  layout: 1,
  numinrow: [[1, 1, 1]],
  mainTitle: "../images/icons/phonics_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",
  mainTitleAudio: "../audios/page_109/PHONICS.mp3",
  mainTitleIconPos: { right: "-18px" },
  subTitleTextLeft:
    '<span class="orange_text">1</span> Write. <span class="orange_text">Choose a word from the word box to complete each sentence.</span>',
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p109write1.mp3",
  image: "new_drag_drop.png",
  type: "drag_drop",
  images: [],
  questions: [
    "<b>1</b> &nbsp; My ___ likes to watch TV.",
    "<b>2</b> &nbsp; The ___ that finishes first wins.",
    "<b>3</b> &nbsp; I ate the whole ___ of bananas.",
    "<b>4</b> &nbsp; A ___ of birds flew over my house.",
    "<b>5</b> &nbsp; My football ___ won the match.",
    "<b>6</b> &nbsp; The second grade  ___ is outside.",
  ],
  options: ["family", "team", "group", "bunch", "flock", "class"],
  answers: ["family", "group", "bunch", "flock", "team", "class"],
  // "default_answer": {1:"apple"}
  
  // NEW: everything for the Sentence Building footer section now lives
  // under ONE dedicated key. If this key is missing/empty, the build
  // simply skips that whole section.
  sentenceBuilding: {
    main_title_text: [
      "S",
      "e",
      "n",
      "t",
      "e",
      "n",
      "c",
      "e",
      "&nbsp;",
      "B",
      "u",
      "i",
      "l",
      "d",
      "i",
      "n",
      "g",
    ],
    main_title_audio: "../audios/page_65/Sentence_Building_01.mp3",
    items: [
      {
        img: "../images/pages/page-3/Sen-2-img.png",
        text_img: "../images/pages/sb-icons/phonics_main_title_icon.png",
        audio: "../audios/page_109/3_01.mp3",
      },
      {
        img: "",
        text: "A <b style='color:orange'>flock </b> of birds flew together.</br> The whole <b style='color:orange'>family</b> went out to eat.</br> Our <b style='color:orange'>team</b> will win this time.</br> A <b style='color:orange'>group</b> of people were sitting in a restaurant",
        audio: "../audios/page_109/3_03.mp3",
      },
      {
        img: "../images/pages/page-3/Sen-3-img.png",
        text_img: "../images/pages/sb-icons/phonics_main_title_icon.png",
        audio: "../audios/page_109/3_02.mp3",
      },
    ],
  },
};
