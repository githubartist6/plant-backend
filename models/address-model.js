const { Schema, model } = require("mongoose");

const addressSchema = new Schema({
    username: { type: String, required: [true, "Username is required"] },
    name: { type: String, required: [true, "Name is required"] },
    phone: { type: String, required: [true, "Phone number is required"] },
    pincode: { type: String, required: [true, "Pincode is required"] },
    locality: { type: String, required: [true, "Locality is required"] },
    address: { type: String, required: [true, "Address is required"] },
    CityDistrictTown: { type: String, required: [true, "City/District/Town is required"] },
    state: { type: String, required: [true, "State is required"] },
    landmarkoptional: { type: String, default: "" },
    phoneoptional: { type: String, default: "" },
    addressestype: { type: String, default: "" }
});

const Address = model("Address", addressSchema);

module.exports = Address;
