/* eslint-disable no-console */
const express = require('express');

const app = express();
const port = 3000;

//server.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

Server.use('/public', express.static('../public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
