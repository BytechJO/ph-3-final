//  ****************************************** //
//  WordSearch - Version no: 4
//  Date updated - May 14, 2020 
//  Latest update - added css_words
//  Latest update - touch functions
//  ****************************************** //
window.WordSearch = function(obj){
    console.log('wordsearch called >> ', obj)
    ob = obj[0].getElementsByClassName("options");
    this.settings = {
        'gridsize'      : ob[0].dataset.gridsize,
        'matrix_holder' : ob[0].querySelector('.wordmatrix'),
        'word_holder'   : ob[0].querySelector('.wordlist'),
        'letters'       : ob[0].dataset.letters,
        'words'         : ob[0].dataset.words,
        'css_words'     : (ob[0].dataset.css_words!=undefined && ob[0].dataset.css_words!=null)?ob[0].dataset.css_words:'none',
        'parent_holder' : obj[0]
    } 
    this.init(this.settings);
}
WordSearch.prototype = {
    init:function(ob){
        ob.wordList = this.getWords(ob.words);
        this.buildWordList(ob);
        this.buildMatrix(ob); 
        ob._startSelect = false;
        ob._selCellArr = [];
        ob._selWordArr = [];
        ob.correctCount = 0;
        ob.allCorrect = 0;
        this.addSlideListeners(ob);
        this.ob = ob;
    },
    buildMatrix:function(ob){          
        this.deleteChild(ob.matrix_holder);
        var self = this;      
        var letArr = this.getletters(ob.letters);        
        for (var row = 0; row < ob.gridsize; row++) {
            var divEl = document.createElement('div');
            divEl.setAttribute('class', 'row row_'+(row+1));            
            divEl.classList.add("inLine");
            (ob.matrix_holder).appendChild(divEl);
            for (var col = 0; col < ob.gridsize; col++) {
                var colEl = document.createElement('div');                
                var t = document.createElement("p");
                colEl.setAttribute('class', 'col col_'+(row+1)+'_'+(col+1));                
                colEl.appendChild(t);
                colEl.getElementsByTagName('p')[0].innerHTML = letArr[row][col]; 
                colEl.addEventListener("touchstart", function( event ) {                     
                    self.cellDown($(this));
                });
                colEl.addEventListener("mousedown", function( event ) { 
                    self.cellDown($(this));
                });                
                colEl.addEventListener("mouseover", function( event ) {                     
                    self.cellMove($(this).attr('class'));
                });                
                colEl.addEventListener("mouseup", function( event ) { 
                    if(ob._startSelect){
                        $(this).addClass('selWord');
                        var thisCell = $(this).attr('class').split(' ')[1];                       
                        if ($.inArray(thisCell, ob._selCellArr) == -1 ){
                            ob._selCellArr.push(thisCell); 
                            ob._selWordArr.push($(this).find('p').html());
                        }
                        self.validateSelWords(ob);
                        ob._startSelect = false;
                    }                    
                });                
                divEl.appendChild(colEl);
            }
        }
    },
    cellDown:function(cell){
        var ob = this.ob;      
        ob._startSelect = true;
        ob._selWordArr = [];
        ob._selCellArr = [];
        if(ob._startSelect && cell!=undefined){
            (cell).addClass('selWord');
            var thisCell = (cell).attr('class').split(' ')[1];
           if ($.inArray(thisCell, ob._selCellArr) == -1 ){
            ob._selCellArr.push(thisCell); 
            ob._selWordArr.push((cell).find('p').html());
           }
        } 
    },
    cellMove:function(cell){
        var ob = this.ob; 
        var e = (ob.matrix_holder); 
        if(ob._startSelect && cell!=undefined){
            var fCellClass = (cell).split(' ')[1]; 
            var fCell = $('.'+fCellClass);
            if(fCell != undefined){
                (fCell).addClass('selWord');                  
                if ($.inArray(fCellClass, ob._selCellArr) == -1 ){
                ob._selCellArr.push(fCellClass); 
                ob._selWordArr.push((fCell).find('p').html());
                }
            }
         }
    },    
    cellTouchEnd:function(){
        var ob = this.ob; 
        var self = this;
        if(ob._startSelect){
            self.validateSelWords(ob);
            ob._startSelect = false; 
        }
    },
    addSlideListeners:function(ob){
        var self = this;        
        var parentEl = ob.parent_holder;        
        parentEl.addEventListener("mouseup", function( event ) {             
            if(ob._startSelect){
                self.validateSelWords(ob);
                ob._startSelect = false;
            }
        });
    },
    validateSelWords:function(ob){ 
        var wordArr = this.changeCase(ob.wordList);
        var e = (ob.matrix_holder); 
        var e1 = (ob.word_holder);
        if(ob._selWordArr.length > 0){
            var tWord = (ob._selWordArr.join('')).toLowerCase();
            var isCorrect = false;
            var theIndx = $.inArray(tWord, wordArr);
            if(theIndx >= 0){
                isCorrect = true;
            } else {
                tWord = (ob._selWordArr.reverse().join('')).toLowerCase();
                theIndx = $.inArray(tWord, wordArr);
                if(theIndx >= 0){
                    isCorrect = true;
                }
            }
            if(isCorrect){
                if(ob._selWordArr.length == ob._selCellArr.length ){
                    for(var cc= 0;cc<ob._selCellArr.length;cc++){
                        e.getElementsByClassName(ob._selCellArr[cc])[0].classList.remove("selWord");
                        e.getElementsByClassName(ob._selCellArr[cc])[0].classList.add("correctWord");
                    }
                }
                var _w = e1.getElementsByClassName('word_'+(theIndx+1))[0];
                var _p = _w.getElementsByTagName('p')[0];
                var _i = _w.getElementsByTagName('i')[0];
                if(_p.innerHTML == tWord && (_i.style.display == 'none')){
                   ob.correctCount++;
                    _i.style.display = "block"; 
                }
            } else {
                for(var cc= 0;cc<ob._selCellArr.length;cc++){
                    e.getElementsByClassName(ob._selCellArr[cc])[0].classList.remove("selWord");                                       
                }
            }
        }
        this.checkTotals(ob);
    },
    checkTotals:function(ob){
        if(ob.wordList.length > 0){
            if(ob.correctCount == ob.wordList.length){
                ob.allCorrect = 1;                
                showFeedback(true, true);
            }
        }
    },    
    buildWordList:function(ob){
        this.deleteChild(ob.word_holder);
        var cssArr = [];
        if(ob.css_words != 'none'){
            cssArr = ((ob.css_words).toString()).split(',');            
        }
        if(ob.wordList.length > 0){
            for (var r = 0; r < ob.wordList.length; r++) {
                var divEl = document.createElement('div');
                divEl.setAttribute('class', 'word word_'+(r+1));
                divEl.classList.add("inLine");           
                var i = document.createElement("i");
                i.setAttribute('class', 'fa fa-check green');
                i.style.display = "none";
                divEl.appendChild(i);
                var t = document.createElement("p");
                if(ob.css_words != 'none'){
                    if(cssArr[r].length >0){
                        var tcss = cssArr[r].split('|');                
                        if(tcss.length > 0){
                            divEl.style.position = "absolute";
                            for(var css=0;css<tcss.length;css++){
                                var tArr = tcss[css].split(':');
                                if($.trim(tArr[0]) == 'left'){
                                    divEl.style.left = tArr[1];
                                }
                                if($.trim(tArr[0]) == 'top'){
                                    divEl.style.top = tArr[1];
                                }                                
                            }
                        }
                    }
                }
                divEl.appendChild(t);
                divEl.getElementsByTagName('p')[0].innerHTML = ob.wordList[r];
                (ob.word_holder).appendChild(divEl);  
            }
        }
    },
    resetWordSearch:function(){        
        var ob = this.ob;      
        var e = (ob.matrix_holder);
        var elsCorrect = e.querySelectorAll('.correctWord');
        var elsSelected = e.querySelectorAll('.selWord');        
        for (var i = 0; i < elsCorrect.length; i++) {
            elsCorrect[i].classList.remove('correctWord');
        }
        for (var ii = 0; ii < elsSelected.length; ii++) {
            elsSelected[ii].classList.remove('selWord');
        }
        var el = (ob.word_holder);
        var elsIcon = el.querySelectorAll("i");        
        for (var j = 0; j < elsIcon.length;j++) {
            elsIcon[j].style.display = "none";
        }
        ob.correctCount = 0;
        ob.allCorrect = 0;  
    },
    deleteChild:function(obj){        
        var e = obj;
        var child = e.lastElementChild;  
        while (child) { 
            e.removeChild(child); 
            child = e.lastElementChild; 
        } 
    },
    getWords:function(str){
        var arr = [];        
        if(str != null){
            str = ((str).toString()).split(',');                       
            for(var i=0;i<str.length;i++){                
                var tmpStr = ($.trim(str[i])).split('-');                
                arr[i] = tmpStr[0];                               
            }
        }         
        return arr;
    },
    getletters:function(str){
        var arr = [];        
        if(str != null){
            str = ((str).toString()).split(',');                       
            for(var i=0;i<str.length;i++){
                arr[i]= [];
                var tmpStr = $.trim(str[i]);
                arr[i]=tmpStr.split('');                
            }
        }         
        return arr;
    },
    changeCase:function(arr){
        var arr1 = [];        
        if(arr.length > 0){       
            for(var i=0;i<arr.length;i++){
                arr1[i] = arr[i].toLowerCase();                               
            }
        }         
        return arr1;
    }
}