'use strict';

const Qobuz = require('qobuz');
const client = new Qobuz();

exports.command = 'album <id>';
exports.describe = 'Return the metadata for an album';
exports.builder = function (yargs) {
  yargs.string('_');
};
exports.handler = function (argv) {
  client.album.get(argv.id)
    .then(album => console.log(JSON.stringify(album, null, 2)))
    .catch(err => console.error(err.message))
  ;
};
