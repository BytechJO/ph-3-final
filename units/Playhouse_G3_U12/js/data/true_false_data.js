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
    "mainTitle"             : "../images/icons/adv_main_title.png",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "90px"},
    "mainTitleAudio"        : "../audios/page_111/Playhouse_Adventures!.mp3",
    "subTitleTextLeft"      : "<span class='orange_text'>2</span> Answer the following questions. Circle <span class='red_text'>T</span> for <span class='orange_text'>true</span> and <span class='red_text'>F</span> for <span class='orange_text'>false</span>.",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : ["../images/pages/sb-icons/gram_2_icon.png"],
    "subTitleAudio"         : "../audios/new/p111answer.mp3", 
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "rightImage"            : "../images/pages/activities/adv_2_right-background.png",
    "rightText"             : ["<span class='right_title'>Find in the story:</span>","<span class='red_text'>✓</span> Let’s see what we can find.","<span class='red_text'>✓</span> I see jellyfish!","<span class='red_text'>✓</span> Both!"],
    "rightTextAudio"        : ["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
    "numbering"             : "number",
    "numberstartfrom"       :  1, 
    "numberofcolumns"       :  1,
    "image"                 : "",
    "imageposition"         :"back",
    "questions"             : [
        {
            "question"              : "<b>1</b> &nbsp;  The class went to the beach.",
            "options"               : ["T","F"],
            "answer"                : [1],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default 
            
        },
        {
            "question"              : "<b>2</b> &nbsp; Jenny found a bed of oysters.",
            "options"               : ["T","F"],
            "answer"                : [2],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default  
        },
        {
            "question"              : "<b>3</b> &nbsp; Max thinks that seagulls look pretty.",
            "options"               :  ["T","F"],
            "answer"                : [2],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default 
        },
        {
            "question"              : "<b>4</b> &nbsp; Lilly saw jellyfish.",
            "options"               :  ["T","F"],
            "answer"                : [1],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default  
        },
        {
          "question"                : "<b>5</b> &nbsp; Jenny loves jellyfish.",
          "options"                 :  ["T","F"],
          "answer"                  : [1],
          "audio"                   : "../audios/under.mp3",
          "audioenable"             : "default", // correct (or) default  
        },
        {
          "question"                : "<b>6</b> &nbsp; Max doesn’t like crab.",
          "options"                 :  ["T","F"],
          "answer"                  : [2],
          "audio"                   : "../audios/under.mp3",
          "audioenable"             : "default", // correct (or) default  
        }
    ]
}