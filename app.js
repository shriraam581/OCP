const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log('Received GET request');
  res.send('Hello from OpenShift Node.js app!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
