var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    surname: String
})

module.exports = mongoose.model('User', userSchema);