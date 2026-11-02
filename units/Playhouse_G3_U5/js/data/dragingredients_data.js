var dragingredients_data = {
 "mainTitle"             : "../images/icons/writing.png",
  "mainTitleIcon"         : "../images/pages/sb-icons/phonics_3_icon.png",
  "mainTitleIconPos"      : {"right": "90px"},
  "mainTitleAudio"        : "../audios/page_46/WRITING.mp3",
  subTitleTextLeft:
    "<span class='orange_text'>2</span> <b>Find and write.</b> <span class='orange_text'>The chef gave the recipe. Can you write it down? Then practise the conversation with a friend.</span>",
  subTitleAudio: "../audios/new/p46find.mp3",

  cardTitle: "Apple Walnut Cake",
  cardImage: "../images/pages/activities/2_chef.png",

  /* every chip that appears in the word bank */
  wordBank: [
    "apples",
    "walnuts",
    "eggs",
    "butter",
    "milk",
    "flour",
    "oil",
    "sugar",
  ],

  /*
       one blank slot is created per word in "answers" (so the blank count
       always matches exactly - no leftover empty slots to worry about).
       The student can drop a correct word into ANY blank in that column;
       exact position doesn't matter.
    */
  columns: [
    { label: "Countable ingredients:", answers: ["apples", "walnuts", "eggs"] },
    {
      label: "Uncountable ingredients:",
      answers: ["butter", "milk", "flour", "oil", "sugar"],
    },
  ],
};
