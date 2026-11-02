
var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(53, 130, 180)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/page_40/1.mp3',
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



var storycircleunderline_data = {
      "mainTitle"             : "../images/pages/sb-icons/grammer_main_title.png",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "80px"},
    "mainTitleAudio": "../audios/page_40/GRAMMAR.mp3",
    "subTitleTextLeft"  : "<span class='blue_text'>1</span> Read the story. Circle each adjective of amount and underline the noun it describes.",
    "subTitleAudio"     : "../audios/page_40/1_Read_the_story_Circle_each_adjective_of_amount_and_underline_the_noun_it_describes.mp3",
    "storyImage"        : "../images/pages/activities/1_bedroom.png",

    "storyText" : "Today, my parents gave me my own room. I am so happy! My room is big. I have a couple of lamps in my room, one on each table. I have a few pillows on my bed and a couple of dolls on my bed, too. I have many books on the bookshelf and a lot of colouring books, too. I like to colour. That's why I have many different crayons to colour with. A couple of my friends are coming over after school to see my new room. I am so excited! They will stay for several hours and then go home. Do you have your own room? What's it like?",

    /*
       Each entry = ONE adjective-of-amount phrase (to circle) + the noun it
       describes (to underline). The build file finds them IN ORDER inside
       "storyText" automatically (so "many" or "a couple of" appearing more
       than once each get matched to the correct occurrence, one at a time).
       Any words in between (like "my" or "different") are simply left
       untouched - no interaction expected on them.
    */
    "pairs" : [
        { "adjective": "a couple of", "noun": "lamps" },
        { "adjective": "a few",       "noun": "pillows" },
        { "adjective": "a couple of", "noun": "dolls" },
        { "adjective": "many",        "noun": "books" },
        { "adjective": "a lot of",    "noun": "colouring books" },
        { "adjective": "many",        "noun": "crayons" },
        { "adjective": "a couple of", "noun": "friends" },
        { "adjective": "several",     "noun": "hours" }
    ]
}