const fetch = require('node-fetch');

const schema = require('./schema/planets');
const responseValidator = require('../responseValidator');

const validator = responseValidator.validatorForSchema(schema);

const getPlanets = () => {
  return fetch('http://swapi.co/api/planets')
  .then(response => response.json())
  .then(validator.validateResponse)
  .catch(err => console.error(err));
}

module.exports = { getPlanets };
