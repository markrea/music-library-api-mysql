const { Album } = require('../sequelize');
const { Song } = require('../sequelize');
const { Artist } = require('../sequelize')

exports.createSong = (req, res) => {
  const { id } = req.params;
  Album.findByPk(id).then(album => {
    if (!album) {
      res.status(404).json({ error: 'The album could not be found.' });
    } else {
      const songData = {
        name: req.body.name,
        artistId: album.artistId,
       albumId: album.id,
      }
      Song.create(songData).then(song => {
        res.status(201).json(song);
      });
    }
  });
};
exports.getSongByAlbumId = (req, res) => {
  const { id } = req.params;
  Album.findByPk(id).then(album => {
    if(!album) {
      res.status(404).json({ error: 'The album could not be found.' });
    } else {
      Song.findAll({
        include: [{
          model: Artist,
          as: 'artist'
        }, {
          model: Album,
          as: 'album'
        }]
      },{ where: { albumId: id } }).then(songs => res.status(200).json(songs));
    };
  });
};
exports.getSongById = (req, res) => {
  const { id } = req.params;
  Song.findByPk(id, {
    include: [{
      model: Artist,
      as: 'artist'
    }, {
      model: Album,
      as: 'album'
    }]
  }).then(song => {
    if (!song) {
      res.status(404).json({ error: 'The song could not be found.' });
    } else {
      res.status(200).json(song);
    };
  });
};
exports.updateSongById = (req, res) => {
  const { id } = req.params;
  Song.update(req.body, { where: { id } }).then(([rowsUpdated]) => {
    if(!rowsUpdated) {
      res.status(404).json({ error: 'The song could not be found.'});
    } else {
       res.status(200).json(rowsUpdated);
    };
  });
};
exports.deleteSongById = (req, res) => {
  const { id } = req.params;
  Song.destroy({ where: { id } }).then(song => {
    if (!song) {
      res.status(404).json({ error: 'The song could not be found.'});
    } else {
      res.status(204).json(song)
    }
  })
}