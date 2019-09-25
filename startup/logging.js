/*
 * Movie Rental Service
 * Copyright (c) 2019 Luca J
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Module dependencies.
 * @private
 */

const winston = require('winston');
// require('winston-mongodb');
require('express-async-errors');

/**
 * Module exports.
 *
 * Set up and configure logging functionality.
 * @private
 */

module.exports = function() {

  /*
   * Handle all uncaught exceptions and log to the specified file.
   */

  winston.exceptions.handle(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: 'uncaughtExceptions.log' })
  );

  /*
   * use winstons .exception.handle() method instead
   */

  // process.on('uncaughtException', (ex) => {
    // console.log('We got an unhandled exception, commander!');
    // winston.log('error', ex.message, ex);
    // process.exit(1);
  // });

  /*
   * listen for all unhandled promise rejections and re-throw them as
   * exceptions - thereby passing them to the 'uncaught exception handler'.
   */

  process.on('unhandledRejection', (ex) => {
    console.log('We got an unhandled rejection, sargent!');
    throw ex; // this will pass the unhandled Rejection to .exceptions.handle()
  });

  /*
   * Add default logging locations.
   * Log both to a logfile and to a mongodb database collection.
   */

  winston.add(new winston.transports.File({ filename: 'logfile.log' }));
  // winston.add(new winston.transports.MongoDB({
    // db: 'mongodb://localhost/vidly',
    // level: 'error'
  // }));
};
