'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('orders', [
      {
        customer_id : 2,
        book_id : 8,
        date : "2024-03-20",
        quantity : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        customer_id : 3,
        book_id : 1,
        date : "2025-05-23",
        quantity : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        customer_id : 1,
        book_id : 3,
        date : "2024-07-29",
        quantity : 5,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        customer_id : 4,
        book_id : 10,
        date : "2022-01-18",
        quantity : 7,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        customer_id : 2,
        book_id : 5,
        date : "2025-09-13",
        quantity : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        customer_id : 5,
        book_id : 7,
        date : "2023-10-10 ",
        quantity : 8,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        customer_id : 3,
        book_id : 2,
        date : "2025-12-01",
        quantity : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        customer_id : 1,
        book_id : 4,
        date : "2024-01-30",
        quantity : 10,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        customer_id : 4,
        book_id : 9,
        date : "2023-11-24",
        quantity : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        customer_id : 5,
        book_id : 6,
        date : "2025-04-15",
        quantity : 9,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ]) 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orders')
  }
};

