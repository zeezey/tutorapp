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
                resolve: {
                     tutors: function(tutorFactory) {
                         return tutorFactory.getTutors();
                     }
                 }
            }).
            when('/subjects', {
                 templateUrl: 'app/views/subjects.html',
                 controller: 'subjCtrl',
                 resolve: {
                     tutors: function(tutorFactory) {
                         return tutorFactory.getTutors();
                     }
                 }
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
            when('/tutorProfile/:id', {
                 templateUrl: 'app/views/tutorProfile.html',
                 controller: 'tutorProfileCtrl',
                 resolve: {
                     tutor: function(tutorFactory, $route) {
                         return tutorFactory.getTutor($route.current.params).then(function(resp){
                             return resp.data;
                         });
                     }
                 }
            }).
            when('/subjects/Math', {
                 templateUrl: 'app/views/mathSub.html',
                 controller: 'subjCtrl',
                 resolve: {
                     tutors: function(tutorFactory) {
                         return tutorFactory.getTutors();
                     }
                 }
            }).
            when('/subjects/Chem', {
                 templateUrl: 'app/views/chemSub.html',
                 controller: 'subjCtrl',
                 resolve: {
                     tutors: function(tutorFactory) {
                         return tutorFactory.getTutors();
                     }
                 }
            }).
            when('/subjects/Physics', {
                 templateUrl: 'app/views/pyscSub.html',
                 controller: 'subjCtrl',
                 resolve: {
                     tutors: function(tutorFactory) {
                         return tutorFactory.getTutors();
                     }
                 }
            })
            .otherwise('/home');
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
