//  ****************************************** //
//  ListenAndNumber - Data file
//  Student listens to the conversations (headphone icon plays them in
//  sequence) and types the order number under each picture.
//  ****************************************** //
var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(242, 101, 33)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_51/2.mp3",
    },
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
  ],
};
var listenandnumber_data = {
  mainTitle: "../images/icons/gramprac_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleIconPos: { right: "70px" },
  mainTitleAudio: "../audios/page_51/GRAMMAR_PRACTICE.mp3",
  subTitleTextLeft:
    "<span class='orange_text'>2</span> Listen and number. <span style='color:orange'> Listen to the conversations and number the pictures.</span>",
  headphoneIcon: "../images/icons/headphone_icon.png",
  subTitleAudio:
    "../audios/page_51/2_Listen_and_number_Listen_to_the_conversations_and_number_the_pictures.mp3",

  // played in sequence (comma-joined) when the headphone icon is clicked -
  // reuses the site's existing multi-track audio engine
  audioClips: [
    "../audios/page_x/conversation_1.mp3",
    "../audios/page_x/conversation_2.mp3",
    "../audios/page_x/conversation_3.mp3",
    "../audios/page_x/conversation_4.mp3",
    "../audios/page_x/conversation_5.mp3",
  ],

  /*
        NOTE: "correctOrder" below is a PLACEHOLDER for items that aren't the
        given example - the real correct order depends entirely on what is
        actually said in your audio clips. Update these numbers (1-5) to
        match your real conversations before using this activity.
    */
  items: [
    {
      id: "item_juice",
      image: "../images/pages/activities/3.jpg",
      correctOrder: 2,
      locked: false,
    },
    {
      id: "item_bottle",
      image: "../images/pages/activities/4.jpg",
      correctOrder: 1,
      locked: false,
    },
    {
      id: "item_cereal",
      image: "../images/pages/activities/5.png",
      correctOrder: 4,
      locked: false,
    },
    {
      id: "item_lettuce",
      image: "../images/pages/activities/6.png",
      correctOrder: 5,
      locked: false,
    },
    {
      id: "item_milk",
      image: "../images/pages/activities/7.png",
      correctOrder: 3,
      locked: false,
    },
  ],
};
