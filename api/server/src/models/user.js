'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {type:DataTypes.STRING, allowNull: false, unique:true},
    name: DataTypes.STRING,
    surname: DataTypes.STRING
  }, {});
  User.associate = function(models) {
  User.belongsToMany(models.Task, { 
   through: 'AssigneeTask', // many-to-many relationship table name
   as: 'Task' ,
   foreignKey: 'assigneeId' 
    });

    User.belongsToMany(models.Project, { 
    through: 'AssigneeProject', // many-to-many relationship table name
    as: 'Project',
    foreignKey: 'assigneeId' // alias
    });

    // associations can be defined here
  };
  return User;
};