'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: {type:DataTypes.STRING, allowNull:false},
    description: {type:DataTypes.TEXT},
    status: {type:DataTypes.ENUM('active',"inactive","declined","completed"), allowNull:false},
    score: {type:DataTypes.INTEGER},
    AssignerId:{type:DataTypes.INTEGER},
    ProjectId:{type:DataTypes.INTEGER}

  }, {});
  Task.associate = function(models) {
    Task.belongsTo(models.User, {as: 'Assigner'});
    Task.belongsTo(models.Project);
    Task.belongsToMany(models.User, { 
      through: 'AssigneeTask', // many-to-many relationship table name
      as: 'Assignee' ,
      foreignKey: 'taskId' 
    })
  };
  return Task;
};