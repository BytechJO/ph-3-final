var howmuchmany_data = {
  "mainTitle"             : "../images/icons/phonics_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "-26px"},
    "mainTitleAudio"        : "../audios/page_45/PHONICS.mp3",
    "subTitleTextLeft"  : "<span class='orange_text'>1</span> <b>Write.</b> <span class='orange_text'>Complete the sentences with <b style='color:black'>how much</b> or <b style='color:black'>how many</b>. Then circle the pictures that are countable nouns and put an ' <b style='color:red'>X</b> ' over the pictures that are uncountable nouns.</span>",
    "subTitleAudio"     : "../audios/new/p45write.mp3",
    "strictcase"        : "no",
    "maxlength"         : 30,

    "sentences": [
        { "text": "We need eggs to make this cake. [_] do we need?", "answer": "How many" },
        { "text": "We need milk to make this cake. [_] do we need?",  "answer": "How much" },
        { "text": "We need oil to make this cake. [_] do we need?",   "answer": "How much" }
    ],

    /*
       "type": "countable"   -> student must CIRCLE the picture
       "type": "uncountable" -> student must put an 'X' over the picture
       Double-check every entry against the real thumbnails before publishing -
       these are best-guess placeholders based on the small preview image.
    */
    "images": [
        { "img": "../images/pages/activities/img-1.jpg",  "type": "uncountable" },
        { "img": "../images/pages/activities/img-2.png",  "type": "uncountable" },
        { "img": "../images/pages/activities/img-3.png",  "type": "countable"   },
        { "img": "../images/pages/activities/img-4.png",  "type": "countable"   },
        { "img": "../images/pages/activities/img-5.jpg",  "type": "uncountable" },
        { "img": "../images/pages/activities/img-6.png",  "type": "uncountable" },
        { "img": "../images/pages/activities/img-7.jpg",  "type": "countable"   },
        { "img": "../images/pages/activities/img-8.jpg",  "type": "uncountable" },
        { "img": "../images/pages/activities/img-9.jpg",  "type": "countable"   },
        { "img": "../images/pages/activities/img-10.jpg", "type": "countable"   },
        { "img": "../images/pages/activities/img-11.jpg", "type": "countable"   },
        { "img": "../images/pages/activities/img-12.png", "type": "uncountable" },
        { "img": "../images/pages/activities/img-13.jpg", "type": "uncountable" },
        { "img": "../images/pages/activities/img-14.png", "type": "uncountable" },
        { "img": "../images/pages/activities/img-15.jpg", "type": "countable"   },
        { "img": "../images/pages/activities/img-16.jpg", "type": "countable"   }
    ]
}