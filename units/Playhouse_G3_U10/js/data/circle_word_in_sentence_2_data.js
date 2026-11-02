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
    "mainTitle": "../images/icons/phonics_main_title.png",
    "mainTitleIcon": "../images/pages/sb-icons/phonics_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/page_93/PHONICS.mp3",
    "subTitleTextLeft"      : "<span class='orange_text'>4</span> Read and choose.",
    "subTitleTextRight"     : "Circle the correct word. Then write the word in the blanks.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p93read.mp3",
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "numbering"             : "number",
    "numberstartfrom"       : 1, 
    "numberofcolumns"       :  1,
    "image"                 : "no",
    "imageposition"         :"back",
    "questions"             : [
        {
            "question"              : "I walk on my front([_]) next to the house. ",
            "options"               : [["claw","lawn"]],          
            "answer"                : [2],
            "inputbox"				      :"yes",
            "image"					        : '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
        },
        {
            "question"              : "I feel sick and ([_]) today. ",
            "options"               : [["caw","awful"]],
            "answer"                : [2],
            "inputbox"				      : "yes",
            "image"					        : '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
        },
        {
          "question"              : "I watched the ([_]) fly over the field. ",
          "options"               : [["hawk","dawn"]],
          "answer"                : [1],
          "inputbox"				      : "yes",
          "image"					        : '',
          "audio"                 : "",
          "audioenable"           : "correct", // correct (or) default 
      },
      {
          "question"              : "It is still dark at ([_]). ",
          "options"               : [["crawl","dawn"]],
          "answer"                : [2],
          "inputbox"				      : "yes",
          "image"					        : '',
          "audio"                 : "",
          "audioenable"           : "correct", // correct (or) default 
      },
      {
          "question"              : "The baby ([_]) next to her mother. ",
          "options"               : [["saw","crawls"]],
          "answer"                : [2],
          "inputbox"				      : "yes",
          "image"					        : '',
          "audio"                 : "",
          "audioenable"           : "correct", // correct (or) default 
    },
    ]
}