const sequelize = require('../../utilities/database')
const { DataTypes, Model, Sequelize } = require('sequelize')

class UserRole extends Model {}

UserRole.init({
    UserId: {
        type: DataTypes.UUID
    },
    RoleId: {
        type: DataTypes.INTEGER
    }
},
{
    sequelize,
    createdAt: false,
    deletedAt: false,
    updatedAt: false,
    tableName: 'UserRoles'
})

module.exports = UserRole