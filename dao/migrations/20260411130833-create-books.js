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
        type: Sequelize.STRING,
        allowNull: false
      },
      price : {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      author_id : {        // author_id is a FK
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model : "authors",  // author table name
          key : "id"          
        },
        onUpdate : 'CASCADE',   // update and deletes if author_id changes, FK will change 
        onDelete : 'CASCADE'
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

