$(function() {

$('.website-text').hover(function(){
	var wabsit = $(this);
	wabsit.text("website");
}, function() {
	var wabsit = $(this);
	wabsit.text(wabsit.data('original'))
});

$(window).scroll($.throttle(10, function() {
	var header = $('header');
  if ($(document).scrollTop() > 50) {
    header.addClass('banner');
  } else {
    header.removeClass('banner');
  }
}));

});