//  ****************************************** //
//  LINE CONNECT - Version no: 1.1
//  Date created - July 25, 2020 
//  Date updated - August 06, 2020 
//  Written by - Karthika. G
//  ****************************************** //
window.LineDraw = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    this.settings = {  
        'activity_area' : ob[0],   
        'data_obj'      : dataObj,          
        'parent_holder' : obj[0]
    }
    this.orientationAdjust = 'yes';
    this.init(this.settings);
}
LineDraw.prototype = {
    init:function(ob){
        ob.startDraw = false;
       
        ob.dropConnections = [];
        ob.correctCount = 0;
        ob.wrongCount = 0;
        ob.resultArr = [];
        
        ob.lineObjects = [];
        ob.lineOb = {};
        (ob.lineOb).startNode;
        (ob.lineOb).endNode;
        (ob.lineOb).startX = 0;
        (ob.lineOb).startY = 0;
        (ob.lineOb).endX = 0;
        (ob.lineOb).endY = 0;
        (ob.lineOb).distance = 0;
        (ob.lineOb).angle = 0;
        (ob.lineOb).startElement ='';
        (ob.lineOb).color ='';


        ob.lineColor ='';
        ob.lineThickness = 0;
        ob.connectType = '';
        ob.selectionColor = '';
        ob.transformPerc = '';
       
        ob.rightOffset;
        ob.containerRight = 0;
        ob.topOffset = 0;
        ob.setI;
        this.ob = ob;
        this.listen(ob); 
             
    },
    screenPoseAdjustments:function(){
        var self = this;
        var ob = this.ob;
        if((ob.lineObjects).length > 0){
            for(var ln=0;ln<(ob.lineObjects).length;ln++){
                self.setValuesForLine(ob.lineObjects[ln]);
                self.drawRect(ob.lineObjects[ln], 'draw','');
            }
        }
    },
    listen:function(ob){
        var self = this;
        var $area = $(ob.activity_area);

        ob.lineColor =(typeof (ob.data_obj).linecolor != undefined && (ob.data_obj).linecolor != null) ? (ob.data_obj).linecolor : 'blue';
        ob.nodeColor = (typeof (ob.data_obj).nodecolor != undefined && (ob.data_obj).nodecolor != null) ? (ob.data_obj).nodecolor : '#5d5d5d';
        ob.lineThickness =(typeof (ob.data_obj).strokewidth != undefined && (ob.data_obj).strokewidth != null) ? parseInt((ob.data_obj).strokewidth) : 4;        
        ob.connectType =(typeof (ob.data_obj).connect != undefined && (ob.data_obj).connect != null) ? (ob.data_obj).connect : 'single';
        ob.selectionColor =(typeof (ob.data_obj).nodeselectioncolor != undefined && (ob.data_obj).nodeselectioncolor != null) ? (ob.data_obj).nodeselectioncolor : '#38a3ff';
        ob.transformPerc = parseInt(ob.lineThickness)/2;        

        var nodes = $area.find('.node').length;       
        $area.find('.node').click(function(e){
            var thisNode = $(this).attr('class').split(' ')[1];
            var thisID =  $(this).parent().attr('id');
            var allowConnect = (ob.connectType == 'single')? ( $(this).data('connected') == '') : true;   

            if(($(this).css('cursor') == "pointer") && allowConnect){
                if(ob.startDraw){
                    var connectCondition = ((ob.lineOb).startElement == 'dragPoint')? (thisNode == 'dropPoint'):(thisNode == 'dragPoint'); 
                    var alreadyConnected = false;
                    var $tpOb = $area.find('#'+(ob.lineOb).startID);
                    var startNodeConnectedData = $tpOb.find('.node').data('connected');         
                    var startNodeConnectArr = startNodeConnectedData.split(',');
                    if(startNodeConnectedData.length > 0){                        
                        alreadyConnected = ($.inArray(thisID, startNodeConnectArr) > -1);
                    }
                    if(connectCondition){
                        (ob.lineOb).endNode = $(this);
                        (ob.lineOb).endID = thisID;
                        var $tpConn = '';
                        if(!alreadyConnected){                            
                            if(startNodeConnectedData == ''){  
                                $tpOb.find('.node').data('connected', (ob.lineOb).endID)
                            }else{
                                $tpConn =  startNodeConnectedData+','+(ob.lineOb).endID;
                                $tpOb.find('.node').data('connected',  $tpConn);
                            }                            
                            if($(this).data('connected') == ''){                         
                                $(this).data('connected', (ob.lineOb).startID);
                            }else{
                                $tpConn = '';
                                $tpConn =  $(this).data('connected')+','+(ob.lineOb).startID;
                                $(this).data('connected', $tpConn);
                            }
                            self.setValuesForLine(ob.lineOb);
                            self.drawRect(ob.lineOb, 'draw','');                   
                            $(this).css('border-color', ob.selectionColor);
                            var length =  (ob.lineObjects).length;                           
                            (ob.lineObjects)[length] = (ob.lineOb);                           
                            (ob.lineOb) = {};
                        }
                        ob.setI = setInterval(function () {                                   
                            self.resetNodes('draw', true);
                        }, 500);
                       
                        if((ob.lineObjects).length > 0){                                   
                            document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                            document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");                                    
                        }
                        ob.startDraw  = false; 
                    }
                }else{
                    (ob.lineOb).startNode = $(this);
                    (ob.lineOb).startID = $(this).parent().attr('id');
                    (ob.lineOb).startElement = thisNode;
                    $(this).css('border-color', ob.selectionColor);  
                    ob.startDraw  = true;
                }
            }
        });
    },
    setValuesForLine:function(lineOb){
        var ob = this.ob; 
        var halfWidth = parseInt((((lineOb).startNode).outerWidth()))/2;        
        (lineOb).height = ob.lineThickness;    
         var lineHalfHeight =  (lineOb).height/2;  
        // (lineOb).angle = Math.atan2( ((lineOb).endNode).position().top -((lineOb).startNode).position().top, ((lineOb).endNode).position().left -((lineOb).startNode).position().left ) * 180 / Math.PI;     
        
       var st_margin_left = parseInt(((lineOb).startNode).css('margin-left'));
       var st_margin_top = parseInt(((lineOb).startNode).css('margin-top'));

        (lineOb).startY =((lineOb).startNode).position().top + (st_margin_top+ halfWidth) - lineHalfHeight;
        (lineOb).startX =((lineOb).startNode).position().left + (st_margin_left+ halfWidth) - lineHalfHeight;

        // console.log('st> ', (lineOb).startX, ((lineOb).startNode).css('margin-left'), (lineOb).startY,((lineOb).startNode).css('margin-top') );

       var ed_margin_left = parseInt(((lineOb).endNode).css('margin-left'));
        var ed_margin_top = parseInt(((lineOb).endNode).css('margin-top'));
        
        (lineOb).endY =((lineOb).endNode).position().top + (ed_margin_top + halfWidth) -lineHalfHeight;
        (lineOb).endX =((lineOb).endNode).position().left + (ed_margin_left + halfWidth) - lineHalfHeight;

        // console.log('ed> ', (lineOb).endX, ((lineOb).endNode).css('margin-left'), (lineOb).endY,((lineOb).endNode).css('margin-top') );
        
        (lineOb).distance = Math.sqrt(((lineOb).endX-(lineOb).startX) * ((lineOb).endX-(lineOb).startX) + ((lineOb).endY-(lineOb).startY) * ((lineOb).endY-(lineOb).startY));
        (lineOb).distance =  (lineOb).distance +  (lineOb).height;
        
        (lineOb).angle = Math.atan2( (lineOb).endY -(lineOb).startY, (lineOb).endX -(lineOb).startX ) * 180 / Math.PI;     
        (lineOb).name = 'line-'+ (lineOb).startID+'-'+(lineOb).endID;
       
    },
    drawRect:function(lineOb, axn, nam){
        var ob = this.ob; 
        var e = $(ob.activity_area);
        var $lines = e.find('.lines');
         var obj = (lineOb);
        ($lines).append('<div class="line" id="'+obj.name+'"><div>');
        rect = ($lines).find('#'+obj.name);
        if(axn == 'draw'){              
            rect.css({"top": obj.startY+"px", "left": obj.startX+"px","width": obj.distance+"px", "height":obj.height+"px", 'transform':'rotate(' + (obj.angle)+ 'deg)'});            
            rect.css({'transform-origin': ((ob).transformPerc + 'px') + ' ' + ((ob).transformPerc + 'px') + ' 0px'});
        }
        rect.css({"border-color":ob.lineColor});
       rect.css({"background-color":ob.lineColor});
        rect.css({"display": "block"});
    },
    validate:function(ob){ 
        var ob = this.ob;
        var $area = $(ob.activity_area);
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
            // console.log(ll, tOb, ob.lineObjects[ll]);
            var dropElement = (tOb.startElement == 'dropPoint')? tOb.startID : tOb.endID;
            var dragElement = (dropElement == tOb.startID)? tOb.endID : tOb.startID;
            var dropArr = dropElement.split('_');
            var dragArr = dragElement.split('_');
            var correctAns = dataQuestion.drops[(parseInt(dropArr[2])-1)].answer;
            ob.dropConnections[(parseInt(dropArr[2])-1)].push(parseInt(dragArr[2]));
            
            if(correctAns.length > 0){
                var isAns = ($.inArray (parseInt(dragArr[2]), getIntArray(correctAns)) >=0 );
                tOb.color =(isAns) ? 'green' : 'red' ; 
                // console.log(ll,dragArr[2],getIntArray(correctAns),  isAns);
                $area.find('#'+tOb.name).css({"border-color":tOb.color, "background-color":tOb.color})
            }
        }
        for(var dp1=0;dp1<numOfDrops;dp1++){           
            var thisIsCorr = compareArrays(ob.dropConnections[dp1], dataQuestion.drops[dp1].answer);
            if (ob.dropConnections[dp1][0] == undefined && dataQuestion.drops[dp1].answer[0] == '0') {
                thisIsCorr = true;
            }
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
        var allCorrect = (ob.correctCount == numOfDrops) && (ob.wrongCount == 0);          
        showFeedback(true,allCorrect);
    },
   
    showIcons:function(aBoo, aResult){
        var ob = this.ob;        
        var $area = $(ob.activity_area);      
        $area.find('.drop').each(function(){            
            var thisDrp = parseInt(($(this).attr('id')).split('_')[2])-1;            
            if(aBoo){
                $(this).find('.icon_wrap').css('display', 'block');
                if(aResult[thisDrp] == 1){
                    $(this).find('.tick').css('display', 'block');
                }else{
                    $(this).find('.cross').css('display', 'block');
                }
            }else{
                $(this).find('.icon_wrap').css('display', 'none');
                $(this).find('.tick').css('display', 'none');
                $(this).find('.cross').css('display', 'none');
            }
        }); 
    },
    resetNodes:function(aVal, aBoo){
        var ob = this.ob;        
        var $area = $(ob.activity_area);
        // console.log('resetNodes called');
        clearInterval(ob.setI);
        
        $area.find('.node').each(function(e){
            $(this).css('background-color', ob.nodeColor);
            if(aVal == 'all'){
                if(aBoo){
                    $(this).css('cursor', 'pointer');
                    $(this).data('connected', '');
                }else{
                    $(this).css('cursor', 'default');
                }
                $(this).css('border-color', 'transparent');
            }else{
                $(this).css('border-color', 'transparent'); 
            }
        });
    },
    
    reset:function(){        
        var self = this;
        var ob = this.ob;  
        var $area = $(ob.activity_area);
        $area.find('.lines').empty();
        ob.lineObjects = []; 
        self.showIcons(false, []);
        self.resetNodes('all', true);
        ob.startDraw = false;
        ob.dropConnections = [];
        ob.resultArr = [];
        ob.correctCount = 0;
        ob.wrongCount = 0;
    }, 
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);  
    }
}