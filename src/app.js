const express = require('express');

const artistsRouter = require('./routes/artist');
const albumRouter = require('./routes/album');

const app = express();

app.use(express.json());

app.use('/artists', artistsRouter);

module.exports = app;
