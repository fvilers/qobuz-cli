'use strict';

const yargs = require('yargs');

yargs
  .commandDir('commands')
  .help()
  .argv
;
