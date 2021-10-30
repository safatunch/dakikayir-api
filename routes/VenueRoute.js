const express = require("express");
const router = express.Router();

const { GetAll, Get, Create, Edit } = require('../controllers/VenueController')

router.get("/", GetAll)
router.get("/:id", Get)
router.post("/", Create)
router.post("/:id", Edit)

module.exports = router