const Address = require("../models/address-model");

const address = async (req, res) => {
    try {
        const {
            username,
            name,
            phone,
            pincode,
            locality,
            address,
            CityDistrictTown,
            state,
            landmarkoptional,
            phoneoptional,
            addressestype,
        } = req.body;

        // Field-wise validation
        if (!username) {
            return res.status(400).json({ message: "Username is required" });
        }
        if (!name) {
            return res.status(400).json({ message: "Name is required" });
        }
        if (!phone) {
            return res.status(400).json({ message: "Phone number is required" });
        }
        if (!pincode) {
            return res.status(400).json({ message: "Pincode is required" });
        }
        if (!locality) {
            return res.status(400).json({ message: "Locality is required" });
        }
        if (!address) {
            return res.status(400).json({ message: "Address is required" });
        }
        if (!CityDistrictTown) {
            return res.status(400).json({ message: "City/District/Town is required" });
        }
        if (!state) {
            return res.status(400).json({ message: "State is required" });
        }

        // Optional fields don't need validation

        // Save address to database
        await Address.create({
            username,
            name,
            phone,
            pincode,
            locality,
            address,
            CityDistrictTown,
            state,
            landmarkoptional,
            phoneoptional,
            addressestype,
        });

        return res.status(200).json({ message: "Address saved successfully" });
    } catch (error) {
        console.error("Error in address form submission:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = address;
