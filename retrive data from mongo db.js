// mongo.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studentDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Define Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  branch: String
});

// Create Model
const Student = mongoose.model('Student', studentSchema);

// Retrieve data
app.get('/students', async (req, res) => {
  const data = await Student.find();
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});
