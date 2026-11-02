//  ****************************************** //
//  WordSearchWrite - Data file
//  Student drags across the grid to find each 'ee' word (optional visual
//  highlight), then writes that word in the blank under its matching
//  picture. Grading is based on the 5 written words.
//  ****************************************** //
var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_67/1.mp3",
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

var wordsearchwrite_data = {
  mainTitle: "../images/pages/sb-icons/phonics-sent-build.png",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "68px" },
  mainTitleAudio: "../audios/page_67/PHONICS_and_Sentence_Building.mp3",

  subTitleTextLeft:
    "<span class='orange_text'>1</span>  Find and write the words for each picture. ",
  subTitleAudio:
    "../audios/page_67/1_Find_and_write_the_words_for_each_picture.mp3",

  gridRows: 8,
  gridCols: 10,

  grid: [
    ["g", "t", "b", "c", "r", "t", "s", "c", "y", "c"],
    ["s", "u", "i", "l", "a", "s", "t", "w", "o", "u"],
    ["o", "e", "i", "s", "o", "r", "a", "y", "e", "o"],
    ["t", "a", "r", "t", "s", "y", "r", "s", "p", "g"],
    ["n", "k", "f", "r", "a", "e", "s", "u", "a", "d"],
    ["o", "s", "o", "k", "h", "r", "f", "o", "r", "w"],
    ["f", "r", "h", "s", "c", "a", "r", "f", "k", "u"],
    ["g", "e", "r", "p", "a", "r", "t", "y", "n", "l"],
  ],
  /*
        NOTE: rows 0-6 above are copied exactly from your message and are
        confirmed correct. Row 7 (the last one) is still MY OWN earlier
        guess, since your message got cut off after just "f" - please
        send me the rest of that last row so I can confirm/fix it.

        Using this row-7 guess, I searched all 8 directions and could NOT
        find a valid straight-line path for "meet" anywhere in this grid
        (there's only a single "m" in the whole grid, at row 3 / col 8,
        and none of its 8 neighbouring directions spell out ...eet).
        Once you confirm the real last row, I'll re-check "meet"'s exact
        cells and fix gridWords below accordingly.
    */

  // every word's exact cell path, used only to let the student highlight
  // it while dragging - the graded answer is the word TYPED underneath
  gridWords: [
    {
      word: "stars",
      cells: [
        [0, 6],
        [1, 6],
        [2, 6],
        [3, 6],
        [4, 6],
      ],
    },
    {
      word: "car",
      cells: [
        [0, 3],
        [1, 4],
        [2, 5],
      ],
    },
    {
      word: "park",
      cells: [
        [3, 8],
        [4, 8],
        [5, 8],
        [6, 8],
      ],
    },
    {
      word: "guitar",
      cells: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 5],
      ],
    },
    {
      word: "scarf",
      cells: [
        [6, 3],
        [6, 4],
        [6, 5],
        [6, 6],
        [6, 7],
      ],
    },
    {
      word: "party",
      cells: [
        [7, 3],
        [7, 4],
        [7, 5],
        [7, 6],
        [7, 7],
      ],
    },
  ],

  // the 5 pictures, in display order, each with its correct 'ee' word
  pictures: [
    { image: "../images/pages/activities/4.png", answer: "stars" },
    { image: "../images/pages/activities/5.png", answer: "car" },
    { image: "../images/pages/activities/2.jpg", answer: "park" },
    { image: "../images/pages/activities/6.jpg", answer: "guitar" },
    { image: "../images/pages/activities/7.jpg", answer: "scarf" },
    { image: "../images/pages/activities/3.jpg", answer: "party" },
  ],
};
