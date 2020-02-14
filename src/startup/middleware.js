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
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

/**
 * Module exports.
 * @public
 */

module.exports = (app) => {
  app.use(express.json());
  app.use(cors());
  app.use(helmet());
  app.use(compression());
};
