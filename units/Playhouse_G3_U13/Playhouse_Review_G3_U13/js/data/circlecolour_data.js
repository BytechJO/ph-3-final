var circlecolour_data = {
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft:
    '<span class="orange_text">3</span> Colour the ‘ar’ words and circle the ‘ar’ in each word.',
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
        { text: "car", needsCircle: true, needsColour: true },
        { text: "is", needsCircle: false, needsColour: false },
        { text: "very", needsCircle: false, needsColour: false },
        { text: "far", needsCircle: true, needsColour: true },
        { text: "away.", needsCircle: false, needsColour: false },
      ],
    }, 
    {
      words: [
        { text: "We", needsCircle: false, needsColour: false },
        { text: "ate", needsCircle: false, needsColour: false },
        { text: "tarts", needsCircle: true, needsColour: true },
        { text: "in", needsCircle: false, needsColour: false },
        { text: "the", needsCircle: false, needsColour: false },
        { text: "park.", needsCircle: true, needsColour: true },
      ],
    },
    {
      words: [
        { text: "We", needsCircle: false, needsColour: false },
        { text: "had", needsCircle: false, needsColour: false },
        { text: "a", needsCircle: false, needsColour: false },
        { text: "party", needsCircle: true, needsColour: true },
        { text: "in", needsCircle: false, needsColour: false },
        { text: "the", needsCircle: false, needsColour: false },
        { text: "garden.", needsCircle: true, needsColour: true },
      ],
    },
  ],   

};
