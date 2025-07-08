const PlantCategories = require("../models/plantCategories-model");

const plantCategoriess = async (req, res) => {
    try {
        const response = await PlantCategories.find();
        if (!response) {
            res.status(404).json({ message: "No plantCategories found" });
            return;
        }
        res.status(200).json({ message: response });
    } catch (error) {
        console.log(`plantCategories ${error}`);

    }
};

module.exports = plantCategoriess;