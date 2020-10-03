const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const db = require("../models/checkout");
const app = express();


app.post('/order', (req, res) => {
  
    db.create(body)
    .then(dbUser => {
        res.redirect('/')
    })
    
    .catch(err => {
      res.json(err);
    });

});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

module.exports = app;