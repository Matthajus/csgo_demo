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
    return queryInterface.bulkInsert('Rounds', [
      {
        matchId: 1,
        number: 1,
        typeOfEnd: 9,
        winnerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        matchId: 1,
        number: 2,
        typeOfEnd: 9,
        winnerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        matchId: 1,
        number: 3,
        typeOfEnd: 9,
        winnerId: 2,
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
    return queryInterface.bulkDelete('Rounds', null, {});
  }
};
