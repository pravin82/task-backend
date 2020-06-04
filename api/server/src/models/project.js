'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: {type:DataTypes.STRING, allowNull:false},
    body: {type: DataTypes.TEXT},
    status: {type:DataTypes.ENUM('active',"inactive","declined","completed"), allowNull:false},
    AssignerId:{type:DataTypes.INTEGER, allowNull:false}
  }, {});
  Project.associate = function(models) {
   Project.belongsTo(models.User, {as: 'Assigner'});
   Project.belongsToMany(models.User, { 
    through: 'AssigneeProject', // many-to-many relationship table name
    as: 'Assignee' ,
    foreignKey: 'projectId' 
   });
  };
  return Project;
};