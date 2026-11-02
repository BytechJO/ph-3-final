//  ****************************************** //
//  WordSearch - Data file
//  Each word stores its exact cell path [row,col] in the grid (0-indexed),
//  so validation just needs to compare the student's dragged path against
//  this list (in either direction) - no re-parsing of the grid is needed.
//  ****************************************** //
var wordsearch_data = {
    "mainTitleAudio": "../audios/under.mp3",
    "subTitleTextLeft": "Find the words above in the word search.",
    "subTitleAudio": "../audios/under.mp3",

    "gridSize": 16,

    "grid": [
        ["N","S","X","S","B","E","S","A","S","T","S","E","T","A","E","A"],
        ["A","E","O","E","W","Y","A","M","L","K","E","N","Y","A","T","L"],
        ["D","E","I","L","A","Y","U","I","W","I","T","D","Y","T","E","W"],
        ["A","E","P","W","T","N","U","Z","T","I","R","T","C","F","E","A"],
        ["S","G","L","R","H","T","O","U","S","G","R","Z","O","D","G","Y"],
        ["G","A","A","E","U","W","L","A","T","A","S","R","S","X","F","S"],
        ["C","P","Y","O","A","D","E","X","P","E","M","M","R","O","R","A"],
        ["A","F","T","E","N","T","O","F","I","V","E","R","Y","T","L","E"],
        ["K","A","E","G","L","E","Z","P","E","A","T","O","U","T","I","O"],
        ["E","S","N","C","J","I","V","G","O","F","I","S","Z","I","N","G"],
        ["V","K","N","S","O","O","G","E","A","T","N","I","L","V","D","R"],
        ["N","A","I","C","V","R","E","O","R","E","M","G","C","G","I","F"],
        ["N","I","S","G","M","M","F","C","S","I","N","G","B","S","A","N"],
        ["O","P","E","V","U","A","R","S","I","T","C","O","W","I","T","S"],
        ["A","E","F","E","R","A","E","E","A","R","Q","E","E","B","D","Z"],
        ["H","E","C","V","Y","A","C","E","L","E","B","R","A","T","E","T"]
    ],

    // left column of the word list (as in the reference image)
    "wordsLeft": ["w_always", "w_cake", "w_celebrate", "w_eatout", "w_sing"],
    // right column of the word list
    "wordsRight": ["w_india", "w_kenya", "w_never", "w_party", "w_playtennis"],

    /*
        "cells" is now a LIST OF SOLUTIONS: some words happen to appear more
        than once in this particular grid by coincidence (e.g. "always",
        "eat out" and "party" each show up in two different straight lines).
        Storing every valid occurrence means the student is marked correct
        no matter which real occurrence they drag across.
    */
    "words": [
        {
            "id": "w_always", "display": "always",
            "cells": [
                [[5,1],[4,2],[3,3],[2,4],[1,5],[0,6]],
                [[0,15],[1,15],[2,15],[3,15],[4,15],[5,15]]
            ]
        },
        {
            "id": "w_cake", "display": "cake",
            "cells": [
                [[6,0],[7,0],[8,0],[9,0]]
            ]
        },
        {
            "id": "w_celebrate", "display": "celebrate",
            "cells": [
                [[15,6],[15,7],[15,8],[15,9],[15,10],[15,11],[15,12],[15,13],[15,14]]
            ]
        },
        {
            "id": "w_eatout", "display": "eat out",
            "cells": [
                [[9,0],[8,1],[7,2],[6,3],[5,4],[4,5]],
                [[8,8],[8,9],[8,10],[8,11],[8,12],[8,13]]
            ]
        },
        {
            "id": "w_sing", "display": "sing",
            "cells": [
                [[12,8],[12,9],[12,10],[12,11]]
            ]
        },
        {
            "id": "w_india", "display": "India",
            "cells": [
                [[8,14],[9,14],[10,14],[11,14],[12,14]]
            ]
        },
        {
            "id": "w_kenya", "display": "Kenya",
            "cells": [
                [[1,9],[1,10],[1,11],[1,12],[1,13]]
            ]
        },
        {
            "id": "w_never", "display": "never",
            "cells": [
                [[7,4],[8,5],[9,6],[10,7],[11,8]]
            ]
        },
        {
            "id": "w_party", "display": "party",
            "cells": [
                [[6,1],[5,2],[4,3],[3,4],[2,5]],
                [[6,8],[5,9],[4,10],[3,11],[2,12]]
            ]
        },
        {
            "id": "w_playtennis", "display": "play tennis",
            "cells": [
                [[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2],[11,2],[12,2]]
            ]
        }
    ]
}