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

const helmet = require('helmet');
const compression = require('compression');

/*
 * Set up production middleware.
 */

module.exports = function(app) {
  app.use(helmet());
  app.use(compression());
};
