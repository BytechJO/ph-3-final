
//textFront means content before text box, textBack means content after text box.--->Li:14,15
//27-06-2020

var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/page_9/PLAYHOUSE_3_WORKBOOK_UNIT_02_TRACK_02_02.mp3',
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
  "numinrow"              : [[1], [1], [1], [1], [1]],
  "mainTitle"             : "../images/pages/sb-icons/word_main_title.png",
  "mainTitleIcon"         : "../images/pages/sb-icons/word_main_title_icon.png",
  "mainTitleIconPos"      : {"right": "-18px"},
  "mainTitleAudio"        : "../audios/page_9/WORD_POWER.mp3",
  "subTitleTextLeft"      : '<span class="blue_text">2</span> Read the descriptions of things we have or do in celebrations. Label the pictures using the words in the word box.',
  "subTitleTextRight"     : "",
  "subTitleIcons"         : [],
  "subTitleAudio"         : "../audios/page_9/2_Label_Read_the_descriptions_of_things_we_have_or_do_in_celebrations_Label_the_pictures.mp3",
  "activityheading"       : "Look, read, and write.",
  "activityheading_audio" : "../audios/page_9/under.mp3",
  "activitysubheading"    : "",
  "activityicon"          : "../images/icons/key_icon.png",
  "main_activityheading"  :"../images/pages/activities/WORD_POWER.jpg",
  "main_activityheading_audio" : "../audios/page_9/under.mp3",
  "image"                 : "../images/pages/activities/ASP_3_SB_U14_P84_I1.png",
  "imageposition"         : "back",// "front" (or) "back"
  "numbering"             : "alphabet", // "alphabet" (or) "number"
  "numberstartfrom"       : "a",
  "options"      : ["cake","pinata","party","sing","gift"],
  "optionsAudios":["../audios/page_9/under.mp3","../audios/page_9/under.mp3","../audios/page_9/under.mp3","../audios/page_9/under.mp3","../audios/page_9/under.mp3"],
  "defaultAnswer": [],
  "questions": [
    {
      "textfront": "We give this to someone.",
      "textback": "",
      "audio": "../audios/page_9/under.mp3",
      "audioenable": "default", // correct (or) default
      "image": "../images/pages/activities/p9_2_1.png",
      "order":"1",
      "answer": ["gift"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 300,
      "type": "text", // text (or) number
    },
    {
      "textfront": "We eat this at celebrations.",
      "textback": "",
      "audio": "../audios/page_9/under.mp3",
      "audioenable": "default", // correct (or) default
      "image": "../images/pages/activities/p9_2_2.png",
      "order":"2",
      "answer": ["cake"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 300,
      "type": "text", // text (or) number
    },
    {
      "textfront": "We hit it without seeing it. It has sweets inside.",
      "textback": "",
      "audio": "../audios/page_9/under.mp3",
      "audioenable": "default", // correct (or) default
      "image": "../images/pages/activities/p9_2_3.png",
      "order":"3",
      "answer": ["pinata"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 300,
      "type": "text", // text (or) number
    },
    {
      "textfront": "We do this at celebrations.",
      "textback": "",
      "audio": "../audios/page_9/under.mp3",
      "audioenable": "default", // correct (or) default
      "image": "../images/pages/activities/p9_2_4.png",
      "order":"4",
      "answer": ["sing"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 300,
      "type": "text", // text (or) number
    },
    {
      "textfront": "We invite people to it. It is fun.",
      "textback": "",
      "audio": "../audios/page_9/under.mp3",
      "audioenable": "default", // correct (or) default
      "image": "../images/pages/activities/p9_1_3.png",
      "order":"5",
      "answer": ["party"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 300,
      "type": "text", // text (or) number
    }
  ]
}