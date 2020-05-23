const { Album } = require('../sequelize');
const { Artist } = require('../sequelize');

exports.createAlbum = (req, res) => {
  const { id } = req.params;
  Artist.findByPk(id).then(artist => {
    if (!artist) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      Album.create(req.body).then(album => {
        album.setArtist(id).then(linkedAlbum => {
          res.status(201).json(linkedAlbum);
        });
      });
    }
  });
};
exports.getAlbumsByArtistId = (req, res) => {
  const { id } = req.params;
  Artist.findByPk(id).then(artist => {
    if (!artist) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      Album.findAll({ where: { artistId: id } }).then(albums => res.status(200).json(albums));
    };
  });
};

exports.getAlbumById = (req, res) => {
  const { id } = req.params;
  Album.findByPk(id, {
    include: [{
      model: Artist,
      as: 'artist',
    }]
  }).then(album => {
    if (!album) {
      res.status(404).json({ error: 'The album could not be found.' });
    } else {
      res.status(200).json(album);
    }
  });
};

exports.updateAlbumById = (req, res) => {
  const { id } = req.params;
  Album.update(req.body, { where: { id } }).then(([rowsUpdated]) => {
    if (!rowsUpdated) {
      res.status(404).json({ error: 'The album could not be found.' });
    } else {
      res.status(200).json(rowsUpdated);
    };
  });
};
exports.deleteAlbumById = (req, res) => {
  const { id } = req.params;
  Album.destroy({ where: { id } }).then(album => {
    if (!album) {
      res.status(404).json({ error: 'The album could not be found.' });
    } else {
      res.status(204).json(album);
    };
  });
};

