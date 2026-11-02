$(function(){
    var _templateData = {};
    var _templatePath = buildTemplatePath();
    function buildHtmlTitle(aObj){
        if (aObj != undefined && aObj != null) {            
            if(aObj.grade!=undefined && aObj.grade!=''&& aObj.unit !=undefined && aObj.unit != ''){
                $('head').find('title').html('');
                $('head').find('title').html(aObj.grade + ' - '+aObj.unit);
            }
        }
    }
    function buildHeader(aObj){             
        var fStmt=''; 
        if(aObj != undefined && aObj != null){
            if(aObj.bgimage != undefined && aObj.bgimage != null){
                $('header').css('background-image', 'url("'+_templatePath+aObj.bgimage+'")');
                $('header').css('background-position-y', "-21px");
                $('header').css('background-repeat', "repeat no-repeat");
                // $('header').css('background-size', 'cover');
                // $('header').css('background-position', 'center bottom');
            }else{
                $('header').css('background-color', '#cccccc');
            }
            fStmt += "<div class='container header_wrap'>";
            fStmt += "<div class='d-flex justify-content-between header_wrap'>";
            if(aObj.icon != undefined && aObj.icon != null){
                fStmt += "<div class='unitIcon my-auto'>";
                fStmt += "<img src='"+_templatePath+aObj.icon+"' style='width:100%'>";
                fStmt += "</div>";
            }
            if((aObj.title).text != undefined && (aObj.title).text != null){
                fStmt +=  "<div class='unitTitle d-flex align-items-center justify-content-center mx-2'>";
                if(aObj.audio != undefined && aObj.audio != null){
                    fStmt+="<div class='audioIcon off my-auto' data-audio='"+_templatePath+aObj.audio+"'></div>"
                }                
                fStmt += "<div class='unitTitleText' data-toggle='tooltip' data-placement='bottom' title='' data-original-title='"+(aObj.title).text+"'>"+(aObj.title).text+"</div>";
                fStmt += "</div>";                 
            }
            fStmt += "<div class='full_screen my-auto'><img class='pt-1' src='"+_templatePath+"./images/icons/fullscreen.png'></div>"
            fStmt += "</div></div></div>";
            var fCss='.unitTitle {';            
            $('header').append(fStmt);
            if((aObj.title) != undefined && (aObj.title) != null){
                $.each( (aObj.title), function( key, value ) {                    
                    if(key != "text"){
                        fCss+=key+ ": " + value+";";
                    }
                })
                fCss+='}';
                $('#ui_style').append(fCss);
            } 
        } 
    }
    function buildFooter(aObj){
        var fStmt=''; 
        if(aObj != undefined && aObj != null){
            if(aObj.bgimage != undefined && aObj.bgimage != null){
                $('footer').css('background-image', 'url("'+_templatePath+aObj.bgimage+'")');
                $('footer').css('background-repeat', "repeat no-repeat");
                // $('footer').css('background-size', 'cover');
                // $('footer').css('background-position', 'center top');
            }else{
                $('footer').css('background-color', '#cccccc');
            }
        }
        if(aObj.buttons !=undefined && aObj.buttons !=null && aObj.filetoload !=undefined && aObj.filetoload !=null){
            fStmt += "<div class='container footer_wrap'>";
            fStmt += "<div class='d-flex justify-content-end mt-2'>";
            fStmt += "<div class='d-flex col-11 flex-wrap justify-content-center'>";
            if((aObj.buttons.length > 0) && (aObj.filetoload.length > 0) && (aObj.buttons.length == aObj.filetoload.length)){
                for(var f=0;f<aObj.buttons.length;f++){                    
                    fStmt += "<div class='footer_nav_btn "+(aObj.buttons[f].toLowerCase())+"_btn my-auto d-none d-lg-block'>";
                    var _tFile = getThisFileName((aObj.filetoload[f]));                   
                    var _tPath = '';
                    var _tFileToLoad = '';
                    if(getCurrFileOrDirectory('directory') == 'views'){
                        if((aObj.filetoload[f]) == "index.html" && (getCurrFileOrDirectory('directory') == 'views') ){
                            _tPath = '../';
                            _tFileToLoad = (aObj.filetoload[f]);
                        }else{                           
                            _tFileToLoad = getCurrFileOrDirectory('file', (aObj.filetoload[f]));
                        }
                    }else{
                        _tFileToLoad = (aObj.filetoload[f]);
                    }   
                    var _tNeedLink = (aObj.filetoload[f] != "" && getCurrFileOrDirectory('file') != _tFile);                
                    // console.log('>> ', getCurrFileOrDirectory('directory'), getCurrFileOrDirectory('file'), _tFile);
                    if(_tNeedLink){                        
                        fStmt += "<a href='"+_tPath+_tFileToLoad+"'>";
                    }
                    fStmt += "<img class='h-100 ' src='"+_templatePath+"./images/icons/foo_"+(aObj.buttons[f].toLowerCase())+".png'>";                    
                    if(_tNeedLink){
                        fStmt += '</a>';
                    }
                    fStmt += "</div>";

                    fStmt += "<div class='footer_nav_btn small_nav "+(aObj.buttons[f].toLowerCase())+"_small_btn my-auto d-lg-none'>";                    
                    if(_tNeedLink){
                        fStmt += "<a href='"+_tPath+_tFileToLoad+"'>";
                    }                    
                    fStmt += "<img class='h-100 ' src='"+_templatePath+"./images/icons/foo_"+(aObj.buttons[f].toLowerCase())+"_small.png'>";
                    if(_tNeedLink){
                        fStmt += '</a>';
                    }
                    fStmt += "</div>";
                }
            }
            fStmt += "</div><div class='homeBtn my-auto disabled'>";            
            fStmt += "<img class='pt-1' src='"+_templatePath+"./images/icons/home_btn.png' style='width: 100%;'>";                  
            fStmt += "</div></div></div>";
            $('footer').append(fStmt);
        }
    }
    function buildBody(aObj){
        if(aObj != undefined && aObj != null){
            $.each( (aObj), function( key, value ) { 
                $('body').css(key, value);
            })
        }
    }    
       
    if(_data != undefined && _data!=null){
        _templateData = _data;
        buildHtmlTitle(_templateData.title);
        buildHeader(_templateData.header); 
        buildFooter(_templateData.footer);
        buildBody(_templateData.body)
    }   
});