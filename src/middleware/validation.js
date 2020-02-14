/*
 * Movie Rental Service
 * Copyright (c) 2019 Luca J
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Takes a Joi validation schema and returns a
 * middlware function which validates the request body against the given
 * schema and handles any errors that might result from this
 * validation appropriately.
 *
 * Using this function in a route handler abstracts away the need to do
 * explicit validation in each route handler.
 *
 * @param {Object} schema - Joi schema.
 */

module.exports = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    next();
  }
}
