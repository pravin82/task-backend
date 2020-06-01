'use strict';
module.exports = (sequelize, DataTypes) => {
  const taskAssignee = sequelize.define('taskAssignee', {
    task_id: {type:DataTypes.INTEGER,unique:'task_assignee'},
    assignee_id: {type:DataTypes.INTEGER,unique:'task_assignee'}
  }, {});
  taskAssignee.associate = function(models) {
    // associations can be defined here
  };
  return taskAssignee;
};