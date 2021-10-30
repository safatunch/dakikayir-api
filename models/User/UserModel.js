const sequelize = require('../../utilities/database')
const { Sequelize, Model, DataTypes } = require('sequelize');
const UserRole = require('./UserRoleModel');
const Role = require('./RoleModel');

class User extends Model {}

User.init({
    Id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    Username: {
        type: DataTypes.STRING
    },
    PasswordHash: {
        type: DataTypes.STRING
    },
    PasswordSalt: {
        type: DataTypes.STRING
    },
    Name: {
        type: DataTypes.STRING
    },
    Surname: {
        type: DataTypes.STRING
    },
    AppId: {
        type: DataTypes.INTEGER
    }
},
{
    sequelize,
    createdAt: true,
    deletedAt: true,
    tableName: 'Users'
})

User.hasMany(UserRole)
User.belongsToMany(Role, { through: UserRole, foreignKey: 'UserId' })
module.exports = User