const express = require("express");
const shopcategories = require("../controllers/shopcategories-controller");
const router = express.Router();

router.route("/shopcategories").get(shopcategories);

module.exports = router;