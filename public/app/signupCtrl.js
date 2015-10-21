var app = angular.module('tutors');
app.controller('signupCtrl', function($scope, $http, $location, tutorFactory){

      $scope.createTutor = function(tutor) {
        tutorFactory.createTutor(tutor).then(function(data) {
            $scope.tutor = data;
        });
    };
  });
