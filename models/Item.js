const { Binary } = require('mongodb');
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
        trim: false,          
    },
    photo: {
        type: Buffer,
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
        required: true,
        trim: true,
    },
    size: {
        type: String,
        required: true,
    },
    condition: {
        type: String,
        required: true,
    },
    price: {
        type: Number,     // might have to change
        required: true,
        trim: true,
    },
    user_id: {      // how to keep track of all items listen by each user
        type: String,
        required: false,
        ref: 'User'
    }
});

const Item = mongoose.model('item', ItemSchema);
module.exports = Item;
