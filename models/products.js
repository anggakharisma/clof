var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: {
        type: String,
        required: true
    }
}, { timestamps: true });

var Product = mongoose.model('Product', productsSchema);

module.exports = Product;
