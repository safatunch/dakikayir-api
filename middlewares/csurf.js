
module.exports = (req, res, next) => {
    res.local.csrfToken = req.csrfToken();
}