var path = require("path");

module.exports = function(app) {
  // Loads index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/floe.html"));
  });

  //The cms route loads cms.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/cms.html"));
  });

  // floe route loads floe.html
  app.get("/floe", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/floe.html"));
  });

  // artists route loads artist-manager.html
  app.get("/artists", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/artist-manager.html"));
  });

  // artists route edit artist-manager.html
  app.get("/edit-artist", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/edit-artist.html"));
  });

  // venues route load venues.html
  app.get("/venues", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/venue-manager.html"));
  });

  // artists route edit artist-manager.html
  app.get("/edit-venue", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/edit-venue.html"));
  });
};
