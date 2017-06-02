/* globals module, require */

'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    info: {
        type: {},
        required: true
    },
    model: {
        type: String,
        required: true
    },
    extras: {
        type: {},
        required: false
    },
    dealer: {
        type: {},
        required: false
    },
    msg: {
        type: String,
        required: false
    },
    pictures: {
        type: {},
        required: false
    },
    phone: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }

});


mongoose.model('Ad', userSchema);
module.exports = mongoose.model('Ad');