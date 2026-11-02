//  ****************************************** //
//  PunctuationMarks - Data file
//  Each sentence is built from ordered "segments":
//    { type:"text",  text:"..." }              -> fixed text, not editable
//    { type:"blank", answer:"..." }             -> a small input the student
//                                                   must type the missing
//                                                   punctuation into
//  "answer" holds the EXACT characters expected in that blank, e.g. a
//  comma+opening-quote together (,") or just a closing quote (").
//  ****************************************** //

var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(53, 130, 180)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/page_20/Remember!.mp3',
        },
        {
          'url': '',
        },
        {
          'url': '',
        },
        {
          'url': '',
        }
    ],
}

var punctuation_data = {
      "mainTitle"             : "../images/pages/sb-icons/phonics-sent-build.png",
    "mainTitleIcon"         : "",
    "mainTitleIconPos"      : {"right": "-18px"},
    "mainTitleAudio": "../audios/page_22/PHONICS_and_Sentence_Building.mp3",
    "subTitleTextLeft": "<span class='orange_text'>2</span> Read and write. Use the &lsquo; &rsquo; marks and commas ( , ) in the correct places.",
    "subTitleAudio": "../audios/page_22/2_Read_and_write_Use_thmarks_and_commain_the_correct_places.mp3",
    "titleIcon": "../images/pages/sb-icons/mascot_pencil.png",

    // decorative image next to the list, like the tacos plate in the reference
    "rightImage": "../images/pages/activities/tacos_plate.png",

    "questions": [
        {
            // Susan said, "The tacos look good."
            "segments": [
                { "type": "text", "text": "Susan said" },
                { "type": "blank", "answer": ",\'" },
                { "type": "text", "text": "The tacos look good" },
                { "type": "blank", "answer": "\'" },
                { "type": "text", "text": "." }
            ]
        },
        {
            // "I love this food," I said.
            "segments": [
                { "type": "blank", "answer": "\'" },
                { "type": "text", "text": "I love this food" },
                { "type": "blank", "answer": "\'," },
                { "type": "text", "text": "I said." }
            ]
        },
        {
            // "Can you please pass me the spaghetti?" said Dan.
            "segments": [
                { "type": "blank", "answer": "\'" },
                { "type": "text", "text": "Can you please pass me the spaghetti?" },
                { "type": "blank", "answer": "\'" },
                { "type": "text", "text": "said Dan." }
            ]
        },
        {
            // Mum said, "I made Mexican food for dinner tonight!"
            "segments": [
                { "type": "text", "text": "Mum said" },
                { "type": "blank", "answer": ",\'" },
                { "type": "text", "text": "I made Mexican food for dinner tonight!" },
                { "type": "blank", "answer": "\'" }
            ]
        },
        {
            // "Let's eat out for dinner!" said Mum.
            "segments": [
                { "type": "blank", "answer": "\'" },
                { "type": "text", "text": "Let's eat out for dinner!" },
                { "type": "blank", "answer": "\'" },
                { "type": "text", "text": "said Mum." }
            ]
        }
    ]
}