const sequelize = require('../../utilities/database')
const { Sequelize, Model, DataTypes } = require('sequelize');

class VenueFee extends Model {}

VenueFee.init({
    Id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    MinimumQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    StartDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    EndDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    Days: {
        type: DataTypes.STRING,
        allowNull: false
    },
    StartTime: {
        type: DataTypes.TIME,
        allowNull: false
    },
    EndTime: {
        type: DataTypes.TIME,
        allowNull: false
    },
    CustomerTypeID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    FeeGroupID: {
        type: DataTypes.INTEGER
    }
},
{
    sequelize: sequelize,
    tableName: 'VenueFee',
    updatedAt: false,
    createdAt: false,
    deletedAt: false
})



module.exports = VenueFee