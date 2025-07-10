const express = require("express");
const multipalData = require("../controllers/multipaldata-controller");
const router = express.Router();

router.route("/multipaldata").get(multipalData);

module.exports = router;