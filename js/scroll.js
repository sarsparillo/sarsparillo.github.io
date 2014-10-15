jQuery(function($)
{
	// generic variables
	var splash = $('#splash'),
		header = $('header'),
		visual_splash = $('#visual_splash'),
		music_splash = $('#music_splash'),
		foot_spacer = $('#foot_spacer');


	// navigation
	var move = {
			to_top: function(e)
			{ scrollTo($('body')); }
		};

	function scrollTo(location)
	{
		$('html, body').stop().animate(
			{ scrollTop: location.offset().top }, 500);
	}

	// navigation handler
	$('a[data-action]').on('click', function(e)
	{
		e.preventDefault(); // remove hash from url
		var action = $(this).data("action");

		// if an action has this name, do it
		if (typeof move[action] === "function")
		{
			move[action].call(this, e);
		}
	});


	// colorbox anti-scroll
	$(document).bind('cbox_open', function() 
	{
	    $('html').css({ overflow: 'hidden' });
	}).bind('cbox_closed', function() 
	{
	    $('html').css({ overflow: '' });
	});

	// check browser for scrolling 
	var body = "";
	function theBrowser() {
		if ((navigator.userAgent.search("Chrome") >= 0) 
			|| (navigator.userAgent.search("Safari") >= 0))
		{ body = $('body'); }
		else 
		{ body = $('html'); }
	}
	theBrowser();

	// fixed header scrolling
	function headScroll() 
	{
		var amount = ($(window).height() - 618) - Math.round(body.scrollTop());
		splash.css('top', amount+'px');
		header.css('top', (splash.innerHeight()+amount)+'px');
	};
	
	// page move stuff
	$(window).bind('scroll resize', function() 
	{
		function offsetAmount(divName) {
			return 0-Math.round(body.scrollTop() - divName.offset().top)
		};

		// if the visual splash has reached the bottom of the header
		if ((offsetAmount(visual_splash) < 618)
			&& (offsetAmount(visual_splash) > 106))
		{ headScroll(); }
		else if (offsetAmount(visual_splash) < 106)
		{
			splash.css('top', -512);
			header.css('top', 0);
		}
		else if (offsetAmount(visual_splash) > 618)
		{
			splash.css('top', 0);
			header.css('top', Math.round(splash.outerHeight())+'px');
		}

		// header resizing
		if (offsetAmount(visual_splash) < 489)
		{ $(".heads").removeClass('big').addClass('small'); }
		else
		{ $(".heads").removeClass('small').addClass('big'); }

		// nav header visibility

		// sticky things		
		$('#visual_header').stick_in_parent({offset_top: 106});
		$('#music_header').stick_in_parent({offset_top: 106});
		$('.content_header').stick_in_parent({offset_top: 120});
	});

}); 