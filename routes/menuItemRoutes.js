const express = require('express');
const router = express.Router();
const menuItem = require('./../models/menuItem');

// Get method

router.get('/', async(req, res) =>{
    try{
        const data = await menuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        req.status(500).json({error: 'Internal server error'});
    }
})

//POST menu to add a menu item

router.post('/',async (req, res) =>{
    try{
    const data = req.body
    // create a new person document using the mongoose mmodel
    const newMenu = new menuItem(data);
    
    // save the new person
    const response = await newMenu.save();
    console.log('data saved');
    res.status(200).json(response);
 
    }catch(err){
        console.log(err);
        req.status(500).json({error: 'Internal server error'});
    }
 
}) 

// comment added my first file the pull to github
module.exports = router;