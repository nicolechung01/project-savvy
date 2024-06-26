const { Binary } = require('mongodb');
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
        trim: false,          
    },
    img1: {
        type: String,
        required: true,
    },
    img2: {
        type: String,
        required: false,
    },img3: {
        type: String,
        required: false,
    },img4: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
        trim: false,
    },
    category: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: false,
        trim: true,
    },
    size: {
        type: String,
        required: false,
    },
    condition: {
        type: String,
        required: true,
    },
    price: {
        type: String,     // might have to change
        required: true,
        trim: true,
    },
    user_id: {      // how to keep track of all items listen by each user
        type: String,
        required: true,
        ref: 'User'
    },
});

const Item = mongoose.model('item', ItemSchema);
module.exports = Item;
