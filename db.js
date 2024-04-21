const mongoose = require('mongoose');

//define the mongoDb connection URL

const mongoURL = 'mongodb://localhost:27017/hotels';

// set up mongoDb connection

mongoose.connect(mongoURL, {
    useNewUrlParser : true,
    useUnifiedTopology: true
})

// Get the default Connnection
// Mongoose maintains a default connection object representing the mongoDB connnection.

const db = mongoose.connection;

//Define Event listeners for database connection.

db.on('connected', () => {
    console.log('connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('MongoDB Connection Error: ', err);
});

db.on('Disconnected', () => {
    console.log('Disconnected to MongoDB server');
});


// Export the databse connection

module.exports = db;