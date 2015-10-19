var app = angular.module('tutors');

app.controller('subjCtrl', function($scope, $http){
  $http.get('api/tutors')
    .success(function(data, status, headers, config) {
      $scope.tutors = data;
        console.log(11111, data);
    });
})

function isSubj(subject) {
  return subject = "subject";
}
