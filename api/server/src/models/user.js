'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {type:DataTypes.STRING, allowNull: false, unique:true},
    name: DataTypes.STRING,
    surname: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};