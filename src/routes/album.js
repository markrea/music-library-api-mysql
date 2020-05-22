const express = require('express');
const albumController = require('../controllers/album');

const router = express.Router();

router
.get('/:id', albumController.getAlbumById)
.patch('/:id', albumController.updateAlbumById);

module.exports = router;