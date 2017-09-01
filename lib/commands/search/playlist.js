'use strict';

const Qobuz = require('qobuz');
const client = new Qobuz();

exports.command = 'playlist <query>';
exports.describe = 'Search for public playlists by name and description';
exports.builder = function (yargs) {};
exports.handler = function (argv) {
  client.playlist.search(argv.query, argv.limit, argv.offset)
    .then(response => console.log(JSON.stringify(response, null, 2)))
    .catch(err => console.error(err))
  ;
};
