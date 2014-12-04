var app = angular.module('kylePortfolio', []);

app.run(function($rootScope) {
	$rootScope.isHidden = true;
	$rootScope.imageNumber = 0;
});

app.factory('detailUrl', function($rootScope) {
	var currentUrl = {};
	currentUrl.url = '';

	currentUrl.changeUrl = function(newUrl) {
		this.url = newUrl;
		this.broadcastUrl();
	};

	currentUrl.broadcastUrl = function() { $rootScope.$broadcast('urlChange'); }
	
	return currentUrl;
});

app.directive('content', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/thumb.html',
		replace: true
	};
});

app.directive('detail', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/detail.html',
		replace: true
	};
});

app.directive('slider', function($rootScope) { //to reuse, replace "#gallery_img" with whatever you want
	return {
		restrict: 'E',
		link: function(scope, element, attrs){
			
			var gallery = angular.element('#gallery_img');
			element.bind('click', function(){

				var totalWidth = gallery.children().eq($rootScope.imageNumber).width();
				var last = gallery.children().eq((gallery.children().length) - 1);
				
				if (($(this).is("#next")) &&
				((last.offset().left + last.width()) > angular.element('#next').offset().left)) 
				{	
					gallery.css({left: '-=' + totalWidth});
					$rootScope.imageNumber++;
				}
				else if (($(this).is("#prev")) && ($rootScope.imageNumber > 0)) 
				{	
					$rootScope.imageNumber--
					gallery.css({left: '+=' + totalWidth});
				}
			});
		}
	};
});

app.controller('navController', ['$scope', '$rootScope', 
	function ($scope, $rootScope) {
	$scope.hide = function() { 
		$rootScope.isHidden = true; 
		angular.element('#gallery_img').css({left: '100px'});
		$rootScope.imageNumber = 0;
	}
}]);


app.controller('detailController', ['$scope', '$http', '$rootScope', 'detailUrl', 
	function ($scope, $http, $rootScope, detailUrl) {
	$scope.$on('urlChange', function() {

		var url = detailUrl.url;

		$http.get(url + 'title.json').then(function(result){
			$scope.header = result.data;
		});

		$http.get(url + 'thumbs.json').then(function(result){
			$scope.thumbnails = result.data;
		});
	});
}]);

app.controller('visualDesign', ['$scope', '$http', '$rootScope', 'detailUrl',
	function ($scope, $http, $rootScope, detailUrl) {

	var url = 'js/json/design.json';
	
	$http.get(url).then(function(result){
		$scope.instances = result.data;
	});

	$scope.updateUrl = function(newUrl) {
		detailUrl.changeUrl(newUrl)
		$rootScope.isHidden = false;
	};
}]);

app.controller('visualArt', ['$scope', '$http', '$rootScope', 'detailUrl',
	function ($scope, $http, $rootScope, detailUrl) {
	"use strict";

	$scope.url = 'js/json/art.json';

	$http.get('js/json/art.json').then(function(result){
		$scope.instances = result.data;
	});

	$scope.updateUrl = function(newUrl) {
		detailUrl.changeUrl(newUrl)
		$rootScope.isHidden = false;
	};
}]);

app.controller('visualArchitecture', ['$scope', '$http', '$rootScope', 'detailUrl',
	function ($scope, $http, $rootScope, detailUrl) {

	var url = 'js/json/architecture.json';
	
	$http.get(url).then(function(result){
		$scope.instances = result.data;
	});

	$scope.updateUrl = function(newUrl) {
		detailUrl.changeUrl(newUrl)
		$rootScope.isHidden = false;
	};
}]);

app.controller('musicSolo', ['$scope', '$http', '$rootScope', 'detailUrl',
	function ($scope, $http, $rootScope, detailUrl) {

	var url = 'js/json/solo.json';

	$http.get('js/json/solo.json').then(function(result){
		$scope.instances = result.data;
	});

	$scope.updateUrl = function(newUrl) {
		detailUrl.changeUrl(newUrl)
		$rootScope.isHidden = false;
	};
}]);

app.controller('musicVideos', ['$scope', '$http', '$rootScope', 'detailUrl',
	function ($scope, $http, $rootScope, detailUrl) {
	
	var url = 'js/json/videos.json';

	$http.get('js/json/videos.json').then(function(result){
		$scope.instances = result.data;
	});

	$scope.updateUrl = function(newUrl) {
		detailUrl.changeUrl(newUrl)
		$rootScope.isHidden = false;
	};
}]);

app.controller('musicCollaborations', ['$scope', '$http', '$rootScope', 'detailUrl',
	function ($scope, $http, $rootScope, detailUrl) {
	
	var url = 'js/json/collaborations.json';

	$http.get('js/json/collaborations.json').then(function(result){
		$scope.instances = result.data;
	});

	$scope.updateUrl = function(newUrl) {
		detailUrl.changeUrl(newUrl)
		$rootScope.isHidden = false;
	};
}]);