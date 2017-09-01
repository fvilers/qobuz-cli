'use strict';

const Qobuz = require('qobuz');
const client = new Qobuz();

exports.command = 'genre <id>';
exports.describe = 'Get details for a genre of music';
exports.builder = function (yargs) {
  yargs.string('_');
};
exports.handler = function (argv) {
  client.genre.get(argv.id)
    .then(genre => console.log(JSON.stringify(genre, null, 2)))
    .catch(err => console.error(err))
  ;
};
