const { Schema, model } = require("mongoose");

const categoriesSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, default: "/" },
  buttonText: { type: String, default: "Shop Now" }
});

const Categories = model("Categories", categoriesSchema)

module.exports = Categories;
