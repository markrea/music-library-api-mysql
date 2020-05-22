const express = require('express');
const albumController = require('../controllers/album');

const router = express.Router();

router
.get('/:id', albumController.getAlbumById)
.patch('/:id', albumController.updateAlbumById)
.delete('/:id', albumController.deleteAlbumById);

module.exports = router;