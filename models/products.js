const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const product = new Schema({

    product: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const Coffeeshop = mongoose.model("Coffeeshop", product);

module.exports = Coffeeshop;
