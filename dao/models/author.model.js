
module.exports = (Sequelize, DataTypes) => {

    const Author = Sequelize.define("Author", {   // authors table model
        name :{
            type : DataTypes.STRING,
            allowNull : false,
            unique: true,

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
                notEmpty : {
                    msg : "Country cannot be blank"
                },
                len : {
                    args : [3, 100],
                    msg : "Country must be between 3 and 100 characters long"
                }
            }
        }
    })

    return Author
}
