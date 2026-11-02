//--------------[ Words to Know ] ----------------------
$('.wordsToKnowHeader').click(function () {        
    var partElm = $(this).parent();        
    if(partElm.hasClass('cls')){            
        partElm.css({ "height":"auto" });
        partElm.removeClass('cls');            
    }else {
        partElm.addClass('cls');
        partElm.css({ "height": "40px" });
    }
});    
//--------------[ Words to Know Audio ] ----------------------