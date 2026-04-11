'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('customers', [
      {
        name : "Manoj",
        city : "Salem",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Arjun",
        city : "Chennai",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Ashwin",
        city : "Coimbatore",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Kamal",
        city : "Madurai",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Harish",
        city : "Trichy",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Kavin",
        city : "Erode",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Vetrivel",
        city : "Salem",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Sanjeev",
        city : "Coimbatore",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Karthik",
        city : "Chennai",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Imran",
        city : "Madurai",
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('customers')
  }
};
