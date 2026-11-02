//  ****************************************** //
//  FillIn - Version no: 
//  ****************************************** //
window.blank = function(obj, dataObj){    
    ob = obj[0].getElementsByClassName("options");
    // console.log('MCQ > ', dataObj);
    this.settings = {        
        'activity_area' : ob[0],
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }    
    this.init(this.settings);
}
blank.prototype = {
    init:function(ob){       
        this.ob = ob;
        // this.reset();
        this.listen(ob);
    },
    listen:function(ob){
        var self = this;
        var e = (ob.activity_area); 
        var selectTyp = (ob.data_obj).select;
        var selectBgColor = (ob.data_obj).bgcolor;
        var selShape = (ob.data_obj).shape;
        var ques = e.querySelectorAll('.que');  
        
        
        
        
        
    },    
    resetAllPicks:function(qOb, aArr){  
        var ob = this.ob; 
        var picks = aArr;
     
    },
    validate:function(){
             
    },
    showIcons:function(aBoo, aVal){
      
    },
    reset:function(){         
    },
    initialSettings:function(){
      
    }
}
