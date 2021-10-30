const User = require("../../models/User/UserModel");
const bcrpyt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config();

module.exports.Login = async (req, res, next) => {
    const { username, password } = req.body;
    User.findOne({ where: { Username: username } }).then(user => {
        bcrpyt.compare(password, user.PasswordHash).then(result => {
            if (result) {
                const token = jwt.sign(user.toJSON(), process.env.JsonSecretKey, { expiresIn: "7d" })
                return res.json(token);
            }
            else {
                return res.json('NO!')
            }
        })
    }).catch(() => {
        return res.json('NO!')
    })
}

module.exports.Get = async (req, res, next) => {
    const user = jwt.verify(req.headers.authorization.split(' ')[1], process.env.JsonSecretKey)
        res.json(user)
}

module.exports.Register = async (req, res, next) => {
    const { username, password } = req.body;
    const count = await User.count({ where: { Username: username } })
    if (count == 0) {
        bcrpyt.genSalt(10).then(salt => {
            bcrpyt.hash(password, salt).then(hash => {
                User.create({
                    Username: username,
                    PasswordHash: hash,
                    PasswordSalt: salt
                }).then(user => {
                    res.json(user)
                });
            })
        })
    }
    else {
        res.json('Already register user!');
    }
}