#!/usr/bin/env node

// Local Imports
import { ttf2woff } from '../main.js';

// Native Imports
import { exit, argv } from 'node:process';
import { extname } from 'node:path';
import { existsSync } from 'node:fs';

let filepath = argv[2];

if (argv.length !== 3) {
    logErrThenExit('A single argument is required');
}

if (extname(filepath) !== '.ttf') {
    logErrThenExit('Filepath\'s extension is invalid');
}

existsSync(filepath)
    ? ttf2woff(filepath)
    : logErrThenExit('The filepath entered does not exist!');

/**
  * Logs an informative error message, then calls `process.exit(1)`.
  * This purpose of this function is to offer a means for error-handling
  * in a CLI environment. */
function logErrThenExit(mesg: string) {
    console.error('\x1b[0;31mERROR:\x1b[0m %s', mesg);
    exit(1);
}
