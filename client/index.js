'use strict';

angular.module('dayTrader', ['firebase'])
.run(['$rootScope', '$window', function($rootScope, $window){
  $rootScope.fbRoot = new $window.Firebase('https://daytrader.firebaseio.com/');
}])
.controller('master', ['$scope', '$firebaseObject', '$firebaseArray', '$http', function($scope, $firebaseObject, $firebaseArray, $http){
  $http.jsonp('http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=AAPL&callback=JSON_CALLBACK').then(function(response){
    console.info(response);
  });
}]);
