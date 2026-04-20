'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      {
        title: "song of ice and fire",
        price: 2150,
        stock: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "origin of species",
        price: 1800,
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "the alchemist",
        price: 650,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "adventures of sherlock holmes",
        price: 1600,
        stock: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "discovery of india",
        price: 800,
        stock: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "four stars of destiny",
        price: 1050,
        stock: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "the glass palace",
        price: 1400,
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "maximum city",
        price: 500,
        stock: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        title: "a fine balance",
        price: 1100,
        stock: 26,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "train to pakistan",
        price: 1300,
        stock: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books')
  }
};
