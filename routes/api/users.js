const express = require("express");
const bcryptjs = require('bcryptjs');
const userRouter = express.Router();
var bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const User = require('../../models/User');
const secretKey = 'mySecretKey123';


// Signup Route
userRouter.post("/signup", async (req,res) => {
    try {
        const { email, password, confirmPassword, username } = req.body;
        if (!email || !password || !username || !confirmPassword) {
            return res.status(400).json({msg: "Please enter all fields"});
        }
        if (password.length < 6) {
            return res
                .status(400)
                .json({msg: "Password should be at least 6 characters"});
        }
        if (confirmPassword !== password) {
            return res.status(400).json({ msg: "Passwords do not match"});
        }
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res
                .status(400)
                .json({ msg: "User with the same email already exists"})
        }
        const hashedPassword = await bcryptjs.hash(password, 8);
        const newUser = new User({ email, password: hashedPassword, username});

        const savedUser = await newUser.save();
        console.log(savedUser.username);
        res.json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
});

// Login Route
userRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ msg: "Please enter all fields"})
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res
                .status(400)
                .send({ msg: "User with this email does not exist"});
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send({ msg: "Incorrect password"});
        }
        const token = jwt.sign({ id: user._id }, secretKey);
        res.json({ token, user: {id: user._id, username: user.username } });
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
    
});

// Check if token is valid
userRouter.post("/tokenIsValid", async (req, res) => {
    try {
        const token = req.header("Authorization");
        if (!token) return res.json(false);
        const verified = jwt.verify(tokenParts[1], secretKey);
        if(!verified) return res.json(false);
        const user = await User.findById(verified.id);
        if (!user) return res.json(false);
        return res.json(true);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//get user from db
userRouter.get('/:userId', (req, res) => {
    User.findById(req.params.userId)
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json({nouserfound: 'No User Found'}));
});

// update user data in db
userRouter.put('/:userId', bodyParser.json(), (req, res) => {
    User.findByIdAndUpdate(req.params.userId, req.body)
    .then((user) => res.json({ msg: 'Updated Successfully' }))
    .catch((err) =>
        res.status(400).json({ error: 'Unable to Update' })
    );
});

module.exports = userRouter;