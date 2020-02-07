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

/**
 * Module exports.
 * @private
 */

module.exports = function(err, req, res, next) {
  winston.error(err.message, err);

  res.status(500).send('Something failed.');
}
