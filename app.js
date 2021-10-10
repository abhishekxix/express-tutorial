const express = require('express');
const app = express();
const { products } = require('./data');
const logger = require('./logger');

app.get('/', logger, (req, res) => {
  res.send('Home');
});

app.get('/about', logger, (req, res) => {
  res.send('About');
});

app.listen(3000, () => {
  console.log('Server is running at port 3000...');
});
