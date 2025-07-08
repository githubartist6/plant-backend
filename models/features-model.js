const { Schema, model } = require("mongoose");

const featuresSchema = new Schema({
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
});

const Features = model("featuresDate", featuresSchema)

module.exports = Features;
