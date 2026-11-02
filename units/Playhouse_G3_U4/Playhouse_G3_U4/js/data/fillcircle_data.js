//  ****************************************** //
//  FillCircleType - Data file
//  Each question is built from ordered "segments" so the underlined word
//  can sit anywhere in the sentence (before or after the verb choice):
//    { type: "text", text: "..." }        -> plain text
//    { type: "underline", text: "..." }   -> the underlined noun
//    { type: "verbpick", options:[...], correct:"..." } -> the (is / are) choice
//  "correctType" is the C/U answer for the blank before the sentence.
//  ****************************************** //

var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_20/2.mp3",
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

var fillcircle_data = {
  mainTitle: "../images/pages/sb-icons/grammer_main_title.png",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "80px" },
  mainTitleAudio: "../audios/page_20/GRAMMAR.mp3",

  subTitleTextLeft:
    "<span class='orange_text'>2</span> Read and circle the correct verb for each sentence. In the blank, write <b>C</b> if the underlined word is a countable noun and <b>U</b> if the underlined word is an uncountable noun.",
  subTitleAudio: "../audios/page_20/2_Read_and_circle_the_correct_verb_for_each_sentence_In_the_blank_write_C_if_the_underlined_word.mp3",

  // decorative image next to the list, like the sugar jar in the reference
  rightImage: "../images/pages/activities/sugar_jar.png",

  questions: [
    {
      correctType: "U",
      segments: [
        { type: "text", text: "There " },
        { type: "verbpick", options: ["is", "are"], correct: "is" },
        { type: "text", text: " " },
        { type: "underline", text: "sugar" },
        { type: "text", text: " in the cup." },
      ],
    },
    {
      correctType: "U",
      segments: [
        { type: "underline", text: "Ketchup" },
        { type: "text", text: " " },
        { type: "verbpick", options: ["is", "are"], correct: "is" },
        { type: "text", text: " good on burgers." },
      ],
    },
    {
      correctType: "C",
      segments: [
        { type: "underline", text: "Biscuits" },
        { type: "text", text: " " },
        { type: "verbpick", options: ["is", "are"], correct: "are" },
        { type: "text", text: " my favourite snack." },
      ],
    },
    {
      correctType: "C",
      segments: [
        { type: "underline", text: "Sandwiches" },
        { type: "text", text: " " },
        { type: "verbpick", options: ["is", "are"], correct: "are" },
        { type: "text", text: " in their lunches." },
      ],
    },
    {
      correctType: "U",
      segments: [
        { type: "text", text: "There " },
        { type: "verbpick", options: ["is", "are"], correct: "is" },
        { type: "text", text: " " },
        { type: "underline", text: "tea" },
        { type: "text", text: " in the cupboard." },
      ],
    },
    {
      correctType: "U",
      segments: [
        { type: "underline", text: "Juice" },
        { type: "text", text: " " },
        { type: "verbpick", options: ["is", "are"], correct: "is" },
        { type: "text", text: " her favourite drink." },
      ],
    },
  ],
};
