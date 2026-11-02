var snapshot_data = {
  snapshot: [
    {
      audio: [
        "../audios/page_4/pizza.mp3",
        "../audios/page_4/dough.mp3",
        "../audios/page_4/sauce.mp3",
        "../audios/page_4/sprinkle.mp3",
        "../audios/page_4/cheese.mp3",
        "../audios/page_4/add.mp3",
        "../audios/page_4/pepperoni.mp3",
        "../audios/page_4/slice.mp3",
      ],
      image: [
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word2.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word3.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word4.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word5.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word6.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word7.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word8.png",
      ],
      word: [
        "<span>pizza</span>",
        "<span>dough</span>",
        "<span>sauce</span>",
        "<span>sprinkle</span>",
        "<span>cheese</span>",
        "<span>add</span>",
        "<span>pepperoni</span>",
        "<span>slice</span>",
      ],
      imagePlacePos: [
        [1, 1, 1],
        [1, 1, 1],
        [1, 0, 1],
      ],
    },
  ],
  popuptitle: "What I Want To Know:",
};

var snapshotPopup_data =
  "<ul><li>What are the people doing?</li><li>Who are the pizzas for?</li><li>What toppings go on a pizza?</li></ul>";

// var Popups_data = {
//   "popups": [{
//     "squirrelPopup": [{
//       "background": "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png",
//       "icon": "../images/pages/snapshots/right-three-icon.png",
//       "popupPlacePos":[[1,1,1],[1,1,1],[1,0,1]],
//       "audio": "../audios/page_4/pizza.mp3"
//     }],
//     "vocabularyPopup": [{
//       "background": "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png",
//       "icon": "../images/pages/snapshots/right-three-icon.png",
//       "popupPlacePos":[[1,1,1],[1,1,1],[1,0,1]],
//       "audio": ["../audios/page_4/pizza.mp3","../audios/page_4/dough.mp3"],
//       "word": ["<span>pizza</span>","<span>dough</span>"],
//     }],
//     "listenPopup": [{
//       "background": "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png",
//       "icon": "../images/pages/snapshots/right-three-icon.png",
//       "popupPlacePos":[[1,1,1],[1,1,1],[1,0,1]],
//       "audio": ["../audios/page_4/pizza.mp3","../audios/page_4/dough.mp3"],
//       "image": ["../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word2.png"],
//       "word": ["<span>pizza</span>","<span>dough</span>"],
//     }]
//   }]
// }

// var Popups_data = {
//   'apk': {
//     "text": ["<div><p>Do you help your family with cooking?</p><p>What is your family’s favorite food? Who cooks it for you?</p></div>"],
//     "audio": ["../audios/page_4/pizza.mp3"]},
//   'ccss': {
//     "text": ["<span>pizza</span>","<span>dough</span>","<span>sauce</span>","<span>sprinkle</span>","<span>cheese</span>"],
//     "audio": ["../audios/page_4/pizza.mp3","../audios/page_4/dough.mp3", "../audios/page_4/pizza.mp3","../audios/page_4/dough.mp3", "../audios/page_4/pizza.mp3"]},
//   'listen': {
//     "leftImage": "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png",
//     "text": ["<span>pizza</span>","<span>dough</span>","<span>sauce</span>"],
//     "image": ["../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word2.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word3.png"],
//     "audio": ["../audios/page_4/pizza.mp3","../audios/page_4/dough.mp3", "../audios/page_4/pizza.mp3"]},
//   // 'highlights' : "<div>    Author: Dawn King<br>Illustrator: Mary Sullivan</div>",
//   // 'welcomecontent': "<div class='wel_scr_cont' style='color:rgb(227, 32, 44);'> Pizza is fun to make and tasty for the young and old alike.</div>"
// }

