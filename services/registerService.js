let = register = require('../models/registerModel');
let mongoose = require('mongoose');

const ModelRegister = mongoose.model('RegisterProducts', register);

class registerService {

    async Create(productname, productdescription, productamount, productprovider, productdate) {
        let newRegister = new ModelRegister({
            productname,
            productdescription,
            productamount,
            productprovider,
            productdate
        });

        try {
            await newRegister.save();
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

module.exports = new registerService();