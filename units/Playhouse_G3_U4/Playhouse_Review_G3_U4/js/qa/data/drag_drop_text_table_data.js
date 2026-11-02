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
var _activity_json = {
  "image":"new_drag_drop.png",
  "mainTitle"             : "../images/icons/gram_main_title.png",
  "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
  "mainTitleAudio"        : "../audios/page_34/GRAMMAR.mp3",
  "mainTitleIconPos"      : {"right": "-18px"},
  "subTitleTextLeft"      : "<span class='orange_text'>2</span> Put the words in the correct columns.",
  "subTitleTextRight"     : "",
  "subTitleIcons"         : [],
  "subTitleAudio"         : "../audios/under.mp3",
  "type"                  :"drag_drop_with_image",
  "numOfRow"              :9,
  "numOfCol"              :2,
  "questions":[  
    '<p class="title_text">Countable Nouns</p>',
    '<p class="title_text">Uncountable Nouns</p>',
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
    '<span>___</span>',
    '<span>___</span>',
    '<span>___</span>',
    '<span>___</span>',
    '<span>___</span>',
    '<span>___</span>',
    '<span>___</span>',
    '<span>___</span>',
    ],
  "options": ["milk", "cucumbers", "juice" , "mayonnaise", "apples",  "sugar","mushrooms", "rice", "butter", "onions" ,"flour","salt","tomatoes"],

  /*
      NEW: answers are grouped per COLUMN instead of per exact blank position.
      columnAnswers[0] = every word that is correct anywhere in column 0
      (Countable Nouns), columnAnswers[1] = every word that is correct
      anywhere in column 1 (Uncountable Nouns). The student can drop a word
      into ANY empty blank in the right column - order no longer matters.
  */
  "columnAnswers": [
    ["cucumbers", "apples", "mushrooms", "onions", "tomatoes"],
    ["milk", "juice", "mayonnaise", "sugar", "rice","butter","flour","salt"]
  ],

  /*
      NEW: one small image shown above each draggable word chip.
      Replace these placeholder paths with your real image files.
  */
  "optionsImages": {
    "rice":         "../images/pages/activities/rice.jpg",
    "flour":        "../images/pages/activities/floar.png",
    "apples":       "../images/pages/activities/apples.png",
    "mayonnaise":   "../images/pages/activities/myiones.jpg",
    "onions":       "../images/pages/activities/onions.png",
    "fizzy drink":  "../images/pages/activities/cola.jpg",
    "sugar":        "../images/pages/activities/suger.jpg",
    "bananas":      "../images/pages/activities/bananas.jpg",
    "biscuits":     "../images/pages/activities/buscites.jpg",
    "potatoes":     "../images/pages/activities/potates.jpg"
  },

  "audio":["../audios/leafy.mp3","../audios/dark.mp3","../audios/stone.mp3","../audios/scary.mp3"]

  };