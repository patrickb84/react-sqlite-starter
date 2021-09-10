// server.js

const express = require('express');
const path = require('path');
const PORT = 5000;
const app = express();
const db = require('./server/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.use('/api', require('./server/routes/router'));

// listen
const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));