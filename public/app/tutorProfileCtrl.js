var app = angular.module('tutors');
app.controller('tutorProfileCtrl', function($scope, tutorFactory, tutor){
    $scope.tutors = tutor;
//    $scope.getTutor = function(id) {
//        console.log(id);
//        tutorFactory.getTutor(id).then(function(data) {
//            console.log(data);
//            $scope.tutor = data;
//        });
//    };
});
