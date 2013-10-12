'use strict';

angular.module('pangularApp').controller('UserCtrl', function($scope, Users) {

  // Let's namespace the user details
  // Also great for DOM visual aids too
  $scope.user = {};
  $scope.user.details = {
    'username': 'Ted Jenkins',
    'id': '1111111'
  };

  Users.getUsers().then(function(users) {
    $scope.users = users;
  });
});