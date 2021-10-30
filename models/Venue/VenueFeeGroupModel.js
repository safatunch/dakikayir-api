const sequelize = require('../../utilities/database')
const { Sequelize, Model, DataTypes } = require('sequelize');
const Venue = require('./VenueModel');
const VenueFee = require('./VenueFeeModel');

class VenueFeeGroup extends Model {}

VenueFeeGroup.init({
    Id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    Name: DataTypes.STRING,
    AppId: {
        type: DataTypes.INTEGER
    }
},
{
    sequelize: sequelize,
    tableName: 'VenueFeeGroups',
    updatedAt: false,
    createdAt: false,
    deletedAt: false
})

VenueFeeGroup.hasMany(Venue, { foreignKey: 'FeeGroupId' })
Venue.belongsTo(VenueFeeGroup, { foreignKey: 'FeeGroupId' })

VenueFeeGroup.hasMany(VenueFee, { foreignKey: 'FeeGroupID' })
VenueFee.belongsTo(VenueFeeGroup, { foreignKey: 'FeeGroupID' })
// VenueFeeGroup.hasMany(VenueFee, { foreignKey: 'FeeGroupID' })
// VenueFeeGroup.hasMany(Venue, { foreignKey: 'FeeGroupID' })
module.exports = VenueFeeGroup