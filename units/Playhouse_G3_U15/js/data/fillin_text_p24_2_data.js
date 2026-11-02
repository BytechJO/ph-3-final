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
    "layout"               : 1,
    "numinrow"              : [[1], [1], [1], [1], [1]],
    "mainTitle"             : "../images/icons/phonics_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/phonics_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/page_137/PHONICS.mp3",
    "subTitleTextLeft"      : '<span class="orange_text">1</span>  Write. <span class="orange_text">Fill in the blanks by writing the correct abbreviation of each word.</span> ',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p137write.mp3",
    "image"                 : "",
    "imageposition"         : "back",// "front" (or) "back"
    "defaultAnswer"         : 1,
    "numbering"             : "number", // "alphabet" (or) "number"
    "numberstartfrom"       : 1,
    "options"               : [],
    "questions"             :
     [
        {
          "singleword": false,
          "text": "I need to find Apple[_].",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "options_words":["Lane"],
          "options_words_audios":["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
          "left":"443px",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["Ln"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "You will find Park[_]after the traffic light.",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "options_words":["Street"],
          "options_words_audios":["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
          "left":"443px",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["St"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no     
          "strictorder": "yes", // yes (or) no             
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "Can you please show me how to get to 12 Maple [_]?",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "options_words":["Drive"],
          "options_words_audios":["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
          "left":"720px",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["Dr"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "Go to the end of the street and you’ll find Liberty  [_]",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "options_words":["Road"],
          "options_words_audios":["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
          "left":"665px",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["Rd"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },     
      ]
    }