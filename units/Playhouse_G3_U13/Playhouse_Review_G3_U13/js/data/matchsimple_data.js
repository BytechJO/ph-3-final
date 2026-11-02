//  ****************************************** //
//  MatchOnImage - Data file
//  Each group has ONE image with several points positioned ON it
//  (topPct/leftPct = position as a % of the image's width/height).
//  Every word (left or right list) has its own dot too, and must be
//  connected with a line to its matching point on the picture.
//  ****************************************** //
var matchsimple_data = {
     mainTitleAudio: "../audios/under.mp3",
    "subTitleTextLeft": "<span class='orange_text'>1</span> <i>Match.</i>",

    /*
        NOTE: topPct/leftPct below are PLACEHOLDER positions (roughly
        spread out top-to-bottom on the picture) - open your real image,
        find where each item actually is, and convert to a % of the
        image's full width/height: pct = pixel / full_size * 100.
        "correctPointId" on each word is also a guess and should be
        checked against your answer key.
    */
    "groups": [
        {
            "image": "../images/pages/activities/43.jpg",
            "points": [
                { "id": "p1", "topPct":24, "leftPct": 50 },
                { "id": "p2", "topPct": 24, "leftPct": 30 },
                { "id": "p3", "topPct": 38, "leftPct": 60 },
                { "id": "p4", "topPct": 60, "leftPct": 50 },
                { "id": "p5", "topPct": 57, "leftPct": 68 },
                { "id": "p6", "topPct": 92, "leftPct": 60 }
            ],
            "leftItems": [
                { "id": "l1", "text": "ski cap", "correctPointId": "p1" },
                { "id": "l2", "text": "belt", "correctPointId": "p4" },
                { "id": "l3", "text": "boots", "correctPointId": "p6" }
            ],
            "rightItems": [
                { "id": "r1", "text": "woollen scarf", "correctPointId": "p3" },
                { "id": "r2", "text": "watch", "correctPointId": "p5" },
                { "id": "r3", "text": "umbrella", "correctPointId": "p2" }
            ]
        },
        {
            "image": "../images/pages/activities/53.jpg",
            "points": [
                { "id": "p1", "topPct": 79, "leftPct": 20 },
                { "id": "p2", "topPct": 67, "leftPct": 15 },
                { "id": "p3", "topPct": 45, "leftPct": 25 },
                { "id": "p4", "topPct": 56, "leftPct": 64 },
                { "id": "p5", "topPct": 70, "leftPct": 45 },
                { "id": "p6", "topPct": 85, "leftPct": 55 }
            ],
            "leftItems": [
                { "id": "l1", "text": "earrings", "correctPointId": "p4" },
                { "id": "l2", "text": "necklace", "correctPointId": "p5" },
                { "id": "l3", "text": "sunglasses", "correctPointId": "p3" }
            ],
            "rightItems": [
                { "id": "r1", "text": "blouse", "correctPointId": "p6" },
                { "id": "r2", "text": "bracelet", "correctPointId": "p1" },
                { "id": "r3", "text": "ring", "correctPointId": "p2" }
            ]
        }
    ]
}