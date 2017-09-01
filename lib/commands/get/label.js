'use strict';

const Qobuz = require('qobuz');
const client = new Qobuz();

exports.command = 'label <id>';
exports.describe = 'Get details for a music label';
exports.builder = function (yargs) {
  yargs.string('_');
};
exports.handler = function (argv) {
  client.label.get(argv.id)
    .then(label => console.log(JSON.stringify(label, null, 2)))
    .catch(err => console.error(err))
  ;
};
