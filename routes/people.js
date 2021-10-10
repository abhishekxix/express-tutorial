const express = require('express');
const router = express.Router();

let { people } = require('.././data');
const {
  getPeople,
  createPerson,
  updatePerson,
} = require('../controllers/people');

router.get('/', getPeople);

router.post('/', createPerson);

router.put('/:id', updatePerson);

module.exports = router;
