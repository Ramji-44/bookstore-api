'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('orders', {
      id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
      },
      customer_id : {      // customers table
        type : Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : 'customers',   
          key : 'id'
        },
        onUpdate : 'CASCADE',
        onDelete : 'CASCADE'
      },
      book_id : {          // books table
        type : Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : 'books',
          key : 'id'
        },
        onUpdate : 'CASCADE',
        onDelete : 'CASCADE'
      },
      date : {
        type : Sequelize.DATEONLY,
        allowNull: false
      },
      quantity : {
        type : Sequelize.INTEGER,
        allowNull : false
      },
      createdAt : {
        type : Sequelize.DATE,
        allowNull : false,
      },
      updatedAt : {
        type : Sequelize.DATE,
        allowNull : false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orders')
  }
};
