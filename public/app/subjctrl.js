var app = angular.module('tutors');

app.controller('subjCtrl', function($scope, $http, $routeParams, $location, tutorFactory, tutors){

    $scope.tutors = tutors.data;

//  $http.get('api/tutors')
//    .success(function(data, status, headers, config) {
//      $scope.tutors = data;
//        console.log(11111, data);
//    });
//});

//    $scope.getTutor = function(id) {
//        tutorFactory.getTutor(id).then(function(data) {
//            $scope.tutor = data;
//        });
//    };
        $scope.removeTutor = function (id) {
            tutorFactory.deleteTutor(id).then(function(data){
            $scope.deleteTutor = data;
      });
  };
});



//$scope.getTutorId = function () {
//
//};
//});
