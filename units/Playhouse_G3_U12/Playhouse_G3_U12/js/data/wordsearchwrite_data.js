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
      audiourl: "../audios/page_62/1.mp3",
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
  mainTitleAudio: "../audios/page_62/PHONICS_and_Sentence_Building.mp3",

  subTitleTextLeft:
    "<span class='orange_text'>1</span> <i>Word search.</i> Look at the pictures and find the <span class='orange_text'>\u2018ee\u2019</span> words in the box. Then write each word under its picture.",
  subTitleAudio: "../audios/page_62/1_Word_search_Look_at_the_pictures_and_find_the_‘ee‘_words_in_the_box_Then_write_each.mp3",

  gridRows: 8,
  gridCols: 10,

  grid: [
    ["t", "r", "e", "e", "r", "s", "n", "c", "y", "c"],
    ["l", "r", "a", "b", "d", "e", "h", "w", "o", "u"],
    ["o", "e", "o", "s", "o", "a", "w", "e", "e", "o"],
    ["w", "g", "l", "w", "l", "w", "h", "c", "m", "g"],
    ["n", "k", "r", "k", "n", "e", "e", "l", "r", "d"],
    ["o", "s", "o", "e", "h", "e", "e", "o", "n", "w"],
    ["f", "r", "s", "i", "e", "d", "l", "p", "o", "u"],
    ["f", "o", "f", "e", "e", "t", "y", "d", "n", "l"],
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
      word: "sleep",
      cells: [
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
        [6, 7],
      ],
    },
    {
      word: "tree",
      cells: [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
      ],
    },
    {
      word: "feet",
      cells: [
        [7, 2],
        [7, 3],
        [7, 4],
        [7, 5],
      ],
    },
    {
      word: "wheel",
      cells: [
        [2, 6],
        [3, 6],
        [4, 6],
        [5, 6],
        [6, 6],
      ],
    },
    {
      word: "greet",
      cells: [
        [3, 1],
        [4, 2],
        [5, 3],
        [6, 4],
        [7, 5],
      ],
    },
  ],

  // the 5 pictures, in display order, each with its correct 'ee' word
  pictures: [
    { image: "../images/pages/activities/0.png", answer: "tree" },
    { image: "../images/pages/activities/1.png", answer: "sleep" },
    { image: "../images/pages/activities/2.png", answer: "wheel" },
    { image: "../images/pages/activities/3.png", answer: "greet" },
    { image: "../images/pages/activities/6.jpg", answer: "feet" },
  ],
};
