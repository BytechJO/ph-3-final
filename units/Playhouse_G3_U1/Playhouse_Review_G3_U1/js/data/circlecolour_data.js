var circlecolour_data = {
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft:
    '<span class="blue_text">4</span> Colour the <span class="blue_text">‘pl’</span> words. Circle the <span class="blue_text">‘pl’</span> in each word',
  subTitleAudio: "../audios/under.mp3",

  /*
       Each sentence is split into words.
       needsCircle : true if this word carries the capital letter or the full stop (click = circle)
       needsColour : true if this word is a short "e" word (double-click = colour)
       A word can need both (e.g. the first word of a sentence that is ALSO a short-e word),
       or neither (a plain word with no interaction expected).
    */
  questions: [
    {
      words: [
        { text: "The", needsCircle: false, needsColour: false },
        { text: "place", needsCircle: true, needsColour: true },
        { text: "is", needsCircle: false, needsColour: false },
        { text: "full", needsCircle: false, needsColour: false },
        { text: "of", needsCircle: false, needsColour: false },
        { text: "plants.", needsCircle: true, needsColour: true },
      ],
    }, 
    {
      words: [
        { text: "Please", needsCircle: true, needsColour: true },
        { text: "give", needsCircle: false, needsColour: false },
        { text: "me", needsCircle: false, needsColour: false },
        { text: "a", needsCircle: false, needsColour: false },
        { text: "plate.", needsCircle: true, needsColour: true },
      ],
    },
    {
      words: [
        { text: "I", needsCircle: false, needsColour: false },
        { text: "have", needsCircle: false, needsColour: false },
        { text: "got", needsCircle: false, needsColour: false },
        { text: "plenty", needsCircle: true, needsColour: true },
        { text: "of", needsCircle: false, needsColour: false },
        { text: "plums.", needsCircle: true, needsColour: true },
      ],
    },
  ],   

};
