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
const cors = require('cors');

/*
 * Set up production middleware.
 */

module.exports = function(app) {
  app.use(cors());
  app.use(helmet());
  app.use(compression());
};
