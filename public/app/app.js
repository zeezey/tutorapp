var app = angular.module('tutors', ['ngRoute', 'mgcrea.ngStrap', 'ngResource'])

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);

app.config(['$routeProvider', function($routeProvider) {
            $routeProvider.
             when('/', {
                    templateUrl: 'app/views/home.html',
                    controller: 'homectrl'
            }).
            when('/tutors', {
                 templateUrl: 'app/views/tutors.html',
                controller: 'tutorctrl',
            }).
            when('/subjects', {
                 templateUrl: 'app/views/subjects.html',
                 controller: 'subjCtrl'
            }).
            when('/login', {
                 templateUrl: 'app/views/login.html',
                 controller: 'loginctrl'
            }).
            when('/home', {
                 templateUrl: 'app/views/home.html',
                 controller: 'homectrl'
            }).
            when('/signup', {
                 templateUrl: 'app/views/signup.html',
                 controller: 'loginctrl'
            }).
            when('/tutorProfile', {
                 templateUrl: 'app/views/tutorProfile.html',
                 controller: 'tutorProfilectrl'
            })
            .otherwise('/home')
}]);



//app.directive('backImg', function(){
//    return function(scope, element, attrs){
//        var url = attrs.backImg;
//        element.css({
//            'background-image': 'url(' + url +')',
//            'background-size' : 'cover'
//        });
//    };
//});

$(document).ready(function () {
  $(window).bind('resizeEnd', function () {
    $("#myBackground").height($(window).height());
  });

  $(window).resize(function () {
    if (this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function () {
      $(this).trigger('resizeEnd');
    }, 300);
  }).trigger("resize");
});
