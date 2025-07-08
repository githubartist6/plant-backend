const { Schema, model } = require("mongoose");

const newProductsSchema = new Schema({

    image: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    originalPrice: {
        type: Number,
        required: true
    }
});

const NewProducts = model("NewProducts", newProductsSchema)

module.exports = NewProducts;
