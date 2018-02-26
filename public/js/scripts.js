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

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = $("figure");
	var dots = $(".dot");
	if (n > slides.length) {slideIndex = 1} 
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"; 
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block"; 
	dots[slideIndex-1].className += " active";
}

// .whyus scripts goes here
// .products scripts goes here
function prod_slider(event) {
	const left = event.target.getAttribute('value') * 68;
	$('.prod_container').css('left', `-${left}vw` );

	$('.prod_dots  .selected').removeClass('selected');
	$(event.target).addClass('selected');
}


// .sec_7 scripts goes here


window.onload = function () {
	var styles = [
		{
			"featureType": "landscape.natural",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"visibility": "on"
				},
				{
					"color": "#e0efef"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"visibility": "on"
				},
				{
					"hue": "#1900ff"
				},
				{
					"color": "#c0e8e8"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
				{
					"lightness": 100
				},
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "labels",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [
				{
					"visibility": "on"
				},
				{
					"lightness": 700
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "all",
			"stylers": [
				{
					"color": "#7dcdcd"
				}
			]
		}
	];
	
	var options = {
		mapTypeControlOptions: { mapTypeIds: ['map_style']	},
		center: new google.maps.LatLng( 49.8412128, 24.026691),
		zoom: 16,
		scrollwheel: false,
		disableDefaultUI: true, 
		mapTypeId: 'map_style'
	};
	var map_item = document.getElementById('map');
	var map = new google.maps.Map( map_item, options);
	var styledMapType = new google.maps.StyledMapType(styles, { name: 'map_style' });
	map.mapTypes.set('map_style', styledMapType);
	}
