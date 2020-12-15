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
    return queryInterface.bulkInsert('Players', [
      {
        steamId: "STEAM_0:0:01457",
        nickName: "RicoRoztrhavac",
        rank: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        steamId: "STEAM_0:0:04587",
        nickName: "Forzera",
        rank: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        steamId: "STEAM_0:0:02404",
        nickName: "Matthaeus",
        rank: 15,
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
    return queryInterface.bulkDelete('Players', null, {});
  }
};
