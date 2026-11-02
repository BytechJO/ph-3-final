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
      audiourl: "../audios/page_52/2.mp3",
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
    "mainTitleAudio"        : "../audios/page_52/PHONICS_and_Sentence_Building.mp3",
    "mainTitleIconPos"      : {"right": "68px"},
 
    "subTitleTextLeft": "<span class='orange_text'>2</span> Colour the correct number of syllables for each word.",
    "subTitleAudio": "../audios/page_52/2_Colour_the_correct_number_of_syllables_for_each_word.mp3",
    // "titleIcon": "../images/pages/sb-icons/mascot_small.png",

    "words": [
        { "num": 1, "text": "mammoth", "correctSyllables": 2 },
        { "num": 2, "text": "tiger", "correctSyllables": 2 },
        { "num": 3, "text": "sloth", "correctSyllables": 1 },
        { "num": 4, "text": "fawn", "correctSyllables": 1 },
        { "num": 5, "text": "awful", "correctSyllables": 2 },
        { "num": 6, "text": "happy", "correctSyllables": 1 },
        { "num": 7, "text": "funnier", "correctSyllables": 3 }
    ]
}