'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn("books", "author_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {    // from author table, ID
        model: "authors",
        key: "id"
      },
      onUpdate: "CASCADE",  // if author table id updates or deletes, that will affect in here to..
      onDelete: "CASCADE",
      after: "stock"     // after the stock column, the author_id will appear
    })
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn("books", "author_id")
  }
};
