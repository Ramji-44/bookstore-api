module.exports = (sequelize, DataTypes) => {

  const Book = sequelize.define("Book", {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
    {
      tableName: "books"
    })

  Book.associate = (models) => {
    Book.belongsTo(models.Author, {
      foreignKey: "author_id"
    })
  }
  return Book
}
