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
    "mainTitle"             : "../images/icons/gramprac_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "70px"},
    "mainTitleAudio"        : "../audios/new/GRAMMAR_PRACTICE.mp3",
    "subTitleTextLeft"      : '<span class="orange_text">1</span> Look and write.',
    "subTitleTextRight"     : "Look at the picture. Answer the following questions. Use imperatives for directions.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p135look.mp3",
    "defaultAnswer"         : 1,
    "leftList"              : '',
    "image"                 : "../images/pages/activities/2-img-1.png",
    "imagePosition"         : "front",
    "questions": [{
            "textfront": "‘Excuse me. What is the best way to get to the petrol station?’ ",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["&nbsp; Go down Oak Avenue. Turn left on Grove Street. Then walk along Grove Street and cross Maple Avenue. The petrol station will be on the right."],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "‘Hello. How can I get to the library?’",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": [""],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "‘Would you please tell me how to get to the playground?’",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": [""],
            "strictcase": "no", // yes (or) no
            "type": "text", // text (or) number
        },
        {
          "textfront": "‘Excuse me. What’s the shortest way to get to the school?’",
          "audio": "../audios/under.mp3",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": [""],
          "strictcase": "no", // yes (or) no
          "type": "text", // text (or) number
      },
    ]
}