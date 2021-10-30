const VenueFeeGroup = require("../models/Venue/VenueFeeGroupModel")
const VenueFee = require("../models/Venue/VenueFeeModel")

module.exports.Get = async (req, res, next) => {
    const venue = await VenueFeeGroup.findByPk(req.params.id, {
        include: [{
        model: VenueFee
    }]})
    res.json(venue)
}
    
module.exports.GetAll = async (req, res, next) => {
    const venues = await VenueFeeGroup.findAll({ include: [{
        model: VenueFee
    }]})
    res.json(venues);
}

module.exports.Create = async (req, res, next) => {
    const newVenue = await VenueFeeGroup.create(req.body.venueFeeGroup);
    res.json(newVenue)
}

module.exports.Edit = async  (req, res, next) => {
    const result = await VenueFeeGroup.update(req.body.venueFeeGroup, { where: { Id: req.params.id }});
    res.json(result)
}