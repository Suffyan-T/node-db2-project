const knex = require('../data/db-config')

module.eports ={
    getCars,
    addCars
}

// GET 
function getCars(){
    return knex('cars')
}

// POST
function addCars(car){
    return knex('cars').insert(car)
}