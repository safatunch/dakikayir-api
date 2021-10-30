const sequelize = require('../../utilities/database')
const { Sequelize, Model, DataTypes } = require('sequelize')
const { Roles } = require('../../constants/Roles')

class Role extends Model { }

Role.init({
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.ENUM("Admin", "CouncilAdmin", "User")
    }
},
    {
        sequelize,
        createdAt: false,
        deletedAt: false,
        updatedAt: false,
        tableName: 'Roles'
    })
    
Role.count().then(count => {
    if (count == 0) {
        Role.bulkCreate(
            [
                {
                    Id: Roles.Admin,
                    Name: "Admin"
                },
                {
                    Id: Roles.CouncilAdmin,
                    Name: "CouncilAdmin"
                },
                {
                    Id: Roles.User,
                    Name: "User"
                }
            ]
        )
    }
})

module.exports = Role