'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      matchSteamId: {
        type: Sequelize.STRING
      },
      map: {
        type: Sequelize.STRING
      },
      playTime: {
        type: Sequelize.FLOAT
      },
      serverName: {
        type: Sequelize.STRING
      },
      clientName: {
        type: Sequelize.STRING
      },
      tickRate: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Matches');
  }
};