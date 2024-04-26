const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 6,
    },
    pfp: {
        type: String,
        required: false,
    },
    bio: {
        type: String,
        required: false,
    },
    link: {
        type: String,
        required: false,
    }
});

const User = mongoose.model('user', UserSchema);
module.exports = User;
