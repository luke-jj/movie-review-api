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
require('express-async-errors');
const winston = require('winston');
const config = require('../config');

/**
 * App startup.
 * @private
 */

const app = express();
const port = config.PORT;

require('./startup/logging')(app);
require('./startup/config')();
require('./startup/middleware')(app);
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/validation')();

const server = app.listen(port, () => {
  winston.info(`Listening on port ${port}...`);
});

/**
 * Module exports.
 * @public
 */

module.exports = server;
