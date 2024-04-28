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

//update item
router.put('/:id', bodyParser.json(), (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body)
    .then((item) => res.json({ msg: 'Updated Successfully' }))
    .catch((err) =>
        res.status(400).json({ error: 'Unable to Update' })
    );
});

//delete individual id
router.delete('/:id', (req,res) => {
    Item.findByIdAndDelete(req.params.id)
    .then((item) => res.json({ msg: 'Item Deleted Successfully'}))
    .catch((err) => res.status(404).json({ error: 'Nonexistent Item'}));
});

//delete [user]'s items (when deleting account)
router.delete("/user/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
        const items = await Item.deleteMany({ user_id: userId });
        if (!items || items.length === 0) {
            return res.status(404).json({ noitemsfound: 'No Items Found' });
        }
        res.json(items);
    } catch (error) {
        console.error('Error deleting items:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST Listing                                                                                                                                                                                             
router.post('/listing', bodyParser.json(), (req, res) => {                                                                                                                                               
    Item.create(req.body)                                                                                                                                                                                
        .then(item => res.json({ msg: "added successfully" }))                                                                                                                                           
        .catch(err => res.status(400).json({ error: 'Error' }));                                                                                                                                         
});                                                                                                                                                                                                      

module.exports = router;