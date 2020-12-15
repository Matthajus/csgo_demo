'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PlayerInTeams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      teamId: {
        type: Sequelize.INTEGER
      },
      playerId: {
        type: Sequelize.INTEGER
      },
      kills: {
        type: Sequelize.INTEGER
      },
      assists: {
        type: Sequelize.INTEGER
      },
      deaths: {
        type: Sequelize.INTEGER
      },
      mvps: {
        type: Sequelize.INTEGER
      },
      score: {
        type: Sequelize.INTEGER
      },
      kill_death: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('PlayerInTeams');
  }
};