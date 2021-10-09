const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
  // res.json([{ name: 'susan' }, { name: 'john' }]);
  res.json(products);
});

app.listen(3000, () => {
  console.log('Server is running at port 3000...');
});
