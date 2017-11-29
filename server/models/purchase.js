'use strict';
module.exports = (sequelize, DataTypes) => {
  const Purchase = sequelize.define('Purchase', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    amount: DataTypes.DECIMAL
  });
  Purchase.associate = (models) => {
      Purchase.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
      });
      Purchase.belongsTo(models.Destination, {
          foreignKey: 'destinationId',
          onDelete: 'CASCADE',
          as: 'destination'
      });
      Purchase.belongsTo(models.Currency, {
          foreignKey: 'currencyId',
          onDelete: 'CASCADE',
          as: 'currency'
      });
  };
  return Purchase;
};