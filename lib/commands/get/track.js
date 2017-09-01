'use strict';

const Qobuz = require('qobuz');
const client = new Qobuz();

exports.command = 'track <id>';
exports.describe = 'Return the metadata for a track';
exports.builder = function (yargs) {
  yargs.string('_');
};
exports.handler = function (argv) {
  client.track.get(argv.id)
    .then(track => console.log(JSON.stringify(track, null, 2)))
    .catch(err => console.error(err))
  ;
};
