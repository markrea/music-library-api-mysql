const express = require('express');
const songController = require('../controllers/song');

const router = express.Router();

router
.get('/', songController.getSo)