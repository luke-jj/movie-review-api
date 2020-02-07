/*
 * Movie Rental Service
 * Copyright (c) 2019 Luca J
 * Licensed under the MIT license.
 */

'use strict';

/**
 * This function takes a validation function as an argument and returns a
 * middlware function which validates the request body against the given
 * validation body and handles any errors that might result from this
 * validation appropriately.
 *
 * Using this function in a route handler abstracts away the need to do
 * explicit validation in each route handler.
 *
 * @param {Function} validator - takes the request body and validates with Joi.
 */
module.exports = (validator) => {
  return (req, res, next) => {
    const { error } = validator(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    next();
  }
}
