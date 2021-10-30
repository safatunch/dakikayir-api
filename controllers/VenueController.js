const VenueService = require('../services/Venue/VenueService')
const service = new VenueService()

module.exports.Get = async (req, res, next) => {
    const venue = await service.Get(req.params.id, service.detailOptions)
    return res.json(venue)
}
    
module.exports.GetAll = async (req, res, next) => {
    const venues = await service.GetAll(service.listOptions)
    return res.json(venues)
}

module.exports.Create = async (req, res, next) => {
    const newVenue = await service.Create(req.body.venue);
    return res.json(newVenue)
}

module.exports.Edit = async  (req, res, next) => {
    const result = await service.Edit(req.params.id, req.body.venue);
    return res.json(result)
}