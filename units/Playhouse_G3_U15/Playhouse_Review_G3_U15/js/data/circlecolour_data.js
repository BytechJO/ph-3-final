var circlecolour_data = {
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft:
    '<span class="orange_text">4</span> Colour the ‘st’ words and circle the ‘st’ in each word.',
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
        { text: "He", needsCircle: false, needsColour: false },
        { text: "lives", needsCircle: false, needsColour: false },
        { text: "in", needsCircle: false, needsColour: false },
        { text: "First", needsCircle: true, needsColour: true },
        { text: "Street", needsCircle: true, needsColour: true },

      ],
    }, 
    {
      words: [
        { text: "He", needsCircle: false, needsColour: false },
        { text: "lives", needsCircle: false, needsColour: false },
        { text: "on", needsCircle: false, needsColour: false },
        { text: "the", needsCircle: false, needsColour: false },
        { text: "west", needsCircle: true, needsColour: true },
        { text: "side", needsCircle: false, needsColour: false },
        { text: "of", needsCircle: false, needsColour: false },
        { text: "town.", needsCircle: false, needsColour: false },
      ],
    },
    {
      words: [
        { text: "My", needsCircle: false, needsColour: false },
        { text: "mum", needsCircle: false, needsColour: false },
        { text: "doesn’t", needsCircle: false, needsColour: false },
        { text: "drive", needsCircle: false, needsColour: false },
        { text: "fast", needsCircle: true, needsColour: true },
       
      ],
    },
  ],   

};
