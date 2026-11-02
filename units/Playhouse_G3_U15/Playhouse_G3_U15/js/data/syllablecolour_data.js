//  ****************************************** //
//  SyllableColour - Data file
//  Click a number (1, 2, or 3) to colour it in solid red - only one
//  number per word can be selected at a time (radio behaviour).
//  ****************************************** //

var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_77/1.mp3",
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

var syllablecolour_data = {
        "mainTitle"             : "../images/pages/sb-icons/phonics-sent-build.png",
    "mainTitleIcon"         : "",
    "mainTitleAudio"        : "../audios/page_77/PHONICS_and_Sentence_Building.mp3",
    "mainTitleIconPos"      : {"right": "68px"},
  "sectionTitle": "PHONICS and Sentence Building",
    "subTitleTextLeft": "<span class='orange_text'>1</span> Colour the correct word.",
    "subTitleAudio": "../audios/page_77/1_Colour_the_correct_word.mp3",
 
    "rows": [
        {
            "num": 1,
            "image": "../images/pages/activities/7.png",
            "options": ["fast", "street"],
            "correctIndex": 0
        },
        {
            "num": 2,
            "image": "../images/pages/activities/4.png",
            "options": ["street", "best"],
            "correctIndex": 0
        },
        {
            "num": 3,
            "image": "../images/pages/activities/6.jpg",
            "options": ["west", "east"],
            "correctIndex": 1
        },
        {
            "num": 4,
            "image": "../images/pages/activities/5.png",
            "options": ["strange", "first"],
            "correctIndex": 1
        }
    ]
}