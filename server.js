require('dotenv').config()
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 80;

const STATIC_PATH = path.resolve(__dirname, process.env.STATIC_PATH);

app.use(express.static(STATIC_PATH));

app.get('*', (req, res) => {
  res.sendFile(STATIC_PATH + path.sep + 'index.html');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
