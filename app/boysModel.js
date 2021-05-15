const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const boysSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Name is required'],
    },
    pet_name: {
        type: String,
        required: [true, 'Pet Name is required'],
    },
    meaning: {
        type: String,
        required: [true, 'Meaning of the name is required'],
    }
});

const Boys = model('Boys', boysSchema);
module.exports = Boys;