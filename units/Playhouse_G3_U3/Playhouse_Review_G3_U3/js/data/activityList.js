// types
// (1) mcq
// (2) fillin
var _activityData = {
  list: [
    {
      file: "match_img_horizantal.html",
      type: "linedraw",
      build: "yes", // yes (or) no
      activityCtrls: "no",
      layout: 1,
      visited: 0,
      score: 0,
    },
    {
      file: "fillin_text_in_sentences_under_ques.html",
      type: "fillin",
      subtype: "",
      build: "yes", // yes (or) no
      activityCtrls: "yes",
      layout: 2,
      visited: 0,
      score: 0,
    },
    {
      file: "fill_in_text_under_sentences.html",
      type: "fillin",
      subtype: "",
      build: "yes", // yes (or) no
      activityCtrls: "yes",
      layout: 2,
      visited: 0,
      score: 0,
    },

    {
      file: "circlecolour.html",
      type: "circlecolour",
      build: "yes", // yes (or) no
      activityCtrls: "yes",
      layout: 1,
      visited: 0,
      score: 0,
    },
     {
      file: "index_wordsearch.html",
      type: "wordsearch",
      build: "yes", // yes (or) no
      activityCtrls: "yes",
      layout: 1,
      visited: 0,
      score: 0,
    },


    // {
    //    'file'               : 'fillin_square.html',
    //    'type'               : 'wordsearch',
    //    'build'              : 'yes', // yes (or) no
    //    'activityCtrls'      : 'yes',
    //    'layout'             : 1,
    //    'visited'            : 0,
    //    'score'              : 0,
    // },
    // {
    //    'file'               : 'circle_word_in_sentence.html',
    //    'type'               : 'mcq',
    //    'build'              : 'yes', // yes (or) no
    //    'activityCtrls'      : 'yes',
    //    'layout'             : 1,
    //    'visited'            : 0,
    //    'score'              : 0,
    // },
    // {
    //    "file"               : "fill_in_text_under_sentences.html",
    //    'type'               : 'fillin',
    //    'subtype'            : '',
    //    'build'              : 'yes', // yes (or) no
    //    'activityCtrls'      : 'yes',
    //    'layout'             : 2,
    //    'visited'            : 0,
    //    'score'              : 0,
    // },
    // {
    //    "file"               : "fillin_text_in_sentences_under_ques.html",
    //    'type'               : 'fillin',
    //    'subtype'            : '',
    //    'build'              : 'yes', // yes (or) no
    //    'activityCtrls'      : 'yes',
    //    'layout'             : 2,
    //    'visited'            : 0,
    //    'score'              : 0,
    // },
    // {
    //    'file'               : 'match_text_vertical.html',
    //    'type'               : 'linedraw',
    //    'build'              : 'yes', // yes (or) no
    //    'activityCtrls'      : 'no',
    //    'layout'             : 1,
    //    'visited'            : 0,
    //    'score'              : 0,
    // },
    // {
    //    'file'               : 'match_img_horizantal.html',
    //    'type'               : 'linedraw',
    //    'build'              : 'yes', // yes (or) no
    //    'activityCtrls'      : 'no',
    //    'layout'             : 1,
    //    'visited'            : 0,
    //    'score'              : 0,
    // },
    // {
    //    'file'               : 'multiple_word.html',
    //    'type'               : 'mcq',
    //    'build'              : 'yes', // yes (or) no
    //    'activityCtrls'      : 'yes',
    //    'layout'             : 1,
    //    'visited'            : 0,
    //    'score'              : 0,
    // },
    // {
    //    "file"               : "fill_in_text_under_sentences_2.html",
    //    'type'               : 'fillin',
    //    'subtype'            : '',
    //    'build'              : 'yes', // yes (or) no
    //    'activityCtrls'      : 'yes',
    //    'layout'             : 2,
    //    'visited'            : 0,
    //    'score'              : 0,
    // },
    // {
    //    "file"               : "fillin_text_in_sentences_2.html",
    //    'type'               : 'fillin',
    //    'subtype'            : '',
    //    'build'              : 'yes', // yes (or) no
    //    'activityCtrls'      : 'yes',
    //    'layout'             : 2,
    //    'visited'            : 0,
    //    'score'              : 0,
    // },
    // {
    //    "file"               : "fillin_text_in_sentences.html",
    //    'type'               : 'fillin',
    //    'subtype'            : '',
    //    'build'              : 'yes', // yes (or) no
    //    'activityCtrls'      : 'yes',
    //    'layout'             : 2,
    //    'visited'            : 0,
    //    'score'              : 0,
    // },
    // {
    //    "file"               : "fillin_text_in_sentences_3.html",
    //    'type'               : 'fillin',
    //    'subtype'            : '',
    //    'build'              : 'yes', // yes (or) no
    //    'activityCtrls'      : 'yes',
    //    'layout'             : 2,
    //    'visited'            : 0,
    //    'score'              : 0,
    // },
    // {
    //    'file'               : 'circle_word_in_sentence_img.html',
    //    'type'               : 'mcq',
    //    'build'              : 'yes', // yes (or) no
    //    'activityCtrls'      : 'yes',
    //    'layout'             : 1,
    //    'visited'            : 0,
    //    'score'              : 0,
    // },
    // {
    //    'file'               : 'circle_word_in_sentence_img_2.html',
    //    'type'               : 'mcq',
    //    'build'              : 'yes', // yes (or) no
    //    'activityCtrls'      : 'yes',
    //    'layout'             : 1,
    //    'visited'            : 0,
    //    'score'              : 0,
    // },
    // {
    //    "file"               : "fillin_text_number.html",
    //    'type'               : 'fillin',
    //    'subtype'            : '',
    //    'build'              : 'yes', // yes (or) no
    //    'activityCtrls'      : 'yes',
    //    'layout'             : 2,
    //    'visited'            : 0,
    //    'score'              : 0,
    // },
    // {
    //    'file'               : 'tick_image.html',
    //    'type'               : 'mcq',
    //    'subtype'            : 'tick',
    //    'build'              : 'yes', // yes (or) no
    //    'activityCtrls'      : 'yes',
    //    'layout'             : 3,
    //    'visited'            : 0,
    // },
    // {
    //    "file"               : "fillin_text_with_background.html",
    //    'type'               : 'fillin',
    //    'subtype'            : '',
    //    'build'              : 'yes', // yes (or) no
    //    'activityCtrls'      : 'yes',
    //    'layout'             : 2,
    //    'visited'            : 0,
    //    'score'              : 0,
    // },
  ],
};
