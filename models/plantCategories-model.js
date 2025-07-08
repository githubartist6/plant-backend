const { Schema, model } = require("mongoose");

const plantCategoriessSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    options: {
        type: [String],
        required: true,
    },
});

const PlantCategoriess = model("PlantCategorie", plantCategoriessSchema);

module.exports = PlantCategoriess;
