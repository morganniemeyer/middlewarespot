const { Router } = require('express');
const blue = require('../middleware/blue');
const red = require('../middleware/red');
const yellow = require('../middleware/yellow');
const colors = require('../middleware/colors');

// what middleware does this route need to pass?
module.exports = Router()
  .get('/purple', [colors, red, blue], (req, res) => {
    res.json(req.colors);
  })
  .get('/green', [colors, yellow, blue], (req, res) => {
    res.json(req.colors);
  })
  .get('/red-orange', [colors, red, red, yellow], (req, res) => {
    res.json(req.colors);
  })
  .get('/orange', [colors, red, yellow], (req, res) => {
    res.json(req.colors);
  });
