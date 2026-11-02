var stereo_data = {
    "audio":"",
    "exist":false,
    "bgColor_rgb":"rgb(53, 130, 180)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/demo.mp3',
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
var fillin_data = {    
    "layout"                : 1,
    "numinrow"              : [[1,1,1]],
    "mainTitle": "",
    "mainTitleIcon": "",
    "mainTitleIconPos": {"right": "-20px"},
    "mainTitleAudio": "../audios/under.mp3",
    "subTitleTextLeft"      : '<span class="blue_text">5</span> Write. Put each word under its correct ending sound.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [""],
    "subTitleAudio"         : "../audios/under.mp3",
    "defaultAnswer"         : -1,
    "leftList"              : '',
    "image"                 :"",
    "options"               :["plays", "writes", "chooses", "opens", "likes", "dances", "sings", "blows", "helps"],
    "optionsAudios"         : ["","","","","","","","","","","","",""],
    "questions": [
        {
            "textfront": "‘iz’ sound",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["dances chooses"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "‘s’ sound",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["helps likes writes"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "‘z’ sound",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["opens sings blows"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        }
    ]
}