// .products scripts goes here
function prod_slider(event) {
	const left = event.target.getAttribute('value') * 68;
	$('.prod_container').css('left', `-${left}vw` );

	$('.prod_dots  .selected').removeClass('selected');
	$(event.target).addClass('selected');
}
