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
var mcq_data = {    
    "layout"                : 1,
    "numinrow"              : [[1]],
    "mainTitle"             : "../images/icons/reading.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/adv_icon_1.png",
    "mainTitleIconPos"      : {"right": "90px"},
    "mainTitleAudio"        : "../audios/page_92/READING.mp3",
    "subTitleTextLeft"      : "<span class='orange_text'>2</span> Circle <span class='orange_text'>T</span> for <span class='red_text'>true</span> and <span class='orange_text'>F</span> for <span class='red_text'>false</span>.",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : ["../images/pages/sb-icons/gram_2_icon.png"],
    "subTitleAudio"         : "../audios/new/p92circle.mp3", 
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "rightImage"            : "",
    "rightText"             : [],
    "rightTextAudio"        : [],
    "numbering"             : "number",
    "numberstartfrom"       :  1, 
    "numberofcolumns"       :  1,
    "image"                 : "",
    "imageposition"         :"back",
    "questions"             : [
        {
            "question"              : "<b>1</b> &nbsp;  When the climate changes, some animals die out.",
            "options"               : ["T","F"],
            "answer"                : [1],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default 
            
        },
        {
            "question"              : "<b>2</b> &nbsp;  The woolly mammoth existed during the Ice Age.",
            "options"               : ["T","F"],
            "answer"                : [1],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default
            
        },
        {
            "question"              : "<b>3</b> &nbsp; The coelacanth does not exist anymore.",
            "options"               :  ["T","F"],
            "answer"                : [2],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default
            
        },
        {
            "question"              : "<b>4</b> &nbsp; Dinosaurs still exist now.",
            "options"               :  ["T","F"],
            "answer"                : [2],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default  
        },
        {
            "question"              : "<b>5</b> &nbsp; In 1938, a living coelacanth was found.",
            "options"               :  ["T","F"],
            "answer"                : [1],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default  
        },
        {
            "question"              : "<b>6</b> &nbsp; The coelacanth is sometimes called a ‘dinofish’.",
            "options"               :  ["T","F"],
            "answer"                : [1],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default  
        }
    ]
}