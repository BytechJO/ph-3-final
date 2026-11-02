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
    "mainTitleIconPos"      : {"right": "-20px"},
    "mainTitleAudio"        : "../audios/page_81/PHONICS.mp3",
    "subTitleTextLeft"      : "<span class='orange_text'>1</span> Write the correct conjunction (<span class='orange_text'>and</span>, <span class='orange_text'>but</span>, <span class='orange_text'>or</span>)",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p81write.mp3",
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
            "question"              : "We have a new dining room table,[_] we eat dinner",
            "textEnd"               :" on it every day.",
            "options"               : [["and","but","or"]],          
            "answer"                : [1],
			"inputbox"				:"yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
        },
        {
            "question"              : "We have a food processor, [_] I am not allowed ",
            "textEnd"               :"to use it without my mum.",
            "options"               : [["and","but","or"]],
            "answer"                : [2],
			"inputbox"				: "yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
        },
        {
            "question"              : "My mum can make spaghetti, [_] she can make ",
            "textEnd"               :"Chinese food. Which one do you want?",
            "options"               : [["and","but","or"]],          
            "answer"                : [3],
			"inputbox"				:"yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default
        },
      
    ]
}