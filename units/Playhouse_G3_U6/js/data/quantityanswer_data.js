var quantityanswer_data = {
    "mainTitle": "../images/icons/adv_main_title.png",
    "mainTitleIcon": "",
    "mainTitleIconPos": {"right": "100px"},
    "mainTitleAudio": "../audios/page_55/Playhouse_Adventures!.mp3",
    "subTitleTextLeft"  : "<span class='orange_text'>2</span> <b>Answer the following questions.</b>",
    "subTitleAudio"     : "../audios/new/p55answer.mp3",
    "strictcase"        : "no",
    "maxlength"         : 25,
     "rightImage"            : "../images/pages/activities/adv_2_right-background.png",
    "rightText"             : ["<span class='right_title'>Find in the story:</span>","<span class='red_text'>✓</span>Yes, please.","<span class='red_text'>✓</span>OK, Madam.","<span class='red_text'>✓</span>Just give me a minute"],
    "rightTextAudio"        : ["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],   
    // "select"                : "single", // single (or) multiple
    "questions": [
        {
            "prompt": "How many of these items does Ms. Lopez buy?",
            "promptAudio": "../audios/under.mp3",
            "items": [
                { "img": "../images/pages/activities/8.png", "answer": "two bars", "isExample": true  },
                { "img": "../images/pages/activities/9.png", "answer": "bag",     "isExample": false },
                { "img": "../images/pages/activities/12.png", "answer": "400 grams",   "isExample": false },
                { "img": "../images/pages/activities/13.jpg", "answer": "one liter",  "isExample": false }
            ]
        },
        {
            "prompt": "How many of each item did Max buy?",
            "promptAudio": "../audios/under.mp3",
            "items": [
                { "img": "../images/pages/activities/14.png", "answer": "800 grams",  "isExample": false },
                { "img": "../images/pages/activities/0.jpg", "answer": "two bottle", "isExample": false },
                { "img": "../images/pages/activities/15.jpg", "answer": "one tube",   "isExample": false }
            ]
        }
    ]
}