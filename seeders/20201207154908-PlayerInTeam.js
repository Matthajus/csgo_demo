'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert('PlayerInTeams', [
      {
        teamId: 1,
        playerId: 1,
        kills: 5,
        assists: 0,
        deaths: 3,
        mvps: 1,
        score: 10,
        kill_death: 1.66,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teamId: 1,
        playerId: 2,
        kills: 6,
        assists: 2,
        deaths: 3,
        mvps: 2,
        score: 14,
        kill_death: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        teamId: 2,
        playerId: 3,
        kills: 0,
        assists: 2,
        deaths: 5,
        mvps: 0,
        score: 6,
        kill_death: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('PlayerInTeams', null, {});
  }
};
