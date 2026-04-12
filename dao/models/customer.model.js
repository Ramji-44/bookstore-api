
module.exports = (sequelize, DataTypes) => {

  const Customer = sequelize.define("Customer", {
    name: DataTypes.STRING,
    city: DataTypes.STRING,
  });

  Customer.associate = (models) => {

    Customer.hasMany(models.Order, {    // one customer has many orders
      foreignKey: "customer_id"
    });
  };

  return Customer
}
