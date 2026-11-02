//  ****************************************** //
//  MatchLocations - Data file
//  Student draws a line from each numbered item (left) to its matching
//  lettered location (right). One pair is already given as a locked
//  example.
//  ****************************************** //

var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(242, 101, 33)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_79/1.mp3",
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
var matchlocations_data = {
  mainTitle: "../images/icons/gramprac_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleIconPos: { right: "60px" },
  mainTitleAudio: "../audios/page_79/GRAMMAR_PRACTICE.mp3",

  subTitleTextLeft:
    "<span class='orange_text'>1</span> Listen.  <b class='orange_text'>Listen to the conversation between Aunt Rose and her niece. Where do her things belong? Match the things with their locations.</b>",
  headphoneIcon: "../images/icons/headphone_icon.png",
  subTitleAudio:
    "../audios/page_79/1_Listen_Listen_to_the_conversation_between_Aunt_Rose_and_her_niece_Where_do_her.mp3",

  // played in sequence when the headphone icon is clicked
  audioClips: [
    "../audios/page_x/aunt_rose_1.mp3",
    "../audios/page_x/aunt_rose_2.mp3",
  ],

  
      "characterImage": "../images/pages/activities/aunt_rose_niece.png",
 
  
 
    // just the two waypoint labels shown in the middle - not answers
    // themselves, just shared bend-points that lines pass through
    "middleItems": [
        { "id": "over_there", "text": "over there" },
        { "id": "right_here", "text": "right here" }
    ],
   "leftItems": [
        { "id": "L1", "num": 1, "text": "ladles" },
        { "id": "L2", "num": 2, "text": "cups" },
        { "id": "L3", "num": 3, "text": "pot" },
        { "id": "L4", "num": 4, "text": "grater" },
        { "id": "L5", "num": 5, "text": "rolling pin" },
        { "id": "L6", "num": 6, "text": "frying pan" }
    ],
    "rightItems": [
        { "id": "R1", "letter": "a", "text": "in the cupboard" },
        { "id": "R2", "letter": "b", "text": "on the top shelf" },
        { "id": "R3", "letter": "c", "text": "in the drawer next to the sink" },
        { "id": "R4", "letter": "d", "text": "on the bottom shelf" },
        { "id": "R5", "letter": "e", "text": "on the worktop" },
        { "id": "R6", "letter": "f", "text": "in the bottom drawer" }
    ],
 
    "leftAnswers": [
        { "leftId": "L1", "correctMiddleId": "over_there", "correctRightId": "R3", "locked": true },
        { "leftId": "L2", "correctMiddleId": "right_here", "correctRightId": "R2", "locked": false },
        { "leftId": "L3", "correctMiddleId": "right_here", "correctRightId": "R5", "locked": false },
        { "leftId": "L4", "correctMiddleId": "right_here", "correctRightId": "R6", "locked": false },
        { "leftId": "L5", "correctMiddleId": "over_there", "correctRightId": "R1", "locked": false },
        { "leftId": "L6", "correctMiddleId": "over_there", "correctRightId": "R4", "locked": false }
    ],

  /*
        NOTE: only L1 -> R3 (ladles -> in the drawer next to the sink) is
        confirmed, since that's the worked example in the reference image.
        The rest are PLACEHOLDERS - update them to match what is actually
        said in your real audio conversation.
    */
 
};
