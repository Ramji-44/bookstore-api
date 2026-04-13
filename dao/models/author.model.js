
module.exports = (Sequelize, DataTypes) => {

    const Author = Sequelize.define("Author", {   // authors table model
        name :{
            type : DataTypes.STRING,
            allowNull : false,

            unique: {                          //  unique constraint
                msg: "Author name already exists"
            },

            validate : {
                notNull : {
                    msg : "Name is required"
                },
                notEmpty : {
                    msg : "Name cannot be blank"
                },
                len : {
                    args : [3, 100],
                    msg : "Name must be between 3 and 100 characters long"
                }
            }
        },
        country : {
            type : DataTypes.STRING,
            validate : {
                isAlpha : {
                    msg : "Country must contain only letters"
                },
                len : {
                    args : [3, 100],
                    msg : "Country must be between 3 and 100 characters long"
                }
            }
        }
    })

    Author.associate = (models) => {

        Author.hasMany(models.Book, {    // one author has many books
            foreignKey : "author_id"
        })
    }
    return Author
}
