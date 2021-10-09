const express = require('express');
const app = express();
const path = require('path');

// setup static and middleware
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// adding to static resources
// server side rendering
// });

app.all('*', (req, res) => {
  res.status(404).send('resource not found');
});

app.listen(3000, () => {
  console.log('server is listening at 3000...');
});
