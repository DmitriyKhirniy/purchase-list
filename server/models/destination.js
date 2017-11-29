'use strict';
module.exports = (sequelize, DataTypes) => {
  var Destination = sequelize.define('Destination', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  });
    // Destination.associate = (models) => {
    //     Destination.belongsTo(models.Purchase, {
    //         foreignKey: 'destinationId',
    //         onDelete: 'CASCADE',
    //     });
    // };
  return Destination;
};