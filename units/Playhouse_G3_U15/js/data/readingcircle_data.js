
var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(242, 101, 33)",
  "playListData" : [
      {
        'audiourl': '../audios/page_136/1.mp3',
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
var readingcircle_data = {
  mainTitle: "../images/icons/reading.png",
  mainTitleIcon: "../images/pages/sb-icons/adv_icon_1.png",
  mainTitleIconPos: { right: "80px" },
  mainTitleAudio: "../audios/page_136/READING.mp3",
  subTitleTextLeft:
    "<span class='orange_text'>1</span> Read the story.  <span class='orange_text'>Where does Jill live? Circle Jill’s address in the story.</span>",
  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio:
    "../audios/qa-instructions/read-page-136.mp3",

  storyImage: "../images/pages/activities/0.jpg",

  /* any word (case-insensitive, punctuation ignored) matching a key here becomes
       clickable in the story text, and must end up marked with the given type */
targetPhrases: [
    {
        text: "15 Walnut Street",
        type: "circle"
    }
],

  /* the story, exactly as it should read - just plain paragraphs.
       The build file automatically finds every "some"/"any" inside them
       and makes those words interactive; everything else stays static text. */
  storyParagraphs: [
     "Jill went to the bakery to buy a cake. The bakery is two streets away from her house. On her way home, she got lost. She didn’t know how to get back home. She looked around. She was on Dove Street, but she lives in Walnut Street! She saw a girl walking nearby. ‘Excuse me,’ she said to the girl. ‘Could you please tell me how to get to 15 Walnut Street?’ ‘Sure!’ said the girl. ‘Walk along Dove Street. Take a right at Hamilton Street and walk along Hamilton Street. You will see Walnut Street. Take a left at Walnut Street and 15 Walnut Street will be on the left.’ ‘Thank you very much!’ said Jill. ‘You’re welcome,’ said the girl, as she waved. Jill was so happy to find the way to her house. Now she can go to the bakery and get home without getting lost again.",
  ],
};
