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
  mainTitle: "../images/icons/gram_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/page_22/GRAMMAR.mp3",
  subTitleTextLeft: "<span class='orange_text'>2</span> Practise.",
  subTitleTextRight:
    "Read the sentences and circle the correct adverbs of frequency.",
  subTitleIcons: [""],
  subTitleAudio: "../audios/new/p22practise.mp3",
  rightImage: "",
  rightText: [],
  rightTextAudio: [],
  activityheading: "",
  activitysubheading: "",
  activityicon: "../images/icons/hand_icon.png",
  select: "single", // single (or) multiple
  shape: "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
  bgcolor: "none",
  numbering: "number",
  numberstartfrom: 1,
  numberofcolumns: 1,
  imageposition: "front",

  // turn on the per-question side-image layout
  showQuestionImages: true,

  questions: [
    {
      question: "Brad plays football two times a month.",
      image: "../images/pages/page-3/2.jpg",
      imageposition: "left",
      numbering: "none",
      answer: 2,
      options: [
        { text: "never" },
        { text: "sometimes" },
        { text: "often" },
        { text: "usually" },
        { text: "always" },
      ],
    },
    {
      question: "Kate gets up at half past six every day.",
      image: "../images/pages/page-3/4.jpg",
      imageposition: "right",
      numbering: "none",
      answer: 5,
      options: [
        { text: "never" },
        { text: "sometimes" },
        { text: "often" },
        { text: "usually" },
        { text: "always" },
      ],
    },
    {
      question: "My mother cooks breakfast three times a week.",
      image: "../images/pages/page-3/11.jpg",
      imageposition: "left",
      numbering: "none",
      answer: 3,
      options: [
        { text: "never" },
        { text: "sometimes" },
        { text: "often" },
        { text: "usually" },
        { text: "always" },
      ],
    },
    {
      question: "I don't take the bus to school.",
      image: "../images/pages/page-3/5.jpg",
      imageposition: "right",
      numbering: "none",
      answer:1,
      options: [
        { text: "never" },
        { text: "sometimes" },
        { text: "often" },
        { text: "usually" },
        { text: "always" },
      ],
    },
  ],
};
