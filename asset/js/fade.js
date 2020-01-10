$(document).ready(function (){
    //fadein
	$(window).on('scroll', function () {
		var scrollT = $(this).scrollTop();
		if (scrollT > 0 ) $('.search').addClass('on');
	  });
	$(window).on('scroll', function () {
		var scrollT2 = $(this).scrollTop();
		if (scrollT2 > $('.search').offset().top) $('.delivery').addClass('on');
		else $('.delivery').removeClass('on');
	  });
	  $(window).on('scroll', function () {
		var scrollT3 = $(this).scrollTop();
		if (scrollT3 > $('.delivery').offset().top) $('.map').addClass('on');
		else $('.map').removeClass('on');
	  });
    
});