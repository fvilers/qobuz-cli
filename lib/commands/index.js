'use strict';

exports.command = 'get';
exports.description= 'Return metadata for various endpoints';
exports.builder = function (yargs) {
  return yargs.commandDir('get');
};
exports.handler = function (argv) {};
