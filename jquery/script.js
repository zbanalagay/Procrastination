var vidWidth = '800px';
var vidHeight= '480px';
$(document).ready(function(){
  $("#button").click( function()
          {
            $('#results div').empty();
            $.get(
              "https://www.googleapis.com/youtube/v3/search", {
                part: 'snippet',
                maxResults: 50,
                 q: $('#searchBar').val(),
                key: "AIzaSyA8iIbu-hvnW6Rb21SAexTtH8Qgbwhzpco"},
                function(data){
                  var output;
                  $.each(data.items, function(i, item){
                    console.log(item);
                    var videoTitle= item.snippet.title;
                    var videoId= item.id.videoId

                    output= '<div><iframe height="'+vidHeight+'" width="'+ vidWidth + '"src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></div>';
                    $('#results').append(output)
                  })
                }
            )
          }
     );

})
