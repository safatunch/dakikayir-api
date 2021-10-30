const VenueFee = require("../models/Venue/VenueFeeModel")


module.exports.GetAll = async (req, res, next) => {
    const fee = await VenueFee.findAll()
    return res.json(fee);
}

module.exports.Get = async (req, res, next) => {
    const fee = await VenueFee.findByPk(req.params.id)
    return res.json(fee);
}

module.exports.Create = async (req, res, next) => {
    const fee = await VenueFee.create(req.body.venuefee)
    return res.json(fee);
}

module.exports.Edit = async (req, res, next) => {
    const fee = await VenueFee.update(req.body.venuefee, { where : { Id: req.params.id }})
    return res.json(fee);
}