const express = require('express');
const app = express();
const { check, validationResult } = require('express-validator'); //Added express-validator

app.get('/users/:id', [
  check('id').isInt().toInt(), //Input validation
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const userId = req.params.id;
    // ... database query to fetch user data ...
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user);
  }
]);

//Improved error handling:
app.use((err, req, res, next) => {
  console.error(err.stack);
  let status = 500;
  let message = 'Something went wrong!';
  if (err.name === 'ValidationError') {
    status = 400;
    message = err.message;
  } else if (err.name === 'CastError') {
    status = 400;
    message = `Invalid ${err.path}: ${err.value}`;
  }
  res.status(status).json({ message });
});