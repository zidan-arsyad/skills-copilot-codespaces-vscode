// Create web server
// Create a server that sends a JSON object as a response when it receives a request. The JSON object should contain a key comments that holds an array of three comments as strings. Use the express package to create the server.

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  res.json({ comments: ['Comment 1', 'Comment 2', 'Comment 3'] });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});