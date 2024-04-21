const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
const Item = require('../../models/Item');

// get [user]'s items
router.get("/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
        const items = await Item.find({ user_id: userId });
        if (!items || items.length === 0) {
            return res.status(404).json({ noitemsfound: 'No Items Found' });
        }
        res.json(items);
    } catch (error) {
        console.error('Error retrieving items:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST Listing                                                                                                                                                                                             
router.post('/listing', bodyParser.json(), (req, res) => {                                                                                                                                               
    console,log("here");                                                                                                                                                                                 
    Item.create(req.body)                                                                                                                                                                                
        .then(item => res.json({ msg: "added successfully" }))                                                                                                                                           
        .catch(err => res.status(400).json({ error: 'Error' }));                                                                                                                                         
});                                                                                                                                                                                                      


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


module.exports = router;