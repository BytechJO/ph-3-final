var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/page_61/1.mp3',
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
    "mainTitle"             : "../images/pages/sb-icons/gramprac_main_title.png",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/page_61/GRAMMAR_PRACTICE.mp3",
    "subTitleTextLeft"      : '<span class="orange_text">1</span> &nbsp;',
    "subTitleTextRight"     : "Write sentences using <span class='black_text'>as</span> + <span class='black_text'>adjective</span> + <span class='black_text'>as</span>.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/page_61/1_Write_sentences_using_as_+_adjective_+_as.mp3",
    "imageposition"         : "back",// "front" (or) "back"
    "defaultAnswer"         : 1,
    "numbering"             : "number", // "alphabet" (or) "number"
    "numberstartfrom"       : 1,
    "options"               : [],
    "optionsAudios"         : [],
    "questions"             :
     [
        {
          "singleword": false,
          "text": "Jill feels sick. <br> Tina feels sick, too.[_]",
          "textaudios": ["../audios/page_61/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "title":"",
          "images": ["../images/pages/activities/3-img-5.png"],
          "images_name": [],
          "answer": ["Tina feels as sick as Jill"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "The caterpillar is small. <br> The shrimp is small, too. [_]",
          "textaudios": ["../audios/page_61/under.mp3","../audios/page_61/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "title":"",
          "images": ["../images/pages/activities/3-img-6.png","../images/pages/activities/3-img-7.png"],
          "images_name": [],
          "answer": ["The shrimp is as small as the caterpillar"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no     
          "strictorder": "yes", // yes (or) no             
          "maxlength": 200,
          "type": "", // text (or) number
        },
        
      ]
    }