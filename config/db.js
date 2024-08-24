const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;

async function connectToDatabase() {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}

module.exports = connectToDatabase;