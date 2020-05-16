const express = require('express');
const artistController = require('../controllers/artist')

const router = express.Router();

router
  .post('/', artistController.createArtist)
  .get('/', artistController.getAllArtists)
  .get('/:id', artistController.getArtistById)
  .patch('/:id', artistController.updateArtistById)
  .delete('/:id', artistController.deleteArtistById);


module.exports = router;