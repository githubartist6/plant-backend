const Features = require("../models/features-model");

const featuress = async (req, res) => {
    try {
        const response = await Features.find();
        if (!response) {
            res.status(404).json({ message: "No features found" });
            return;
        }
        res.status(200).json({ message: response });
    } catch (error) {
        console.log(`features ${error}`);

    }
};

module.exports = featuress;