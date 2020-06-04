'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return Promise.all([
         queryInterface.addColumn(
          'Tasks',
          'AssignerId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Users', // name of Target model
              key: 'id', // key in Target model that we're referencing
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
         ),

         queryInterface.addColumn(
          'Projects',
          'AssignerId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Users', // name of Target model
              key: 'id', // key in Target model that we're referencing
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
         )

        ])
    
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
      'Tasks', // name of Source model
      'AssignerId' // key we want to remove
      ),
      queryInterface.removeColumn(
      'Projects', // name of Source model
      'AssignerId' // key we want to remove
      )

    ]) 
  }

};
