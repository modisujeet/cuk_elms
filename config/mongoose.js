const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cuk_elms');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error in Connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to DataBAse :: MongoDB');
});

module.exports = db;
