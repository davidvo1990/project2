module.exports = function(sequelize, DataTypes) {
  var Gig = sequelize.define("Gig", {
    name: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING
  });

  Gig.associate = function(models) {
    Gig.belongsTo(models.Artist, {
      foreignKey: {
        allowNull: false
      }
    }),
    // IGNORE THIS LINT ISSUE
    Gig.belongsTo(models.Venue, { 
      foreignKey: { 
        allowNull: false 
      } });
  };

  return Gig;
};
