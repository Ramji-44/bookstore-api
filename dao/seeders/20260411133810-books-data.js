'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      {
        title: "Song of ice and fire",
        price : 2150,
        author_id : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title: "Origin of species",
        price : 1800,
        author_id : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "The Alchemist",
        price : 650,
        author_id : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "Adventures of sherlock holmes",
        price : 1600,
        author_id : 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "Discovery of India",
        price : 800,
        author_id : 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "Four stars of destiny",
        price : 1050,
        author_id : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "The Glass Palace",
        price : 1400,
        author_id : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "Maximum City",
        price : 500,
        author_id : 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        title : "A Fine Balance",
        price : 1100,
        author_id : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "Train to Pakistan",
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
