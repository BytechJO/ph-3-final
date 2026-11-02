var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(242, 101, 33)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/page_119/1.mp3',
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
    "mainTitle"             : "../images/icons/gramprac_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleAudio"        : "../audios/page_119/GRAMMAR_PRACTICE.mp3",
    "mainTitleIconPos"      : {"right": "80px"},
    "subTitleTextLeft"      : '<span class="orange_text">1</span> Listen and complete. <span class="orange_text">Listen to the sentences. Circle the correct picture. Then write what </span> he is/she is/they are <span class="orange_text">going to do. </span>',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/page_119/1_Listen_and_complete_Listen_to_the_sentences_Circle_the_correct_picture_Then_write.mp3",
    "imageposition"         : "back",// "front" (or) "back"
    "defaultAnswer"         : -1,
    "numbering"             : "number", // "alphabet" (or) "number"
    "numberstartfrom"       : 1,
    "options"               : [],
    "optionsAudios"         : [],
    "questions"             :
     [
        {
          "singleword": false,
          "text": "[_]is going to[_]",
          "textaudios": ["../audios/page_119/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "title":"",
          "images": ["../images/pages/activities/img1_01.jpg","../images/pages/activities/img1_02.jpg"],
          "images_name": [],
          // NEW: index (0-based) of the correct picture in "images" above
          "correctImageIndex": 0,
          "answer": ["The teacher","read a story"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "[_]",
          "textaudios": ["../audios/page_119/under.mp3","../audios/page_119/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "title":"",
          "images": ["../images/pages/activities/img1_03.jpg","../images/pages/activities/img1_04.png"],
          "images_name": [],
          "correctImageIndex": 1,
          "answer": ["Marci and Jeff are going to go on holiday"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no     
          "strictorder": "yes", // yes (or) no             
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "[_]",
          "textaudios": ["../audios/page_119/under.mp3","../audios/page_119/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "title":"",
          "images": ["../images/pages/activities/img1_05.jpg", "../images/pages/activities/img1_06.jpg"],
          "images_name": [],
          "correctImageIndex": 0,
          "answer": ["Wes is going to play basketball"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
      ]
    }