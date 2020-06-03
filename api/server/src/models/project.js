'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: {type:DataTypes.STRING, allowNull:false},
    body: {type: DataTypes.TEXT},
    status: {type:DataTypes.ENUM('active',"inactive","declined","completed"), allowNull:false},
  }, {});
  Project.associate = function(models) {
   Project.belongsTo(User, {as: 'Assigner'});
   Project.belongsToMany(models.User, { 
    through: 'AssigneeProject', // many-to-many relationship table name
    as: 'AssigneeProject' // alias
   });
  };
  return Project;
};