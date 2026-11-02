var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_20/1.mp3",
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

var countablenouns_data = {
  mainTitle: "../images/pages/sb-icons/grammer_main_title.png",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "80px" },
  mainTitleAudio: "../audios/page_20/GRAMMAR.mp3",

  subTitleTextLeft:
    "<span class='orange_text'>4</span> Underline the <span class='orange_text'>‘oa’</span> words and circle the <span class='orange_text'>oa</span> in each <span class='orange_text'>‘oa’</span> word.</span>",
  subTitleAudio:
    "../audios/page_20/1_Underline_the_uncountable_nouns_and_circle_the_countable_nouns.mp3",

  /*
       Each sentence is split into words.
       "circle"    : word is a countable noun -> needs a circle
       "underline" : word is an uncountable noun -> needs an underline
       "none"      : no interaction expected for this word
       A multi-word uncountable/countable phrase (e.g. "ice cream") is marked
       by giving BOTH words the same type - the student must mark both parts.
    */
  questions: [
    {
      words: [
        { text: "I", type: "none" },
        { text: "bought", type: "none" },
        { text: "a", type: "none" },
        { text: "loaf", type: "underline" },
        { text: "of", type: "none" },
        { text: "bread", type: "none" },
      
      ],
    },
    {
      words: [
        { text: "She", type: "none" },
        { text: "walks", type: "none" },
        { text: "down", type: "none" },
        { text: "the", type: "none" },
        { text: "road", type: "underline" },
     
      ],
    },
    {
      words: [
        { text: "The", type: "none" },
        { text: "toad", type: "underline" },
        { text: "is,", type: "none" },
        { text: "big", type: "none" },
        { text: "and", type: "none" },
        { text: "green", type: "none" },
    
      ],
    },
    {
      words: [
        { text: "We", type: "none" },
        { text: "took", type: "none" },
        { text: "the", type: "none" },
        { text: "goat", type: "underline" },
        { text: "with", type: "none" },
        { text: "us", type: "none" },
        { text: "on", type: "none" },
        { text: "the", type: "none" },
        { text: "boat", type: "underline" },
        { text: "ride.", type: "none" },
      ],
    },
    {
      words: [
        { text: "She", type: "none" },
        { text: "has", type: "none" },
        { text: "got", type: "none" },
        { text: "a", type: "none" },
        { text: "new", type: "none" },
        { text: "coat", type: "underline" },
    
      ],
    },
  ],
};
