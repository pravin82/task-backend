'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: {type:DataTypes.STRING, allowNull:false},
    description: {type:DataTypes.TEXT},
    status: {type:DataTypes.ENUM('active',"inactive","declined","completed"), allowNull:false},
    assigner_id: {type:DataTypes.INTEGER, allowNull:false},
    score: {type:DataTypes.INTEGER},
    project_id: {type:DataTypes.INTEGER, allowNull:false}
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};