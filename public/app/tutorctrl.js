var app = angular.module('tutors');
//app.controller('tutorctrl', function($scope, tutors){
//    console.log(tutors)
//});
app.controller('tutorctrl', function($scope, $http, $routeParams, tutorFactory, tutors){
$scope.tutors = tutors.data;
});

//$http({method: 'GET', url: '/api/tutors'}).
//  success(function(data, status, headers, config) {
//    // this callback will be called asynchronously
//    // when the response is available.
//    console.log('todos: ', data );
//  }).
//  error(function(data, status, headers, config) {
//    // called asynchronously if an error occurs
//    // or server returns response with an error status.
//    console.log('Oops and error', data);
//  });
//
//// Service
//    .factory('tutors', ['$http', function($http){
//      return $http.get('/api/tutors');
//    }])
//
//    // Controller
//    app.controller('TutorController', ['$scope', 'tutors', function ($scope, tutors) {
//      tutors.success(function(data){
//        $scope.todos = data;
//      }).error(function(data, status){
//        console.log(data, status);
//        $scope.tutors = [];
//      });
//    }])
//
//        app.factory('tutors', ['$resource', function($resource){
//          return $resource('/api/tutors/:id', null, {
//            'update': { method:'PUT' }
//          });
//        }])
//
//        .controller('TutorController', ['$scope', 'tutors', function ($scope, tutors) {
//          $scope.tutors = tutors.query();
//        }])
//
//    app.controller('tutorController', function($scope, $http){
//    // when landing on the page, get all tutors and show them
//    $http.get('/api/tutors')
//        .success(function(data) {
//            $scope.tutors = data;
//            console.log(data);
//        })
//        .error(function(data) {
//            console.log('Error: ' + data);
//        });
//
//    // when submitting the add form, send the text to the node API
//    $scope.createTutor = function() {
//        $http.post('/api/tutors', $scope.formData)
//            .success(function(data) {
//                $scope.tutors = data;
//                console.log(data);
//            })
//            .error(function(data) {
//                console.log('Error: ' + data);
//            });
//    };
//});
//
//angular.module('tutors').controller('tutorctrl', ['$scope', '$routeParams', '$location',
//    function($scope, $routeParams, $location, Authentication, tutors) {
//        $scope.authentication = Authentication;
//
//        $scope.create = function() {
//            var tutor = new tutors({
//                fname: this.fname,
//                subject: this.subject
//            });
//
//            tutor.$save(function(response) {
//                $location.path('api/tutors/' + response._id);
//            }, function(errorResponse) {
//                $scope.error = errorResponse.data.message;
//            });
//        };
//
//        $scope.find = function() {
//            $scope.tutors = tutors.query();
//        };
//
//        $scope.findOne = function() {
//            $scope.tutor = tutors.get({
//                tutorId: $routeParams.tutorId
//            });
//        };
//
//        $scope.update = function() {
//            $scope.tutor.$update(function() {
//                $location.path('api/tutors/' + $scope.todo._id);
//            }, function(errorResponse) {
//                $scope.error = errorResponse.data.message;
//            });
//        };
//
//        $scope.delete = function(tutor) {
//            if (tutor) {
//                tutor.$remove(function() {
//                    for (var i in $scope.tutor) {
//                        if ($scope.tutors[i] === tutor) {
//                            $scope.tutors.splice(i, 1);
//                        }
//                    }
//                });
//            } else {
//                $scope.tutor.$remove(function() {
//                    $location.path('tutors');
//                });
//            }
//        };
//    }
//]);


//app.controller('mainCtrl', function($scope, tutorService){
//    $scope.getTutorData = function (Tutor) {
//        tutorService.getTutorData(Tutor).then(function (response){
//            $scope.tutorData = response;  //returns promise response from Service.
//            console.log(1212121212, $scope.tutorData.fname);
//        });
//    };
//});



//function AddTutorCtrl($scope, $http, $location) {
//  $scope.form = {};
//  $scope.addTutor = function () {
//    $http.post('/api/tutors', $scope.tutor).
//      success(function(data) {
//        $location.path('/');
//      });
//  };
//}
//
//function ReadTutorCtrl($scope, $http, $routeParams) {
//  $http.get('/api/tutors/' + $routeParams.id).
//    success(function(data) {
//      $scope.post = data.post;
//    });
//}
//
//function EditTutorCtrl($scope, $http, $location, $routeParams) {
//  $scope.form = {};
//  $http.get('/api/tutors/' + $routeParams.id).
//    success(function(data) {
//      $scope.form = data.post;
//    });

//  $scope.editPost = function () {
//    $http.put('/api/tutors/' + $routeParams.id, $scope.form).
//      success(function(data) {
//        $location.url('/readPost/' + $routeParams.id);
//      });
//  };


//function DeleteTutorCtrl($scope, $http, $location, $routeParams) {
//  $http.get('/api/tutors/' + $routeParams.id).
//    success(function(data) {
//      $scope.post = data.post;
//    });



//  $scope.home = function () {
//    $location.url('/');
//  };
//}
