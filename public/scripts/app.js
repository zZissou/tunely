$(document).ready(function() {
  console.log('app.js loaded!');

  $.ajax({
    method: 'GET',
    url: '/api/albums',
    type: 'json',
    success: handleGetAlbumSuccess,
    error: handleGetAlbumError
  })
});


function handleGetAlbumSuccess(data) {
  var receivedAlbums = data.albums;
  receivedAlbums.forEach(function renderOneAlbum(album) {
    renderAlbum(album);
  });
}
function handleGetAlbumError(a, b, c) {
  console.log(a, b, c);
}

function renderAlbum(album) {
  console.log('rendering album:', album);

  var source = $('#albumInformation').html();
  var template = Handlebars.compile(source);

  var albumHtml = template(album);
  $('#albums').prepend(albumHtml);
}
