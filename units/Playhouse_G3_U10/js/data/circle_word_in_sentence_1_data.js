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
    "mainTitle": "../images/icons/reading.png",
    "mainTitleIcon": "../images/pages/sb-icons/adv_icon_1.png",
    "mainTitleIconPos"      : {"right": "80px"},
    "mainTitleAudio"        : "../audios/page_92/READING.mp3",
    "subTitleTextLeft"      : "<span class='orange_text'>3</span> Read and choose.",
    "subTitleTextRight"     : "Circle the correct word to complete each sentence. Then write the word on the line.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p92read.mp3",
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
            "question"              : "In the Ice Age, the climate got([_])",
            "options"               : [["colder","hotter"]],          
            "answer"                : [1],
			"inputbox"				:"yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
        },
        {
            "question"              : "After the Ice Age, the climate got  ([_])",
            "options"               : [["colder","hotter"]],
            "answer"                : [2],
			"inputbox"				: "yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
        },
    ]
}