// routes.js
const express = require('express');
const app = express();

// Simple route
app.get('/', (req, res) => {
  res.send('Welcome to Express Routing Example');
});

// Route with parameter
app.get('/user/:name', (req, res) => {
  res.send(`Hello, ${req.params.name}!`);
});

// Route with query parameter
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`You searched for: ${query}`);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
