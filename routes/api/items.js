const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
<<<<<<< HEAD
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

//adding item to database
router.post('/', bodyParser.json(), (req,res) => {
    Item.create(req.body)
    .then((item) => res.json({ msg: 'Item added'}))
    .catch((err) => res.status(400).json({ error: 'Error'}));
});

=======

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

>>>>>>> 833459ba2fc24ff29d7153a6b57508e544a7fac8
module.exports = router;