var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
    name: String
})


const productSchema = new mongoose.Schema({
    title: String,
    content: String,
    cost: Number,
    category: { type: CategorySchema, require: true }
})
product = mongoose.model('Product', productSchema);
category = mongoose.model('Category', CategorySchema);
module.exports = {
    product,
    category
}