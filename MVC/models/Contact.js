var mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    adres: String,
    phone: String,
    email: String
})

module.exports = mongoose.model('Contact', contactSchema);