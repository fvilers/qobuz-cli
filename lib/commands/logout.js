'use strict';

const Preferences = require('preferences');
const Qobuz = require('qobuz');
const client = new Qobuz();

exports.command = 'logout';
exports.describe = 'Remove the authenticated user session token';
exports.builder = function (yargs) {};
exports.handler = function (argv) {
  const prefs = new Preferences('qobuz');
  prefs.userAuthToken = null;
};
