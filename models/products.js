// Requiring Mongoose and declaring Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Building model for database
const products = new Schema({

    product: {
        type: String,
        lowercase: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    toJSON: {
        virtuals: true
    }
    
});

// Adding virtuals to schema
// products.virtual("totalProducts").get(function () {

//     return this.exercises.reduce((total, exercise) => {
//         return total + exercise.duration;
//     }, 0);

// })

// Declare const to be exported
const Products = mongoose.model("Products", products);
// Exporting Products module
module.exports = Products;