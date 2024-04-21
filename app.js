const express = require('express');
const app = express();
const port = process.env.PORT || 8082;
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());

app.use(cors({ origin: true, credentials: true }));
const users = require('./routes/api/users');
const items = require('./routes/api/items');
app.use('/api/users', users);
app.use('/api/items', items);

const conn_str = 'mongodb+srv://nc06279:Hi11song!!@cluster0.hl1lezj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log(`MongoDB Connection Successful`);
})
.catch(err => {
    console.log(`Error in DB Connection ${err}`);
})

