var db = require("../models");

// GET /api/albums
function index(req, res) {
  db.Album.find({}, function(err, album) {
    res.json(album);
  });
}
function create(req, res) {
  console.log('body', req.body);

  db.Album.create(req.body, function(err, album) {
    if (err) {console.log('error', err);}
    console.log(album);
    res.json(album);
  });
}

function show(req, res) {
  // FILL ME IN !
}

function destroy(req, res) {
  // FILL ME IN !
}

function update(req, res) {
  // FILL ME IN !
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
