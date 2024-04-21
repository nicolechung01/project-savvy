const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");

const Item = require('../../models/Item');

// GET Retrievals, might need to filter by category                                                                                                                                                         

router.get('/women', (req, res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(err => res.status(404).json({ noItemsFound: "No items found" }));
});

router.get('/men', (req, res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(err => res.status(404).json({ noItemsFound: "No items found" }));
});

router.get('/home', (req, res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(err => res.status(404).json({ noItemsFound: "No items found" }));
});


// POST Listing                                                                                                                                                                                             

router.post('http://localhost:3000/listing', bodyParser.json(), (req, res) => {                                                                                                                                               
    console,log("here");                                                                                                                                                                                 
    Item.create(req.body)                                                                                                                                                                                
        .then(item => res.json({ msg: "added successfully" }))                                                                                                                                           
        .catch(err => res.status(400).json({ error: 'Error' }));                                                                                                                                         
});                                                                                                                                                                                                      

// router.post('/listing', bodyParser.json(), async (req, res) => {
//     const { brand, category, condition, description, img, name, price, size } = req.body;

//     const newItem = new Item({ brand, category, condition, description, img, name, price, size });
//     console.log("worked");
//     const savedItem = await newItem.save();
//     res.json(savedItem);
// });

module.exports = router;