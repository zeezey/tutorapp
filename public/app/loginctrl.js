var app = angular.module('tutors');

app.controller('loginctrl', function($scope, signup){
    $scope.signup = function(){
        signup.signup($scope.newUser).then(function(res){
        console.log(res);
        });
    };
    $scope.login = function(loginUser){
        signup.login(loginUser).then(function(res){
        console.log(res);
        });
    };
});

app.service('signup', function($http){
    this.signup = function(newuser){
    return $http.post('/user', newuser);
    };
    this.login = function(loginuser){
    return $http({
        method: 'POST',
        url: 'http://localhost:8181/#/login',
        data: loginuser
    });
    };


});
