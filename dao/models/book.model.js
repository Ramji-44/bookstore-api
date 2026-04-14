module.exports = (sequelize, DataTypes) => {

  const Book = sequelize.define("Book", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      
      validate : {
      notNull : {
        msg : "Title is required"
      },
      notEmpty : {
        msg : "Title cannot be blank"
      },
      len: {
        args : [2, 200],
        msg : "Title must be between 2 and 200 characters long"
      }
    }
    },

    price: {
      type: DataTypes.DECIMAL(10,2),
      validate : {
        isDecimal : {
          msg : "Price must be a valid number"
        },
        min : {
          args : [0],
          msg : "Price cannot be Negative"
        }
      }
    },
   
     stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        isInt: { 
          msg: "Stock must be an integer" 
        },
        min: {
          args: [0],
          msg: "Stock cannot be negative"
        }
      }
    }

  })

  return Book
}
