'use strict';

const Preferences = require('preferences');
const Qobuz = require('qobuz');
const prefs = new Preferences('qobuz');
const client = new Qobuz();

exports.command = 'logout';
exports.describe = '';
exports.builder = function (yargs) {};
exports.handler = function (argv) {
  prefs.userAuthToken = null;
};
