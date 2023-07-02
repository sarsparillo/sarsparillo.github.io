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

$header.click(function() {
  if (!$header.hasClass('banner')) {
    $header.addClass('banner');
	$('#content-about').addClass('active');
	$('#about').addClass('active');
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

// email
var form = document.getElementById("email-form");
			
async function handleSubmit(event) {
	event.preventDefault();
	var status = document.getElementById("form-status");
	var data = new FormData(event.target);
	fetch(event.target.action, {
	method: form.method,
	body: data,
	headers: {
		'Accept': 'application/json'
	}
	}).then(response => {
	if (response.ok) {
		status.innerHTML = "Thanks for contacting me! Either I'll reply, or I won't - there's no guarantee what'll happen in the future!";
		form.reset()
	} else {
		response.json().then(data => {
		if (Object.hasOwn(data, 'errors')) {
			status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
		} else {
			status.innerHTML = "Oops! There was a problem sending your message. Try again in a bit, or contact via other methods."
		}
		})
	}
	}).catch(error => {
	status.innerHTML = "Oops! There was a problem sending your message. Try again in a bit, or contact via other methods."
	});
}
form.addEventListener("submit", handleSubmit);