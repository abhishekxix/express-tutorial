const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
  // res.json([{ name: 'susan' }, { name: 'john' }]);
  // res.json(products);
  res.send('<h1>Home page</h1> <a href="/api/products">Products</a>');
});

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.listen(3000, () => {
  console.log('Server is running at port 3000...');
});
