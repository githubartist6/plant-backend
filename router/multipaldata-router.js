const express = require("express");
const multipalData = require("../controllers/multipaldata-controller");
const router = express.Router();

router.route("/").get(multipalData);

module.exports = router;