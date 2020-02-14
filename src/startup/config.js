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

module.exports = () => {

  if (!config.ENVIRONMENT) {
    throw new Error('FATAL ERROR: NODE_ENV must be set.');
  }

  if (!config.JWTPRIVATEKEY) {
    throw new Error('FATAL ERROR: API_JWTPRIVATEKEY must be set.');
  }

  if (!config.DATABASE) {
    throw new Error('FATAL ERROR: API_DATABASE must be set.');
  }
};
