const $header = $('header');
const $navlinks = $('nav li');
const $sections = $('section');
let currentPage;

$navlinks.on({
	mouseenter: function () {
		const $this = $(this);
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
	},
	mouseleave: function () {
		const $this = $(this);
		if ($this.attr('id') !== currentPage) {
			$this.removeClass('active'); 
		}
	}
});

$navlinks.click(function(){
	const $this = $(this);
	if ($header.hasClass('banner') && $this.attr('id') == currentPage) {
		$header.removeClass('banner');
		$navlinks.removeClass('active');
		$sections.removeClass('active');
		currentPage = '';
	} else {
		$header.addClass('banner');    
		$navlinks.removeClass('active');
		$sections.removeClass('active');
		$this.addClass('active');
		currentPage = $this.attr('id');
		const currentSection = '#content-' + currentPage;
		$(currentSection).addClass('active');
	}
});