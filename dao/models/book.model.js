
module.exports = (sequelize, DataTypes) => {

  const Book = sequelize.define("Book", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
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
      type: DataTypes.DECIMAL,
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
    
    author_id: {
      type: DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : {
          msg : "Author ID is required"
        },
        isInt : {
          msg : "Author ID must be an integer"
        }
      }
    },

    indexes: [
      {
        unique: true,                         // unique constraint 
        fields: ["title", "author_id"],
        msg: "This book already exists for this author"
      }
    ]
  })

  Book.associate = (models) => {
    Book.belongsTo(models.Author, {    // to author
      foreignKey: "author_id"
    })
  }

  return Book
}