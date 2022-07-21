const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');


const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());
// Configure Mongo
const db = require('./config/keys').mongoURI;

// Connect to Mongo with Mongoose
mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("Mongo connected"))
    .catch(err => console.log(err));
//use routes
app.use('/api/items', items);

// Specify the Port where the backend server can be accessed and start listening on that port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}.`)); 