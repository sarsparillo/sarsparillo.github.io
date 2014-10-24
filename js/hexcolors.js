jQuery(function($)
{		
	// make svg inline
	jQuery("img.hex_vis").each(function()
	{
		var img = jQuery(this), 
			imgId = img.attr('id'), 
			imgClass = img.attr('class'),
			imgUrl = img.attr('src');

		jQuery.get(imgUrl, function(data)
		{
			var svg = jQuery(data).find('svg'); // only get svg tags
			if(typeof imgId !== 'undefined')
			{ svg = svg.attr('id', imgId); } // add replaced image's id to new svg
			if(typeof imgClass !== 'undefined')
			{ svg = svg.attr('class', imgClass + ' replaced-svg'); } // that, but classes
			svg = svg.removeAttr('xmlns:a'); // remove invalid XML tags
			img.replaceWith(svg); // replace w/new svg
		}, 'xml');
	});

	// random svg colors
	var colors = ["#79A163", "#9EBB8D", "#CBDAC3", "#BED1B3", "#9BB88A"];

	jQuery(".hex_vis").each(function()
	{	
		var i = Math.floor(Math.random() * 5);
		$(this).css({fill: colors[i]});
	});
	
}); 