const express = require('express');
const app = express();
let { people } = require('./data');

// static assets
app.use(express.static('./methods-public'));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post('/api/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide a valid name' });
  }
  res.status(201).json({ success: true, person: name });
});

app.post('/login', (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    res.status(200).send(`Hello ${name}`);
  } else {
    res.status(401).send('Please Provide Credentials');
  }
});

app.put('/api/people/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);
  res.send('hello world');
});

app.listen(3000, () => {
  console.log('Server is running at port 3000...');
});
