var _activity_json = {
  "image":"new_drag_drop.png",
  "mainTitle"             : "../images/pages/sb-icons/gramprac_main_title.png",
  "mainTitleIcon"         : "",
  "mainTitleIconPos"      : {"right": "-18px"},
  "mainTitleAudio"        : "../audios/page_21/GRAMMAR_PRACTICE.mp3",
  "subTitleTextLeft"      : '<span class="blue_text">1</span> Find the words. Then put them in the right columns.',
  "subTitleTextRight"     : "",
  "subTitleIcons"         : [],
  "subTitleAudio"         : "../audios/page_21/1_Find_the_words_Then_put_them_in_the_right_columns.mp3",

  "type"                  :"drag_drop_with_image",
  "numOfRow"              :5,
  "numOfCol"              :2,
  "questions":[  
    '<b> Countable Nouns </b>',
    "<b> Uncountable Nouns </b>",
    '<span>___</span>',
    '<span>___</span>',
    '<span>___</span>',
    '<span>___</span>',
    '<span>___</span>',
    '<span>___</span>',
    '<span>___</span>',
    '<span>___</span>',
    '<span>___</span>',
    '<span>___</span>',
    ],
  "options": ["milk", "apples", "pasta" , "rice", "eggs", "flour", "onions", "biscuits"],

  // NEW: answers grouped by COLUMN instead of exact blank position.
  // columnAnswers[0] = anything correct anywhere in column 0 (Countable),
  // columnAnswers[1] = anything correct anywhere in column 1 (Uncountable).
  // Order inside each list doesn't matter - the student can drop a word
  // into ANY empty blank in the right column.
  "columnAnswers": [
    ["apples", "eggs", "onions", "biscuits"],
    ["milk", "pasta", "rice", "flour"]
  ],

  "audio":["../audios/leafy.mp3","../audios/dark.mp3","../audios/stone.mp3","../audios/scary.mp3"]
};