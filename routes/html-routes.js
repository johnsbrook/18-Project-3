// requires express method .Router() as "router" and path
const router = require("express").Router();
const path = require("path");

// GET /exercise and use ../public/exercise.html file path
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/products.html"));
});

module.exports = router;