$(function() {
	
$('#test').click(function(){
	$('header').toggleClass('banner');
	
});

$('.website-text').hover(function(){
	var wabsit = $(this);
	wabsit.text("website");
}, function() {
	var wabsit = $(this);
	wabsit.text(wabsit.data('original'))
});
/*
var header = $('header');
var headPosition = header.offset().top;

$(window).scroll($.throttle(10, function() {

	header.css("top", 0);
	var edge = $(window).scrollTop() + 100;

	if (headPosition <= edge) {
		header.addClass("banner");
	}
	else {
		header.removeClass("banner");
	}


}));
	*/
});