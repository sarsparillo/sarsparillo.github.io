jQuery(function($)
{	
	// nav buttons	
	$("#about_nav").bind('click', function() {
		$("section").toggleClass("main about");
	});

	$("#company_nav").bind('click', function() {
		$("section").toggleClass("main company");
	});

	$("#contact_nav").bind('click', function() {
		$("section").toggleClass("main contact");
	});
	
}); 