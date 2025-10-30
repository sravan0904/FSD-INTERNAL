// auth.js
const express = require('express');
const app = express();
app.use(express.json());

const users = [
  { username: 'admin', password: '1234' },
  { username: 'lokesh', password: 'abcd' }
];

// POST method for login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.send('Login Successful!');
  } else {
    res.status(401).send('Invalid Credentials!');
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});
