const express = require('express');
const router = express.Router();

const swapi = require('../client').swapi;

router.get('/planets', (req, res) => {
  return swapi.getPlanets()
    .then(planets => res.send(planets));
});

module.exports = router;
