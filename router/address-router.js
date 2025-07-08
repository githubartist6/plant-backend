const express = require("express");
const router = express.Router();
const address = require("../controllers/address-contoller");

router.route("/address").post(address);

module.exports = router;
