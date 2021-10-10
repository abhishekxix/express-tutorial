const express = require('express');
const app = express();
const { products } = require('./data');
const logger = require('./logger');
const authorize = require('./authorize');

// makes every mentioined route use this middleware
// if we don't mention a route, it makes every route use it.
app.use('/api', [logger, authorize]);
app.use(express.static('./public'));
//

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.get('/api/items', (req, res) => {
  res.send('Items');
});

app.listen(3000, () => {
  console.log('Server is running at port 3000...');
});
