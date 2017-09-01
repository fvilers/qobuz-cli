'use strict';

const Preferences = require('preferences');
const Qobuz = require('qobuz');
const prefs = new Preferences('qobuz');
const client = new Qobuz();

exports.command = 'favorites [userId]';
exports.describe = 'Return the authenticated user or specified userId favorites filtered by item type';
exports.builder = function (yargs) {
  yargs.alias('t', 'type')
    .choices('type', ['tracks', 'albums', 'artists', 'articles'])
  ;
  yargs.string('_');
};
exports.handler = function (argv) {
  client.favorite.getUserFavorites(prefs.userAuthToken, argv.userId, argv.type)
    .then(response => console.log(JSON.stringify(response, null, 2)))
    .catch(err => console.error(err))
  ;
};
