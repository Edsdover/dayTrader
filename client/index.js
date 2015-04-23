'use strict';

angular.module('dayTrader', ['firebase'])
  .run(['$rootScope', '$window',function($rootScope, $window){
    $rootScope.fbRoot = new $window.Firebase('https://daytrader.firebaseio.com/');
  }])
  .controller('master', ['$scope', '$firebaseObject', '$firebaseArray', '$http', function($scope, $firebaseObject, $firebaseArray, $http){
      var fbUser = $scope.fbRoot.child('user');
      var afUser = $firebaseObject(fbUser);
      $scope.user = afUser;
      var fbStock = $scope.fbRoot.child('stock');
      var afStock = $firebaseObject(fbStock);
      $scope.stock = afStock;
      $scope.saveUser = function(){
        $scope.isUserFormShown = false;
        $scope.user.$save();
      };
      $scope.showUserForm = function(){
        $scope.isUserFormShown = true;
      };
      $scope.purchase = function(){
        var stock = $scope.symbol;
        $http.jsonp('http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + stock + '&callback=JSON_CALLBACK').then(function(response){
          console.log(response.data.LastPrice);
      });
    };
}]);
