const { Album } = require('../sequelize');
const { Song } = require('../sequelize');

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
      Song.findAll({ where: { albumId: id } }).then(songs => res.status(200).json(songs));
    };
  });
};
exports.getSongById = (req, res) => {
  const { id } = req.params;
  Song.findByPk(id).then(song => {
    if (!song) {
      res.status(404).json({ error: 'The song could not be found.' });
    } else {
      res.status(200).json(song);
    };
  });
};