const { Schema, model } = require("mongoose");

// Reuse your existing address structure
const addressSchema = new Schema({
    username: { type: String, required: [true, "Username is required"] },
    name: { type: String, required: [true, "Name is required"] },
    phone: { type: String, required: [true, "Phone number is required"] },
    pincode: { type: String, required: [true, "Pincode is required"] },
    locality: { type: String, required: [true, "Locality is required"] },
    address: { type: String, required: [true, "Address is required"] },
    CityDistrictTown: { type: String, required: [true, "City/District/Town is required"] },
    state: { type: String, required: [true, "State is required"] },
    landmarkoptional: { type: String, default: "" },
    phoneoptional: { type: String, default: "" },
    addressestype: { type: String, required: [true, "Address type is required"] }
});

// Product data schema inside order
const productSchema = new Schema({
    id: { type: String, required: true },
    discount: { type: String, require: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true }
});

// Main Order Schema
const orderSchema = new Schema(
    {
        address: addressSchema,
        product: productSchema,
    },
    { timestamps: true }
);

const Order = model("Order", orderSchema);

module.exports = Order;
