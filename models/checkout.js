const mongoose = require("mongoose");
const Schema = mongoose.Schema;

    const order = new Schema ({
        product: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        }
    });

const Order = mongoose.model("Orders", order);

module.exports = Order;