var circlecolour_data = {
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft:
    '<span class="orange_text">4</span> Colour the <span class="orange_text">\u2018cl\u2019</span> words red.',
  subTitleAudio: "../audios/under.mp3",

  /*
       This activity only has a "colour" task (no circling).
       Each sentence/stanza is split into words.
       needsColour : true if the word contains the target 'cl' sound and should be coloured red
       needsCircle : always false here (kept for structural compatibility with other activities
                     that reuse this same data shape and DO use circling)
       newLine     : true if a visual line break should follow this word, so the poem keeps
                     its original line layout instead of running on as one paragraph
    */
  targetColour: "red",

  questions: [
    {
      // ---- stanza 1 ----
      words: [
        { text: "We", needsCircle: false, needsColour: false },
        { text: "like", needsCircle: false, needsColour: false },
        { text: "to", needsCircle: false, needsColour: false },
        { text: "climb,", needsCircle: false, needsColour: true, newLine: true },

        { text: "and", needsCircle: false, needsColour: false },
        { text: "clap", needsCircle: false, needsColour: true },
        { text: "and", needsCircle: false, needsColour: false },
        { text: "clean.", needsCircle: false, needsColour: true, newLine: true },

        { text: "We", needsCircle: false, needsColour: false },
        { text: "are", needsCircle: false, needsColour: false },
        { text: "clever", needsCircle: false, needsColour: true },
        { text: "and", needsCircle: false, needsColour: false, newLine: true },

        { text: "never", needsCircle: false, needsColour: false },
        { text: "mean!", needsCircle: false, needsColour: false, newLine: true },
      ],
    },
    {
      // ---- stanza 2 ----
      words: [
        { text: "We", needsCircle: false, needsColour: false },
        { text: "hang", needsCircle: false, needsColour: false },
        { text: "our", needsCircle: false, needsColour: false },
        { text: "clothes", needsCircle: false, needsColour: true, newLine: true },

        { text: "in", needsCircle: false, needsColour: false },
        { text: "the", needsCircle: false, needsColour: false },
        { text: "closet,", needsCircle: false, needsColour: true },
        { text: "too.", needsCircle: false, needsColour: false, newLine: true },

        { text: "We", needsCircle: false, needsColour: false },
        { text: "clown", needsCircle: false, needsColour: true },
        { text: "around,", needsCircle: false, needsColour: false, newLine: true },

        { text: "that's", needsCircle: false, needsColour: false },
        { text: "what", needsCircle: false, needsColour: false },
        { text: "we", needsCircle: false, needsColour: false },
        { text: "do!", needsCircle: false, needsColour: false, newLine: true },
      ],
    },
  ],
};