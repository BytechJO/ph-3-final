var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(53, 130, 180)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/page_20/1.mp3',
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

var countablenouns_data = {
      "mainTitle"             : "../images/pages/sb-icons/grammer_main_title.png",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "80px"},
    "mainTitleAudio": "../audios/page_20/GRAMMAR.mp3",
    
    "subTitleTextLeft"  : '<span class="blue_text">1</span> Underline the uncountable nouns and circle the countable nouns.',
    "subTitleAudio"     : "../audios/page_20/1_Underline_the_uncountable_nouns_and_circle_the_countable_nouns.mp3",

    /*
       Each sentence is split into words.
       "circle"    : word is a countable noun -> needs a circle
       "underline" : word is an uncountable noun -> needs an underline
       "none"      : no interaction expected for this word
       A multi-word uncountable/countable phrase (e.g. "ice cream") is marked
       by giving BOTH words the same type - the student must mark both parts.
    */
    "questions": [
        {
            "words": [
                { "text": "Lisa",    "type": "none" },
                { "text": "ate",     "type": "none" },
                { "text": "cereal",  "type": "underline" },
                { "text": "and",     "type": "none" },
                { "text": "an",      "type": "none" },
                { "text": "apple",   "type": "circle" },
                { "text": "today.",  "type": "none" }
            ]
        },
        {
            "words": [
                { "text": "Barb",     "type": "none" },
                { "text": "gave",     "type": "none" },
                { "text": "Lisa",     "type": "none" },
                { "text": "ice",      "type": "underline" },
                { "text": "cream",    "type": "underline" },
                { "text": "and",      "type": "none" },
                { "text": "balloons.","type": "circle" }
            ]
        },
        {
            "words": [
                { "text": "We",          "type": "none" },
                { "text": "have",        "type": "none" },
                { "text": "rice,",       "type": "underline" },
                { "text": "but",         "type": "none" },
                { "text": "we",          "type": "none" },
                { "text": "need",        "type": "none" },
                { "text": "mayonnaise.", "type": "underline" }
            ]
        },
        {
            "words": [
                { "text": "Becky",   "type": "none" },
                { "text": "likes",   "type": "none" },
                { "text": "juice",   "type": "underline" },
                { "text": "and",     "type": "none" },
                { "text": "bananas.","type": "circle" }
            ]
        },
        {
            "words": [
                { "text": "Dad",       "type": "none" },
                { "text": "eats",      "type": "none" },
                { "text": "potatoes",  "type": "circle" },
                { "text": "and",       "type": "none" },
                { "text": "eggs",      "type": "circle" },
                { "text": "every",     "type": "none" },
                { "text": "day.",      "type": "none" }
            ]
        }
    ]
}