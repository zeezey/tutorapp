var app = angular.module('tutors');
app.controller('tutorProfileCtrl', function($scope, tutorFactory, tutor){
    $scope.tutors = tutor;
});
