const MultipalData = require("../models/multipaldata-model");

const multipalData = async (req, res) => {
    try {
        const response = await MultipalData.find();

        // .find() returns an array, so check if it's empty
        if (!response || response.length === 0) {
            return res.status(404).json({ message: "No multipaldata found" });
        }

        return res.status(200).json({ message: response });
    } catch (error) {
        console.error(`multipalData error: ${error}`);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = multipalData;
