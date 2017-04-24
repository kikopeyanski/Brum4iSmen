/* globals module, require */

'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    }

});


mongoose.model('Ad', userSchema);
module.exports = mongoose.model('Ad');