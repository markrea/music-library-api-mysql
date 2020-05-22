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