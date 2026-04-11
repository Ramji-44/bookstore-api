'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('authors', [
      {
        name : "Martin",
        country: "Mexico",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Charles Darwin",
        country: "England",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Peter",
        country : "Australia",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Ravi Kumar",
        country : "India",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Robert",
        country : "America",
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('authors')
  }
};
