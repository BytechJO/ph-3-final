var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(53, 130, 180)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/page_60/2.mp3',
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
    "mainTitle"             : "../images/pages/sb-icons/grammer_main_title.png",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/page_60/GRAMMAR.mp3",
    "subTitleTextLeft"      : '<span class="blue_text">2</span>  Look at the picture and compare using <span class="black_text">as</span> + <span class="black_text">adjective</span> + <span class="black_text">as</span>.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/page_60/2_Look_at_the_picture_and_compare_using_‘as_+_adjective_+_as’.mp3",
    "defaultAnswer"         : 1,
    "leftList"              : '',
    "image"                 :"",
    "questions": [
        {
            "textfront": "squid and dolphin:",
            "audio": "../audios/page_60/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["A squid is as expensive as a dolphin"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "squid and seahorse:",
            "audio": "../audios/page_60/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["A squid is not as cheap as a seahorse"],
             "alternateanswer": [["A squid is as expensive as a seahorse"]],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "shrimp and clam:",
            "audio": "../audios/page_60/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["A shrimp is not as cheap as a clam"],
             "alternateanswer": [["A shrimp is as expensive as a clam"]],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
       
    ]
}