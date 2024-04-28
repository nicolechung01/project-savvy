const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
const Item = require('../../models/Item');

// get [user]'s items
router.get("/user/:userId", async (req, res) => {
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

//get items by category
router.get("/category/:cat", async (req, res) => {
    const cat = req.params.cat;
    try {
        const items = await Item.find({ category: cat });
        if (!items || items.length === 0) {
            return res.status(404).json({ noitemsfound: 'No Items Found' });
        }
        res.json(items);
    } catch (error) {
        console.error('Error retrieving items:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// get [individual] items
router.get("/:id", async (req, res) => {
    Item.findById(req.params.id).
    then((item) => res.json(item));
});

// POST Listing                                                                                                                                                                                             
router.post('/listing', bodyParser.json(), (req, res) => {                                                                                                                                               
    Item.create(req.body)                                                                                                                                                                                
        .then(item => res.json({ msg: "added successfully" }))                                                                                                                                           
        .catch(err => res.status(400).json({ error: 'Error' }));                                                                                                                                         
});                                                                                                                                                                                                      

module.exports = router;