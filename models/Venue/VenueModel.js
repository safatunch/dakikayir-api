const sequelize = require('../../utilities/database')
const { Sequelize, Model, DataTypes } = require('sequelize');
const VenueFeeGroup = require('./VenueFeeGroupModel');


class Venue extends Model {}

Venue.init({
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: DataTypes.STRING,
    PlaceId: DataTypes.STRING,
    Premise: DataTypes.STRING,
    StreetNumber: DataTypes.STRING,
    Street: DataTypes.STRING,
    Town: DataTypes.STRING,
    County: DataTypes.STRING,
    Notes: DataTypes.STRING,
    CancellationNotice: DataTypes.STRING,
    VideoUrl: DataTypes.STRING,
    StandingCapacity: DataTypes.INTEGER,
    SeatedCapacity: DataTypes.INTEGER,
    CapacityOption: DataTypes.TINYINT, // #TODO - Create enum
    FeeText: DataTypes.STRING,
    FeeGroupId: {
        type: DataTypes.INTEGER
    },
    Type: DataTypes.TINYINT, // #TODO - Create enum
    Status: DataTypes.TINYINT, // #TODO - Create enum
    Url: DataTypes.STRING,
    Slug: 
    {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    OnlineBookings: DataTypes.BOOLEAN,
    DefaultBookingStatus: DataTypes.TINYINT, // #TODO - Create enum
    OnlinePayments: DataTypes.BOOLEAN,
    BufferTime: DataTypes.TIME,
    MinSlotInterval: DataTypes.INTEGER,
    MaxSlotInterval: DataTypes.INTEGER,
    MaxTimeForAdvanceBookings: DataTypes.INTEGER,
    AppId: DataTypes.INTEGER,
    UploadSetId: DataTypes.INTEGER
}, {
    sequelize: sequelize,
    createdAt: true,
    updatedAt: false,
    deletedAt: true,
    tableName: 'Venues'
})

module.exports = Venue;