'use strict';

angular.module('pangularApp').service('Users', function($http, $q) {
  var getUsers = function() {
    var deferred = $q.defer();
    $http.get('users').
      success(function(data, status, headers, config) {
        deferred.resolve(data.users);
      });
    return deferred.promise;
  };

  return {
    getUsers: getUsers
  };
});