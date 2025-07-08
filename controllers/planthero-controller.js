const PlantHero = require("../models/planthero-model");

const plantHeros = async (req, res) => {
    try {
        const response = await PlantHero.find();
        if (!response) {
            res.status(404).json({ message: "No planthero found" });
            return;
        }
        res.status(200).json({ message: response });
    } catch (error) {
        console.log(`planthero ${error}`);

    }
};

module.exports = plantHeros;