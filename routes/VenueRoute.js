const express = require("express");
const router = express.Router();

const { GetAll, Get, Create, Edit } = require('../controllers/VenueController');
const { Authorize } = require("../middlewares/authorization");

router.get("/", GetAll)
router.get("/:id", Get)
router.post("/", Authorize, Create)
router.post("/:id", Authorize, Edit)

module.exports = router