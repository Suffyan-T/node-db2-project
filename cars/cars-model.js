const db = require('../data/db-config')

module.eports ={
    getCars,
    addCars
}

// GET 
function getCars(){
    return db.select('*').from('cars')
}

// POST
function addCars(car){
    return db('cars').insert(car)
}