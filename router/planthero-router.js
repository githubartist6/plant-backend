const express = require("express");
const plantHero = require("../controllers/planthero-controller");
const router = express.Router();

router.route("/planthero").get(plantHero);

module.exports = router;