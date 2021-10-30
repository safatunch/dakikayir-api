const Upload = require("../../models/Upload/UploadModel");
const UploadSet = require("../../models/Upload/UploadSetModel");
const VenueFeeGroup = require("../../models/Venue/VenueFeeGroupModel");
const VenueFee = require("../../models/Venue/VenueFeeModel");
const Venue = require("../../models/Venue/VenueModel")

class VenueService {
    listOptions = {
    attributes: ['Id', 'Name', 'PlaceId'],
    include: [{
        model: VenueFeeGroup,
        attributes: ['Id'],
        include: [{
            model: VenueFee,
            attributes: ['Price'],
        }]
    }, {
        model: UploadSet,
        attributes: ['Id'],
        include: [{
            model: Upload,
            attributes: ['Name', 'Url', 'Sequence', 'DocType']
        }]
    }], 
    };

    detailOptions = {
        attributes: ['Id', 'Name', 'PlaceId'],
        include: [{
        model: VenueFeeGroup,
        attributes: ['Id'],
        include: [{
            model: VenueFee,
            attributes: ['MinimumQuantity','DurationType', 'Price'],
        }]
    }, {
        model: UploadSet,
        attributes: ['Id'],
        include: [{
            model: Upload,
            attributes: ['Name', 'Url', 'Sequence', 'DocType']
        }]
    }], 
    };

    async Get(id, options) {
        return await Venue.findByPk(id, options)
    }

    async GetAll(options) {
        return await Venue.findAll(options)
    }

    async Create(venue) {
        return await Venue.create(venue);
    }

    async Edit(id, venue) {
        return await Venue.update(venue, { where: { Id: id }});
    }
}

module.exports = VenueService