let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Coffeeshop", {
  useNewUrlParser: true,
  useFindAndModify: false
});


  let productSeed = [
    {
      product: "Espresso",
      price: 1.99,
      category: "Coffee",
      description: "Bold brewed black coffee",
      image: "http://www.google.com"
    }, 
    {
      product: "Espresso Latte",
      price: 2.99,
      category: "Coffee",
      description: "Bold brewed black coffee",
      image: "http://www.google.com"
    }

  ];

  let checkout = [
    {
      product: "Espresso",
      price: 1.99
    },
    {
      product: "Espresso Latte",
      price: 2.99
    }
  ]
  

  db.Coffeeshop.deleteMany({})
  .then(() => db.Coffeeshop.collection.insertMany(productSeed))
  .then (d => {
    console.log(d.result.n + "records inserted in coffeeshops collection.")
  })

  db.Checkout.deleteMany({})
  .then(() => db.Checkout.collection.insertMany(checkout))
  .then (d => {
    console.log(d.result.n + "records inserted in orders collection.")
  })