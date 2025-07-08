const express = require("express");
const plantCategories = require("../controllers/plantCategories-controller");
const router = express.Router();

router.route("/plantCategories").get(plantCategories);

module.exports = router;