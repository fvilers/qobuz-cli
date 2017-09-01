'use strict';

exports.command = 'search';
exports.description= 'Search metadata for various endpoints';
exports.builder = function (yargs) {
  return yargs.commandDir('search');
};
exports.handler = function (argv) {};
