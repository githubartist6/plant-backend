const Order = require("../models/Order-model");

// Create a new order (POST)
exports.createOrder = async (req, res) => {
  const { address, product } = req.body;

  if (!address || !product) {
    return res.status(400).json({ message: "Address or Product data missing" });
  }

  try {
    const order = new Order({ address, product });
    await order.save();
    res.status(201).json({ message: "Order saved successfully." });
  } catch (err) {
    console.error("Order Save Error:", err);
    res.status(500).json({ message: "Server error while saving order." });
  }
};

// Get all orders (GET)
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }
    res.status(200).json(orders);
  } catch (err) {
    console.error("Order Fetch Error:", err);
    res.status(500).json({ message: "Server error while fetching orders." });
  }
};
