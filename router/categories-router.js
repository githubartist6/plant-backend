const express = require("express");
const categories = require("../controllers/categories-controller");
const router = express.Router();

router.route("/categories").get(categories);

module.exports = router;