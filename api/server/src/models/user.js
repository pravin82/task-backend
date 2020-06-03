'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {type:DataTypes.STRING, allowNull: false, unique:true},
    name: DataTypes.STRING,
    surname: DataTypes.STRING
  }, {});
  User.associate = function(models) {
  	User.belongsToMany(models.Task, { 
    through: 'Assignee_Task', // many-to-many relationship table name
    as: 'AssigneeTask' // alias
    });

    User.belongsToMany(models.Project, { 
    through: 'Assignee_Project', // many-to-many relationship table name
    as: 'AssigneeProject' // alias
    });

    // associations can be defined here
  };
  return User;
};