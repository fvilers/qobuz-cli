'use strict';

exports.command = 'get';
exports.builder = function (yargs) {
  return yargs.commandDir('get');
};
exports.handler = function (argv) {};
