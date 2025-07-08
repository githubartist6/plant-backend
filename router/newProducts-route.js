const express = require("express");
const newProducts = require("../controllers/newProducts-controller");
const router = express.Router();

router.route("/newProducts").get(newProducts);

module.exports = router;