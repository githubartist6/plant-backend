const { Schema, model } = require("mongoose");

const multipaldataSchema = new Schema({
    herosection: [
        {
            id: Number,
            offerTitle: String,
            title: String,
            image: String,
            plantBtn: String,
            link: String,
        },
    ],
    categories: [
        {
            id: Number,
            title: String,
            subtitle: String,
            image: String,
            buttonText: String,
            link: String,
        },
    ],
    shopCategory: [
        {
            id: Number,
            title: String,
            image: String,
            link: String,
        },
    ],
    newProducts: [
        {
            id: Number,
            image: String,
            discount: String,
            title: String,
            rating: Number,
            quantity: Number,
            price: Number,
            originalPrice: Number,
            link: String,
        },
    ],
    featuresDate: [
        {
            icon: String,
            title: String,
            description: String,
            link: String,
        },
    ],
    plantCategories: [
        {
            id: Number,
            title: String,
            options: [String],
            link: String,
        },
    ]
});

const MultipalData = model("MultipalData", multipaldataSchema);

module.exports = MultipalData;
