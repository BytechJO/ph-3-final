//  ****************************************** //
//  LookCircleWrite - Data file
//  Each row: an image clue, two stacked letters (circle the right one),
//  and a word ending with a blank the student fills in to complete the
//  word (using the letter they circled).
//  ****************************************** //
var lookcirclewrite_data = {
        "mainTitle"             : "",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio"        : "../audios/under.mp3",
    "subTitleTextLeft": "<span class='orange_text'>4</span> Look, circle and write.",
    "subTitleAudio": "../audios/under.mp3",

    "questions": [
        {
            "image": "../images/pages/activities/pointing_finger.jpg",
            "letterOptions": ["p", "m"],
            "correctLetter": "p",
            "wordEnding": "oint"
        },
        {
            "image": "../images/pages/activities/soil.jpg",
            "letterOptions": ["c", "s"],
            "correctLetter": "s",
            "wordEnding": "oil"
        },
        {
            "image": "../images/pages/activities/coin.jpg",
            "letterOptions": ["c", "m"],
            "correctLetter": "c",
            "wordEnding": "oin"
        }
    ]
}