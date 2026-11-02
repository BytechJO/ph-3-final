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
var linedraw_data = {    
    "layout"                : 1,
    "mainTitle"             : "../images/icons/conv_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "80px"},
    "mainTitleAudio"        : "../audios/page_41/CONVERSATION.mp3",
    "subTitleTextLeft"      : "<span class='orange_text'>2</span> Match.",
    "subTitleTextRight"     : "Connect the question to its answer.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p41match.mp3",
    "image"                 : "",
    "connect"               : "multiple", // single (or) multiple
    "linecolor"             : "",
    "path"                  : "line",
    "strokewidth"           : "4",
    "nodecolor"             : "#f26521",
    "nodeselectioncolor"    : '#f26521',
    "questions"             : {
        "drags"             : [
            {
                "text"          : "<b>1</b> What is Mum making?",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
            
                "text"          : "<b>2</b> Does Mum have any milk?",
				"image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
               
            },
            {
            
                "text"          : "<b>3</b> Does Mum have any butter?",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
            
                "text"          : "<b>4</b> What is Rose borrowing from Mrs Dell?",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            }
        ],
        "drops"                 : [
            {
                "text"          : "<b>A</b>  No, she doesn’t have any.",
                "image"         : "no",
                "answer"        : [2],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "<b>B</b> She’s borrowing some milk.",
                "image"         : "no",
                "answer"        : [4],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "<b>C</b>  Mum is making a cake.",
                "image"         : "no",
                "answer"        : [1],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "<b>D</b> Yes, she has some.",
                "image"         : "no",
                "answer"        : [3],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
        ]
    }
}               