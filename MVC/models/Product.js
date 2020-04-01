var mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    email: String,
    surname: String
})

module.exports = mongoose.model('Product', productSchema);