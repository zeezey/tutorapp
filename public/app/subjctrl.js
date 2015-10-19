var app = angular.module('tutors');

app.controller('subjCtrl', function($scope, $http){
  $http.get('api/tutors')
    .success(function(data, status, headers, config) {
      $scope.tutors = data;
        console.log(11111, data);
    });

$scope.delete = function(tutors) {
        // Hides a row of fruit, if the delete button was clicked
        alert("Deleting the " + tutors.name);
        return tutors.show = false;
    };
});
function isSubj(subject) {
  return subject = "subject";
}

