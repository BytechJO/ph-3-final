var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(242, 101, 33)",
    "playListData" : [
        {
          'audiourl': '../audios/page_100/1.mp3',
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
    "mainTitleAudio": "../audios/page_100/READING.mp3",
    "subTitleTextLeft": "<span class='orange_text'>1</span> Read. <span class='orange_text'>Have you ever seen a butterfly? Describe what your butterfly looked like.</span>",
    "subTitleTextRight": "",
    "subTitleIcons": [""],
    "subTitleAudio": "../audios/page_100/1_Read.mp3",
    "slides": [
        {
            "layout": "grid_columns",
            "parentClassName": "reading_slide",
            // NEW: هاي هي الصورة الكاملة يلي فيها الإطار + الفراشات + البنت سوا
            "mainImage": ["../images/pages/page-5/1-background_1.png"],
            "parent_class_name": "full_grid_with_background_image",
            "group_styles": "",
            "audio": ["../audios/page_100/1.mp3", "../audios/page_100/2.mp3"],
            // NEW: عمودين بس - نص القصة اليسار، تكملة القصة اليمين
            "word": [
                "Little Helen was walking one day in the field with her mother and pointed to a tree. \u2018Mummy,\u2019 Helen said. \u2018Look at that bug on the branch of the tree. What is that?\u2019 \u2018That\u2019s a caterpillar,\u2019 Mummy said. \u2018This caterpillar will one day change into a butterfly.\u2019 Helen was amazed. She looked closely at the caterpillar. \u2018But, Mummy, it has many little legs. It doesn\u2019t have any wings. It doesn\u2019t look like a butterfly.\u2019 \u2018That\u2019s because it\u2019s still a caterpillar,\u2019 said Mummy. \u2018After a while, this caterpillar will wrap itself in a cocoon and stay there until it turns into a butterfly.\u2019 \u2018Wow!\u2019 said Helen. \u2018I love butterflies. I think that they are the most beautiful of all bugs. They have the most colourful wings!\u2019 \u2018Look, Helen,\u2019 Mummy said, \u2018I can see a lot of butterflies over there next to the flowers.",
                "Isn\u2019t that the most wonderful sight ever?\u2019 \u2018Yes, Mummy!\u2019 exclaimed Helen. \u2018Today is the greatest day ever!\u2019"
            ],
            "imagePlacePos": [
                { "colWidth": [6, 6], "colData": [1, 1] }
            ]
            // NEW: ما في داعي أبدًا لحقل "image" هون - الرسمة موجودة أصلاً بالـ mainImage
        }
    ]
}
