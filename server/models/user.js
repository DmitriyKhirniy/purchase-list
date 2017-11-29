'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN,
    birthDate: DataTypes.DATE
  });
  User.associate = (models) => {
    User.hasMany(models.Purchase, {
        foreignKey: 'userId',
        as: 'purchaseItems',
    });
  };
  return User;
};