jQuery(function($)
{
	// generic variables
	var splash = $('#splash'),
		header = $('header'),
		visual_splash = $('#visual_splash'),
		visual_header = $('#visual_header'),
		visual_text = $('#visual_text'),
		music_splash = $('#music_splash'),
		music_header = $('#music_header'),
		music_text = $('#music_text');

	// check what browser is in use to fix scrolling 
	var body = "";
	function theBrowser() {
		if ((navigator.userAgent.search("Chrome") >= 0) 
			|| (navigator.userAgent.search("Safari") >= 0))
		{ body = $('body'); }
		else 
		{ body = $('html'); }
	};
	theBrowser();

	// header position initialization
	function initialize(headerName, splashName)
	{
		headerName.css('top', (Math.round(body.scrollTop()-splashName.offset().top)
			+ splashName.outerHeight()) + 'px')
	};
	initialize(visual_header, visual_splash);
	initialize(music_header, music_splash);

	// navigation
	var move = {
			to_top: function(e)
			{ scrollTo($('body')); },
			to_visual: function(e)
			{ scrollTo(visual_splash); },
			to_music: function(e)
			{ scrollTo(music_splash); },
			show: function(e)
			{ $('body').css({'overflow': 'hidden'}); },
			hide: function(e)
			{ $('body').css({'overflow': 'scroll'}); },
		};

	function scrollTo(location)
	{
		$('html, body').stop().animate(
			{ scrollTop: location.offset().top }, 500);
	};

	// navigation handler
	$('a[data-action]').on('click', function(e)
	{
		e.preventDefault(); // remove hash from url
		var action = $(this).data("action");

		// if an action has this name, do it
		if (typeof move[action] === "function")
		{ move[action].call(this, e); }
	});

	// header scrolling
	function headScroll() 
	{
		var amount = ($(window).height() - 618) - Math.round(body.scrollTop());
		splash.css('top', amount+'px');
		header.css('top', (splash.innerHeight()+amount)+'px');
	};

	// scroll handler
	$(window).bind('scroll resize', function() 
	{
		// functions y'all
		function offsetAmount(div_name) 
		{ return 0-Math.round(body.scrollTop() - div_name.offset().top) };

		function divBase(div_name) 
		{ return offsetAmount(div_name) + div_name.outerHeight(); };

		function scrollThis(div_target, div_offset)
		{ div_target.css('top', divBase(div_offset) + 'px') };

		function showHide(div_target, div_offset, x){
			if (offsetAmount(div_offset) < x)
			{ div_target.removeClass('big').addClass('small'); }
			else
			{ div_target.removeClass('small').addClass('big'); };
		};

		// header resizing
		showHide($(".heads"), visual_splash, 520);
		showHide(visual_text, visual_splash, 0);
		showHide(music_text, music_splash, 0);

		// keep the detail box in screen no matter what
		$('#detail_box').css('top', divBase(header) + 'px');

		// more complex header junk
		if ((offsetAmount(visual_splash) < 618)
			&& (offsetAmount(visual_splash) > 60))
		{ headScroll(); }
		else if (offsetAmount(visual_splash) < 60)
		{
			splash.css('top', -512);
			header.css('top', 0);
		}
		else if (offsetAmount(visual_splash) > 618)
		{
			splash.css('top', 0);
			header.css('top', Math.round(splash.outerHeight())+'px');
		};

		if (divBase(visual_splash) > 60)
		{ scrollThis(visual_header, visual_splash); }
		else
		{ visual_header.css('top', '60px'); };

		if (divBase(music_splash) > 111)
		{ scrollThis(music_header, music_splash); }
		else
		{ music_header.css('top', '111px'); };
	});
}); 