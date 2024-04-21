const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    price:{
        type:Number
    },
    
    number_sales:{
        type:Number,
        required:true
    }

});

// const person model

const menu = mongoose.model('menu', menuSchema);
module.exports = menu;