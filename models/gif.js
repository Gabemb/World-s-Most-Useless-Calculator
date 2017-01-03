'use strict';
module.exports = function(sequelize, DataTypes) {
  var Gif = sequelize.define('Gif', {
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Gif.belongsTo(models.User)
      }
    }
  });
  return Gif;
};