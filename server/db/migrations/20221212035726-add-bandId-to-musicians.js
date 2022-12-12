'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.addColumn('Musicians', 'bandId', Sequelize.INTEGER, { 
      allowNull: false,
      references: { model: 'bands', key: 'id'},
      onDelete: 'cascade'
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeColumn('Musicians', bandId);

  }
};
