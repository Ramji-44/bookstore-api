'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('books', {

      id: {
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull: false
      },
      title : {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      price : {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      stock : {   
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      createdAt : {
        type : Sequelize.DATE,
        allowNull: false
      },
      updatedAt : {
        type : Sequelize.DATE,
        allowNull : false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('books')
  }
};

