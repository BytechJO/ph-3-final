var popupData = _popupData;

var currentActivityName = getFileName();
var currentActivityData =popupData[currentActivityName]; 

//console.log("Current Activity Data", popupData[currentActivityName]);
var activity_buts = [];
for (var key in currentActivityData) {
    if (currentActivityData.hasOwnProperty(key)) {
        if(currentActivityData[key]!="")
        {
            activity_buts.push(key);
            $('.'+key+'_content').html(currentActivityData[key]);
        }
        
    }
}
//console.log("activity_buts", activity_buts);
//This is to show only buttons which has content
$('.activity_buts').data('buttons',activity_buts.join())


function getFileName(){
    //get activity name from the URL without extension
    var url = window.location.href;
    var filename = url.match(/([^\/]+)(?=\.\w+$)/)[0];
    return filename;
}