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
    "mainTitle"             : "../images/icons/gramprac_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "60px"},
    "mainTitleAudio"        : "../audios/page_79/GRAMMAR_PRACTICE.mp3",
    "subTitleTextLeft"      : "<span class='orange_text'>2</span> Read and circle.",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",
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
            "question"              : "[_] several pots right here on the table.",
            "options"               : [["There is ","There are"],["tickets ","players"]],          
            "answer"                : [2],
			"inputbox"				:"yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
        },
        {
            "question"              : "These are not your oven gloves. Your oven gloves are [_].",
            "options"               : [["right here","over there"]],
            "answer"                : [2],
			"inputbox"				: "yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
        },
        {
            "question"              : "The cutting board is [_] next to me.",
            "options"               : [["right here","over there"]],          
            "answer"                : [1],
			"inputbox"				:"yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default
        },
        {
            "question"              : "Look over there. [_] my backpack. I thought I had lost it!",
            "options"               : [["There is","There are"]],          
            "answer"                : [1],
			"inputbox"				:"yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default
        },
    ]
}