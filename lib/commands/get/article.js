'use strict';

const Qobuz = require('qobuz');
const client = new Qobuz();

exports.command = 'article <id>';
exports.describe = 'Get details for an article';
exports.builder = function (yargs) {
  yargs.string('_');
};
exports.handler = function (argv) {
  client.article.get(argv.id)
    .then(article => console.log('article', article))
    .catch(err => console.error(err))
  ;
};
