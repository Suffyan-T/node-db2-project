// Create Cars Schema
exports.up = function(knex) {
  
    return knex.schema.createTable('cars', tbl =>{

        // Primrary Key
        tbl.increments();

        // VIN 
        tbl.string("VIN", [17])
        .notNullable()

        // Make
        tbl.string("Make", [125])
        .notNullable()

        // Model
        tbl.string("Model", [125])
        .notNullable()

        // Milage
        tbl.intiger('Milage')
        .notNullable()

        // Transmission
        tbl.string("Transmission", [125])

        // Title_Type
        tbl.string("Title_Type", [125])
    })
};

// Drops Cars Schema
exports.down = function(knex) {
  
    return knex.schema

    // Drops Cars Table
    .dropTableIfExists('cars');
};
