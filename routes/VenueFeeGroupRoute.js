const app = require('express');
const router = app.Router();

const { GetAll, Get, Create, Edit } = require('../controllers/VenueFeeGroupController')

router.get("/", GetAll)
router.get("/:id", Get)
router.post("/", Create)
router.post("/:id", Edit)

module.exports = router