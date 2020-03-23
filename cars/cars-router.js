const express = require('express');
const cars = require('./cars-model')

const router = express.Router();


// GET
router.get('/', (req,res) => {
    // Execute getCars method on Cars Object
    cars.getCars()

    //pass carstbl in json to res aswell as code 200
    .then(carstbl =>{
        res.status(200).json(carstbl)
    })

    // If unsucessful throw code 500 and error message
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Failed to retreive Cars'
        })
    })
});


// POST

router.post('/',(res, req) => {
    // takes data from body of req and sets it to carData variable
    const carData = req.body

    // Runs the addCars method on cars Object with carData as the parameter
    cars.addCars(carData)

    .then(car =>{
        res.status(200).json(car)
    })

    // If unsucessful throw code 500 and error message
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Failed to retreive Cars'
        })
    })
})