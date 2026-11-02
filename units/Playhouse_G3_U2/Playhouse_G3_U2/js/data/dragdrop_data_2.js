//  ****************************************** //
//  DragDrop - Phonics Word Sort (3 columns) - Data file
//  ****************************************** //
var stereo_data = {
    "audio": "",
    "exist": false,
    "bgColor_rgb": "rgb(53, 130, 180)",
    "type": "text",
    "playListData": [
        { 'audiourl': '../audios/demo.mp3' },
        { 'url': '' },
        { 'url': '' },
        { 'url': '' }
    ],
}

var dragdrop_data = {
    "layout": 2,            // 2 = columns sit side by side
    "showLines": true,      // draw ruled writing lines inside each column
    "sectionTitle": "PHONICS and Sentence Building",
    "sectionIcon": "",
    "mainTitle"             : "../images/pages/sb-icons/phonics-sent-build.png",
  "mainTitleIcon"         : "",
  "mainTitleIconPos"      : {"right": "-18px"},
  "mainTitleAudio"        : "../audios/page_12/PHONICS_and_Sentence_Building.mp3",
  "subTitleTextLeft"      : '<span class="blue_text">1</span> Look at the simple present verbs in the box and write them in the correct columns.',
  "subTitleTextRight"     : "",
  "subTitleIcons"         : [],
  "subTitleAudio"         : "../audios/page_12/1_Look_at_the_simple_present_verbs_in_the_box_and_write_them_in_the_correct_columns.mp3",
  "activityheading"       : '',
  
    "subTitleIcons": [""],
    // "subTitleAudio": "../audios/under.mp3",
    "image": "",

    // word bank - each word is draggable, "id" must be unique
    "options": [
        { "id": "w1", "word": "cooks", "audio": "" },
        { "id": "w2", "word": "plays", "audio": "" },
        { "id": "w3", "word": "likes", "audio": "" },
        { "id": "w4", "word": "washes", "audio": "" },
        { "id": "w5", "word": "eats", "audio": "" },
        { "id": "w6", "word": "gives", "audio": "" },
        { "id": "w7", "word": "helps", "audio": "" },
        { "id": "w8", "word": "knows", "audio": "" },
        { "id": "w9", "word": "wears", "audio": "" },
        { "id": "w10", "word": "dances", "audio": "" },
        { "id": "w11", "word": "watches", "audio": "" },
        { "id": "w12", "word": "fixes", "audio": "" }
    ],

    // drop zones / columns
    "questions": [
        {
            "textfront": "\u2018s\u2019 sound",
            "audio": "../audios/under.mp3",
            "audioenable": "default",
            "answer": ["w1", "w3", "w5", "w7"] // cooks, likes, eats, helps
        },
        {
            "textfront": "\u2018z\u2019 sound",
            "audio": "../audios/under.mp3",
            "audioenable": "default",
            "answer": ["w2", "w6", "w8", "w9"] // plays, gives, knows, wears
        },
        {
            "textfront": "\u2018iz\u2019 sound",
            "audio": "../audios/under.mp3",
            "audioenable": "default",
            "answer": ["w4", "w10", "w11", "w12"], // washes, dances, watches, fixes
            "prefilled": ["w12"] // "fixes" is already given as a worked example
        }
    ]
}