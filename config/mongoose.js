const mongoose = require('mongoose');

mongoose.connect(process.env.DB);
// mongoose.connect('mongodb://localhost:27017/discord-backend');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;