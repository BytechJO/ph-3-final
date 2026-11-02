
//textFront means content before text box, textBack means content after text box.--->Li:14,15
//27-06-2020

var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/page_9/1.mp3',
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
  "subTitleTextLeft"      : '<span class="blue_text">1</span> What’s the celebration? Read the descriptions of celebrations around the world. Label the pictures using the words in the box.',
  "subTitleTextRight"     : "",
  "subTitleIcons"         : [],
  "subTitleAudio"         : "../audios/page_9/1_What’s_the_celebration_Read_the_descriptions_of_celebrations_around_the_world_Label.mp3",
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
  "options"      : ["New Year’s","Mother’s Day","birthday"],
  "optionsAudios":[""],
  "defaultAnswer": [],
  "questions": [
    {
      "textfront": "Many countries celebrate this day in March. On this day, we do nice things for our mothers.",
      "textback": "",
      "audio": "",
      "audioenable": "default", // correct (or) default
      "image": "../images/pages/activities/p9_1_1.png",
      "order":"1",
      "answer": ["Mother's Day"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 300,
      "type": "text", // text (or) number
    },
    {
      "textfront": "People celebrate this day on the 1st of January.",
      "textback": "",
      "audio": "",
      "audioenable": "default", // correct (or) default
      "image": "../images/pages/activities/p9_1_2.png",
      "order":"2",
      "answer": ["New Year's"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 300,
      "type": "text", // text (or) number
    },
    {
      "textfront": "Everyone has this day each year. This day means that we are one year older.",
      "textback": "",
      "audio": "",
      "audioenable": "default", // correct (or) default
      "image": "../images/pages/activities/p9_1_3.png",
      "order":"3",
      "answer": ["birthday"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 300,
      "type": "text", // text (or) number
    }
  ]
}