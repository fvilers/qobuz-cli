'use strict';

const inquirer = require('inquirer');
const Preferences = require('preferences');
const Qobuz = require('qobuz');
const prefs = new Preferences('qobuz');
const client = new Qobuz();
const questions = [{
  name: 'password',
  type: 'password',
  message: 'Enter your password:',
  validate: function (value) {
    if (value.length) {
      return true;
    } else {
      return 'Please enter your password';
    }
  }
}];

exports.command = 'login <username>';
exports.describe = '';
exports.builder = function (yargs) {};
exports.handler = function (argv) {
  inquirer.prompt(questions)
    .then(response => client.user.login(argv.username, response.password))
    .then(response => prefs.userAuthToken = response.user_auth_token)
    .catch(err => console.error(err))
  ;
};
