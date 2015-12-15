












// $(function(){
//   $('form').on('submit', function(event){
//     event.preventDefault();
//     var request= gapi.client.youtube.search.list({
//       part: "snippet",
//       type: "video",
//       q:  encodeURIComponent($('search').val().replace(/%20/g, "+")),
//       // /%20/g replaces the spaces
//       maxResults: 1,
//       order: "relevance"
//     })
//
//     request.exec(function(response){
//       var results = response.results;
//     })
//   })
// })
// function init(){
//   //add back the api keys
//   gapi.client.load('youtube', 'v3', function(){
//     console.log("youtube api is ready");
//   })
// }
