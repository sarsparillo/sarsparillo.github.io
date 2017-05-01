$(function() {
	
$('#test').click(function(){
	$('header').toggleClass('banner');
	
});

$('html, body').scroll(function(){
	if ($('html, body').scrollTop() > 0 ) {
		$('header').addClass('banner');
	}
})
	
});