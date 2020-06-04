'use strict';
module.exports = (sequelize, DataTypes) => {
  const AssigneeProject = sequelize.define('AssigneeProject', {
    assigneeId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {});
  AssigneeProject.associate = function(models) {
    // associations can be defined here
  };
  return AssigneeProject;
};