'use strict';

exports.command = 'album <id>';
exports.describe = 'Return the metadata for an album';
exports.builder = {};
exports.handler = function (argv) {
  console.log('Get album with ID', argv.id);
};
