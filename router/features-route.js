const express = require("express");
const features = require("../controllers/features-controller");
const router = express.Router();

router.route("/features").get(features);

module.exports = router;