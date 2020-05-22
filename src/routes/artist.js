const express = require('express');
const artistController = require('../controllers/artist')
const albumController = require('../controllers/album');

const router = express.Router();

router
  .post('/', artistController.createArtist)
  .get('/', artistController.getAllArtists)
  .get('/:id', artistController.getArtistById)
  .patch('/:id', artistController.updateArtistById)
  .delete('/:id', artistController.deleteArtistById)
  .post('/:id/albums', albumController.createAlbum)
  .get('/:id/albums', albumController.getAlbumsByArtistId);


module.exports = router;