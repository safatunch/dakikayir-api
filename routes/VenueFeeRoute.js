const app = require('express');
const router = app.Router();
const { Create, Edit, Get, GetAll } = require('../controllers/VenueFeeController')

router.post('/', Create)
router.post('/:id', Edit)
router.get('/:id', Get)
router.get('/', GetAll)

module.exports = router;