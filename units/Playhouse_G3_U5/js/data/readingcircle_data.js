var readingcircle_data = {
    "mainTitle": "../images/icons/reading.png",
    "mainTitleIcon": "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos": {"right": "80px"},
    "mainTitleAudio": "../audios/page_44/READING.mp3",
  subTitleTextLeft:
    "<span class='orange_text'>1</span> Read the story. <span class='orange_text'>Circle</span> some <span class='orange_text'>and underline</span> any in the story. Then answer the questions.",
  subTitleAudio: "../audios/page_44/1_Read_the_story.mp3",
  storyImage: "../images/pages/page-5/0.png",

  /* any word (case-insensitive, punctuation ignored) matching a key here becomes
       clickable in the story text, and must end up marked with the given type */
  targetWords: {
    some: "circle",
    any: "underline",
  },

  /* the story, exactly as it should read - just plain paragraphs.
       The build file automatically finds every "some"/"any" inside them
       and makes those words interactive; everything else stays static text. */
  storyParagraphs: [
    "Uncle Alex is a good cook. Yesterday we had a barbeque outside, but we didn\u2019t have any meat! He sent me to the supermarket to get some burgers.After I got home Uncle Alex told me we didn\u2019t have any cheese. So, I went back to the supermarket to buy some cheese!Then I gave him the cheese and he told me to bring him some charcoal. I did find the charcoal inside the garage. He finally finished the burgers. We were so hungry!Uncle Alex said, \u2018Ok Jamie, bring some buns for the burgers.\u2019I said, \u2018Oh no! We don\u2019t have any buns!\u2019He said, \u2018That\u2019s ok, we will just use some bread.\u2019We both laughed and ate our burgers!"
  ],
};
