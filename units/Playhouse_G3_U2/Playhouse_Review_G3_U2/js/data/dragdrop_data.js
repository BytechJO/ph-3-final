//  ****************************************** //
//  DragDrop - Word Sort - Data file
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
    "layout": 1,
    "mainTitle": "",
    "mainTitleIcon": "",
    "mainTitleIconPos": { "right": "-20px" },
    "mainTitleAudio": "../audios/under.mp3",
    "subTitleTextLeft": '<span class="orange_text">5</span> Write. <span style="color:orange">Put each word under its correct ending sound.</span>',
    "subTitleTextRight": "",
    "subTitleIcons": [""],
    "subTitleAudio": "../audios/under.mp3",
    "image": "",

    // word bank - each word is draggable, "id" must be unique
    "options": [
        { "id": "w1", "word": "plays", "audio": "" },
        { "id": "w2", "word": "writes", "audio": "" },
        { "id": "w3", "word": "chooses", "audio": "" },
        { "id": "w4", "word": "opens", "audio": "" },
        { "id": "w5", "word": "likes", "audio": "" },
        { "id": "w6", "word": "dances", "audio": "" },
        { "id": "w7", "word": "sings", "audio": "" },
        { "id": "w8", "word": "blows", "audio": "" },
        { "id": "w9", "word": "helps", "audio": "" }
    ],

    // drop zones / questions
    "questions": [
        {
            "textfront": "\u2018iz\u2019 sound",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            // the correct word "id"s that belong in this box (order doesn't matter)
            "answer": ["w3", "w6"]
        },
        {
            "textfront": "\u2018s\u2019 sound",
            "audio": "../audios/under.mp3",
            "audioenable": "default",
            "answer": ["w9", "w5", "w2"]
        },
        {
            "textfront": "\u2018z\u2019 sound",
            "audio": "../audios/under.mp3",
            "audioenable": "default",
            "answer": ["w1","w4", "w7", "w8"]
        }
    ]
}