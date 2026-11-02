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
var mcq_tick_data = {    
    "layout"                : 1,
    "numinrow"              : [[1]],
    "mainTitle"             : "../images/icons/adv_main_title.png",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "90px"},
    "mainTitleAudio"        : "../audios/page_75/Playhouse_Adventures!.mp3",
    "subTitleTextLeft"      : "<span class='orange_text'>2</span> Tick.",
    "subTitleTextRight"     : "<span class='orange_text'> What does Lilly’s sister have in her room?</span>",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p75tick.mp3",
    "select"                : "multiple", // single (or) multiple
    "shape"                 : "tickbox", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) tickbox
    "rightImage"            : "../images/pages/activities/adv_2_right-background.png",
    "rightText"             : ["<span class='right_title'>Find in the story:</span>","<span class='red_text'>✓</span> Me, too.","<span class='red_text'>✓</span> Yes, it is.","<span class='red_text'>✓</span> Let’s go now."],
    "rightTextAudio"        : ["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],   
    "bgcolor"               : "none",
    "showicon"              : "true",
    "ontextaudioplay"       : '',
    "onimgaudioplay"        : '',
    "numbering"             : "alphabet", // "alphabet" (or) "number"
    "numberstartfrom"       : "a",
    "questions"             : [
        {
            "question"              : "",
            "answer"                : [1,3,4],
            "audio"                 : "no",
            "audioenable"           : "default", // correct (or) default
			"numbering"				: "none", // alphabet (or) number (or) none
			"numberstartfrom"		: "a",
            "options"               : [
                {
                    "text"           : "wardrobe",
                    "image"         : "../images/pages/activities/7-img-1.png",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "sofa",
                    "image"         : "../images/pages/activities/7-img-2.png",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "toy box",
                    "image"         : "../images/pages/activities/7-img-3.png",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },  
                {
                    "text"          : "rug",
                    "image"         : "../images/pages/activities/7-img-4.png",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },                             
            ]
        },
      
    ]
}