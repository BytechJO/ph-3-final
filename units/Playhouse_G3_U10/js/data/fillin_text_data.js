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
    "mainTitleAudio"        : "../audios/page_90/GRAMMAR.mp3",
    "mainTitleIconPos"      : {"right": "-18px"},
    "subTitleTextLeft"      : '<span class="orange_text">2</span> Read and complete.',
    "subTitleTextRight"     : "Write the correct form of the adjective in each sentence.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p90read.mp3",
    "image"                 : "",
    "imageposition"         : "back",// "front" (or) "back"
    "defaultAnswer"         : 1,
    "numbering"             : "none", // "alphabet" (or) "number"
    "numberstartfrom"       : 1,
    "options"               : [],
    "questions"             :
     [
        {
          "singleword": false,
          "text": "My brother is[_]than me. <span class='orange_text'>(big)</span>",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["bigger"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "Your hair is[_]than my hair.  <span class='orange_text'>(curly)</span>",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["curlier"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no     
          "strictorder": "yes", // yes (or) no             
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "I am two centimetres [_] than you. <span class='orange_text'>(short)</span>",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["shorter"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "Helen’s backpack is[_] than her purse. <span class='orange_text'>(heavy)</span>",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["heavier"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },   
        {
          "singleword": false,
          "text": "The book is[_] than the computer. <span class='orange_text'>(light)</span>",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["lighter"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
                 
      ]
    }