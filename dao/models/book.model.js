
module.exports = (sequelize, DataTypes) => {

  const Book = sequelize.define("Book", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    author_id: {
      type: DataTypes.INTEGER,
    }
  });

  Book.associate = (models) => {
    Book.belongsTo(models.Author, {    // to author
      foreignKey: "author_id"
    })
  }

  return Book
}