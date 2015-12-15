angular.module('video', ['ngResource'])

.controller('videoController', function($scope){
  $scope.videoList = [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Sunset_2007-1.jpg',
      name: 'sunset'
    },
    {
      url:'https://upload.wikimedia.org/wikipedia/commons/3/3d/Little_Gasparilla_sunrise.jpg',
      name: 'sunrise'
    }
  ]
})


// .controller('videoController', function($scope){
//   $scope.searchByKeyword= function(){
//     var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});
//     for(var i in results.items) {
//       var item = results.items[i];
//       Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
//     }
//   }
// })


// .controller('videoController', function($scope, $resource){
//   $scope.video= $resource('http://search.twitter.com/:action',
//     { action: 'search.json', q: 'angularjs', callback: 'JSON_CALLBACK'},
//     {get: {method: 'JSONP'}})
//     $scope.doSearch = function(){
//       $scope.videoResult = $scope.video.get({q:'$scope.searchTerm'});
//     }
//
//   })
