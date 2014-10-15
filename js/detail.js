jQuery(function($)
{
	var contents = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
	var gallery = $("#gallery_img");

	$.each(contents, function(i)
	{
		var li = $("<li/>").addClass("thumb").appendTo(gallery);
		var a = $("<a/>").attr("href", contents[i]).attr("target", "_blank")
				.appendTo(li);
		var img = $("<img/>").attr("src", contents[i]).attr("value", contents[i])
				.appendTo(a);
	});
	
	function child(x)
	{ return $("li:eq(" + x + ")").css("width"); };

	var image_number = 0;
	$(".mover").bind("click", function(e)
	{
		if (($(this).is("#next")) &&
			($("li:last").offset().left + $("li:last").width()) > $("#next").offset().left)
		{
			gallery.animate({ "left":"-=" + child(image_number) }, 500);
			image_number++;
		}
		else if (($(this).is("#prev")) && (image_number > 0))
		{
			image_number--;
			gallery.animate({ "left":"+=" + child(image_number) }, 500);
		}
		e.preventDefault();
	});	
});