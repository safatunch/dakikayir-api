const VenueService = require('../services/Venue/VenueService')
const GoogleMapsService = require('../services/GoogleMaps/GoogleMapsService')

const service = new VenueService()
const googleMapsService = new GoogleMapsService();

module.exports.Get = async (req, res, next) => {
    var venue = await service.Get(req.params.id, service.detailOptions)
    const placeData = await googleMapsService.GetPlaceData(venue.PlaceId);
    venue.setDataValue('Place', placeData);
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