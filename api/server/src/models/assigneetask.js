'use strict';

module.exports = (sequelize, DataTypes) => {
  const AssigneeTask = sequelize.define('AssigneeTask', {
    assigneeId: DataTypes.INTEGER,
    taskId: DataTypes.INTEGER
  }, {});
  AssigneeTask.associate = function(models) {
    // associations can be defined here
  };
  return AssigneeTask;
};
