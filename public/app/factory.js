'use strict';
var app = angular.module('tutors')
app.
  factory('tutorFactory', function($http){
    return {
      createTutor: function(tutor) {
          tutor.rating = 5;
        return $http.post('/api/tutors/', tutor);
      },
      getTutors: function() {
        return $http.get('/api/tutors/');
      },
      getTutor: function(id) {
        return $http.get('/api/tutors/' + id.id);
      },
      updateTutor: function(id, tutor) {
        return $http.put('/api/tutors/' + id, tutor);
      },
      deleteTutor: function(id) {
        return $http.delete('/api/tutors/' + id);
      }
    };
  });


