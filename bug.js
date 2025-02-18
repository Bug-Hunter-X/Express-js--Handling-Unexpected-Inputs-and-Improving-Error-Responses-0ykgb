const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... database query to fetch user data ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.json(user);
});

//Problem: The above code uses req.params.id directly without any validation or sanitization.  If a user sends a malicious request with an unexpected ID (e.g., containing SQL injection or other malicious code), the application may be vulnerable to attacks. 

//Another Example:

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

//Problem: This error handler is too generic.  It doesn't distinguish between different types of errors, making debugging difficult and potentially exposing sensitive information in the error stack trace.