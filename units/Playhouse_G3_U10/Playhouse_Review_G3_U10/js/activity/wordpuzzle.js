//  ****************************************** //
//  WordPuzzle - Version no: 1.2
//  Date updated - August 02, 2020 
//  ****************************************** //
window.WordPuzzle = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");    
    this.settings = {        
        'puzzle_matrix'  : ob[0].querySelector('.puzzlematrix'),
        'puzzle_clues'   : ob[0].querySelector('.puzzleclues'),        
        'num_rows'       : (dataObj.questions).rows,
        'num_columns'    : (dataObj.questions).columns,
        'data_obj'       : dataObj,
        'parent_holder'  : obj[0]
    } 
    this.init(this.settings);
}

WordPuzzle.prototype = {
    init:function(ob){            
        ob.tabThroughCols = true;        
        ob._userWordsHorizontal = [];
        ob._userWordsVertical = [];
        ob.pose = 40;
        this.ob = ob;        
        this.buildPuzzleMatrix(ob);
    },
    buildPuzzleMatrix:function(ob){ 
        this.deleteChild(ob.puzzle_matrix);
        var quesObj = (ob.data_obj).questions;
        if((quesObj[0].horizontalwords).length > 0){        
            this.addCells('row', (quesObj[0].horizontalwords));
        }
        if((quesObj[0].verticalwords).length > 0){        
            this.addCells('column', (quesObj[0].verticalwords));
        }        
    },
    addCells:function(aVal, aWordOb){
        var self = this;     
        if(aVal != null){
            var ob = this.ob; 
            var holder = (ob.puzzle_matrix);           
            var theArr = aWordOb;
            for (var hz = 0; hz <theArr.length; hz++) {               
                var rowPos = parseInt(theArr[hz].row);
                var colPos = parseInt(theArr[hz].column);
                var wrdNum = parseInt(theArr[hz].wordnum);
                var wrd = $.trim(theArr[hz].word);
                var tWrdArr = (this.getletters(wrd))[0];
                var sX = ob.pose * (colPos-1); 
                var sY = ob.pose * (rowPos-1);
                // var fClue = (ob.puzzle_clues).getElementsByClassName('clue_'+wrdNum)[0];
                // var fIconWrap  = fClue.getElementsByClassName('icon_wrap')[0];               
                if(tWrdArr.length > 0){
                    for (var rr = 0; rr <tWrdArr.length; rr++) {
                        var divEl = document.createElement('div');
                        var newDivName = (aVal == 'row')? ('cell_'+(rowPos)+'_'+(colPos+rr)):('cell_'+(rowPos+rr)+'_'+(colPos));
                        var isExisting = holder.getElementsByClassName(newDivName).length; 
                        if(isExisting <= 0){
                            divEl.setAttribute('class', 'cell'); 
                            divEl.classList.add(newDivName);
                            
                            var t = document.createElement("input");                               
                            t.setAttribute("type", "text");
                            t.setAttribute("value", tWrdArr[rr]);
                            t.setAttribute("maxlength", 1);  
                           t.onkeydown = function(e){ 
                                // $(this).select();
                                self.thisCellDown(e);
                            }
                           /*  t.on("input", function(e){    
                                self.thisCellDown(e);        
                            });*/
                            t.onkeyup = function(e){
                                
                                self.thisCellUp(e);
                            }             
                            divEl.appendChild(t); 
                            if(rr==0){
                                var n = document.createElement("p");  
                                divEl.appendChild(n);
                                divEl.getElementsByTagName('p')[0].innerHTML = wrdNum;
                            }  
                            divEl.setAttribute('data-row', (aVal == 'row'? rowPos : rowPos+rr));                             
                            divEl.setAttribute('data-column', (aVal == 'row'? colPos+rr : colPos));                             
                            divEl.setAttribute('data-letter', tWrdArr[rr]);
                            divEl.setAttribute('data-result', 0);
                            holder.appendChild(divEl);                           
                            if(aVal == 'row'){
                                divEl.style.top = sY + 'px';
                                divEl.style.left = (sX + (rr * ob.pose)) +'px'; 
                            }else{
                                divEl.style.top = (sY + (rr * ob.pose)) + 'px';
                                divEl.style.left = sX + 'px';
                            }
                            
                        }else{                                
                            if(rr==0){
                                divEl = holder.getElementsByClassName(newDivName)[0];
                                var n = document.createElement("p");  
                                divEl.appendChild(n);
                                divEl.getElementsByTagName('p')[0].innerHTML = wrdNum;
                            } 
                        }
                    
                    }
                }                
            }
            
        }
         
    },
    thisCellDown:function(e){      
        var ob = this.ob;
        var keyCode =  e.keyCode; 
        if(keyCode > 64 && keyCode < 91) {
            var thisRow = parseInt(e.target.parentElement.attributes['data-row'].value);
            var thisCol = parseInt(e.target.parentElement.attributes['data-column'].value);
            if(thisCol >=ob.num_columns){
                ob.tabThroughCols = false;
            }else{
                var nxtCellClass =(ob.tabThroughCols)? '.cell_'+thisRow+'_'+(thisCol+1): '.cell_'+(thisRow+1)+'_'+thisCol;// '.cell_'+thisRow+'_'+(thisCol+1);
                var nxtCell =  (ob.puzzle_matrix).querySelectorAll(nxtCellClass);           
                if(nxtCell.length == 0){
                    ob.tabThroughCols = !(ob.tabThroughCols);
                }            
            }             
           /* 
            
            //(charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)
            
            //$(this).val($(this).val().replace(/[^a-z]/gi, ''));
            (e.target).style.color='black';      
            (e.target).focus();
            (e.target).select();*/
        } else {           
            (e.target).value = '';
        }         
               
    },
    thisCellUp:function(e){
        var ob = this.ob;         
        var keyCode =  e.keyCode; 
        if(keyCode > 64 && keyCode < 91) {            
            var thisRow = parseInt(e.target.parentElement.attributes['data-row'].value);
            var thisCol = parseInt(e.target.parentElement.attributes['data-column'].value);         
            var nxtCellClass = (ob.tabThroughCols)? '.cell_'+thisRow+'_'+(thisCol+1): '.cell_'+(thisRow+1)+'_'+thisCol;
            var nxtCell = (ob.puzzle_matrix).querySelectorAll(nxtCellClass);
            var tInput;
            if(nxtCell.length > 0 ){ 
                tInput = (nxtCell[0].getElementsByTagName('input'))[0];
                tInput.focus();
                tInput.select();
                this.checkForValidateEnable();            
            }
        }else{
            (e.target).value = '';            
        }
    },
    checkForValidateEnable:function(){
        var ob = this.ob;      
        var puzzl = (ob.puzzle_matrix);
        var puzzCell = puzzl.querySelectorAll('.cell');   
        var letterAdded = false; 
        if(puzzCell.length > 0){
            for (var i = 0; i < puzzCell.length; i++) {  
                var tInput = (puzzCell[i].getElementsByTagName('input'))[0];  
                if(tInput.value != ''){
                    if(!letterAdded){
                        letterAdded = true;
                        break;
                    }
                }
            }
        }
        if(letterAdded){
            document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
            document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
        }        
    },
    validate:function(){
        var ob = this.ob;      
        var puzzl = (ob.puzzle_matrix);
        var puzzCell = puzzl.querySelectorAll('.cell');  
        var horzCorrect, vertCorrect = false;  
        if(puzzCell.length > 0){
            for (var i = 0; i < puzzCell.length; i++) {                
                var tInput = (puzzCell[i].getElementsByTagName('input'))[0];
                if(tInput.value != ''){
                    if((tInput.value).toLowerCase() == (puzzCell[i].attributes['data-letter'].value).toLowerCase()){
                        tInput.style.color='green';
                        puzzCell[i].setAttribute('data-result', 1);
                    }else{
                        tInput.style.color='red';
                        puzzCell[i].setAttribute('data-result', 0);
                    }
                }
                            
            }
            var quesObj = (ob.data_obj).questions;

            if((quesObj[0].horizontalwords).length > 0){
                ob._userWordsHorizontal = [];              
                horzCorrect = this.validateCells('row', (quesObj[0].horizontalwords));
            }
            if((quesObj[0].verticalwords).length > 0){     
                ob._userWordsVertical = [];    
                vertCorrect = this.validateCells('column', (quesObj[0].verticalwords));
            }
        }
        
        if(horzCorrect && vertCorrect){
            showFeedback(true, true);                  
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");        
        }else{
            showFeedback(true, false);      
        }
    },
    validateCells:function(aVal, aWordOb){        
        var isCorrect = false;
        if(aVal != null){
            var ob = this.ob; 
            var holder = (ob.puzzle_matrix);
            var theArr = aWordOb;            
            for (var hz = 0; hz <theArr.length; hz++) {
                var rowPos = parseInt(theArr[hz].row);
                var colPos = parseInt(theArr[hz].column);
                var wrdNum = parseInt(theArr[hz].wordnum);
                var wrd = $.trim(theArr[hz].word);
                var tWrdArr = (this.getletters(wrd))[0];
                
                var tWrdCorr = 0;
                if(aVal == 'row'){
                    ob._userWordsHorizontal[hz] = 0;
                } else{
                    ob._userWordsVertical[hz] = 0;
                }
                if(tWrdArr.length > 0){
                    for (var rr = 0; rr <tWrdArr.length; rr++) {                        
                        var divName = (aVal == 'row')? ('cell_'+(rowPos)+'_'+(colPos+rr)):('cell_'+(rowPos+rr)+'_'+(colPos));
                        var divEl = holder.getElementsByClassName(divName)[0];
                        if(divEl.getAttribute('data-result') == 1){
                            tWrdCorr++;
                        }
                    }
					var fThisClue = (aVal == 'row')?'row':'col';
                    var fClue = (ob.puzzle_clues).getElementsByClassName('clue_'+fThisClue+'_'+wrdNum)[0];                            
                    var fIconWrap  = fClue.getElementsByClassName('icon_wrap')[0];                   
                    if(tWrdCorr == tWrdArr.length){
                        if(aVal == 'row'){
                            ob._userWordsHorizontal[hz] = 1;
                        } else{
                            ob._userWordsVertical[hz] = 1;
                        }
                        if(fIconWrap!=undefined && fIconWrap!=null){    
                            fIconWrap.style.display = 'block'; 
                            (fIconWrap.querySelector('.cross')).style.display = 'none';
                            (fIconWrap.querySelector('.tick')).style.display = 'block';
                            
                        }
                    }else{
                        if(aVal == 'row'){
                            ob._userWordsHorizontal[hz] = 0;
                        }else{
                            ob._userWordsVertical[hz] = 0;                             
                        }
                        if(fIconWrap!=undefined && fIconWrap!=null){                            
                            fIconWrap.style.display = 'block'; 
                            (fIconWrap.querySelector('.tick')).style.display = 'none';
                            (fIconWrap.querySelector('.cross')).style.display = 'block';
                        }
                    }
                }                
            }             
        }        
        if(aVal == 'row'){
            isCorrect = (((ob._userWordsHorizontal).join('').split('0'))[0]).length == (ob._userWordsHorizontal).length;             
        }else{
            isCorrect = (((ob._userWordsVertical).join('').split('0'))[0]).length == (ob._userWordsVertical).length;               
        }
        return isCorrect;
    },
    showIcons:function(aBoo, aVal){
        var ob = this.ob;        
        var e = (ob.activity_area);
        var elsQue = e.querySelectorAll('.que');       
        for (var i = 0; i < elsQue.length; i++) {
            if(aBoo){
                (elsQue[i].querySelector('.icon_wrap')).style.display = 'block'; 
                if(aVal[i] == 1){
                    (elsQue[i].querySelector('.tick')).style.display = 'block';
                }else{
                    (elsQue[i].querySelector('.cross')).style.display = 'block';
                }
            }else{
                (elsQue[i].querySelector('.icon_wrap')).style.display = 'none'; 
                (elsQue[i].querySelector('.tick')).style.display = 'none';
                (elsQue[i].querySelector('.cross')).style.display = 'none'; 
            }            
        }
    },
    reset:function(){ 
        var self = this;       
        var ob = this.ob;      
        var e = (ob.puzzle_matrix);
       var clues = (ob.puzzle_clues);
        var elsCell = e.querySelectorAll('.cell');    
        if(elsCell.length > 0){
            for (var i = 0; i < elsCell.length; i++) {                
                var tInput = (elsCell[i].getElementsByTagName('input'))[0];
                if(i==0){
                  //  tInput.focus();
                    tInput.select();
                }
                tInput.value = '';
                tInput.setAttribute("value", '');
                tInput.style.color='black';
                elsCell[i].setAttribute('data-result', 0);                            
            }
        }    

        var fClues = (clues).querySelectorAll('.clue');
        if(fClues.length > 0){
            for (var c=0; c<fClues.length; c++){
                var fIconWrap  = fClues[c].getElementsByClassName('icon_wrap')[0];               
                fIconWrap.style.display = 'none'; 
                (fIconWrap.querySelector('.tick')).style.display = 'none';
                (fIconWrap.querySelector('.cross')).style.display = 'none' 
            }
        }
                    
        
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
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);  
    }
}
