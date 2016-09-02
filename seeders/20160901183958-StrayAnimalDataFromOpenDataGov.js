'use strict';

const fs = require('fs');

module.exports = {
  up: function (queryInterface, Sequelize) {

    const animals = JSON.parse(fs.readFileSync(`${__dirname}/strayAnimals.json`));
    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.
    //
    // Example:

    for (let animal of animals) {
      animal['created_at'] = new Date();
      animal['updated_at'] = new Date();
    }

    return queryInterface.bulkInsert('Animals', animals, {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
