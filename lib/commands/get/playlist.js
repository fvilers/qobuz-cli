'use strict';

const Preferences = require('preferences');
const Qobuz = require('qobuz');
const prefs = new Preferences('qobuz');
const client = new Qobuz();

exports.command = 'playlist <id>';
exports.describe = 'Get the metadata for a playlist, including tracks and subscribers';
exports.builder = function (yargs) {
  yargs.string('_');
};
exports.handler = function (argv) {
  const extra = argv.withTracks ? 'tracks' : null;

  client.playlist.get(prefs.userAuthToken, argv.id, extra, argv.limit, argv.offset)
    .then(playlist => console.log(JSON.stringify(playlist, null, 2)))
    .catch(err => console.error(err))
  ;
};
