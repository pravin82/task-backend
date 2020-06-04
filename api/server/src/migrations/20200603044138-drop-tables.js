'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return Promise.all([
      	queryInterface.dropTable('projectAssignees'),
      	queryInterface.dropTable('taskAssignees')

      	]) 
    
  },

  down: (queryInterface, Sequelize) => {
  	  return Promise.all([
  	  	queryInterface.createTable('projectAssignees'),
  	  	queryInterface.createTable('taskAssignees')

  	  	])
       

  }
};
