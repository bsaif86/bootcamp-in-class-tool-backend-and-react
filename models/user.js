'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};