var app = angular.module('kylePortfolio', []);

app.controller('visualdesign', function() {

	var pieces = [{
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'monster truck'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'bear house'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'afraid of goats'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'lizard time'
	}];

	this.instances = pieces;
});

app.controller('visualart', function() {

	var pieces = [{
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'monster truck'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'bear house'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'afraid of goats'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'bear house'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'afraid of goats'
	}];

	this.instances = pieces;
});

app.controller('visualarchitecture', function() {

	var pieces = [{
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'monster truck'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'bear house'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'afraid of goats'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'bear house'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'afraid of goats'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'bear house'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'afraid of goats'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'bear house'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'afraid of goats'
	}];

	this.instances = pieces;
});

app.controller('musicsolo', function() {

	var pieces = [{
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'monster truck'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'bear house'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'afraid of goats'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'bear house'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'afraid of goats'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'bear house'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'afraid of goats'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'bear house'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'afraid of goats'
	}];

	this.instances = pieces;
});

app.controller('musicVideos', function() {

	var pieces = [{
		pageUrl: 'http://www.youtube.com/embed/NfdjOqoshxI?rel=0&amp;wmode=transparent',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'burn, piano island, burn'
	}, {
		pageUrl: 'http://www.youtube.com/embed/JUhXBDpbxiA?rel=0&amp;wmode=transparent',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'it is well past the point of going home'
	}, {
		pageUrl: 'http://www.youtube.com/embed/WneDU-K3Sww?rel=0&amp;wmode=transparent',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'retreat! retreat!'
	}, {
		pageUrl: 'http://www.youtube.com/embed/n41_Bn9MsjY?rel=0&amp;wmode=transparent',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'jackson hole, wy'
	}, {
		pageUrl: 'http://www.youtube.com/embed/o_iPQOSs3b4?rel=0&amp;wmode=transparent',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'planetary'
	}];

	this.instances = pieces;
});

app.controller('musiccollaborations', function() {

	var pieces = [{
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'monster truck'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'bear house'
	}, {
		pageUrl: './visual/design/1/detail.html',
		imageUrl: './visual/design/1/thumb.jpg',
		title: 'afraid of goats'
	}];

	this.instances = pieces;
});

app.directive('colorbox', function(){
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			$(element).colorbox(attrs.colorbox);
		}
	}
});

