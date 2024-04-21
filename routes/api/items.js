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

//adding item to database
router.post('/', bodyParser.json(), (req,res) => {
    Item.create(req.body)
    .then((item) => res.json({ msg: 'Item added'}))
    .catch((err) => res.status(400).json({ error: 'Error'}));
});

module.exports = router;