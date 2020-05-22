module.exports = (sequelize, Datatypes) => {
  const schema = {
    name: Datatypes.STRING,
  };
  const Song = sequelize.define('Song', schema);
  return Song;
}