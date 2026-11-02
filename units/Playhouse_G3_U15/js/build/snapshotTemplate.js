
var _templateData = {};
var _templatePath = '';
var _snapshotInterval;
function buildSnapShotContent(snapshotObj, snapshotPopup_data, Popups_data) {
	var slideHtml = "";
	
	var snapShotPopup = "";
	snapShotPopup += snapshotPopup_data;
	$(".modal-question").append(snapShotPopup);
	_snapshotInterval = setInterval(checkSnapShotBuilt, 200);


	rightSec = ""

	for (var slide = 0; slide < 2; slide++) {
		current_slide = slide + 1;
		if (typeof Popups_data["slides"][slide] !== undefined && Popups_data["slides"][slide] != null) {

			slideHtml = '';
			slideHtml += '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1"><a href=""><img src="../images/icons/back_btn.png"></a></div>';
			slideHtml += '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1"><a href=""><img src="../images/icons/next_btn.png"></a></div>';
			
			var numOfPoints = (Popups_data.points).length;
			for (x = 0; x < numOfPoints; x++) {
				slideHtml +=  '<div class="image-container '+Popups_data.class_name[x]+'" style="'+Popups_data.postions[x]+'">'
					slideHtml +=  '<img src="'+Popups_data.points[x]+'" class="point" data-img="img-'+ x +'"/>'
					slideHtml += '<div class="audioIcon off contant audioTile" data-audio="' + Popups_data.imagesAudio[x] + '">';
						slideHtml +=  '<div class="hover-image img-'+x+'" >'+Popups_data.words[x]+'</div>';
					slideHtml +=  '</div>'
				slideHtml +=  '</div>'
			}

			$(".snapshot_container").append(slideHtml);

			listen_Popups_array = Popups_data["slides"][slide].listen["words"]
			listen_Popups = "<div class='readHilightsPanel_container d-flex flex-wrap justify-content-around'>"
				listen_Popups += "<div class='snap_card main_title audioIcon mx-0 mx-md-auto audioTile' data-audio='" + Popups_data["slides"][slide].listen["mainTitle_audio"] + "' style='position: absolute'>"
					listen_Popups += "<img class='' src='" + Popups_data["slides"][slide].listen["mainTitle"] + "' />"
				listen_Popups += "</div>";
			listen_Popups += "<div class='title'>"
			for (var listenTitles = 0; listenTitles < Popups_data["slides"][slide].listen["titleTexts"].length; listenTitles++) {
				listen_Popups += "<div class='snap_word snap_card audioIcon mx-0 mx-md-auto audioTile' data-audio='" + Popups_data["slides"][slide].listen["titlesAudio"][listenTitles] + "'data-onaudioplay='color:#e43b6d'>"
					listen_Popups += "<p class= 'title_text'>" + Popups_data["slides"][slide].listen["titleTexts"][listenTitles] + "</p>"
					listen_Popups += "<img class='title_in_snap' src='" + Popups_data["slides"][slide].listen["titleIcons"][listenTitles] + "' />"
				listen_Popups += "</div>";
			}
			listen_Popups += "</div>";
			listen_Popups += "<br />";
			for (var listenwords = 0; listenwords < listen_Popups_array.length; listenwords++) {
				listen_Popups += "<div class='snap_word snap_card audioIcon mx-0 mx-md-auto audioTile' data-audio='" + Popups_data["slides"][slide].listen["audio"][listenwords] + "'data-onaudioplay='color:#e43b6d'>"
					listen_Popups += "<img class='img_in_snap' src='" + Popups_data["slides"][slide].listen["backgroundImage"] + "' />"
					listen_Popups += "<p class= 'word_in_snap'>" + Popups_data["slides"][slide].listen["words"][listenwords] + "</p>"
				listen_Popups += "</div>";
			}
			listen_Popups += "</div>";
			$(".readHilightsPanel_" + current_slide).find(".modal-body").append(listen_Popups);

			listen2_Popups_array = Popups_data["slides"][slide].listen2["image"]
			listen2_Popups = "<div class='readHilightsPanel_container' >"
				listen2_Popups += "<div class='snap_card main_title audioIcon mx-0 mx-md-auto audioTile' data-audio='" + Popups_data["slides"][slide].listen2["mainTitle_audio"] + "' style='position: absolute'>"
					listen2_Popups += "<img class='' src='" + Popups_data["slides"][slide].listen2["mainTitle"] + "' />"
				listen2_Popups += "</div>";
			listen2_Popups += "<div class='title'>"
			for (var listenTitles = 0; listenTitles < Popups_data["slides"][slide].listen2["titleTexts"].length; listenTitles++) {
				listen2_Popups += "<div class='snap_word snap_card audioIcon mx-0 audioTile' data-audio='" + Popups_data["slides"][slide].listen2["titlesAudio"][listenTitles] + "'data-onaudioplay='color:#e43b6d'>"
					listen2_Popups += "<p class= 'title_text'>" + Popups_data["slides"][slide].listen2["titleTexts"][listenTitles] + "</p>"
					listen2_Popups += "<img class='title_in_snap' src='" + Popups_data["slides"][slide].listen2["titleIcons"][listenTitles] + "' />"
					listen2_Popups += "<p class= 'title_text_right'>" + Popups_data["slides"][slide].listen2["titleTextRight"] + "</p>"
				listen2_Popups += "</div>";
			}
			listen2_Popups += "</div>";
			listen2_Popups += "<br />";
			listen2_Popups += "<div class='all_cards  d-flex justify-content-around'>"
			for (var listen2words = 0; listen2words < listen2_Popups_array.length; listen2words++) {
				listen2_Popups += "<div class='conv_img snap_card mx-0 mx-md-auto audioTile audioIcon' data-audio='" + Popups_data["slides"][slide].listen2["audio"][listen2words] + "'data-onaudioplay='color:#e43b6d'>"
				listen2_Popups += "<img class='' src=" + Popups_data["slides"][slide].listen2["image"][listen2words] + ">";
				listen2_Popups += "</div>";
			}
			listen2_Popups += "</div>";
			listen2_Popups += "</div>";
			$(".readHilightsPanel2_" + current_slide).find(".modal-body").append(listen2_Popups);
		}
	}
	showImg()
}

// -------------------- [ audio icon control ]----------------        

function checkSnapShotBuilt() {
	clearInterval(_snapshotInterval);
	setLoadedStatus('playhouse_intro.html');
}

function showImg(){
	$(document).ready(function () {
		$(".point").click(
			function () {
				var imgName = $(this).data("img");
				// debugger
				$(".hover-image").fadeOut();
				if ($(this).parent().find('.hover-image').css('display') == 'none'){
					$('.'+imgName).fadeIn();
				}
		  	}
		);
	});
}