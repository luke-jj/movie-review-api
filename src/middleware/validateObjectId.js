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

const mongoose = require('mongoose');

/**
 * Validate a MongoDB id given as a route parameter to the route handler that
 * uses this middleware.
 *
 * All route parameters ending with 'id' case-insensitive are checked.
 */

module.exports = function(req, res, next) {

  for (let key of Object.keys(req.params)) {
    if (key.toLowerCase().endsWith('id') && !mongoose.Types.ObjectId.isValid(req.params[key])) {
      return res.status(404).send('Invalid id.');
    }
  }

  next();
};
