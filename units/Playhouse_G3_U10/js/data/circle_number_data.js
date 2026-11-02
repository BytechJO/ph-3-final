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
    "mainTitle"             : "../images/icons/phonics_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/phonics_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/page_93/PHONICS.mp3",
    "subTitleTextLeft"      : "<span class='orange_text'>1</span> Choose.",
    "subTitleTextRight"     : "Circle the number of syllables for each word",
    "subTitleIcons"         : ["../images/pages/sb-icons/gram_2_icon.png"],
    "subTitleAudio"         : "../audios/new/p93choose.mp3", 
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
            "question"              : "<b>1</b> &nbsp;  dinosaur",
            "options"               : ["1","2","3"],
            "answer"                : [3],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default 
            
        },
        {
            "question"              : "<b>4</b> &nbsp;  tail",
            "options"               : ["1","2","3"],
            "answer"                : [1],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default
            
        },
        {
            "question"              : "<b>2</b> &nbsp; awful",
            "options"               :  ["1","2","3"],
            "answer"                : [2],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default
            
        },
        {
            "question"              : "<b>5</b> &nbsp; outside",
            "options"               :  ["1","2","3"],
            "answer"                : [2],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default  
        },
        {
            "question"              : "<b>3</b> &nbsp; important",
            "options"               :  ["1","2","3"],
            "answer"                : [3],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default  
        },
        {
            "question"              : "<b>6</b> &nbsp; fur",
            "options"               :  ["1","2","3"],
            "answer"                : [1],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default  
        }
    ]
}