'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: {type:DataTypes.STRING, allowNull:false},
    body: {type: DataTypes.TEXT},
    status: {type:DataTypes.ENUM('active',"inactive","declined","completed"), allowNull:false},
    assigner_id: {type:DataTypes.INTEGER, allowNull:false}
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};