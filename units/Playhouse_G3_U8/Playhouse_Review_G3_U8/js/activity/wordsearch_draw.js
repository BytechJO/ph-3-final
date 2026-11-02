//  ****************************************** //
//  WordSearch - Version no: 5
//  Date updated - June 19, 2020 
//  Date updated - September 02, 2020 (matrix touchmove touchend touchcancel added)
//  Date updated - September 12, 2020 (spaces in words validated)
//  ****************************************** //
window.WordSearch = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    this.settings = {
        'num_rows'      : ((dataObj.questions)[0]).rows,
        'num_columns'   : ((dataObj.questions)[0]).columns,
        'matrix_holder' : ob[0].querySelector('.wordmatrix'),
        'word_holder'   : ob[0].querySelector('.wordlist'),
        'letters'       : ((dataObj.questions)[0]).letters,
        'words'         : ((dataObj.questions)[0]).words,
        'css_words'     : (ob[0].dataset.css_words!=undefined && ob[0].dataset.css_words!=null)?ob[0].dataset.css_words:'none',
        'data_obj'      : dataObj,
        'activity_area' : ob[0],
        'parent_holder' : obj[0]
    }
    this.orientationAdjust = 'yes';
    this.init(this.settings);
}
WordSearch.prototype = {
    init:function(ob){
        ob.wordList = this.getWordsFromOb(ob.words); 
        ob._startSelect = false;
        ob._selCellArr = [];
        ob._selStart = '';
        ob._selEnd = '';
        ob._selWordArr = [];
        ob.boxSize = 0;
        ob.fontSize = 30;
        ob.matrixbuilt = 'no';
        ob.wordlistbuilt = 'no';
        ob.mobileView = 'no';
        ob._rectOb= {};
        (ob._rectOb).left = 0;
        (ob._rectOb).top = 0;
        (ob._rectOb).width = 0;
        (ob._rectOb).height = 0;
        (ob._rectOb).endX = 0;
        (ob._rectOb).endY = 0;
        (ob._rectOb).angle = 0;
        (ob._rectOb).offsetPose = 0;
        (ob._rectOb).originalwidth = 0;
        (ob._rectOb).transformPerc = '';
        (ob._rectOb).borderRadius = '';
        ob.correctCount = 0;
        ob.allCorrect = 0;
        ob.rightOffset = 0;
        ob.corrWords = [];
        
        ob.rLeft = 0;
        ob.rTop =0;
        ob.trackTxt = '';
        
        this.buildWordList(ob);
        this.buildMatrix(ob); 
        this.addSlideListeners(ob);
       
        this.ob = ob;
    },
    screenPoseAdjustments:function(){
        var self = this;
        var ob = this.ob;
        var $options = $(ob.activity_area);
        var $parent = $(ob.parent_holder);
        var $data = ((ob.data_obj).questions)[0];
        ob.mobileView = 'no';
        $options.find('.wordmatrix_holder').css('height', $options.height()-10);
        ob.rightOffset = $('.container').css('margin-left');
        if (isMobile()) {
            ob.rightOffset = 0;
        }
        if(ob.wordlistbuilt == 'yes'){
            var totalWidth = parseInt($options.find('.wordlist').css('width'))+(ob.boxSize*ob.num_columns);
            var availWidth = $options.find('.all_cont').innerWidth();
            if(availWidth < 900){
                $options.find('.wordmatrix_holder').css('width', '100%');
                //  console.log(' here --- ',availWidth, $options.find('.wordmatrix_holder').innerWidth());
                var tmpWid = $options.find('.wordmatrix_holder').innerWidth() / ob.num_columns;
                var tmpHt = parseInt($options.find('.wordmatrix_holder').innerHeight()) / ob.num_rows;
                ob.boxSize = (tmpWid <= tmpHt) ? tmpWid : tmpHt;
               
                ob.mobileView = 'yes';
                $options.find('.wordlist').addClass('onPop');
                self.showWordList(false);
                console.log('ob.boxSize:: ', availWidth,ob.boxSize);
                $parent.find('.wordlist_but').removeClass('d-none');
            }else{
                $options.find('.wordmatrix_holder').css('width', '50vw');
                var tmpWid = parseInt($options.find('.wordmatrix_holder').innerWidth()) / ob.num_columns;
                var tmpHt = parseInt($options.find('.wordmatrix_holder').innerHeight()) / ob.num_rows;
                ob.boxSize = (tmpWid <= tmpHt) ? tmpWid : tmpHt;
                ob.mobileView = 'no';                
                $parent.find('.wordlist_but').addClass('d-none');               
                $options.find('.wordlist').removeClass('onPop');
                self.showWordList(true);
            }
            
            var min_font_size = (typeof $data.fontsizemin !=undefined && $data.fontsizemin !=null)? parseInt($data.fontsizemin): 30;
            ob.fontSize = '90%';
            //  ob.fontSize = ((ob.boxSize -10) < min_font_size)? min_font_size : Math.round(ob.boxSize -10);
            //  console.log('min-size>> ',$data.fontsizemin,min_font_size,(ob.boxSize -10),   ((ob.boxSize -10) < min_font_size), ob.fontSize);
        } 
        $parent.find('.wordlist_but').css('right', (parseInt(ob.rightOffset)+10)+'px');      
        self.setSizes();
    },
    showWordList:function(bool){
        var ob = this.ob;
        var $options = $(ob.activity_area);
        var $wordList = $options.find('.wordlist');
        if($wordList.hasClass('onPop')){
           if(!bool){
                if($options.find('.wordlist').hasClass('d-block')){
                    $options.find('.wordlist').removeClass('d-block');
                }
                $options.find('.wordlist').addClass('d-none');
            } else{
                if($options.find('.wordlist').hasClass('d-none')){
                    $options.find('.wordlist').removeClass('d-none');
                }
                $options.find('.wordlist').addClass('d-block'); 
            }
        }else{
            if($options.find('.wordlist').hasClass('d-none')){
                $options.find('.wordlist').removeClass('d-none');
            }
            $options.find('.wordlist').addClass('d-block');  
        }
        
        
    },
    buildMatrix:function(ob){          
        this.deleteChild(ob.matrix_holder);
        var self = this; 
        var letArr = this.getletters(ob.letters);    
        var divCorrect = document.createElement('div');
        divCorrect.setAttribute('class', 'corrHolder');  
        (ob.matrix_holder).appendChild(divCorrect);

        var divRect = document.createElement('div');
        divRect.setAttribute('class', 'rect');  
        (ob.matrix_holder).appendChild(divRect);

        for (var row = 0; row < ob.num_rows; row++) {
            var divEl = document.createElement('div');
            divEl.setAttribute('class', 'ws_row row_'+(row+1));            
            divEl.classList.add("d-flex");
            (ob.matrix_holder).appendChild(divEl);
            for (var col = 0; col < ob.num_columns; col++) {
                var colEl = document.createElement('div');                
                var t = document.createElement("p");
                colEl.setAttribute('class', 'ws_col col_'+(row+1)+'_'+(col+1)); 
                // colEl.style.width = ob.boxSize+'px';
                // colEl.style.height = ob.boxSize+'px';
                colEl.appendChild(t);
                colEl.getElementsByTagName('p')[0].innerHTML = letArr[row][col];                              
                divEl.appendChild(colEl);
            }
        }
        ob.matrixbuilt = 'yes';
        
        var matrix = $(ob.matrix_holder);
        var cells =  matrix.find('.ws_col');

        cells.on("touchstart", function( event ) {  
            //ob.trackTxt ='';
            self.cellDown($(this), event);
        });
        cells.on("mousedown", function( event ) { 
            self.cellDown($(this), event);
        });

        cells.on("mouseover", function( event ) {  
            var fCl = ($(this).attr('class')).split(' ')[1];               
             self.cellMove(fCl);
         }); 
        /* cells.on("touchmove", function(e){
             
            // self.cellMove($(this).attr('class'));
            var evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
            var touch = evt.touches[0] || evt.changedTouches[0];
            x = touch.pageX;
            y = touch.pageY;
            console.log('touchmove : ', $(this), event, x, y);
            
         });*/
         cells.on("mouseup", function( event ) { 
            self.cellUp($(this).attr('class'));
         });
        /* cells.on("touchend" || "touchcancel", function(event){
          //   self.cellUp($(this).attr('class'));
         });*/

    },
    setSizes:function(){
        var self = this;
        var ob = this.ob;
        var $options = $(ob.activity_area);
        var matrix = $(ob.matrix_holder); 
        var _par = $(ob.parent_holder);
        if(ob.matrixbuilt == 'yes'){
            
            $options.find('.ws_col').each(function(){
                $(this).css('width', ob.boxSize+'px');
                $(this).css('height', ob.boxSize+'px');
               //$(this).find('p').css({'position' : 'absolute'}); 
				$(this).find('p').css({'position' : 'absolute',"top": "50%","left": "50%","margin-right": "-50%", "transform": "translate(-50%, -50%)"}); 
               // console.log($(this).find('p').css('height'), $(this).find('p').css('line-height'));
                //var mTop = Math.floor((ob.boxSize - (parseInt($(this).find('p').css('line-height'))))/2);
    
            });
            

            
            var lastXBox = matrix.find('.col_1_'+ob.num_columns);
            
            var lastYBox = matrix.find('.col_'+ob.num_rows+'_'+ob.num_columns);
            (ob._rectOb).endX =  lastXBox.position().left + lastXBox.innerWidth();
            (ob._rectOb).endY =  lastYBox.position().top + lastYBox.innerHeight();
            (ob._rectOb).borderRadius =  lastYBox.height();
            (ob._rectOb).height = Math.round(0.8 * $('.col_1_'+ob.num_columns).outerHeight());
            (ob._rectOb).transformPerc = ((Math.round(0.8 * $('.col_1_'+ob.num_columns).outerHeight()))/2);
            (ob._rectOb).originalwidth = Math.round(0.8 * $('.col_1_'+ob.num_columns).outerWidth());
            (ob._rectOb).width = Math.round(0.8 * $('.col_1_'+ob.num_columns).outerWidth());
            (ob._rectOb).offsetPose = Math.round(0.1 * $('.col_1_'+ob.num_columns).outerWidth());
            //console.log( 'setSizes >> ',Math.round($options.find('.wordmatrix').outerWidth()),(ob.boxSize*ob.num_columns) );
			//$options.find('.wordmatrix_holder').css('min-width', (ob.boxSize*ob.num_columns)+'px');
            var marginTopMatrix = Math.round(($options.find('.wordmatrix_holder').height() - $options.find('.wordmatrix').outerHeight())/2);
            var marginTopList = Math.round(($options.find('.wordmatrix_holder').height() - $options.find('.wordlist').outerHeight())/2);
            // console.log( 'setSizes >> ',marginTopMatrix, marginTopList );
            $options.find('.wordmatrix').css('margin-top',marginTopMatrix+'px' );
            // $options.find('.wordlist').css('height',$options.find('.wordmatrix_holder').height()+'px' );
            if($options.find('.wordlist').hasClass('onPop')){
                $options.find('.wordlist').css('margin-top','auto' );
            }else{
                $options.find('.wordlist').css('margin-top',marginTopList+'px' ); 
            }
            
            $options.find('.ws_col').each(function(){
                //console.log($(this).attr('class'),' >> ', $(this).position(), $(this).offset(), $(this).css('width'), $(this).css('height'));
                var cellCls = $(this).attr('class');
                var fCellClass = (cellCls).split(' ')[1];
                if(fCellClass == 'col_1_1'){
                    ob.rLeft = $(this).offset().left;
                    ob.rTop = $(this).offset().top;
                }
                
            });
           
        }       
        if((ob.corrWords).length > 0){
            var e = $(ob.matrix_holder);
            var corr = e.find('.corrHolder');
           // corr.empty();
            for(var cc=0;cc<(ob.corrWords).length; cc++){
                self.drawRect((ob.corrWords)[cc], 'redraw', ((ob.corrWords)[cc]).word);
            }            
        }        
        matrix.on("touchmove", function(e){             
            // self.cellMove($(this).attr('class'));
            var evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
            var touch = evt.touches[0] || evt.changedTouches[0];
            x = touch.clientX;// touch.pageX;
            y = touch.clientY;//touch.pageY;
            //console.log('touchmove : ',x, y, ob.rLeft, ob.rTop, (y > ob.rTop), (x > ob.rLeft)); 
            if((y > ob.rTop) && (x > ob.rLeft)){
                //console.log('x>> ', Math.ceil((x-ob.rLeft)/ob.boxSize));
                //console.log('y>> ', Math.ceil((y-ob.rTop)/ob.boxSize));ws_col 
                var thsCellClss =  'col_'+Math.ceil((y-ob.rTop)/ob.boxSize)+'_'+ Math.ceil((x-ob.rLeft)/ob.boxSize);
                //console.log('thsCellClss>> ', thsCellClss);
				self.cellMove(thsCellClss);
            }
            /*ob.trackTxt = Math.round(x) +':'+ Math.round(y)+':'+thsCellClss;
            ob.trackTxt += '<br>'  +_par.find('.iConsole1').html();
            _par.find('.iConsole1').html(ob.trackTxt) ;*/
         });
         matrix.on("touchend" || "touchcancel", function(e){
			self.cellTouchEnd();
         });
    },
    cellDown:function(cell, evt){
        var self = this;  
        var ob = this.ob;      
        ob._startSelect = true;
        ob._selWordArr = [];
        if(ob._startSelect && cell!=undefined){           
            var thisCell = (cell).attr('class').split(' ')[1];
            (ob._rectOb).left = $('.'+thisCell).position().left + (ob._rectOb).offsetPose;
            (ob._rectOb).top = $('.'+thisCell).position().top + (ob._rectOb).offsetPose;
            ob._selStart = thisCell;
            self.drawRect(ob, 'start', '');
        }
        self.showWordList(false);         
    },
    cellMove:function(cell){
        var self = this; 
        var ob = this.ob; 
        var e = (ob.matrix_holder); 
        var eMatrix = $(ob.matrix_holder); 
        var _par = $(ob.parent_holder);
		var cellCls = cell.value;
		 
		if(cellCls == undefined){
			cellCls = cell.toString();
		}
             //console.log('cellmove >> ', cell, typeof(cell), cellCls, ob._startSelect);
		 if(ob._startSelect && cellCls!=undefined){
			var fCellClass = cellCls;//(cellCls).split(' ')[1]; 
			var fCell = eMatrix.find('.'+fCellClass);
			var fCellLength = eMatrix.find('.'+fCellClass).length;
			//console.log('>> found cell >> ', fCellClass, fCell, fCellLength);
			// ob.trackTxt += ' : '+ fCellClass +'<br>';  
			if(fCell != undefined){
				ob._selEnd = fCellClass;
				var tmpWidth = Math.sqrt((((fCell.position().left+ (ob._rectOb).offsetPose)-((ob._rectOb).left))*((fCell.position().left+ (ob._rectOb).offsetPose)-((ob._rectOb).left)))+(((fCell.position().top+ (ob._rectOb).offsetPose)-((ob._rectOb).top))*((fCell.position().top+ (ob._rectOb).offsetPose)-((ob._rectOb).top))));
				(ob._rectOb).width = tmpWidth+ Math.round(0.8 * fCell.outerWidth());
				var ang = self.angleBetweenTwoPoints((ob._rectOb).endX,(ob._rectOb).top,(fCell.position().left+ (ob._rectOb).offsetPose), (fCell.position().top+ (ob._rectOb).offsetPose), (ob._rectOb).left,(ob._rectOb).top);
				(ob._rectOb).angle = (ang * (180 / Math.PI))*-1;
				self.drawRect(ob, 'move', '');
			}
		}
    },   
    cellUp:function(cell){
        var self = this; 
        var ob = this.ob; 
        if(ob._startSelect && cell != undefined){           
            var thisCell = (cell).split(' ')[1]; 
            ob._selEnd = thisCell;            
            self.validate(ob);
            ob._startSelect = false;
        } 
    },
    cellTouchEnd:function(){
        var ob = this.ob; 
        var self = this;
        if(ob._startSelect){
            self.validate(ob);
            ob._startSelect = false; 
        }
    },
    drawRect:function(ob, axn, nam){
        var e = $(ob.matrix_holder);
        var _par = $(ob.parent_holder);
        var corr = e.find('.corrHolder');
        var rect;
		if(axn != 'redraw'){			
			var $data = ((ob.data_obj).questions)[0];
			var rect_color = (typeof $data.selectionbooxcolor !=undefined && $data.selectionbooxcolor != null) ? $data.selectionbooxcolor : 'blue';
		}
        if(nam == ''){
            rect = e.find('.rect');
        }else{  
            (corr).append('<div class="corr corr_'+nam+'"><div>');
            rect = corr.find('.corr_'+nam);
        }
        
        var obj = (axn == 'redraw')? ob.rectObj : ob._rectOb;       
       
        if(axn == 'start'){
            rect.css({"top": obj.top+"px", "left": obj.left+"px","width": obj.width+"px", "height":obj.height+"px", "border-color":rect_color});            
        }else if(axn == 'move'){
            rect.css({"width": obj.width+"px"});
            rect.css({'transform':'rotate(' + (obj.angle)+ 'deg)'});
            //var tmpO = "'"+obj.transformPerc+" "+obj.transformPerc+"'";            
            rect.css({'transform-origin': ((ob._rectOb).transformPerc + 'px') + ' ' + ((ob._rectOb).transformPerc + 'px') + ' 0px'}); 
        }else if(axn == 'correct' || axn == 'redraw'){            
            rect.css({"top": obj.top+"px", "left": obj.left+"px","width": obj.width+"px", "height":obj.height+"px", 'transform':'rotate(' + (obj.angle)+ 'deg)'});            
            rect.css({'transform-origin': ((obj).transformPerc + 'px') + ' ' + ((obj).transformPerc + 'px') + ' 0px'});
        }
        rect.css({"border-radius":obj.borderRadius});
        rect.css({"display": "block"});
    },
    angleBetweenTwoPoints:function(point1X,point1Y, point2X, point2Y, fixedX,fixedY) {
        angle1 = Math.atan2(point1Y - fixedY, point1X - fixedX);
        angle2 = Math.atan2(point2Y - fixedY, point2X - fixedX);
        return angle1 - angle2; 
    },
    addSlideListeners:function(ob){
        var self = this;        
        var parentEl = ob.parent_holder; 
        var $parent = $(ob.parent_holder);
        var $options = $(ob.activity_area);       
        parentEl.addEventListener("mouseup", function( event ) {             
            if(ob._startSelect){
                self.validate(ob);
                ob._startSelect = false;
            }
        });
        var listDiv =$options.find('.wordlist');        
        $parent.find('.wordlist_but').click(function(){            
            var visibl = (listDiv.hasClass('d-none'));
            self.showWordList(visibl);
        });
    },
    validate:function(ob){ 
        var self = this;  
        var wordArr = this.changeCase(ob.wordList);
		wordArr = this.trimSpaces(wordArr);
        var e = $(ob.matrix_holder); 
        var e1 = (ob.word_holder);        
        var corr = e.find('.corrHolder');
        // console.log('validate >> ',ob._selStart, ob._selEnd, ob._selWordArr, ob._selCellArr, Math.abs((ob._rectOb).angle));
        ob._selWordArr = [];
        ob.allCorrect = self.checkTotals(ob);
        if(ob.allCorrect != 1){
            var startCell = ob._selStart;
            var endCell = ob._selEnd;
            var startArr = getIntArray((startCell).split('_'));
            var endArr = getIntArray((endCell).split('_'));
            var thisCell;
            var tSt = tEd = 0;            
            var selectAng = Math.abs((ob._rectOb).angle);

            if(selectAng == 0 || selectAng == 180){            
                tSt = (startArr[2] < endArr[2])? startArr[2]:endArr[2];
                tEd = (tSt == startArr[2] )? endArr[2]:startArr[2];
                // console.log('0 >> ', selectAng, tSt, tEd);
                for(var s=tSt; s<=tEd;s++){
                    thisCell =  e.find('.col_'+startArr[1]+'_'+s);                    
                    ob._selWordArr.push($(thisCell).find('p').html());
                }
            }else if(selectAng == 90 || selectAng == 270){
                tSt = (startArr[1] < endArr[1])? startArr[1]:endArr[1];
                tEd = (tSt == startArr[1] )? endArr[1]:startArr[1];
                // console.log('0 >> ', selectAng, tSt, tEd);
                for(var s=tSt; s<=tEd;s++){
                    thisCell = e.find('.col_'+s+'_'+startArr[2]);
                    ob._selWordArr.push($(thisCell).find('p').html());                    
                }
            }else if(selectAng == 45){
                tSt = (startArr[1] < endArr[1])? startArr[2]:endArr[2];
                tEd = (tSt == startArr[2] )? endArr[2]:startArr[2];
                s = (tSt == startArr[2])?(startArr[1]):endArr[1];           
                // console.log('45 >> ', selectAng, startArr[2], endArr[2]);
                if( startArr[1] < endArr[1]) {                    
                    r = startArr[1];
                    for(var s=tSt; s<=tEd;s++){
                        thisCell = e.find('.col_'+r+'_'+s);
                        ob._selWordArr.push($(thisCell).find('p').html());                        
                        r++;
                    }
                }else{                      
                    for(var r=tSt; r>=tEd;r--){
                        thisCell = e.find('.col_'+s+'_'+r);
                        ob._selWordArr.push($(thisCell).find('p').html());                        
                        s++;
                    }
                }
            }else if(selectAng == 135){                
                tSt = (startArr[1] < endArr[1])? startArr[2]:endArr[2];
                tEd = (tSt == startArr[2] )? endArr[2]:startArr[2];
                s = (tSt == startArr[2])?(startArr[1]):endArr[1];           
                // console.log('45 >> ', selectAng, startArr[2], endArr[2]);
                if( startArr[1] < endArr[1]) {                    
                    r = startArr[1];                    
                    for(var s=tSt; s>=tEd;s--){
                        thisCell = e.find('.col_'+r+'_'+s);
                        ob._selWordArr.push($(thisCell).find('p').html());                        
                        r++;
                    }
                }else{                    
                    for(var r=tSt; r<=tEd;r++){
                        thisCell = e.find('.col_'+s+'_'+r);
                        ob._selWordArr.push($(thisCell).find('p').html());                        
                        s++;
                    }
                }
            }
            
            // console.log('word >> ', ob._selWordArr);

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
                    if(corr.find('.corr_'+tWord).length == 0){
                        var _w = e1.getElementsByClassName('word_'+(theIndx+1))[0];
                        var _p = _w.getElementsByTagName('p')[0];
                        var _i = _w.getElementsByTagName('i')[0];
						var _tAns = this.trimSpaces([_p.innerHTML]);
                        if(_tAns[0] == tWord && (_i.style.display == 'none')){
							ob.correctCount++;
                            _i.style.display = "block"; 
                        }
                        var newObj = {};
                        newObj.word = tWord;
                        newObj.rectObj = ob._rectOb;
                        (ob.corrWords).push(newObj);
                        self.drawRect(ob, 'correct', tWord);
                        document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
                    }
                    
                } else {
                    // console.log('not correct--- ');                    
                }
            }
            
            ob.allCorrect = self.checkTotals(ob);
            if(ob.allCorrect == 1){
                showFeedback(true, true);
            }
        }
        (ob._rectOb).width = (ob._rectOb).originalwidth;
        self.resetDraw("tmp");        
    },
    checkTotals:function(ob){
        var ret = 0;
        if(ob.wordList.length > 0){
            if(ob.correctCount == ob.wordList.length){
                ret = 1; 
            }
        }
        return ret;
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
                ob.wordlistbuilt = 'yes'; 
            }
        }
    },
    resetDraw:function(val){
        var ob = this.ob;  
        var e = $(ob.matrix_holder);
        var corr = e.find('.corrHolder');
        var rect = e.find('.rect');
        if(val == 'all'){
            corr.empty();
            rect.css({"display": "none"});
        }else if(val == 'tmp'){
            rect.css({"display": "none"});
        }
    },
    reset:function(){
        var self= this;        
        var ob = this.ob;
        var el = (ob.word_holder);
        var elsIcon = el.querySelectorAll("i");        
        for (var j = 0; j < elsIcon.length;j++) {
            elsIcon[j].style.display = "none";
        }
        self.resetDraw("all");
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
    getWordsFromOb:function(arr){
        var fArr = [];
        if(arr.length > 0){
            for(var a=0;a<arr.length;a++){
                fArr[a]=$.trim(arr[a].text);
            }
        }
        return fArr;
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
	trimSpaces:function(arr){
		var arr1 = [];        
        if(arr.length > 0){       
            for(var i=0;i<arr.length;i++){                
				var tmpArr = arr[i].split(' ');				
				arr1[i] = tmpArr.join('');
            }
        }         
        return arr1;
	},
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);  
    }
}