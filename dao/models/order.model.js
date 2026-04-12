// junction model -> connects with books and customers

module.exports = (sequelize, DataTypes) => {

  const Order = sequelize.define("Order", {

    customer_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    quantity: DataTypes.INTEGER,
  })

  Order.associate = (models) => {

    Order.belongsTo(models.Customer, {      // customer model
      foreignKey: "customer_id"
    });

    Order.belongsTo(models.Book, {          // book model
      foreignKey: "book_id"
    })
  }

  return Order
}