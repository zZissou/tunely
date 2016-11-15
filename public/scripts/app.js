$(document).ready(function() {
  console.log('app.js loaded!');

  $.ajax({
    method: 'GET',
    url: '/api/albums',
    type: 'json',
    success: handleGetAlbumSuccess,
    error: handleGetAlbumError
  })

  $('#albumForm').on('submit', function(event) {
    event.preventDefault();

    var formData = $(this).serialize();
    console.log(formData);

    $.ajax({
      method: 'POST',
      url: '/api/albums',
      type: 'json',
      success: handlePostAlbumSuccess,
      error: handlePostAlbumError,
    })
  });
});

// function handlePostAlbumSuccess(data) {
//   console.log("got it")
// }
// function handlePostAlbumError(data) {
//   console.log("don't have it")
// }
function handleGetAlbumSuccess(data) {
  var receivedAlbums = data;
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
