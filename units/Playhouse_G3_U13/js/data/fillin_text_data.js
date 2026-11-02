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
    "mainTitle"             : "../images/icons/gram_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/page_118/GRAMMAR.mp3",
    "subTitleTextLeft"      : '<span class="orange_text">2</span> Read and complete.',
    "subTitleTextRight"     : "Read the sentences and fill in the blanks using am/is/are + going to.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p118read.mp3",
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
          "text": "I [_] wear sunglasses on Monday.",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "options_words":[],
          "options_words_audios":["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
          "audioenable": "default", // correct (or) default
          "image": "../images/pages/activities/1-img-1.png",
          "image_postion":"back",
          "answer": ["am going to"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "They [_] drink milk with their breakfast.",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "options_words":[],
          "options_words_audios":["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
          "audioenable": "default", // correct (or) default
          "image": "../images/pages/activities/1-img-2.png",
          "image_postion":"back",
          "answer": ["are going to"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no     
          "strictorder": "yes", // yes (or) no             
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "If it rains, he [_] bring an umbrella to school.",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "options_words":[],
          "options_words_audios":["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
          "audioenable": "default", // correct (or) default
          "image": "../images/pages/activities/1-img-3.png",
          "image_postion":"back",
          "answer": ["is going to"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
     
      
      ]
    }