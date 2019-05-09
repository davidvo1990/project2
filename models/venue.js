module.exports = function(sequelize, DataTypes) {
  var Venue = sequelize.define("Venue", {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    contact: DataTypes.STRING,
    phone: DataTypes.STRING,
    website: DataTypes.STRING
  });

  Venue.associate = function(models) {
    Venue.hasMany(models.Gig, {
      onDelete: "cascade"
    });
  };
  return Venue;
};
