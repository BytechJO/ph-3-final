var _templateData = {};
var _templatePath = '';
var _assetsPath = "./images/icons/";
function buildHtmlTitle(aObj) {
    if (typeof aObj != undefined && aObj != null) {
        if (typeof aObj.grade != undefined && aObj.grade != '' && typeof aObj.unit != undefined && aObj.unit != '') {
            $('head').find('title').html('');
            $('head').find('title').html(aObj.grade + ' - ' + aObj.unit);
        }
    }
}
function buildHeader(aObj) {
    var fStmt = '';
    if (typeof aObj != undefined && aObj != null) {
        if (typeof aObj.bgcolor != undefined && aObj.bgcolor != null) {
            $('header').css('background', aObj.bgcolor );
        } else {
            $('header').css('background-color', '#cccccc');
        }
        fStmt += "<div class='container header_wrap'>";
        fStmt += "<div class='d-flex justify-content-between header_wrap'>";
        if (typeof aObj.icon != undefined && aObj.icon != null) {
            fStmt += "<div class='unitIcon my-auto'>";
            // fStmt += "<img src='" + _templatePath + aObj.icon + "'>";
            fStmt += "</div>";
        }
        if (typeof (aObj.title).text != undefined && (aObj.title).text != null) {
            fStmt += "<div class='unitTitle d-flex align-items-center justify-content-center mx-2'>";
            if (typeof aObj.audio != undefined && aObj.audio != null) {
                fStmt += "<div class='audioIcon off my-auto' data-audio='" + _templatePath + aObj.audio + "'>"
                    fStmt += "<div class='unitTitleText' style='position: relative;' rel='tooltip' data-placement='bottom' title='' data-original-title=''>";
                                                fStmt += "<p class='unitTitleNumber' style='position: absolute; left: 95px; font-size: 70px; color: #F26522; text-shadow: 2px 2px 0 #DCEAB4, -2px -2px 0 #DCEAB4, 2px -2px 0 #DCEAB4, -2px 2px 0 #DCEAB4, 2px 2px 0 #DCEAB4;'>" + aObj.unitno + "</p>";

                        fStmt += "<img src='" + _templatePath + aObj.icon + "'>";
                    fStmt += "</div>";
                fStmt += "</div>";
            }
            
            fStmt += "</div>";
        }
        if (isMobile())
            fStmt += "<div class='full_screen hideInSmall my-auto' ><img class='pt-1' src='" + _templatePath + _assetsPath + "fullscreen.png'></div>"
        else
            fStmt += "<div class='full_screen my-auto'><img class='pt-1' src='" + _templatePath + _assetsPath + "fullscreen.png'></div>"
        fStmt += "</div></div></div>";
        var fCss = '.unitTitle {';
        $('header').append(fStmt);
        if (typeof (aObj.title) != undefined && (aObj.title) != null) {
            $.each((aObj.title), function (key, value) {
                if (key != "text") {
                    fCss += key + ": " + value + ";";
                }
            })
            fCss += '}';
            $('#ui_style').append(fCss);
        }
    }
}

// Function returns true if current device is phone
function isMobile() {

    // regex from http://detectmobilebrowsers.com/mobile
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent)
}

