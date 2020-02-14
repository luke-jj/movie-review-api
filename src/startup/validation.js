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

const Joi = require('@hapi/joi');

/**
 * Module exports.
 * @private
 */

module.exports = () => {
  Joi.objectId = require('joi-objectid')(Joi);
};
