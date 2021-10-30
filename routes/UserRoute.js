const app = require('express')
const router = app.Router()
const { Login, Register, Get } = require('../controllers/User/AuthorizationController')

router.post('/Login', Login)
router.post('/Register', Register)
router.post('/', Get)

module.exports = router