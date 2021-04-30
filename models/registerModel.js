const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productname: {
        type: String,
        require: true
    },
    productdescription: {
        type: String,
        require: true
    },
    productamount: {
        type: Number,
        require: true
    },
    productprovider: {
        type: String,
        require: false
    },
    productdate: {
        type: Date,
        require: false
    }
});

module.exports = productSchema;