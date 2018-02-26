// .header scripts goes here
$(document).ready(function() {
	var headerHeight = $('header').height();
	$('a[href*=#]').bind("click", function(e) {
		e.preventDefault();

		var target = $(this).attr("href"); 
		var scrollToPosition = $(target).offset().top - headerHeight;

		$('html').animate({ 'scrollTop': scrollToPosition }, 600, function(){
			window.location.hash = "" + target;
			$('html').animate({ 'scrollTop': scrollToPosition }, 0);
		});

		$('body').append("called");
	});
});

$(window).scroll(function() {
	var scrollDistance = $(window).scrollTop() + 500;

	$('section').each(function(i) {
			if ($(this).position().top <= scrollDistance) {
					$('nav> ul > li > a.active').removeClass('active');
					$('nav> ul > li > a').eq(i).addClass('active');
			}
	});
}).scroll();


$('.burger').on('click', function(){
	// if ($('.menu').hasClass('open')) {
	// 	$('.menu').removeClass('open')
	// } else {
	// 	$('.menu').addClass('open')
	// }
	$('.menu').toggleClass('open')
});
