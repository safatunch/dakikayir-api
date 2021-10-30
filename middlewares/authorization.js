const jwt = require("jsonwebtoken");
require('dotenv').config();

exports.Authorize = (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    if(authorizationHeader){
        const token = authorizationHeader.split(' ')[1]
        const tokenResult = jwt.verify(token, process.env.JsonSecretKey)
        if(tokenResult){
            res.json(tokenResult)
        }
    }
    res.json('NO ACCESS')
}