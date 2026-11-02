var stereo_data = {
    "audio":"",
    "exist":false,
    "bgColor_rgb":"rgb(53, 130, 180)",
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
    "activityheading"       : "1 &nbsp; Circle the correct sentences.",
    "activityheading_audio" : "../audios/under.mp3",
    "activitysubheading"    : "",
    // "activityicon"          : "../images/icons/hand_icon.png",    
    "main_activityheading":"../images/pages/grammer_main_title.png",
    "main_activityheading_audio" : "../audios/under.mp3",
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "numbering"             : "alphabet",
    "numberstartfrom"       : "a", 
    "numberofcolumns"       :  1,
    "image"                 : "no",
    "imageposition"         :"back",
    "questions"             : [
        {
            "question"              : "<span style='color:#00b9f2;'>Sue: </span>[_] ",
            "options"               : [["What’s her name?"," Who’s her name?"]],          
            "answer"                : [1],
			"inputbox"				:"yes",
			"image"					: '../images/pages/activities/AGW_1_SB_U3_P28_A4_I1.png',
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "correct", // correct (or) default 
            
        },
        {
            "question"              : "<span style='color:#00b9f2;'>Amy: </span>[_] ",
            "options"               : [["Her name is Li.","His friend is Li."]],          
            "answer"                : [1],
			"inputbox"				:"yes",
			"image"					: '../images/pages/activities/AGW_1_SB_U3_P28_A4_I1.png',
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "correct", // correct (or) default 
            
        },
        {
            "question"              : "<span style='color:#00b9f2;'>Sue: </span>[_] ",
            "options"               : [["Who did she move here?","When did she move here?."]],          
            "answer"                : [1],
			"inputbox"				:"yes",
			"image"					: '../images/pages/activities/AGW_1_SB_U3_P28_A4_I1.png',
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "correct", // correct (or) default 
            
        },
        {
            "question"              : "<span style='color:#00b9f2;'>Amy: </span> She moved here on Saturday.[_] ",
            "options"               : [["Why do you ask so many questions?","What do you ask so many questions?"]],          
            "answer"                : [1],
			"inputbox"				:"yes",
			"image"					: '../images/pages/activities/AGW_1_SB_U3_P28_A4_I1.png',
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "correct", // correct (or) default 
            
        },
        {
            "question"              : "<span style='color:#00b9f2;'>Sue: </span> Because she looks nice.[_] ",
            "options"               : [["Let’s go say hello!","Let’s go say goodbye."]],          
            "answer"                : [1],
			"inputbox"				:"yes",
			"image"					: '../images/pages/activities/AGW_1_SB_U3_P28_A4_I1.png',
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "correct", // correct (or) default 
            
        },			
    ]
}