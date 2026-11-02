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
    "numinrow"              : [[1,1,1,1]],
    "mainTitle": "",
    "mainTitleIcon": "",
    "mainTitleIconPos": {"right": "-20px"},
    "mainTitleAudio": "../audios/under.mp3",
    "subTitleTextLeft"      : '<span class="orange_text">1</span> Unscramble the sentences.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [""],
    "subTitleAudio"         : "../audios/under.mp3",
    "defaultAnswer"         : -1,
    "leftList"              : '',
    "options"               : [],
    "optionsAudios"         : ["","","","","","",""],
    "image"                 :"",
    "questions": [
        {
            "textfront": "1 can / I / Maple Street? / get / Excuse me / How / to",
            "audio": "",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Excuse me. How can I get to Maple Street?"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "2 first / Take / the / right.",
            "audio": "",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Take the first right."],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "3 you / me / Can / tell / how / to / the/ supermarket? / find",
            "audio": "",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Can you tell me how to find the supermarket?"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "4 this / Walk along / and / you’ll / on the left / it / find / street",
            "audio": "",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Walk along this street and you'll find it on the left."],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        }
    ]
}