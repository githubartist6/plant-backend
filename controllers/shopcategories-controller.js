const shopcategories = require("../models/shopcategories-model");

const shopcategoriess = async (req, res) => {
    try {
        const response = await shopcategories.find();
        if (!response) {
            res.status(404).json({ message: "No shopcategories found" });
            return;
        }
        res.status(200).json({ message: response });
    } catch (error) {
        console.log(`shopcategories ${error}`);

    }
};

module.exports = shopcategoriess;