function buildFooter(aObj) {
    var homeVisible = (typeof (aObj.homebutton).visible != undefined && (aObj.homebutton).visible != null) ? (aObj.homebutton).visible : 'yes';
    var homeLink = ((_templatePath == '.') ? '../' : '') + '../../../' + (aObj.homebutton).link;
    var fStmt = '';
    if (typeof aObj != undefined && aObj != null) {
        if (typeof aObj.bgcolor != undefined && aObj.bgcolor != null) {
            $('footer').css('background', aObj.bgcolor );
        } else {
            $('footer').css('background-color', '#cccccc');
        }
    }
    if (typeof aObj.buttons != undefined && aObj.buttons != null && typeof aObj.filetoload != undefined && aObj.filetoload != null) {
        fStmt += "<div class='container footer_wrap'>";
        fStmt += "<div class='d-flex justify-content-between mt-2'>";
        fStmt += "<div class='d-flex col-10 col-xs-10 col-md-10 flex-wrap align-items-center'>";
            fStmt += '<a href="' + aObj.booksbutton.studentbook.link + '">';
            fStmt += '<img src="' + aObj.booksbutton.studentbook.icon + '">';
            fStmt += '</a>';
            fStmt += '<a href="' + aObj.booksbutton.workbook.link + '">';
            fStmt += '<img src="' + aObj.booksbutton.workbook.icon + '">';
            fStmt += '</a>';
        fStmt += "</div>";

        // fStmt += "<div class='d-flex col-7 col-xs-6 col-md-7 flex-wrap justify-content-center'>";
        // if ((aObj.buttons.length > 0) && (aObj.filetoload.length > 0) && (aObj.buttons.length == aObj.filetoload.length)) {
        //     for (var f = 0; f < aObj.buttons.length; f++) {
        //         fStmt += "<div class='footer_nav_btn " + (aObj.buttons[f].toLowerCase()) + "_btn my-auto d-none d-lg-block'>";
        //         var _tFile = getThisFileName((aObj.filetoload[f]));
        //         var _tPath = '';
        //         var _tFileToLoad = '';
        //         if (getCurrFileOrDirectory('directory') == 'views') {
        //             if ((aObj.filetoload[f]) == "index.html" && (getCurrFileOrDirectory('directory') == 'views')) {
        //                 _tPath = '../';
        //                 _tFileToLoad = (aObj.filetoload[f]);
        //             } else {
        //                 _tFileToLoad = getCurrFileOrDirectory('file', (aObj.filetoload[f]));
        //             }
        //         } else {
        //             _tFileToLoad = (aObj.filetoload[f]);
        //         }
        //         var _tNeedLink = (aObj.filetoload[f] != "" && getCurrFileOrDirectory('file') != _tFile);
        //         if (_tNeedLink) {
        //             fStmt += "<a href='" + _tPath + _tFileToLoad + "'>";
        //         }
        //         fStmt += "<img class='h-100 ' src='" + _templatePath + _assetsPath + "foo_" + (aObj.buttons[f].toLowerCase()) + ".png'>";
        //         if (_tNeedLink) {
        //             fStmt += '</a>';
        //         }
        //         fStmt += "</div>";

        //         fStmt += "<div class='footer_nav_btn small_nav " + (aObj.buttons[f].toLowerCase()) + "_small_btn my-auto d-none d-md-block d-lg-none' data-toggle='tooltip' data-placement='top' title='' data-original-title='" + (aObj.buttons[f]) + "'>";
        //         if (_tNeedLink) {
        //             fStmt += "<a href='" + _tPath + _tFileToLoad + "'>";
        //         }
        //         fStmt += "<img class='h-100 ' src='" + _templatePath + _assetsPath + "foo_" + (aObj.buttons[f].toLowerCase()) + "_small.png'>";
        //         if (_tNeedLink) {
        //             fStmt += '</a>';
        //         }
        //         fStmt += "</div>";

        //         fStmt += "<div class='footer_nav_btn mini_nav " + (aObj.buttons[f].toLowerCase()) + "_mini_btn my-auto mx-1 d-md-none' data-toggle='tooltip' data-placement='top' title='' data-original-title='" + (aObj.buttons[f]) + "'>";
        //         if (_tNeedLink) {
        //             fStmt += "<a href='" + _tPath + _tFileToLoad + "'>";
        //         }
        //         fStmt += "<img class='h-100 ' src='" + _templatePath + _assetsPath + "foo_" + (aObj.buttons[f].toLowerCase()) + "_mini.png'>";
        //         if (_tNeedLink) {
        //             fStmt += '</a>';
        //         }
        //         fStmt += "</div>";
        //     }
        // }
        // fStmt += "</div>";
        fStmt += "<div class='d-flex col-2 col-xs-2 col-md-2 flex-wrap justify-content-end'>";
            fStmt += "<div class='homeBtn my-auto " + ((homeVisible == 'yes') ? 'd-block' : 'd-none') + "'>";
            fStmt += "<a href=" + homeLink + "?u=" + aObj.unitno + ">";
            fStmt += "<img class='pt-1' src='" + _templatePath + _assetsPath + "home_btn.png'>";
            fStmt += '</a>';
            fStmt += "</div>";
        fStmt += "</div>";
        fStmt += "</div></div>";
        $('footer').append(fStmt);
    }
}
function buildBody(aObj) {
    if (typeof aObj != undefined && aObj != null) {
        $.each((aObj), function (key, value) {
            $('body').css(key, value);
        })
    }
}
function buildSubFooter(aObj, aVal) {
    var thisFile = (getCurrFileOrDirectory('file')).toLowerCase();
    var thisFolder = (getCurrFileOrDirectory('directory')).toLowerCase();
    var thisisActivity = true;
    var fStmt = '';
    var fStmt1 = '';
    aVal = (typeof aVal != undefined && aVal != null) ? aVal : 'no';
    if (thisisActivity && (thisFolder == 'views')) {
        if (typeof aObj != undefined && aObj != null) {
            var tsubBtn = '';
            fStmt += '<div class="d-flex justify-content-between sub_footer_buttons">';
            //---------- act_ctrls -------------------
            // if (aVal == 'yes') {
            //     fStmt += '<div class="col-4 p-0">';
            //     fStmt += '<div class="d-none d-md-flex flex-column flex-md-row justify-content-start act_ctrls">';
            //     for (var ss = 0; ss < (aObj.activitybuttons).length; ss++) {
            //         tsubBtn = ((aObj.activitybuttons)[ss]).toLowerCase();
            //         fStmt += '<div class="sub_footer_icon mb-1 mr-sm-2 act_' + tsubBtn + '"  data-toggle="modal" data-target=".activityCtrlPanel">';
            //         fStmt += '<img src="' + _templatePath + _assetsPath + 'subfoo_' + tsubBtn + '.png"/>';
            //         fStmt += '</div>';

            //         fStmt1 += '<img id="img_' + tsubBtn + '" src="' + _templatePath + _assetsPath + 'subfoo_' + tsubBtn + '.png"/>';
            //     }
            //     fStmt += '</div>';
            //     fStmt += '<div class="sub_footer_icon d-block d-md-none act_showall"><img class="act_showall_img" src="' + _templatePath + _assetsPath + 'subfoo_showall.png"/></div>';
            //     fStmt += '</div>';
            // }
            // fStmt_ctrls = ''
            fStmt += '<div class="col-12 p-0 d-flex justify-content-end align-self-end">';
            fStmt += '<div class="d-flex func_ctrls">';
            for (var ff = 0; ff < (aObj.functionbuttons).length; ff++) {
                tsubBtn = ((aObj.functionbuttons)[ff]).toLowerCase();
                fStmt += '<div class="sub_footer_icon ' + tsubBtn + 'Btn">';
                fStmt += '<img src="' + _templatePath + _assetsPath + ((tsubBtn == 'check') ? 'click' : tsubBtn) + '_btn.png"/>';
                fStmt += '</div>';
            }
            fStmt += '</div></div>';
            fStmt += '</div>';

            $('.sub_footer_buttons_wrap').append(fStmt);
            $('.activityCtrlPanel').find('.ctrlIcon').append(fStmt1);
        }
    }

}
function buildCoreFrame(ob) {
    _templatePath = buildTemplatePath();
    if (typeof ob !== undefined && ob != null) {
        _templateData = _data;
        buildHtmlTitle(_templateData.title);
        buildHeader(_templateData.header);
        buildFooter(_templateData.footer);
        buildBody(_templateData.body);
        // buildSubFooter(_templateData.subfooter);
        setLoadedStatus('coreFrame');
    }
}