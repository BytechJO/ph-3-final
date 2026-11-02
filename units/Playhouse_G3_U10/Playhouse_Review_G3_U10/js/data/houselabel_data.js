//  ****************************************** //
//  HouseLabel - Data file
//  The background image only has the pointer LINES (no circles) - the
//  circles themselves are drawn with CSS and positioned (as % of the
//  image's width/height) exactly at the tip of each line.
//  ****************************************** //
var houselabel_data = {
  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft:
    "<span class='orange_text'>1</span> Label.",
  wordBank: [
    { letter: "a", text: "trunk" },
    { letter: "b", text: "sabre-toothed cat" },
    { letter: "c", text: "scales" },
    { letter: "d", text: "tail" },
    { letter: "e", text: "woolly mammoth" },
    { letter: "f", text: "fur" },
    { letter: "g", text: "giant ground sloth" },
    { letter: "h", text: "tusk" },
    { letter: "i", text: "coelacanth" },
  ],

  // the plain house image WITH the pointer lines but WITHOUT circles
  backgroundImage: "../images/pages/activities/house_with_lines.png",

  /*
        NOTE: topPct/leftPct below are my best estimate of where each line
        ends, based on the reference screenshot - please fine-tune them
        against YOUR actual image (open it in an editor, hover to read
        pixel coordinates, then convert to a % of the full image width/
        height: pct = pixel / full_size * 100).
    */
  blanks: [
    { id: "h1", topPct: 15, leftPct: 23, answer: "b" },
    { id: "h2", topPct: 20, leftPct: 62, answer: "g" },
    { id: "h3", topPct: 20, leftPct: 95, answer: "e" },
    { id: "h4", topPct: 28, leftPct: 68, answer: "h" },
    { id: "h5", topPct: 36, leftPct: 80, answer: "a" },
    { id: "h6", topPct: 79, leftPct: 6, answer: "i" },
    { id: "h7", topPct: 68, leftPct: 25, answer: "d" },
    { id: "h8", topPct: 66, leftPct: 38, answer: "f" },
    { id: "h9", topPct: 64, leftPct: 71, answer: "c" },
  ],
};
