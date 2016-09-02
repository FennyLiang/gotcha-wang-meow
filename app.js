const sequelize = require('sequelize');
const Animals = require('./models/animals');

Animals
  .findOne()
  .then((animals) => {
    console.log(animals)
  });
