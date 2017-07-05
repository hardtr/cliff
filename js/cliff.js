$(document).ready(function(){
	$('#videos video').on('click',function (e) {
        if($(this).get(0).paused) {
           $(this).get(0).play();
        } else {
            $(this).get(0).pause();
        }
	});
    
    /* Unused collabsible scroll to bottom */
    /*
    $('#about-text').on('shown.bs.collapse', function (e) {
        var offset = $('#about-text').offset();
            if(offset)$('html,body').scrollTop(offset.top);
    });
    */
});
