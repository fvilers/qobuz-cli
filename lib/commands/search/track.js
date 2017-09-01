'use strict';

const Qobuz = require('qobuz');
const client = new Qobuz();

exports.command = 'track <query>';
exports.describe = 'Search for tracks by name';
exports.builder = function (yargs) {};
exports.handler = function (argv) {
  client.track.search(argv.query, argv.limit, argv.offset)
    .then(response => console.log(JSON.stringify(response, null, 2)))
    .catch(err => console.error(err.message))
  ;
};
