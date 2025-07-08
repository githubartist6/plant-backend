const User = require("../models/use-models");
const Contact = require("../models/contact-model");
const Address = require("../models/address-model");
const Planthero = require("../models/planthero-model");
const Categories = require("../models/categories-model");
const Shopcategories = require("../models/shopcategories-model");
const NewProducts = require("../models/newProducts-model");
const PlantCategoriess = require("../models/plantCategories-model");
const Features = require("../models/features-model");
// *-------------
// getAdminAllUsers Logic
// *-------------
const getAdminAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 });
        if (!users || users.length === 0) {
            res.status(404).json({ message: "No Users Found" });
        }
        res.status(200).json(users);
    } catch (error) {
        next(error)
    }
};

// *-------------
// get address Logic
// *-------------
const getAddressById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const address = await Address.findById(id);
        if (!address) {
            return res.status(404).json({ message: "Address not found" });
        }
        return res.status(200).json(address);
    } catch (error) {
        next(error);
    }
};

// *-------------
// delete Contact Logic
// *-------------
const deleteContactsById = async (req, res) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({ _id: id });
        res.status(200).json({ message: "Contacts Deleted Successfullt" });
    } catch (error) {
        next(error)
    }
};

// *-------------
// getAllContacts Logic
// *-------------
const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find();
        if (!contacts || contacts.length === 0) {
            res.status(404).json({ message: "No Contacts Found" });
        }
        res.status(200).json(contacts);
    } catch (error) {
        next(error)
    }
};

// *-------------
// getAllContacts Logic
// *-------------
const getAllAddress = async (req, res, next) => {
    try {
        const address = await Address.find();
        if (!address || address.length === 0) {
            res.status(404).json({ message: "No Address Found" });
        }
        res.status(200).json(address);
    } catch (error) {
        next(error)
    }
};

// *-------------
// user delete Logic
// *-------------
const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id });
        res.status(200).json({ message: "User Deleted Successfullt" });
    } catch (error) {
        next(error)
    }
};

// *-------------
// single user Logic
// *-------------
const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id }, { password: 0 });
        return res.status(200).json(data);
    } catch (error) {
        next(error)
    }
};

// *-------------
// user update Logic
// *-------------
const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUserData = req.body;

        const updatedData = await User.updateOne(
            { _id: id },
            { $set: updatedUserData }
        );
        return res.status(200).json(updatedData);
    } catch (error) {
        next(error);
    }
};

// *-------------
// getAllPlantHero Logic
// *-------------
const getAllPlantHero = async (req, res, next) => {
    try {
        const response = await Planthero.find();
        if (!response || response.length === 0) {
            return res.status(404).json({ message: "No Planthero found" });
        }
        res.status(200).json(response);
    } catch (error) {
        next(error); // pass to global error handler
    }
};

// *-------------
// getAllCategories Logic
// *-------------
const getAllCategories = async (req, res, next) => {
    try {
        const response = await Categories.find();
        if (!response || response.length === 0) {
            return res.status(404).json({ message: "No categories found" });
        }
        res.status(200).json(response);
    } catch (error) {
        next(error); // pass to global error handler
    }
};

// *-------------
// getAllCategories Logic
// *-------------
const getAllShopcategories = async (req, res, next) => {
    try {
        const response = await Shopcategories.find();
        if (!response || response.length === 0) {
            return res.status(404).json({ message: "No Shopcategories found" });
        }
        res.status(200).json(response);
    } catch (error) {
        next(error); // pass to global error handler
    }
};

// *-------------
// getAllNewProducts Logic
// *-------------
const getAllNewProducts = async (req, res, next) => {
    try {
        const response = await NewProducts.find();
        if (!response || response.length === 0) {
            return res.status(404).json({ message: "No NewProducts found" });
        }
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

// *-------------
// getAllPlantCategoriess Logic
// *-------------
const getAllPlantCategoriess = async (req, res, next) => {
    try {
        const response = await PlantCategoriess.find();
        if (!response || response.length === 0) {
            return res.status(404).json({ message: "No PlantCategoriess found" });
        }
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

// *-------------
// getAllfeatures Logic
// *-------------
const getAllfeatures = async (req, res, next) => {
    try {
        const response = await Features.find();
        if (!response || response.length === 0) {
            return res.status(404).json({ message: "No Features found" });
        }
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};



// *-------------
// create new service Logic
// *-------------
const createNewData = async (req, res, next) => {
    try {
        const { serviceName, description, price, provider } = req.body;
        if (!serviceName || !description || !price || !provider) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create new service
        const newService = new Service({
            serviceName,
            description,
            price,
            provider,
        });

        // Save to database
        const savedService = await newService.save();

        res.status(201).json({ message: "Service added successfully" });
    } catch (error) {
        next(error);
    }
};


module.exports = {
    getAdminAllUsers,
    getAllContacts,
    getAllAddress,
    getAddressById,
    deleteContactsById,
    getAllPlantHero,
    getAllCategories,
    getAllShopcategories,
    getAllNewProducts,
    getAllPlantCategoriess,
    getAllfeatures,

    deleteUserById,
    getUserById,
    updateUserById,
    createNewData
};