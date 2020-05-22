const express = require('express');
const albumController = require('../controllers/album');
const songController = require('../controllers/song');

const router = express.Router();

router
  .get('/:id', albumController.getAlbumById)
  .patch('/:id', albumController.updateAlbumById)
  .delete('/:id', albumController.deleteAlbumById)
  .post('/:id/song', songController.createSong);

module.exports = router;