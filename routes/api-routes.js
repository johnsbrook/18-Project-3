// Requiring Router() from express and declaring db variable to require '../models' from local
const router = require("express").Router();
// const db = require("../models");
// const mongo = require("mongojs");

router.post("/api/products", ({ body }, res) => {

    db.Coffeeshop.create({})
        .then((cb) => {
            res.json(cb)
        })
        .catch(err => {
            res.status(400).json(err)
        });

})

router.put("/api/products/:id", ({ body, params }, res) => {
    
    db.Coffeeshop.findByIdAndUpdate(
        
        params.id,
        { $push: { exercises: body } }
        // { new: true, runValidators: true },
    )
        .then( (cb) => {
            res.json(cb)
        })
        // .catch( (err) => {
        //     res.json(err)
        // });
        .catch(err => {
            res.status(400).json(err)
        });
});

router.get("/api/products", (req, res) => {

    db.Coffeeshop.find({})
        .then( (cb) => {
            res.json(cb)
        })
        // .catch( (err) => {
        //     res.json(err)
        // });
        .catch(err => {
            res.status(400).json(err)
        });
});


router.get("/api/products/range", (req, res) => {

    db.Coffeeshop.find({})
        .limit(10)
        .then( (cb) => {
            res.json(cb)
        })
        // .catch( (err) => {
        //     res.json(err)
        // });
        .catch(err => {
            res.status(400).json(err)
        });
});


router.delete("/api/products", ({ body, params }, res) => {

    db.Coffeeshop.find(params.id)
        .then( (cb) => {
            res.json(cb)
        })
        .catch(err => {
            res.status(400).json(err)
        });
});

module.exports = router;