const categories = require("../models/categories-model");

const categoriess = async (req, res) => {
    try {
        const response = await categories.find();
        if (!response) {
            res.status(404).json({ message: "No service found" });
            return;
        }
        res.status(200).json({ message: response });
    } catch (error) {
        console.log(`categoriess ${error}`);

    }
};

module.exports = categoriess;