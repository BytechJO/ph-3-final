//  ****************************************** //
//  LineDraw - Version no: 1
//  Date created - June 22, 2020 
//  ****************************************** //
window.LineDraw = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    this.settings = {  
        'activity_area' : ob[0],   
        'data_obj'      : dataObj,          
        'parent_holder' : obj[0]
    }

    this.init(this.settings);
}
LineDraw.prototype = {
    init:function(ob){
        ob.startDraw = false;
        ob.points = {};
        ob.lineObjects = [];
        ob.dropConnections = [];
        ob.correctCount = 0;
        ob.wrongCount = 0;
        ob.resultArr = [];
        ob.offsetY = 0;
        ob.offsetX = 0;
        ob.interval;
        ob.canvasArea;
        this.ob = ob;
        this.initializeCanvas();
        this.listen(ob); 
             
    },
    calculateOffset:function(){
        var ob = this.ob;
        var actArea = document.getElementsByClassName('activity_area');
        var canvasArea = document.getElementsByClassName('canvas_grp');
        var canvasScale = $(canvasArea).css('transform');
        
        // console.log('canvasArea >> ', canvasArea);
       
        ob.offsetY = canvasArea[0].offsetTop;
        ob.offsetX = (canvasArea[0].offsetLeft - actArea[0].offsetLeft);
        console.log('offsets >> ', ob.offsetX, ob.offsetY);
        
    },
    
    listen:function(ob){
        var self = this;
        var e = (ob.activity_area);       
        
        var lineColor =(typeof (ob.data_obj).linecolor != undefined && (ob.data_obj).linecolor != null) ? (ob.data_obj).linecolor : 'blue';
        var lineThickness =(typeof (ob.data_obj).strokewidth != undefined && (ob.data_obj).strokewidth != null) ? (ob.data_obj).strokewidth : '5';
        var linePath =(typeof (ob.data_obj).path != undefined && (ob.data_obj).path != null) ? (ob.data_obj).path : 'line';
        var connectType =(typeof (ob.data_obj).connect != undefined && (ob.data_obj).connect != null) ? (ob.data_obj).connect : 'single';
        var selectionColor =(typeof (ob.data_obj).nodeselectioncolor != undefined && (ob.data_obj).nodeselectioncolor != null) ? (ob.data_obj).nodeselectioncolor : '#38a3ff';
        var nodes = e.querySelectorAll('.node');
        
        var offsetWidth = $('.node')[0].clientWidth / 2;
        
        if(nodes.length > 0){
            for (var i = 0; i < nodes.length; i++) {
                nodes[i].addEventListener("mousedown", function(){
                    var offsetY = offsetWidth;
                    var offsetX = offsetWidth;        
                    // var offsetY = ob.offsetY - offsetWidth;
                    // var offsetX = ob.offsetX + offsetWidth;               
                    var thisNode = $(this).attr('class').split(' ')[1];                   
                    var thisParent = $(this).closest( '.opt' ) ;                    
                    var thisID = thisParent.attr('id');
                    
                    console.log('clicked >> ', $(this)[0].offsetLeft, $(this)[0].offsetTop);

                    var allowConnect = (connectType == 'single')? (document.getElementById(thisID).querySelector('.node').dataset.connected == '') : true;   
                               
                    if($( this ).css("cursor") == 'pointer' && allowConnect){
                        
                        if(ob.startDraw){
                            var connectCond = (ob.points.startElement == 'dragPoint')? (thisNode == 'dropPoint'):(thisNode == 'dragPoint'); 
                            var alreadyConnected = false;
                           
                            var startNodeConnectArr = (document.getElementById(ob.points.startID).querySelector('.node').dataset.connected).split(',');
                            if(startNodeConnectArr.length > 0){
                                
                                alreadyConnected = ($.inArray(thisID, startNodeConnectArr) > -1);
                            }                           
                            
                            if(connectCond){                      
                                ob.points.x2 = ($(this)[0].offsetLeft+offsetX);
                                ob.points.y2 = ($(this)[0].offsetTop+offsetY);
                              
                                ob.points.endElement = thisNode;
                                ob.points.endID = thisID;
                                (ob.points).color = lineColor;
                                (ob.points).thick = lineThickness;
                                (ob.points).path = linePath;
                               
                                $(this).css('border-color', selectionColor);
                                console.log('linedrw >> ', $(this).css('border-color'));
                                if(!alreadyConnected){
                                    self.drawIt(ob.points); 
                                    if(document.getElementById(ob.points.startID).querySelector('.node').dataset.connected == ''){
                                        document.getElementById(ob.points.startID).querySelector('.node').dataset.connected += ob.points.endID;
                                    }else{
                                        document.getElementById(ob.points.startID).querySelector('.node').dataset.connected += ','+ob.points.endID;
                                    }
                                    if(document.getElementById(ob.points.endID).querySelector('.node').dataset.connected == ''){
                                        document.getElementById(ob.points.endID).querySelector('.node').dataset.connected += ob.points.startID;
                                    }else{
                                        document.getElementById(ob.points.endID).querySelector('.node').dataset.connected += ','+ob.points.startID;  
                                    }
                                    
                                    ob.lineObjects.push(ob.points);
                                }
                                ob.setI = setInterval(function () {                                   
                                    self.resetNodes('draw', true);
                                }, 500);
                                if(ob.lineObjects.length > 0){                                   
                                    document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                                    document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");                                    
                                }
                                ob.startDraw  = false;
                            }
                            
                        }else{
                            ob.points = {};
                            
                            ob.points.x1 = ($(this)[0].offsetLeft + offsetX);
                            ob.points.y1 = ($(this)[0].offsetTop + offsetY);
                            ob.points.isVisible = true;
                            ob.points.startElement = thisNode;
                            ob.points.startID = thisID;
                            $(this).css('border-color', selectionColor);
                           
                            ob.startDraw  = true;
                        }
                    }else{
                        //ob.startDraw  = false;   
                        $(this).css('border-color', 'transparent');
                    }   
                    
                });
            }
        }
    },    
    drawIt:function(aObj){
        var ob = this.ob; 
        var curv = {};
            curv.XOffset = 20;
            curv.YOffset = 40;
        if ((ob.ctx)!=undefined) {
            (ob.ctx).strokeStyle = (aObj).color;
            (ob.ctx).lineWidth = (aObj).thick;
            (ob.ctx).lineJoin = 'round';
            (ob.ctx).beginPath();
            (ob.ctx).moveTo((aObj).x1, (aObj).y1);
           if((aObj).path == 'curve'){
                (ob.ctx).bezierCurveTo((aObj).x1+curv.XOffset, (aObj).y1 - curv.YOffset, (aObj).x2-curv.XOffset, (aObj).y2+curv.YOffset, (aObj).x2, (aObj).y2);
            }else{
                (ob.ctx).lineTo((aObj).x2, (aObj).y2);
            } 
            (ob.ctx).stroke();
        }
    },
    redrawAll:function() {
        var ob = this.ob;  
        var self = this;  
        if((ob.ctx)!=undefined){        
            (ob.ctx).clearRect(0, 0, (ob.ctx).canvas.width, (ob.ctx).canvas.height);
            if((ob.lineObjects).length > 0){
                for (var i = 0; i < (ob.lineObjects).length; i++) {
                    if ((ob.lineObjects)[i].isVisible) { 
                        self.drawIt((ob.lineObjects)[i]);
                    }
                }
            }
        }
    },
    validate:function(ob){ 
        var ob = this.ob;
        var self = this;
        var dataQuestion = (ob.data_obj).questions; 
       
        ob.dropConnections = [];
        ob.resultArr = [];
        ob.correctCount = 0;
        ob.wrongCount = 0;
        var numOfDrops = (dataQuestion.drops).length;
        for(var dp=0;dp<numOfDrops;dp++){
            ob.dropConnections[dp] = [];
        }
        for(var ll=0;ll<(ob.lineObjects).length; ll++){
            var tOb = (ob.lineObjects)[ll];
            var dropElement = (tOb.startElement == 'dropPoint')? tOb.startID : tOb.endID;
            var dragElement = (dropElement == tOb.startID)? tOb.endID : tOb.startID;
            var dropArr = dropElement.split('_');
            var dragArr = dragElement.split('_');
            var correctAns = dataQuestion.drops[(parseInt(dropArr[2])-1)].answer;
            ob.dropConnections[(parseInt(dropArr[2])-1)].push(parseInt(dragArr[2]));
            
            if(correctAns.length > 0){
                var isAns = ($.inArray (parseInt(dragArr[2]), getIntArray(correctAns)) >=0 );
                tOb.color =(isAns) ? 'green' : 'red' ; 
            }
        }
        for(var dp1=0;dp1<numOfDrops;dp1++){           
            var thisIsCorr = compareArrays(ob.dropConnections[dp1], dataQuestion.drops[dp1].answer);
            if(thisIsCorr){
                ob.correctCount++;
                ob.resultArr[dp1] = 1;                                              
            }else{
                ob.wrongCount++;
                ob.resultArr[dp1] = 0;                                             
            }
            
        }
        self.resetNodes('all',false);
        self.showIcons(true, ob.resultArr);
        self.redrawAll();
        var allCorrect = (ob.correctCount == numOfDrops) && (ob.wrongCount == 0);          
        showFeedback(true,allCorrect);
    },
    initializeCanvas:function(){
        var ob = this.ob;
        ob.ctx = document.getElementById("mycanvas").getContext("2d");        
    },
    showIcons:function(aBoo, aResult){
        var ob = this.ob;        
        var e = (ob.activity_area);
        var elsDrop = e.querySelectorAll('.drop');       
        for (var i = 0; i < elsDrop.length; i++) {
            if(aBoo){
                (elsDrop[i].querySelector('.icon_wrap')).style.display = 'block'; 
                if(aResult[i] == 1){
                    (elsDrop[i].querySelector('.tick')).style.display = 'block';
                }else{
                    (elsDrop[i].querySelector('.cross')).style.display = 'block';
                }
            }else{                
                (elsDrop[i].querySelector('.icon_wrap')).style.display = 'none'; 
                (elsDrop[i].querySelector('.tick')).style.display = 'none';
                (elsDrop[i].querySelector('.cross')).style.display = 'none';  
            }
        }
    },
    resetNodes:function(aVal, aBoo){
        var ob = this.ob;        
        var e = (ob.activity_area);
        var elsNodes = e.querySelectorAll('.node'); 
        clearInterval(ob.setI);
        for (var i = 0; i < elsNodes.length; i++) {
            if(aVal == 'all'){
                if(aBoo){
                    (elsNodes[i]).style.cursor = 'pointer'; 
                    (elsNodes[i]).dataset.connected = '';                
                }else{                
                    (elsNodes[i]).style.cursor = 'default';  
                }
                (elsNodes[i]).style.backgroundColor = (typeof (ob.data_obj).nodecolor != undefined && (ob.data_obj).nodecolor != null) ? (ob.data_obj).nodecolor : '#5d5d5d';
                (elsNodes[i]).style.borderColor = 'transparent';
            }else{
                (elsNodes[i]).style.borderColor = 'transparent';  
            }
            
        }
      
    },
    testIt:function(){
        var ob = this.ob;  
        var e = (ob.activity_area);        
        var $activityArea = $(ob.activity_area);
        var $canvasGrp = $activityArea.find('.canvas_grp');
        var $c_grp = e.querySelector('.canvas_grp');//canvas_grp
        console.log('parent testIt >>', $activityArea, $c_grp, $canvasGrp);
        //.css('transform')
    },
    reset:function(){        
        var self = this;
        var ob = this.ob;   
        self.showIcons(false, []);
        self.resetNodes('all', true);
        ob.dropConnections = [];
        ob.resultArr = [];
        ob.correctCount = 0;
        ob.wrongCount = 0;
        ob.lineObjects = [];
        self.redrawAll();
        self.testIt();
    }, 
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);  
    }
}