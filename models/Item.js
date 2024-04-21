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
        required: true,
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
});

const Item = mongoose.model('item', ItemSchema);
module.exports = Item;
