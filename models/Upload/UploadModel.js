const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../utilities/database');

class Upload extends Model {}

Upload.init({
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING
    },
    Notes: {
        type:DataTypes.STRING
    },
    Url: {
        type: DataTypes.STRING
    },
    Sequence: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    DocType: {
        type: DataTypes.STRING
    },
    UploadSetId: {
        type: DataTypes.INTEGER
    },
}, {
    tableName: 'Upload',
    sequelize: sequelize,
    createdAt: false,
    updatedAt: false,
    deletedAt: false
})

module.exports = Upload;