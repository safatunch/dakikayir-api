const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../utilities/database');
const Upload = require('./UploadModel');

class UploadSet extends Model {}

UploadSet.init({
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    EntityName: {
        type: DataTypes.STRING
    }
},{
    tableName: 'UploadSets',
    sequelize: sequelize,
    createdAt: false,
    updatedAt: false,
    deletedAt: false
})

UploadSet.hasMany(Upload, { foreignKey: 'UploadSetId' })
Upload.belongsTo(UploadSet, { foreignKey: 'UploadSetId' })


module.exports = UploadSet;