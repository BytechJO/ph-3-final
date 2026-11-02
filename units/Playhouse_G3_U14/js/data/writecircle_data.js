//  ****************************************** //
//  WriteCircle - Data file
//  Each sentence is built from ordered "segments":
//    { type:"text",   text:"..." }              -> fixed text
//    { type:"blank",  answer:"..." }             -> input the student
//                                                    fills with the
//                                                    correct present
//                                                    perfect verb form
//    { type:"circle", text:"..." }                -> the time phrase the
//                                                    student must circle
//  "locked" marks the given worked example (already filled + circled,
//  not editable).
//  ****************************************** //
var writecircle_data = {
      "mainTitle"             : "../images/icons/gramprac_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "75px"},
    "mainTitleAudio"        : "../audios/page_127/GRAMMAR_PRACTICE.mp3",
    "subTitleTextLeft": "<span class='orange_text'>1</span> Write. Complete these sentences. Use the present perfect tense and circle the time.",
    "subTitleAudio": "../audios/new/p127write.mp3",

    "questions": [
        {
            "number": 1,
            "locked": true,
            "segments": [
                { "type": "text", "text": "I " },
                { "type": "blank", "answer": "have seen" },
                { "type": "text", "text": " (see) that film " },
                { "type": "circle", "text": "three times this week." }
            ]
        },
        {
            "number": 2,
            "locked": false,
            "segments": [
                { "type": "text", "text": "You " },
                { "type": "blank", "answer": "haven't gone" },
                { "type": "text", "text": " (not go) to PE " },
                { "type": "circle", "text": "since Monday." }
            ]
        },
        {
            "number": 3,
            "locked": false,
            "segments": [
                { "type": "text", "text": "Cindy " },
                { "type": "blank", "answer": "has been" },
                { "type": "text", "text": " (be) to the amusement park " },
                { "type": "circle", "text": "several times." }
            ]
        },
        {
            "number": 4,
            "locked": false,
            "segments": [
                { "type": "text", "text": "Dan " },
                { "type": "blank", "answer": "hasn't played" },
                { "type": "text", "text": " (not play) video games " },
                { "type": "circle", "text": "for a month." }
            ]
        },
        {
            "number": 5,
            "locked": false,
            "segments": [
                { "type": "text", "text": "He " },
                { "type": "blank", "answer": "has visited" },
                { "type": "text", "text": " (visit) his grandma " },
                { "type": "circle", "text": "every day this week." }
            ]
        }
    ]
}