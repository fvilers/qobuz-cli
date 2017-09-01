'use strict';

const Qobuz = require('qobuz');
const client = new Qobuz();

exports.command = 'album <query>';
exports.describe = 'Search for albums by name';
exports.builder = function (yargs) {};
exports.handler = function (argv) {
  client.album.search(argv.query, argv.limit, argv.offset)
    .then(response => console.log(JSON.stringify(response, null, 2)))
    .catch(err => console.error(err))
  ;
};
