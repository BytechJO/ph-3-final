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
  mainTitle: "../images/icons/gramprac_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleIconPos: { right: "70px" },
  mainTitleAudio: "../audios/page_63/GRAMMAR_PRACTICE.mp3",
  subTitleTextLeft:
    '<span class="orange_text">2</span> Pair work.  <span class="orange_text">Read the conversation again. Ask and answer the questions below.</span> ',
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/new/p63pair.mp3",
  imgInSide: "../images/pages/activities/6.jpg",
  defaultAnswer: -1,
  leftList: "",
  image: "",
  questions: [
    {
      textfront: "Is Morgan’s apartment tiny?",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["Morgan’s apartment is not tiny"],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront: "Is Morgan’s apartment new or old?",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["It is new"],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront: "Is the park clean or dirty?",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["The park is clean"],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront: "Is Morgan’s apartment in a safe neighbourhood?",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["Morgan’s apartment is in a safe neighbourhood"],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
  ],
};
