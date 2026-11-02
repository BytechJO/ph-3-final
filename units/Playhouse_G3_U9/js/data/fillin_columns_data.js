var stereo_data = {
    "audio":"",
    "exist":false,
    "bgColor_rgb":"rgb(242, 101, 33)",
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
    "mainTitle": "../images/icons/reading.png",
    "mainTitleIcon": "../images/pages/sb-icons/adv_icon_1.png",
    "mainTitleIconPos"      : {"right": "80px"},
       "mainTitleAudio": "../audios/new/READING.mp3",
    "subTitleTextLeft"      : '<span class="orange_text">2</span> Read again and answer the questions.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p80read.mp3",
    "defaultAnswer"         : -1,
    "leftList"              : '',
    "image"                 :"",
    "questions": [
        {
            "textfront": "How many times does Ethan’s family meet here at the weekends?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["three times a day at weekends"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "What colour are the drawers?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["They are white"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "What shines through the window in the morning?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["The sunlight shines through the window in the morning"],
            "strictcase": "no", // yes (or) no
            "type": "text", // text (or) number
        },
        {
          "textfront": "What is next to the sink?",
          "audio": "../audios/under.mp3",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["The cutting board is next to the sink"],
          "strictcase": "no", // yes (or) no
          "type": "text", // text (or) number
      },
    ]
}