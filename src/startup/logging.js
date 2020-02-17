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

const config = require('../../config');
const morgan = require('morgan');
const winston = require('winston');
require('winston-mongodb');

/**
 * Module exports.
 *
 * Set up and configure loggers.
 * @public
 */

module.exports = (app) => {

  if (config.LOG_ENABLED || config.ENVIRONMENT === 'development') {
    app.use(morgan('tiny'));
    winston.add(new winston.transports.Console({
      colorize: true,
      prettyPrint: true
    }));
  }

  // winston.exceptions.handle(
    // new winston.transports.Console({ colorize: true, prettyPrint: true }),
    // new winston.transports.File({ filename: 'uncaughtExceptions.log' })
  // );

  winston.add(new winston.transports.File({ filename: 'logfile.log' }));

  if (config.ENVIRONMENT === 'production') {
    winston.add(new winston.transports.MongoDB({
      db: config.DATABASE,
      level: 'error'
    }));
  }

  process.on('uncaughtException', err => {
    winston.log('error', err.message, err);
  });

  process.on('unhandledRejection', err => {
    throw err;
  });
};