var Popups_data = {
  slides: [
    {
      // 'apk': {
      //   "text": ["<div><p>I need your help.<br />Can you help me find the restaurant in the picture?</p></div>"],
      //   "audio": ["../audios/page_4/pizza.mp3"]},
      // 'ccss': {
      //   "text": ["<span>1 Goodbye!</span>","<span>2 How are you?</span>","<span>3 Fine, thank you.</span>","<span>4 Hello!</span>","<span>5 Good morning!</span>"],
      //   "audio": ["../audios/page_4/Pg4_Vocabulary_Adult Lady.mp3","../audios/page_4/dough.mp3", "../audios/page_4/pizza.mp3","../audios/page_4/dough.mp3", "../audios/page_4/pizza.mp3"]},
      listen: {
        backgroundImage: "../images/pages/page-1/1-word-background.png",
        mainTitle: "../images/icons/word-power.png",
        mainTitle_audio: "../audios/page_4/WORD_POWER.mp3",
        titleTexts: [
          "<span class='orange_text'>1</span> Listen and say the words.",
          "<span class='orange_text'>2</span> Listen and point.",
          "<span class='orange_text'>3</span> Read.",
        ],
        titleIcons: ["", "", "../images/pages/page-1/q-1-icon-3.png"],
        titlesAudio: ["../audios/page_4/1_Listen_and_say_the_words.mp3", "../audios/page_4/PLAYHOUSE_1_SB_UNIT_1_TRACK_02_02.mp3", "../audios/qa/read.mp3"],
        image: [
          "../images/pages/snapshots/page-1/popup-3-elem-1.png",
          "../images/pages/snapshots/page-1/popup-3-elem-2.png",
          "../images/pages/snapshots/page-1/popup-3-elem-3.png",
          "../images/pages/snapshots/page-1/popup-3-elem-1.png",
          "../images/pages/snapshots/page-1/popup-3-elem-2.png",
          "../images/pages/snapshots/page-1/popup-3-elem-3.png",
          "../images/pages/snapshots/page-1/popup-3-elem-1.png",
          "../images/pages/snapshots/page-1/popup-3-elem-2.png",
          "../images/pages/snapshots/page-1/popup-3-elem-3.png",
          "../images/pages/snapshots/page-1/popup-3-elem-3.png",
        ],
        words: [
          "1 America",
          "2 England",
          "3 Poland",
          "4 Russia",
          "5 Japan",
          "6 Colombia",
          "7 Lebanon",
          "8 Kenya",
          "9 India",
          "10 Australia",
        ],
        audio: [
          "../audios/page_4/1_America.mp3",
          "../audios/page_4/2_England.mp3",
          "../audios/page_4/3_Poland.mp3",
          "../audios/page_4/4_Russia.mp3",
          "../audios/page_4/5_Japan.mp3",
          "../audios/page_4/6_Colombia.mp3",
          "../audios/page_4/7_Lebanon.mp3",
          "../audios/page_4/8_Kenya.mp3",
          "../audios/page_4/9_India.mp3",
          "../audios/page_4/10_Australia.mp3",
        ],
      },
      listen2: {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        mainTitle: "../images/icons/word-power.png",
        mainTitle_audio: "../audios/page_4/WORD_POWER.mp3",
        titleTexts: ["<span class='orange_text'>4</span> You do it."],
        titleIcons: ["../images/pages/sb-icons/conv_3_icon.png"],
        titleTextRight: "<span class='orange_text'> Ask and answer.</span>",
        titlesAudio: ["../audios/new/askanswer.mp3"],
        image: [
          "../images/pages/page-1/2-img-1.png",
          "../images/pages/page-1/2-img-2.png",
        ],
        audio: [
          "../audios/page_4/Pg5_2.2_Adult Lady.mp3",
          "../audios/page_4/Pg5_2.3_Adult Lady.mp3",
        ],
      },
      // 'read': {
      //   "leftImage": "../images/pages/snapshots/page-2/popup-1-icon.png",
      //   "image": ["../images/pages/snapshots/page-2/popup-1-elem-1.png","../images/pages/snapshots/page-2/popup-1-elem-2.png"],
      //   "audio": ["../audios/page_4/Pg6_1.3_Adult Lady.mp3","../audios/page_4/Pg6_1.4_Adult Lady.mp3"]},
      // 'rightSection': {
      //   "mainImage": ["../images/pages/snapshots/page-2/image page 2.png"],
      //   "convImage": ["../images/pages/snapshots/page-2/conv page 2.png", "../audios/page_4/Pg5_1.1_Stella.mp3"],
      //   "bottomSqu": ["../images/pages/snapshots/page-2/squirrel.png", "../audios/page_4/pizza.mp3"]
      // }
    },
    // {
    //   'apk': {
    //     "text": ["<div><p>Do you help your family with cooking?</p></div>"],
    //     "audio": ["../audios/page_4/pizza.mp3"]},
    //   'ccss': {
    //     "text": ["<span>pizza</span>","<span>dough</span>","<span>sauce</span>","<span>sprinkle</span>","<span>cheese</span>"],
    //     "audio": ["../audios/page_4/pizza.mp3","../audios/page_4/dough.mp3", "../audios/page_4/pizza.mp3","../audios/page_4/dough.mp3", "../audios/page_4/pizza.mp3"]},
    //   'listen': {
    //     "leftImage": "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png",
    //     "text": ["<span>pizza</span>","<span>dough</span>","<span>sauce</span>"],
    //     "image": ["../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word2.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word3.png"],
    //     "audio": ["../audios/page_4/pizza.mp3","../audios/page_4/dough.mp3", "../audios/page_4/pizza.mp3"]},
    // }
  ],
  class_name: ["", "", "", "", "", "", "", "", "", "", "", ""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  words: [
    "1 America",
    "2 England",
    "3 Poland",
    "4 Russia",
    "5 Japan",
    "6 Colombia",
    "7 Lebanon",
    "8 Kenya",
    "9 India",
    "10 Australia",
  ],

  points: [
    "../images/pages/page-1/intro-1.png",
    "../images/pages/page-1/intro-2.png",
    "../images/pages/page-1/intro-3.png",
    "../images/pages/page-1/intro-4.png",
    "../images/pages/page-1/intro-5.png",
    "../images/pages/page-1/intro-6.png",
    "../images/pages/page-1/intro-7.png",
    "../images/pages/page-1/intro-8.png",
    "../images/pages/page-1/intro-9.png",
    "../images/pages/page-1/intro-10.png",
    // "../images/pages/page-1/intro-11.png",
    // "../images/pages/page-1/intro-12.png",
  ],
  postions: [
    "left: 13%; top: 20%;",
    "left: 30%; top: 20%;",
    "left: 45%; top: 20%;",
    "left: 61%; top: 20%;",
    "left: 74%; top: 20%;",
    "left: 16%; top: 85%;",
    "left: 36%; top: 67%;",
    "left: 52%; top: 84%;",
    "left: 74%; top: 83%;",
    "left: 76%; top: 59%;",
  ],
  imagesAudio: [
    "../audios/page_4/1_America.mp3",
    "../audios/page_4/2_England.mp3",
    "../audios/page_4/3_Poland.mp3",
    "../audios/page_4/4_Russia.mp3",
    "../audios/page_4/5_Japan.mp3",
    "../audios/page_4/6_Colombia.mp3",
    "../audios/page_4/7_Lebanon.mp3",
    "../audios/page_4/8_Kenya.mp3",
    "../audios/page_4/9_India.mp3",
    "../audios/page_4/10_Australia.mp3",
  ],
};
