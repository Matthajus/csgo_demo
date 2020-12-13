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
    return queryInterface.bulkInsert('Matches', [
      {
        matchSteamId: "test.dem",
        map: "Inferno",
        playTime: 2267.671875,
        serverName: "Valve CS:GO Poland Server (srcds055.189.2)",
        clientName: "GOTV Demo",
        tickRate: "64",
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
    return queryInterface.bulkDelete('Matches', null, {});
  }
};
