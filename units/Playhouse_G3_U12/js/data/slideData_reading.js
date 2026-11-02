var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(242, 101, 33)",
    "playListData" : [
        {
          'audiourl': '../audios/page_108/1.mp3',
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
var reading_data = {
    "mainTitle": "../images/icons/reading.png",
    "mainTitleIcon": "../images/pages/sb-icons/adv_icon_1.png",
    "mainTitleIconPos": {"right": "80px"},
    "mainTitleAudio": "../audios/page_108/READING.mp3",
    "subTitleTextLeft": "<span class='orange_text'>1</span> Read. <span class='orange_text'>Have you ever been to the sea? What kinds of things did you see there?</span>",
    "subTitleTextRight": "",
    "subTitleIcons": [""],
    "subTitleAudio": "../audios/page_108/1_Read.mp3",
    "slides": [
        {
            "layout": "grid_columns",
            "parentClassName": "reading_slide",
            // نفس الفكرة بالضبط: صورة كاملة جاهزة (إطار + تجليد + أي رسمة داخلها) كخلفية وحيدة
            "mainImage": ["../images/pages/page-5/1-background_1.png"],
            "parent_class_name": "full_grid_with_background_image",
            "group_styles": "",
            // NEW: خليتها عنصرين بس (بعدد الأعمدة الفعلي)، مش 8 - الباقي كانوا زيادة بلا استخدام
            "audio": ["../audios/page_108/1.mp3", "../audios/page_108/2.mp3"],
            "word": [
                "On Saturday, I went with my family to the beach. The sea was as clear as glass. It was as blue as the sky. I was able to see a risk of lobsters, a dose of crabs and a troop of shrimp swimming. We saw a squid next to the shore. We saw an eel swimming far away in the sea. We sat next to the seashore. We didn\u2019t see any seahorses. We found many seashells! We dug for oysters and clams. My sister and I took the shells and cleaned them with the sea water. We like to collect seashells. It is as fun as playing in a field. We saw a colony of sea lions",
                "next to the shore. They were as big as tigers. My sister and I were as happy as our parents to see all of those sea creatures. We had the greatest time ever!"
            ],
            "imagePlacePos": [
                { "colWidth": [6, 6], "colData": [1, 1] }
            ]
            // ملاحظة: ما ضفنا slide.image نهائيًا - نفس السبب متل قبل، الرسمة (لو موجودة) هي جزء من mainImage نفسها
        }
    ]
}