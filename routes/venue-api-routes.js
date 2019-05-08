var db = require("../models");

module.exports = function(app) {
  app.get("/api/venues", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Venue.findAll({
      include: [db.Gig]
    }).then(function(dbVenue) {
      res.json(dbVenue);
    });
  });

  app.get("/api/venues/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Venue.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Gig]
    }).then(function(dbVenue) {
      res.json(dbVenue);
    });
  });

  app.post("/api/venues", function(req, res) {
    db.Venue.create(req.body).then(function(dbVenue) {
      res.json(dbVenue);
    });
  });

  app.delete("/api/venues/:id", function(req, res) {
    db.Venue.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbVenue) {
      res.json(dbVenue);
    });
  });
};
