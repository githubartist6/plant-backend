const express = require("express");
const router = express.Router();
const { createOrder, getAllOrders } = require("../controllers/orderController");

router.post("/", createOrder);  // POST /api/order
router.get("/", getAllOrders);  // GET /api/order

module.exports = router;
