const express = require('express');

const artistsRouter = require('./routes/artist');
//const albumRouter = require('./routes/artist');

const app = express();

app.use(express.json());

app.use('/artists', artistsRouter);
//app.use('/album', albumRouter);

module.exports = app;
