const mongoose = require('mongoose');
const { DB_URL } = require('./env');

const options = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true };

try {
    mongoose.connect(DB_URL, options)
    console.log('Database connection initiated')
} catch (error) {
    console.log(error)
}

module.exports = mongoose;