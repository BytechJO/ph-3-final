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
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleAudio"        : "../audios/page_65/PHONICS.mp3",
    "mainTitleIconPos"      : {"right": "20px"},
    "subTitleTextLeft"      : '<span class="orange_text">3</span> Write the ‘<span class="orange_text">ou</span>’ words in the blanks to complete the sentences.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p65write.mp3",
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
          "text": "The mouse was nowhere to be [_]",
          "textaudios": ["../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["found"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "The lady chased the [_]",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["mouse"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no     
          "strictorder": "yes", // yes (or) no             
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "She cried and screamed and then gave a [_]",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["shout"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "The[_]ran[_]and far from the door.",
          "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["mouse","out"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },   
        
      ],
      "main_title_text":["S","e","n","t","e","n","c","e","&nbsp;","B","u","i","l","d","i","n","g"],
      "items":[
        "<img src='../images/pages/sb-icons/phonics_main_title_icon.png' class='readHighlightsBtn imgToggle' data-img='showImg1'>",
        "<img src='../images/pages/page-3/Sen-2-img.png' class='text_img showImg1'>",
       
        "It’s <span class='orange_text'>very</span> cold outside.<br>"+
        "It’s <span class='orange_text'>too</span> cold outside. I might get sick.<br>"+
        "She was <span class='orange_text'>very</span> late.<br>"+
        "She was <span class='orange_text'>too</span> late to take the test.",

        "<img src='../images/pages/page-3/Sen-3-img.png' class='text_img showImg2'>",
        "<img src='../images/pages/sb-icons/phonics_main_title_icon.png' class='readHighlightsBtn imgToggle' data-img='showImg2'>",
      ],

    }