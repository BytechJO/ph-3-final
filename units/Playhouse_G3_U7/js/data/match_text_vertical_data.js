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
    "mainTitle": "../images/icons/reading.png",
    "mainTitleIcon": "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos": {"right": "80px"},
    "mainTitleAudio"        : "../audios/page_64/READING.mp3",
    "subTitleTextLeft"      : "<span class='orange_text'>2</span> Match. ",
    "subTitleTextRight"     : "Read and choose the correct ending to the sentence.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/new/p64match.mp3",
    "image"                 : "",
    "connect"               : "single", // single (or) multiple
    "linecolor"             : "#6d6d6d",
    "path"                  : "line",
    "strokewidth"           : "4",
    "nodecolor"             : "#f26521",
    "nodeselectioncolor"    : '#6d6d6d', 
    "questions"             : {
        "drags"             : [
            {
            
                "text"          : "A castle is",
				"image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
               
            },
            {
            
                "text"          : "Castles are usually in",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
            
                "text"          : "There are gardens and",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
        ],
        "drops"                 : [
            {
                "text"          : "a tiny house.",
                "image"         : "no",
                "answer"        : [0],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "a huge house.",
                "image"         : "no",
                "answer"        : [1],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "the country.",
                "image"         : "no",
                "answer"        : [2],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "the city.",
                "image"         : "no",
                "answer"        : [0],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "elevators",
                "image"         : "no",
                "answer"        : [0],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "courtyards",
                "image"         : "no",
                "answer"        : [3],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
        ]
    }
}               