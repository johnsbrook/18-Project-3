const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const db = require("../models/products.js");
const app = express();
console.log("This is db" + db);


app.post("/submit", ({ body }, res) => {
  db.create(body)
    .then(dbUser => {
        res.redirect('/owner.html')
    })
    .then(console.log("Item has been created"))
    .catch(err => {
      res.json(err);
    });
});



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
  })

app.get('/api/products', function (req, res) {
    db.find({})
    .sort({category: 1})
    .then(cb => {
        res.json(cb);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

app.get('/api/products/bagel', function (req, res) {
  db.find({category: "bagel"})
  .sort({product: 1})
  .then(cb => {
      res.json(cb);
  })
  .catch(err => {
      res.status(400).json(err);
  })
})

app.get('/api/products/breakfast', function (req, res) {
  db.find({category: "breakfast"})
  .sort({product: 1})
  .then(cb => {
      res.json(cb);
  })
  .catch(err => {
      res.status(400).json(err);
  })
})

app.get('/api/products/coffee', function (req, res) {
  db.find({category: "coffee"})
  .sort({product: 1})
  .then(cb => {
      res.json(cb);
  })
  .catch(err => {
      res.status(400).json(err);
  })
})

app.get('/api/products/pastry', function (req, res) {
  db.find({category: "pastry"})
  .sort({product: 1})
  .then(cb => {
      res.json(cb);
  })
  .catch(err => {
      res.status(400).json(err);
  })
})

app.get('/api/products/promo', function (req, res) {
  db.find({category: "promo"})
  .sort({product: 1})
  .then(cb => {
      res.json(cb);
  })
  .catch(err => {
      res.status(400).json(err);
  })
})

app.get('/api/products/sandwiches', function (req, res) {
  db.find({category: "sandwiches"})
  .sort({product: 1})
  .then(cb => {
      res.json(cb);
  })
  .catch(err => {
      res.status(400).json(err);
  })
})

app.get('/api/products/sides', function (req, res) {
  db.find({category: "sides"})
  .sort({product: 1})
  .then(cb => {
      res.json(cb);
  })
  .catch(err => {
      res.status(400).json(err);
  })
})

app.get('/api/products/tea', function (req, res) {
  db.find({category: "tea"})
  .sort({product: 1})
  .then(cb => {
      res.json(cb);
  })
  .catch(err => {
      res.status(400).json(err);
  })
})

module.exports = app;
