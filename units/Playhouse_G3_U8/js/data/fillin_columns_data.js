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
    "numinrow"              : [[1,1,1]],
    "mainTitle"             : "../images/icons/reading.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/adv_icon_1.png",
    "mainTitleIconPos"      : {"right": "80px"},
    "mainTitleAudio"        : "../audios/page_72/READING.mp3",
    "subTitleTextLeft"      : '<span class="orange_text">2</span> Write.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p72write.mp3",
    "defaultAnswer"         : -1,
    "leftList"              : '',
    "image"                 :"",
    "questions": [{
            "textfront": "Who fixed the tap in the bathroom?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Dad fixed the tap in the bathroom"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "What does Greg watch on TV?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Greg watched cartoons on TV"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "What do you and your family do at home on rainy days?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Answers will vary"],
            "strictcase": "no", // yes (or) no
            "type": "text", // text (or) number
        },
    ]
}