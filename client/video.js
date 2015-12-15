angular.module('video', ['ngResource'])

.controller('videoController', function($scope, $resource){
  $scope.video= $resource('http://search.twitter.com/:action',
    { action: 'search.json', q: 'angularjs', callback: 'JSON_CALLBACK'},
    {get: {method: 'JSONP'}})
    $scope.videoResult = $scope.video.get();

  })
