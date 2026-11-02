function goodjob(){
	jQuery('.activityResult .modal-body').html('<video id="goodjob" src="../videos/goodjob.mp4" preload="" style="width: 480px;"></video>');
	jQuery('.activityResult').modal();
	jQuery('#goodjob').trigger('play');
	jQuery('.checkBtn').addClass('disabled');
	showFeedback(true, true);
}
	
function tryagain(){
	jQuery('.activityResult .modal-body').html('<video id="tryagain" src="../videos/tryagain.mp4" preload="" style="width: 480px;"></video>');
	jQuery('.activityResult').modal();
	jQuery('#tryagain').trigger('play');
	showFeedback(true, false);
}