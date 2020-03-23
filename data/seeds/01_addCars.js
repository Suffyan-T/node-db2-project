
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 'JH4KA3250KC009863', Make: 'Acura', Model: 'Legend', Milage: '40,000', Transmission: 'Automatic', Title_Type: 'Clean',},
        {VIN: '1JCCM85E5BT001312', Make: 'Jeep', Model: 'CJ 5', Milage: '150,000', Transmission: 'Manuel', Title_Type: 'Salvage',},
        {VIN: 'JT6HT00W4Y0093462', Make: 'Lexus', Model: 'LX 470', Milage: '267,596', Transmission: 'Automatic', Title_Type: 'Clean',}
      ]);
    });
};
