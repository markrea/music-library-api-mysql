const express = require('express');
const songController = require('../controllers/song');

const router = express.Router();

router
.get('/:id', songController.getSongById)
.patch('/:id', songController.updateSongById)
.delete('/:id', songController.deleteSongById);

module.exports = router;