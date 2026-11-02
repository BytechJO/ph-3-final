var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(53, 130, 180)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/page_36/1.mp3',
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




var dialoguecircle_data = {
  mainTitle: "../images/pages/sb-icons/gramprac_main_title.png",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/page_36/GRAMMAR_PRACTICE.mp3",
  subTitleTextLeft:
    "<span class='blue_text'>1</span> Read and circle the correct word to complete the conversation.",
  subTitleAudio: "../audios/page_36/1_Read_and_circle_the_correct_word_to_complete_the_conversation.mp3",
  characterImage: "../images/pages/activities/1_bob_jay.png",

  /*
       Each line is either plain (just "text") or has ONE word-choice inside
       it ("textBefore" + "options" [two words] + "textAfter"). "correct" is
       the 0-based index into "options" of the word that should be circled.
    */
  lines: [
    {
      speaker: "Bob:",
      text: "I have great news! We moved into a new house this weekend.",
    },
    { speaker: "Jay:", text: "That is great news, Bob! Tell me about it." },
    {
      speaker: "Bob:",
      textBefore: "It is a two-storey house. It is big! It is really",
      options: ["tiny", "huge"],
      correct: 1,
      textAfter: ".",
    },
    {
      speaker: "Jay:",
      textBefore:
        "That sounds good. It is a two-storey house. It must have cost a lot of money. It sounds like the house is",
      options: ["expensive", "cheap"],
      correct: 0,
      textAfter: ".",
    },
    {
      speaker: "Bob:",
      textBefore:
        "It wasn't. It is near our school. We live by the forest next to the park. It is a safe place and not",
      options: ["dangerous", "nice"],
      correct: 0,
      textAfter: ".",
    },
    {
      speaker: "Jay:",
      textBefore: "Great! Do you like your room? Is it big or",
      options: ["little", "expensive"],
      correct: 0,
      textAfter: "?",
    },
    {
      speaker: "Bob:",
      textBefore:
        "It is very big. My sister likes her new room too because she feels it is",
      options: ["ugly", "pretty"],
      correct: 1,
      textAfter: ". Please come to my house this weekend.",
    },
    { speaker: "Jay:", text: "Okay. We can play football in the park!" },
  ],
};
