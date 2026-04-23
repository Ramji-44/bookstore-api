module.exports = (Sequelize, DataTypes) => {

    const Author = Sequelize.define("Author", {   // authors table model
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        country: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    },
        {
            tableName: "authors"  // table Name 
        })

    Author.associate = (models) => {
        Author.hasMany(models.Book, {   // one author has many books
            foreignKey: "author_id"
        })
    }

    return Author
}
