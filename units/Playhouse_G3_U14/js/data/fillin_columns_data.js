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
var fillin_data = {
  layout: 1,
  numinrow: [[1, 1, 1, 1]],
  mainTitle: "../images/icons/phonics_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/page_129/PHONICS.mp3",
  subTitleTextLeft: '<span class="orange_text">1</span> Write.',
  subTitleTextRight:
    "Write a response to each of these questions using the present perfect tense and either for or since correctly. Then practise the conversation with a friend.",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p129write.mp3",
  defaultAnswer: -1,
  leftList: "",
  image: "",
  questions: [
    {
      textfront: "How long have you had this hairstyle? ",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: [""],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront: "How long have you known your best friend?",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: [""],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront: "How long have you been at this school?",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: [""],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront: "How long have you lived at your house?",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: [""],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
  ],
  // NEW: everything for the Sentence Building footer section now lives
  // under ONE dedicated key. If this key is missing/empty, the build
  // simply skips that whole section.
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
      audio: "../audios/page_121/3_01.mp3",
    },
    {
      img: "",
      text: "<b style='color:orange'>For</b> and <b style='color:orange'>Since</b> </br> I haven’t seen my friend <b style='color:orange'>for</b> </br>three years.</br>He has been at this school</br> <b style='color:orange'>since</b> kindergarten.",
      audio: "../audios/page_121/3_02.mp3",
    },
    {
      img: "../images/pages/page-3/Sen-3-img.png",
      text_img: "../images/pages/sb-icons/phonics_main_title_icon.png",
      audio: "../audios/page_65/Plural_nouns_end_in_s.mp3",
    },
  ],
};
