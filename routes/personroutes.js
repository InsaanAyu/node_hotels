const express = require('express');
const router = express.Router();
const person = require('./../models/person');

//POST route to add a person

router.post('/',async (req, res) =>{
    try{
     const data = req.body
     // create a new person document using the mongoose mmodel
     const newPerson = new person(data);
    
     // save the new person
     const response = await newPerson.save();
     console.log('data saved');
     res.status(200).json(response);
 
    }catch(err){
         console.log(err);
         req.status(500).json({error: 'Internal server error'});
    }
})

// GET methode

router.get('/', async(req, res) =>{
    try{
        const data = await person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        req.status(500).json({error: 'Internal server error'});
    }
})


router.get('/:workType',async (req, res) => {
    try{
    const workType = req.params.workType;
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
        const response = await person.find({work: workType});
        console.log(' response Fetched');
        res.status(200).json(response);

    }else{
        res.status(404).json({error:' Invalid work type'});
    }
    }catch(err){
        console.log(err);
        req.status(500).json({error: 'Internal server error'});

    }
})


router.put('/:id', async (req, res) => {

    try{

        const personId = req.params.id;
        const udatePersonData = req.body;

        const response = await person.findByIdAndUpdate(personId, udatePersonData, {
            new: true,
            runValidators: true,
        })

        if(!response){
            return res.status(404).json({ error: 'Person Not Found'});
        }

        console.log('Data Updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        req.status(500).json({error: 'Internal server error'});

    }



})







module.exports = router;