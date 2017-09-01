'use strict';

const Qobuz = require('qobuz');
const client = new Qobuz();

exports.command = 'artist <id>';
exports.describe = 'Return the metadata for an artist';
exports.builder = function (yargs) {
  yargs.string('_');
};
exports.handler = function (argv) {
  const extra = argv.withAlbums ? 'albums' : null;

  client.artist.get(argv.id, extra)
    .then(artist => console.log(JSON.stringify(artist, null, 2)))
    .catch(err => console.error(err.message))
  ;
};
