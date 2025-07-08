const { Schema, model } = require("mongoose");

const herosectionSchema = new Schema({

    offerTitle: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    plantBtn: {
        type: String,
        default: "Shop Now"
    },
    link: {
        type: [String],
        default: "/"
    },
});

const PlantHeros = model("Herosection", herosectionSchema);

module.exports = PlantHeros;
