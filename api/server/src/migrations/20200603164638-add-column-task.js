'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return Promise.all([
         queryInterface.addColumn(
          'Tasks',
          'ProjectId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Projects', // name of Target model
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
      'ProjectId' // key we want to remove
      )
    ]) 
  }

};
