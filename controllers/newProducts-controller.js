const NewProducts = require("../models/newProducts-model");

const newProductss = async (req, res) => {
    try {
        const response = await NewProducts.find();
        if (!response) {
            res.status(404).json({ message: "No newProducts found" });
            return;
        }
        res.status(200).json({ message: response });
    } catch (error) {
        console.log(`newProducts ${error}`);

    }
};

module.exports = newProductss;