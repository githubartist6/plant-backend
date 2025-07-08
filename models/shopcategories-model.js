const { Schema, model } = require("mongoose");

const shopcategoriesSchema = new Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    image: { type: String, required: true },
});

const Shopcategories = model("Shopcategories", shopcategoriesSchema)

module.exports = Shopcategories;
