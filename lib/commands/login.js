'use strict';

const inquirer = require('inquirer');
const Qobuz = require('qobuz');
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
    .then(response => console.log('response', response))
    .catch(err => console.error(err))
  ;
};
