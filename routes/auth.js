const express = require('express');
const { route } = require('./people');
router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    res.status(200).send(`Hello ${name}`);
  } else {
    res.status(401).send('Please Provide Credentials');
  }
});

module.exports = router;
