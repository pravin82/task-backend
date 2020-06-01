'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    body: DataTypes.TEXT,
    status: DataTypes.ENUM('active',"inactive","declined","completed"),
    assigner_id: DataTypes.INTEGER
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};