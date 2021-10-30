const VenueFeeGroup = require("../../models/Venue/VenueFeeGroupModel");
const VenueFee = require("../../models/Venue/VenueFeeModel");
const Venue = require("../../models/Venue/VenueModel")
class VenueService {
    constructor(name) {
        this.name = name;
    }

    listOptions = {
        attributes: ['Id', 'Name'],
        include: [{
        model: VenueFeeGroup,
        attributes: ['Id'],
        include: [{
            model: VenueFee,
            attributes: ['Price'],
        }]
    }], 
    };

    detailOptions = {
        attributes: ['Id', 'Name'],
        include: [{
        model: VenueFeeGroup,
        attributes: ['Id'],
        include: [{
            model: VenueFee,
            attributes: ['Price'],
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