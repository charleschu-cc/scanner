angular.module('starter.controllers', [])

.controller('ScanCtrl', function($scope, $rootScope, $cordovaBarcodeScanner, $ionicPlatform) {
    var vm = this;

    $scope.scan = function(){
        console.log('scan called');
        $ionicPlatform.ready(function() {
            $cordovaBarcodeScanner
            .scan()
            .then(function(result) {
                // Success! Barcode data is here
                $scope.scanResults = "[" + result.format + "] " +
                result.text + " ";
            }, function(error) {
                // An error occurred
                $scope.scanResults = 'Error: ' + error;
            });
        });
    };
    
    $scope.qrscan = function() {
      console.log('qrscan');
    };

    $scope.scanResults = '[test] http://google.com';
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
