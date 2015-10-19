//var app = angular.module('tutors');

	// super simple service
	// each function returns a promise object
//	app.service('tutorService', ['$http',function($http) {
//		return {
//			get : function() {
//				return $http.get('/api/tutors');
//			},
//			create : function(tutorData) {
//				return $http.post('/api/tutors', tutorData);
//			},
//			delete : function(id) {
//				return $http.delete('/api/tutors/' + id);
//			}
//		}
//	}]);
//angular.module('tutors').factory('Tutors1', ['$resource',
//    function($resource) {
//        return $resource('api/tutors/:ID', {
//            tutors1Id: '@_id'
//        }, {
//            update: {
//                method: 'PUT'
//            }
//        });
//    }
//]);

//var app = angular.module('tutors');
//
//app.service('tutorService', function($http, $q){
//
//    this.getTutors = function (tutor) {
//        var deferred = $q.defer(); //always use this when $q
////        console.log(4444444, deferred);
//        $http({
//            method: 'GET',
//            url: '/api/tutors'
//        }).then(function (response) {
//            console.log('22222', response);
//            var tutor = response.data;
//            deferred.resolve(tutor);
//            });
//    }
//});

var app = angular.module('tutors');
app.service('tutorService', function($http, $q, $routeParams){
	this.getTutorsub = function(subject){
		return $http({
			method: 'GET',
			url: '/api/tutors/?subject=' + subject,
		})
	}
    this.getTutors = function(){
		return $http({
			method: 'GET',
			url: '/api/tutors'
		})
    }
});
