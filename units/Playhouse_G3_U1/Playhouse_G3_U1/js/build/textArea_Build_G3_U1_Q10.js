/*$(function () {
    var myData = {};  */
    function buildFillInBody(aObj) {
        var htmlStmt = '';
        if (aObj != undefined && aObj != null) {
            var layOut = parseInt(aObj.layout);
           
            if (layOut == 4) {
               	// ============== ****  **** ==============
                htmlStmt += '<div class="act_head_group justify-content-center">';
                    htmlStmt += '<div class="audioIcon off contant " data-audio="' + aObj.activityheading_audio + '">';
                        htmlStmt += '<div class="q-type-img-container">';
                        htmlStmt += '<img class="" src=' + aObj.main_activityheading + '>';
                        htmlStmt += '</div>';
                    htmlStmt += '</div>';
                
                    htmlStmt += '<div class="activityHeading">'
                        htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-audio="' + aObj.main_activityheading_audio + '">';
                        htmlStmt += aObj.activityheading;
                        htmlStmt += '</div>';
                    htmlStmt += '</div>';
                htmlStmt += '</div>';
    
            htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">'
            htmlStmt +=  '<a href="">'
            htmlStmt +=  '<img src="../images/icons/back_btn.png" />'
            htmlStmt +=  '</a>'
            htmlStmt +=  '</div>'
            htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">'
            htmlStmt +=  '<a href="">'
            htmlStmt +=  '<img src="../images/icons/next_btn.png" />'
            htmlStmt +=  '</a>'
            htmlStmt +=  '</div>'
    // ============== ****  **** ==============  

                htmlStmt += '<div class="options">';
                
                htmlStmt += '<div class="textarea-container">';
                    htmlStmt += ' <textarea id="paper-textarea" rows="10" cols="50" maxlength="400"></textarea>';
                htmlStmt += '</div>';
                
                htmlStmt += '</div>';
            }
            
        }
    
        console.log('htmlStmt >> fillin Built');
        $(".activity_area").append(htmlStmt);
    
        setLoadedStatus(getCurrFileOrDirectory('file'));
    }
    /*if (fillin_data != undefined && fillin_data != null) {	
            myData = fillin_data;			
            buildFillInBody(myData);
         }
    });*/