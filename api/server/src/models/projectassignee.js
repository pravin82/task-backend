'use strict';
module.exports = (sequelize, DataTypes) => {
  const projectAssignee = sequelize.define('projectAssignee', {
    project_id: {type:DataTypes.INTEGER,unique:'project_assignee'},
    assignee_id: {type:DataTypes.INTEGER, unique:'project_assignee'}
  }, {});
  projectAssignee.associate = function(models) {
    // associations can be defined here
  };
  return projectAssignee;
};