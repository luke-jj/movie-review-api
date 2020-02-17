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
const mongoose = require('mongoose');
const config = require('../../config');

/**
 * Establish MongoDB connection.
 * @public
 */

module.exports = function() {
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  };

  mongoose.connect(config.DATABASE, options)
    .then(() => winston.info(`Connected to MongoDB...`));
};
