'use strict';


module.exports = {
  up: function(queryInterface, Sequelize) {
    // logic for transforming into the new state
    return Promise.all([
      queryInterface.removeColumn(
      'Projects',
      'assigner_id'
    ),

      queryInterface.removeColumn(
      'Tasks',
      'assigner_id'
    ),
      queryInterface.removeColumn(
      'Tasks',
      'project_id'
    )


    ]) 
   

    ;

  },

  down: function(queryInterface, Sequelize) {
    // logic for reverting the changes
    return  Promise.all([

      queryInterface.addColumn(
      'Projects',
      'assigner_id',
      Sequelize.INTEGER
    ),

      queryInterface.addColumn(
      'Tasks',
      'assigner_id',
      Sequelize.INTEGER
    ),
      queryInterface.addColumn(
      'Tasks',
      'project_id',
      Sequelize.INTEGER
    )


    ]);
  }
}

