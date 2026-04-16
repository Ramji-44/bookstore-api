
module.exports = (Sequelize, DataTypes) => {

    const Author = Sequelize.define("Author", {   // authors table model
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        country: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    },
        {
            tableName: "authors"  // table Name 
        })

    return Author
}
