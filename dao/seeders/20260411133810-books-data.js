'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      {
        title: "song of ice and fire",
        price : 2150,
        author_id : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title: "origin of species",
        price : 1800,
        author_id : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "the alchemist",
        price : 650,
        author_id : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "adventures of sherlock holmes",
        price : 1600,
        author_id : 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "discovery of india",
        price : 800,
        author_id : 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "four stars of destiny",
        price : 1050,
        author_id : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "the glass palace",
        price : 1400,
        author_id : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "maximum city",
        price : 500,
        author_id : 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        title : "a fine balance",
        price : 1100,
        author_id : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "train to pakistan",
        price : 1300,
        author_id : 5,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books')
  }
};
