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
    "<span class='orange_text'>2</span> <i>Label the parts of the house.</i>",

  wordBank: [
    { letter: "a", text: "window" },
    { letter: "b", text: "front door" },
    { letter: "c", text: "balcony" },
    { letter: "d", text: "roof" },
    { letter: "e", text: "front garden" },
    { letter: "f", text: "front porch" },
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
    { id: "h1", topPct: 21, leftPct: 100, answer: "d" },
    { id: "h2", topPct: 46, leftPct: 100, answer: "c" },
    { id: "h3", topPct: 100, leftPct: 37, answer: "a" },
    { id: "h4", topPct: 100, leftPct: 48, answer: "b" },
    { id: "h5", topPct: 100, leftPct: 59, answer: "f" },
    { id: "h6", topPct: 100, leftPct: 70, answer: "e" },
  ],
};
