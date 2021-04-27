import mongoose from '../config/database';

const productSchema = new mongoose.Schema({
    productname: {
        type: String,
        require: true
    },
    
});