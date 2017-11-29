'use strict';
module.exports = (sequelize, DataTypes) => {
  const Currency = sequelize.define('Currency', {
    name: DataTypes.ENUM(['UAH', 'USD'])
  });
  return Currency;
};