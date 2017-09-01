'use strict';

const Qobuz = require('qobuz');
const client = new Qobuz();

exports.command = 'artist <query>';
exports.describe = 'Search for artists by name';
exports.builder = function (yargs) {};
exports.handler = function (argv) {
  client.artist.search(argv.query, argv.limit, argv.offset)
    .then(response => console.log(JSON.stringify(response, null, 2)))
    .catch(err => console.error(err))
  ;
};
