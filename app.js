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

const express = require('express');
const winston = require('winston');

/**
 * Module variables.
 * @private
 */

const app = express();
const port = process.env.PORT || 3000;

/**
 * App startup.
 * @private
 */

require('./startup/logging')();
require('./startup/config')();
require('./startup/middleware')(app);
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/validation')();

const server = app.listen(port, () => {
  winston.info(`Listening on port ${port}`);
});

/**
 * Module exports.
 * @private
 */

module.exports = server;
