// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the gigs
  app.get("/api/gigs", function(req, res) {
    var query = {};
    if (req.query.ArtistId) {
      query.ArtistId = req.query.ArtistId;
    }
    if (req.query.VenueId) {
      query.VenueId = req.query.VenueId;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Artist
    db.Gig.findAll({
      where: query,
      include: [db.Artist, db.Venue]
    }).then(function(dbGig) {
      res.json(dbGig);
    });
  });

  // Get route for retrieving a single gig
  app.get("/api/gigs/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Artist
    db.Gig.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Artist, db.Venue]
    }).then(function(dbGig) {
      res.json(dbGig);
    });
  });

  // POST route for saving a new gig
  app.post("/api/gigs", function(req, res) {
    db.Gig.create(req.body).then(function(dbGig) {
      res.json(dbGig);
    });
  });

  // DELETE route for deleting gigs
  app.delete("/api/gigs/:id", function(req, res) {
    db.Gig.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbGig) {
      res.json(dbGig);
    });
  });

  // PUT route for updating gigs
  app.put("/api/gigs", function(req, res) {
    db.Gig.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbGig) {
      res.json(dbGig);
    });
  });
};
