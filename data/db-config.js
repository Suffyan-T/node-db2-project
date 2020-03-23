// Importing Knex library
const knex = require('knex');

// Importing Knexfile 
const knexfile = require('../knexfile');

// Exporting Knex with kenxfile.development as argument
module.exports = knex(knexfile.development);