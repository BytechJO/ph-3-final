var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(53, 130, 180)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/page_37/1.mp3',
        },
        {
          'url': '',
        },
        {
          'url': '',
        },
        {
          'url': '',
        }
    ],
  }





var crackcode_data = {
       "mainTitle"             : "../images/pages/sb-icons/phonics_sent_build.png",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/page_37/PHONICS_and_Sentence_Building.mp3",
    "subTitleTextLeft"  : "<span class='blue_text'>1</span> <b>Crack the code!</b>",
    "subTitleAudio"     : "../audios/under.mp3",
    "strictcase"        : "no",

    "mouseImage"     : "../images/pages/activities/1_mouse.jpg",
    "detectiveImage" : "../images/pages/activities/1_detective.png",

    /*
       Each sentence is a list of WORDS. Each word is a list of numbers
       (1=a, 2=b ... 26=z). "given" (optional) pre-fills specific letters
       as a non-editable hint, keyed by the number's index INSIDE that word
       (0 = first number of that word).
       "leadPunct" / "trailPunct" (optional) are quote marks / punctuation
       shown right before/after that word, exactly as printed.
    */
    "sentences": [
        {
            "words": [
                { "numbers": [8, 9, 19],              "given": { "0": "H" } },
                { "numbers": [13, 21, 13] },
                { "numbers": [19, 8, 15, 21, 20, 5, 4], "trailPunct": "\u2019" }
            ]
        },
        {
            "words": [
                { "numbers": [7, 5, 20],  "given": { "0": "G" }, "leadPunct": "\u2018" },
                { "numbers": [20, 8, 5] },
                { "numbers": [13, 15, 21, 19, 5] },
                { "numbers": [15, 21, 20] }
            ]
        },
        {
            "words": [
                { "numbers": [15, 6] },
                { "numbers": [20, 8, 5] },
                { "numbers": [8, 15, 21, 19, 5], "trailPunct": "!\u2019" }
            ]
        }
    ]
}