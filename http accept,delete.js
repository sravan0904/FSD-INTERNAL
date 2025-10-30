// crud.js
const express = require('express');
const app = express();
app.use(express.json());

let users = [];

// POST - Add user
app.post('/users', (req, res) => {
  users.push(req.body);
  res.send('User added successfully!');
});

// GET - Retrieve all users
app.get('/users', (req, res) => {
  res.json(users);
});

// DELETE - Delete user by name
app.delete('/users/:name', (req, res) => {
  users = users.filter(u => u.name !== req.params.name);
  res.send('User deleted successfully!');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
