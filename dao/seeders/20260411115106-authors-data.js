'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('authors', [
      {
        name : "martin",
        country: "mexico",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "charles darwin",
        country: "england",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "peter",
        country : "australia",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "ravi kumar",
        country : "india",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "robert",
        country : "america",
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('authors')
  }
};
