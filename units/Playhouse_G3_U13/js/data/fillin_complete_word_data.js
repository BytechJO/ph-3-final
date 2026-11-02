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
  "mainTitle"             : "../images/icons/phonics_main_title.png",
  "mainTitleIcon"         : "../images/pages/sb-icons/phonics_main_title_icon.png",
  "mainTitleIconPos"      : {"right": "-18px"},
  "mainTitleAudio"        : "../audios/page_121/PHONICS.mp3",
  "subTitleTextLeft"      : "<span class='orange_text'>3</span> Write the missing letters on the lines.",
  "subTitleTextRight"     : "",
  "subTitleIcons"         : ["../images/pages/sb-icons/gram_2_icon.png"],
  "subTitleAudio"         : "../audios/new/p121write.mp3",
  "image"                 : "",
  "imageposition"         : "back",// "front" (or) "back"
  "numbering"             : "alphabet", // "alphabet" (or) "number"
  "numberstartfrom"       : "a",
  "options": [],
  "optionsAudios":[],
  "questions":
    [
      {
        "singleword": false,
        "text": "st[_][_]s",
        "textFront":"",
        "textaudios": ["../audios/under.mp3"],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/3-img-1.png",
        "answer": ["a","r"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no  
        "strictorder": "yes", // yes (or) no              
        "maxlength":1 ,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "guit[_][_]",
        "textFront":"",
        "textaudios": ["../audios/under.mp3"],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/3-img-2.png",
        "answer": ["a","r"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no     
        "strictorder": "yes", // yes (or) no             
        "maxlength": 1,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "p[_][_]k",
        "textFront":"",
        "textaudios": [""],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/3-img-3.png",
        "answer": ["a","r"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 1,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "c[_][_]",
        "textFront":"",
        "textaudios": [""],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/3-img-4.png",
        "answer": ["a","r"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 1,
        "type": "text", // text (or) number
      },
    
    ],
    "main_title_text":["S","e","n","t","e","n","c","e","&nbsp;","B","u","i","l","d","i","n","g"],
    "items":
        [
          "<img src='../images/pages/sb-icons/phonics_main_title_icon.png' class='readHighlightsBtn imgToggle' data-img='showImg1'>",
          "<img src='../images/pages/page-3/Sen-2-img.png' class='text_img showImg1'>",
         
          "<span class='text'>"+
          "<span class='orange_text'>Is</span> she going to wear this dress? <br>"+
          "<span class='orange_text'>Am</span> I going to get better tomorrow? <br>"+
          "<span class='orange_text'>Are</span> you going to play a game tonight? <br>"+
          "<span class='orange_text'>Is</span> Gary going to come to your house this evening?"+
          "</span>",
          // "<img src='../images/pages/page-3/Sen-0-img.png' class='text_img showImg0'>",

          // "<img src='../images/pages/page-3/Sen-3-img.png' class='text_img showImg2'>",
          // "<img src='../images/pages/sb-icons/phonics_main_title_icon.png' class='readHighlightsBtn imgToggle' data-img='showImg2'>",
        
        ],
  }